import * as fs from 'fs';
import { StalkCdStats } from './StalkCdStats';

export interface FileConfig {
    title: string;
    stalkCdFileSource: string;
    bpmnFileTarget: string;
    stalkCdFileTarget: string;
}

export class StalkCdCollector {

    allFiles: string[] = [];

    constructor (
        private stalkCdSource: string,
        private bpmnTarget: string,
        private stalkCdTarget: string,
        private stats: StalkCdStats,
    ) { }

    collect(): FileConfig[] {
        this.allFiles = fs.readdirSync(this.stalkCdSource);

        const res = this.allFiles.map(f => {
            const fileMatch = f.match(/^(.*)\.yml/);
            if (!fileMatch) {
                console.log(`- Skipping file '${this.stalkCdSource + '/' + f}' (no YAML file)`);
                this.stats.skippedInputFiles++;
                return {} as FileConfig;
            }

            const config: FileConfig = {
                title: this.stalkCdSource + '/' + f,
                stalkCdFileSource: this.stalkCdSource + '/' + f,
                stalkCdFileTarget: this.stalkCdTarget + '/' + f,
                bpmnFileTarget: this.bpmnTarget + '/' + fileMatch[0] + '.bpmn',
            };
            
            return config;
        }).filter(c => !!c.stalkCdFileSource);
        
        return res;
    }
}