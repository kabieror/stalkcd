
export class ClassificationResult {
    constructor(
        public source: string,
        public target: string,
        public mainClass: keyof JenkinsfileFailureClassification,
        public classification: JenkinsfileFailureClassification,
        public summary: string,
    ) { }
}

export class JenkinsfileFailureClassification {
    unknown: string[] = [];
    complexStep: string[] = [];
    groovyImport: string[] = [];
    groovyDef: string[] = [];
    prePipelineProperties: string[] = [];
    scriptedPipeline: string[] = [];
    unsupportedEnvironment: string[] = [];
    script: string[] = [];
    misplacedSection: string[] = [];
    expression: string[] = [];
}

export class JenkinsfileStats {

    /**
     * Total input files
     */
    totalInputFiles = 0;

    /**
     * All skipped input files
     */
    skippedInputFiles = 0;

    /**
     * All skipped Jenkinsfiles
     */
    private _skippedJenkinsFiles = 0;
    get skippedJenkinsFiles() {
        return this._skippedJenkinsFiles;
    }
    
    /**
     * Jenkinsfiles that were skipped because of an invalid extension
     */
    private _skippedNoJenkinsfile = 0;
    get skippedNoJenkinsfile() {
        return this._skippedNoJenkinsfile;
    }
    set skippedNoJenkinsfile(val: number) {
        const diff = val - this._skippedNoJenkinsfile;
        this._skippedJenkinsFiles += diff;
        this._skippedNoJenkinsfile = val;
    }
    
    /**
     * Jenkinsfile that were skipped because they contain no declarative pipeline
     */
    private _skippedNonDeclarative = 0;
    get skippedNonDeclarative() {
        return this._skippedNonDeclarative;
    }
    set skippedNonDeclarative(val: number) {
        this._skippedJenkinsFiles += val - this._skippedNonDeclarative;
        this._skippedNonDeclarative = val;
    }
    
    /**
     * Jenkinsfiles that were skipped because they contain multiple pipelines
     */
    private _skippedMultiplePipeline = 0;
    get skippedMultiplePipeline() {
        return this._skippedMultiplePipeline;
    }
    set skippedMultiplePipeline(val: number) {
        this._skippedJenkinsFiles += val - this._skippedMultiplePipeline;
        this._skippedMultiplePipeline = val;
    }
    
    /**
     * All processed Jenkinsfiles
     */
    private _totalProcessedFiles = 0;
    get totalProcessedFiles() {
        return this._totalProcessedFiles;
    }
    
    /**
     * Successfully processed Jenkinsfiles
     */
    private _success = 0;
    get success() {
        return this._success;
    }
    set success(val: number) {
        const diff = val - this._success;
        this._totalProcessedFiles += diff;
        this._success = val;
    }
    
    /**
     * Jenkinsfiles that could not be transformed back to their original semantics
     */
    private _failure = 0;
    get failure() {
        return this._failure;
    }
    set failure(val: number) {
        const diff = val - this._failure;
        this._totalProcessedFiles += diff;
        this._failure = val;
    }

    /**
     * Detailed evaluation results for each file
     */
    readonly fileResults: ClassificationResult[] = [];
    
    /**
     * Prints all relevant statistical data
     */
    output(): string {
        const successRate = Math.round(this.success / this.totalProcessedFiles * 100);
        const failureRate = Math.round(this.failure / this.totalProcessedFiles * 100);

        // Sum of all failure classes
        const failureClassSum: any = {};

        // All file details
        let fileDetails = '';

        // Collect failure classification results for all files
        for (const res of this.fileResults) {
            fileDetails += `\n\n  --- ${res.source}` +
                             `\n  --> ${res.target}` +
                             `\n${res.summary}\n`;
            
            // Increase overall sum for this failure class
            if (!failureClassSum.hasOwnProperty(res.mainClass)) {
                failureClassSum[res.mainClass] = 1;
            } else {
                failureClassSum[res.mainClass]++
            }

        }

        let failureClassStats = '';
        for (const failureClass in failureClassSum) {
            if (!failureClassSum.hasOwnProperty(failureClass)) {
                continue;
            }

            failureClassStats += `
                    - ${failureClass}: ${failureClassSum[failureClass]}`;
        }
        
        return `
==== ERROR DETAILS
${fileDetails}

==== Total Input Files: ${this.totalInputFiles}
        No Jenkinsfile: ${this.skippedNoJenkinsfile}
       Not Declarative: ${this.skippedNonDeclarative}
    Multiple pipelines: ${this.skippedMultiplePipeline}

====       Valid files: ${this.totalProcessedFiles}
               Success: ${this.success} (${successRate} %)
               Failure: ${this.failure} (${failureRate} %)
${failureClassStats}
        `;
    }
}
