import { JenkinsfileStats, JenkinsfileFailureClassification, ClassificationResult } from "./JenkinsfileStats";
import * as jsDiff from 'diff';
import {
    reporters as MochaReporters
} from 'mocha';
import { FileConfig } from "./JenkinsfileCollector";

export class TestUtils {

    /**
     * Removes all unclear characters from a Jenkinsfile in order
     * to ensure comparability
     */
    static normalizeJenkinsfile(src: string): string {
        const res = src
            // Indentation
            .replace(/^\s+/gm, '')
            // Head comment
            .replace(/^#.*$/mg, '')
            // Line comment, not inside of string
            .replace(/^(([^'"\r\n]|"[^"]*"|'[^']*')*?)\/\/.*?$/gm, '$1')
            // Multi-Line comment
            .replace(/^(([^'"\r\n]|"[^"]*"|'[^']*')*?)\/\*(.|\n)*?\*\//gm, '$1')
            // Jenkinsfile Init
            .replace(/^\s*Jenkinsfile \(Declarative Pipeline\)/, '')
            // Semicolons outside strings
            .replace(/(([^'"\r\n]|"[^"]*"|'[^']*')*?);\s*/g, '$1\n')
            // Spaces before and after brackets
            .replace(/\s*([,()\[\]])\s*/g, '$1')
            // Quotation marks around stage name
            .replace(/stage\("([^"]*)"\)/g, 'stage(\'$1\')')
            // Trailing commas
            .replace(/,([)\]}])/g, '$1')
            // Line breaks
            .replace(/(\\)?[\r\n]/g, '\n')
            // Spaces
            .replace(/\s/g, '')
            .trim();
        return res;
    }

    static classifyJenkinsfileDiff(fileConfig: FileConfig, normSource: string, normResult: string, stats: JenkinsfileStats): void {
        const diffParts = jsDiff.diffWords(normSource, normResult);
        const classification = new JenkinsfileFailureClassification();
        let classificationSummary = '';
        let mainClass: keyof JenkinsfileFailureClassification = 'unknown';

        for (let i = 0; i < diffParts.length; i++) {
            const diff = diffParts[i];
            if (diff.removed) {
                let summaryKey: string | undefined;
                let classTarget: keyof JenkinsfileFailureClassification | undefined;

                if (diff.value.match(/^.{0,30}(parallel|wrapCommands)\(/)) {
                    classTarget = 'complexStep';
                    summaryKey = 'COMPLEX STEP';
                } else if (diff.value.match(/^.{0,5}(agent|options|steps?|stages|parallel)\{/)) {
                    classTarget = 'misplacedSection';
                    summaryKey = 'MISPLACED';
                } else if (diff.value.match(/^properties\(/)) {
                    classTarget = 'prePipelineProperties';
                    summaryKey = 'PRE PROPERTIES';
                } else if (diff.value.match(/^[^a-zA-Z]*script\{/)) {
                    classTarget = 'script';
                    summaryKey = 'SCRIPT';
                } else if (diff.value.match(/^[^a-zA-Z]*expression\{/)) {
                    classTarget = 'expression';
                    summaryKey = 'EXPRESSION';
                } else if (diff.value.match(/^.{0,5}(def|import|@Library)/)) {
                    classTarget = 'groovyDef';
                    summaryKey = 'GROOVY DEF';
                } else if (diff.value.match(/^node/)) {
                    classTarget = 'scriptedPipeline';
                    summaryKey = 'SCRIPTED PIPELINE';
                } else if (diff.value.match(/^\w+\{/)) {
                    classTarget = 'unsupportedEnvironment';
                    summaryKey = 'UNSUPPORTED ENV';
                } else if (i === 0) {
                    classTarget = 'groovyDef';
                    summaryKey = 'GROOVY DEF';
                } else {
                    classification.unknown.push(diff.value);
                }

                if (classTarget) {
                    classification[classTarget].push(diff.value);
                    if (mainClass === 'unknown') {
                        mainClass = classTarget;
                    }
                }

                let summaryText = MochaReporters.Base.color('diff removed', diff.value);

                if (summaryKey) {
                    summaryText =
                        MochaReporters.Base.color('diff gutter', ` >>>${summaryKey}>>> `)
                        + summaryText
                        + MochaReporters.Base.color('diff gutter', ' <<< ');
                }

                classificationSummary += summaryText;
            } else if (diff.added) {
                classificationSummary += MochaReporters.Base.color('diff added', diff.value);
            } else {
                classificationSummary += diff.value;
            }
        }
        stats.fileResults.push(new ClassificationResult(
            fileConfig.jenkinsFileSource,
            fileConfig.jenkinsFileTarget,
            mainClass,
            classification,
            classificationSummary,
        ));
    }

}