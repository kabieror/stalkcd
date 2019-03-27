import { StalkCdCollector, FileConfig } from "./StalkCdCollector";
import { reporters } from 'mocha';
import * as fs from 'fs';
import { Runner } from "../main/Runner";
import { StalkCdStats } from "./StalkCdStats";

export class StalkCd2BpmnEvaluation {

    private stats = new StalkCdStats();
    
    async evaluate() {
        const configurations = new StalkCdCollector(
            'res/StalkCd.target',
            'res/BPMN.target',
            'res/StalkCd.b2s.target',
            this.stats,
        ).collect();

        for (const config of configurations) {
            console.log(reporters.Base.color('suite', `\n-- ${config.stalkCdFileSource}\n-> ${config.stalkCdFileTarget}`));
            try {
                await this.processFile(config);
            } catch (err) {
                console.trace(err);
            }
        }

        const statsOutput = this.stats.output();
        console.log(statsOutput);
        fs.writeFileSync('res/evaluate-stalkcd2bpmn-result.txt', statsOutput);
    }

    /**
     * Process a StalkCd file
     * @param config The file configuration
     */
    async processFile(config: FileConfig) {
        // StalkCd > BPMN
        if (fs.existsSync(config.bpmnFileTarget)) {
            fs.unlinkSync(config.bpmnFileTarget);
        }

        await new Runner().stalkCd2bpmn({
            source: config.stalkCdFileSource,
            target: config.bpmnFileTarget,
        });

        // BPMN > StalkCd
        if (fs.existsSync(config.stalkCdFileTarget)) {
            fs.unlinkSync(config.stalkCdFileTarget);
        }

        await new Runner().bpmn2stalkCd({
            source: config.bpmnFileTarget,
            target: config.stalkCdFileTarget,
        });

        // Assert equality
        let source = fs.readFileSync(config.stalkCdFileSource).toString();
        let result = fs.readFileSync(config.stalkCdFileTarget).toString();

        if (source !== result) {
            this.stats.failure++;
        } else {
            this.stats.success++;
        }
    }
}
