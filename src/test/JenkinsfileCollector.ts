import * as fs from 'fs';
import { JenkinsfileStats } from './JenkinsfileStats';

export interface FileConfig {
    title: string;
    jenkinsFileSource: string;
    stalkCdFileTarget: string;
    jenkinsFileTarget: string;
}

export class JenkinsfileCollector {

    allFiles: string[] = [];

    constructor(
        private jenkinsfileSource: string,
        private jenkinsfileTarget: string,
        private stalkCdTarget: string,
        private stats: JenkinsfileStats,
    ) { }

    collect(): FileConfig[] {
        this.allFiles = fs.readdirSync(this.jenkinsfileSource);
        this.stats.totalInputFiles = this.allFiles.length;
        
        for (const jenkinsFileName of this.allFiles) {
            const fileMatch = jenkinsFileName.match(/^(.*)\.Jenkinsfile/);
            if (!fileMatch) {
                console.log(`Skipping ${jenkinsFileName}`);
                this.stats.skippedInputFiles++;
                continue;
            }
        }
        
        const res = this.allFiles.map(f => {
            const fileMatch = f.match(/^(.*)\.Jenkinsfile/);
            if (!fileMatch) {
                console.log(`- Skipping file '${this.jenkinsfileSource + '/' + f}' (no Jenkinsfile)`);
                this.stats.skippedNoJenkinsfile++;
                return {} as FileConfig;
            }
        
            const config: FileConfig = {
                title: this.jenkinsfileSource + '/' + f,
                jenkinsFileSource: this.jenkinsfileSource + '/' + f,
                jenkinsFileTarget: this.jenkinsfileTarget + '/' + f,
                stalkCdFileTarget: this.stalkCdTarget + '/' + fileMatch[0] + '.yml',
            };
        
            const contents = fs.readFileSync(config.jenkinsFileSource).toString();
        
            const pipelineMatch = contents.match(/^\s*pipeline\s*\{\s*/mg);
            if (!pipelineMatch) {
                console.log(`- Skipping file '${config.jenkinsFileSource}' (no declarative Jenkinsfile)`);
                this.stats.skippedNonDeclarative++;
                return {} as FileConfig;
            }
        
            if (pipelineMatch.length > 1) {
                console.log(`- Skipping file '${config.jenkinsFileSource}' (multiple pipeline definitions)`);
                this.stats.skippedMultiplePipeline++;
                return {} as FileConfig;
            }
            
            return config;
        }).filter(f => !!f.jenkinsFileSource);

        return res;
    }
    
}