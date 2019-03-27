import { TestUtils } from "./TestUtils";
import * as fs from 'fs';
import { JenkinsfileStats } from "./JenkinsfileStats";
import { JenkinsfileCollector, FileConfig } from "./JenkinsfileCollector";
import { Runner } from "../main/Runner";
import { reporters } from 'mocha';

export class Jenkins2StalkCDEvaluation {

    private stats = new JenkinsfileStats();
    
    async evaluate() {
        const configurations = new JenkinsfileCollector(
            'res/Jenkinsfiles.source',
            'res/Jenkinsfiles.target',
            'res/StalkCd.target',
            this.stats,
        ).collect();

        for (const config of configurations) {
            console.log(reporters.Base.color('suite', `\n-- ${config.jenkinsFileSource}\n-> ${config.jenkinsFileTarget}`));
            try {
                await this.processFile(config);
            } catch (err) {
                console.trace(err);
            }
        }
        const statsOutput = this.stats.output();
        console.log(statsOutput);
        fs.writeFileSync('res/evaluate-jenkins2stalkcd-result.txt', statsOutput);
    }

    /**
     * Process a Jenkinsfile
     * @param config The file configuration
     */
    private async processFile(config: FileConfig) {
        // Jenkinsfile > StalkCD
        if (fs.existsSync(config.stalkCdFileTarget)) {
            fs.unlinkSync(config.stalkCdFileTarget);
        }

        await new Runner().jenkinsfile2stalkCd({
            source: config.jenkinsFileSource,
            target: config.stalkCdFileTarget,
        });

        // StalkCD > Jenkinsfile
        if (fs.existsSync(config.jenkinsFileTarget)) {
            fs.unlinkSync(config.jenkinsFileTarget);
        }

        await new Runner().stalkCd2jenkinsfile({
            source: config.stalkCdFileTarget,
            target: config.jenkinsFileTarget,
        });

        // Assert equality
        let source = fs.readFileSync(config.jenkinsFileSource).toString();
        let result = fs.readFileSync(config.jenkinsFileTarget).toString();

        const normSource = TestUtils.normalizeJenkinsfile(source);
        const normResult = TestUtils.normalizeJenkinsfile(result);

        if (normSource !== normResult) {
            this.stats.failure++;
            TestUtils.classifyJenkinsfileDiff(config, normSource, normResult, this.stats);
        } else {
            this.stats.success++;
        }
    }

}
