import * as fs from 'fs';
import { StalkCdParser } from './io/StalkCdParser';
import { BpmnParser } from './io/BpmnParser';
import { StalkCdWriter } from './io/StalkCdWriter';
import { JenkinsfileWriter } from './io/jenkinsfile/jenkinsfile-writer';
import { BpmnWriter } from './io/BpmnWriter';
import { JenkinsfileParser } from './io/jenkinsfile/jenkinsfile-parser';
import { JenkinsfileCollector } from '../test/JenkinsfileCollector';
import { TestUtils } from '../test/TestUtils';

export interface FileGeneratorConfig {

    source: string;
    target: string;

}

export interface BpmnParserConfig extends FileGeneratorConfig {

}

export interface BpmnGeneratorConfig extends FileGeneratorConfig {

}

export interface JenkinsfileGeneratorConfig extends FileGeneratorConfig {

}

export interface JenkinsfileParserConfig extends FileGeneratorConfig {

}

export class Runner {
    /**
     * Checks the configuration for validity
     * @param config The configuration to check
     */
    assertFilePrerequisites(config: FileGeneratorConfig) {
        if (!config.source) {
            throw new Error('A source file has to be specified');
        }
        if (!config.target) {
            throw new Error('A target file has to be specified');
        }

        if (!fs.existsSync(config.source)) {
            throw new Error(`The source file '${config.source}' does not exist.`);
        }
    }

    /**
     * Transforms a BPMN model into a StalkCd file
     * @param config The configuration
     */
    async bpmn2stalkCd(config: BpmnParserConfig) {
        this.assertFilePrerequisites(config);

        const res = await new BpmnParser().parse(fs.readFileSync(config.source).toString());

        fs.writeFileSync(config.target, await new StalkCdWriter().write(res));
    }

    /**
     * Transforms the deployment process specification into a BPMN model
     * @param config The configuration
     */
    async stalkCd2bpmn(config: BpmnGeneratorConfig) {
        this.assertFilePrerequisites(config);

        const model = await new StalkCdParser().load(config.source);
        fs.writeFileSync(config.target, await new BpmnWriter().write(model));
    }

    /**
     * Transforms the deployment process specification into a Jenkinsfile
     * @param config The configuration
     */
    async stalkCd2jenkinsfile(config: JenkinsfileGeneratorConfig) {
        this.assertFilePrerequisites(config);

        const model = await new StalkCdParser().load(config.source);

        fs.writeFileSync(config.target, await new JenkinsfileWriter().write(model));
    }

    /**
     * Transforms a BPMN model directly into a Jenkinsfile
     * @param config The configuration
     */
    async bpmn2jenkins(config: JenkinsfileGeneratorConfig) {
        this.assertFilePrerequisites(config);

        const model = await new BpmnParser().parse(fs.readFileSync(config.source).toString());

        fs.writeFileSync(config.target, await new JenkinsfileWriter().write(model));
    }

    /**
     * Transform a Jenkinsfile into a StalkCd file
     * @param config The configuration
     */
    async jenkinsfile2stalkCd(config: JenkinsfileParserConfig) {
        this.assertFilePrerequisites(config);

        const parser = new JenkinsfileParser();
        const pipeline = parser.parse(fs.readFileSync(config.source).toString());
        fs.writeFileSync(config.target, await new StalkCdWriter().write(pipeline));
    }

    /**
     * Normalizes a Jenkinsfile
     * @param config The configuration
     */
    async normalizeJenkinsfile(config: JenkinsfileParserConfig) {
        this.assertFilePrerequisites(config);

        const content = fs.readFileSync(config.source).toString();
        const normalized = TestUtils.normalizeJenkinsfile(content);
        fs.writeFileSync(config.target, normalized);
    }


}
