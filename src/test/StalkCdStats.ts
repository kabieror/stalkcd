
export class StalkCdStats {

    /**
     * Total input files
     */
    totalInputFiles = 0;

    /**
     * All skipped input files
     */
    skippedInputFiles = 0;

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
     * Prints all relevant statistical data
     */
    output(): string {
        const successRate = Math.round(this.success / this.totalProcessedFiles * 100);
        const failureRate = Math.round(this.failure / this.totalProcessedFiles * 100);

        // All file details
        let fileDetails = '';

        return `
==== ERROR DETAILS
${fileDetails}

==== Total Input Files: ${this.totalInputFiles}
               Skipped: ${this.skippedInputFiles}

====       Valid files: ${this.totalProcessedFiles}
               Success: ${this.success} (${successRate} %)
               Failure: ${this.failure} (${failureRate} %)
        `;
    }
}
