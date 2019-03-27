import * as readline from 'readline-sync';
import * as fs from 'fs';
import { URLSearchParams } from 'url';
import fetch from 'node-fetch';
import { RequestInit, Response } from 'node-fetch';
import { isArray } from 'util';


export class GitHubDownloader {

    private username?: string;
    private password?: string;

    private allFileNames: any = {};

    constructor(
        private targetDir: string,
    ) {
        if (this.targetDir.endsWith('/')) {
            this.targetDir = this.targetDir.substr(0, this.targetDir.length - 1);;
        }
        if (!fs.existsSync(this.targetDir)) {
            fs.mkdirSync(this.targetDir, { recursive: true });
        }
        if (!fs.statSync(this.targetDir).isDirectory()) {
            throw new Error('The target is no directory');
        }
    }

    /**
     * Initiates the download process
     */
    public async download(query: string) {
        if (!this.username || !this.password) {
            console.log('Please provide GitHub credentials');
            if (!this.username) {
                this.username = readline.question('Username: ');
            }
            if (!this.password) {
                this.password = readline.question('Password: ', { hideEchoBack: true });
            }
        }

        console.log('\nDownloading search results from GitHub...');

        // All collected files in form of a GitHub item
        // https://developer.github.com/v3/search/#search-code
        let allFiles: {
            url: string,
            name: string,
            repository: {
                full_name: string,
            },
        }[] = [];

        let downloadUrl: string | undefined = this.buildUrl('https://api.github.com/search/code', {
            q: query,
            per_page: 99,
        });

        while (downloadUrl) {
            console.log('- ' + downloadUrl);
            const result = await this.tryFetch(downloadUrl);
    
            const resultJson = await result.json();
            if (!resultJson.items || !isArray(resultJson.items)) {
                throw new Error('Got unexpected result.');
            }
            allFiles = allFiles.concat(resultJson.items);

            // Get URL of next page
            downloadUrl = undefined;

            const link = result.headers.get('link');
            if (!link) {
                break;
            }
            const linkMatch = /<([^>]*?)>; rel="next"/.exec(link);
            if (linkMatch && linkMatch.length >= 2) {
                downloadUrl = linkMatch[1];
            }
        }

        console.log('\n---------');
        console.log(`Found ${allFiles.length} files`);
        console.log(`Starting to download all files`);

        // Download up to 10 files a the same time
        let buffer: { promise?: Promise<void> }[] = [];
        for (let i = 0; i < allFiles.length; i++) {
            if (buffer.length > 10) {
                if (buffer[0] && buffer[0].promise) {
                    await buffer[0].promise;
                }
            }
            const file = allFiles[i];
            let filename_addition = '';

            // Make unique file name
            let filename_unique_id = 0;
            while (this.allFileNames[this.getFileName(file.repository.full_name, filename_addition, file.name)]) {
                filename_addition = '.' + ++filename_unique_id;
            }

            const targetFileName = this.getFileName(file.repository.full_name, filename_addition, file.name);
            this.allFileNames[targetFileName] = true;

            if (fs.existsSync(targetFileName)) {
                console.log(`Skipping ${targetFileName} as it already exists.`);
                continue;
            }
            
            console.log(`\n(${i+1} / ${allFiles.length}): ${file.repository.full_name}`);
            console.log(`   > ${targetFileName}`);

            const bufferContainer: {
                promise?: Promise<void>,
            } = {};
            buffer.push(bufferContainer);
            bufferContainer.promise = new Promise<void>(async (resolve, reject) => {
                try {
                    const fileResponse = await this.tryFetch(file.url);
                    const fileDescription: {
                        download_url: string,
                    } = await fileResponse.json();
                    const fileContentsResponse = await this.tryFetch(fileDescription.download_url);
                    const fileContents = await fileContentsResponse.text();
                    fs.writeFile(targetFileName, fileContents, (err) => {
                        if (err) {
                            console.error(`Could not write to '${targetFileName}'`, err);
                        }
                    });
                    resolve();
                } catch (err) {
                    reject(err);
                } finally {
                    buffer.splice(buffer.indexOf(bufferContainer), 1);
                }
            });
        }
    }


    private getFileName(repoName: string, addition: string, extension: string): string {
        return `${this.targetDir}/${repoName.replace('/', '_')}${addition}.${extension}`;
    }

    /**
     * Builds an URL with parameters
     * @param url 
     * @param params 
     */
    private buildUrl(url: string, params: any): string {
        let res = url;
        const paramsBuilder = new URLSearchParams();
        for (const key in params) {
            if (!params.hasOwnProperty(key)) {
                continue;
            }
            paramsBuilder.append(key, params[key]);
        }
        const paramsString = paramsBuilder.toString();
        if (paramsString) {
            res += '?' + paramsString;
        }
        return res;
    }
    
    /**
     * Tries to download an URL and retries if it fails to handle rate limits
     * @param url 
     * @param urlParams 
     * @param retryMax 
     * @param retryCurrent 
     */
    private async tryFetch(url: string, retryCount = 0): Promise<Response> {
        let fetchParams: RequestInit = {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64'),
            },
        };
        let res: Response | undefined;
        try {
            res = await fetch(url, fetchParams);
        } catch (err) {
            console.error(err);
        }

        if (!res || !res.ok) {
            if (res && res.status === 403 && retryCount < 10) {
                const waitTime = 60000;
                console.log(`${res.status} ${res.statusText} - Waiting ${waitTime / 1000} s before retrying (${retryCount + 1} / 10)`);
                return new Promise<Response>((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            const res = this.tryFetch(url, retryCount + 1);
                            resolve(res);
                        } catch (err) {
                            reject(err);
                        }
                    }, waitTime);
                });
            }

            // Permanent error.
            console.error(`Request failed.`);
            console.error(`  URL: ${url}`);
            console.error(`  Res: ${res ? res.status + ' ' + res.statusText : 'Not available' }`);
            if (res) {
                const resText = await res.text();
                console.error(resText.substr(0, 200));
            }
            throw new Error(res ? res.statusText : 'Query failed');
        }

        // Check rate limit
        const rateLimitRemaining: number = +(res.headers.get('X-RateLimit-Remaining') || 1);
        const rateLimitReset: number = +(res.headers.get('X-RateLimit-Reset') || NaN);
        if (!isNaN(rateLimitRemaining) && rateLimitRemaining === 0 && !isNaN(rateLimitReset)) {
            // Wait before returning the result to repsect rate limit
            const waitSecs = rateLimitReset - new Date().getTime() / 1000;
            console.log(`Rate limit hit. Waiting for ${waitSecs} s.`);

            return new Promise<Response>((resolve) => {
                setTimeout(() => {
                    resolve(res);
                }, waitSecs * 1000);
            });
        }

        return res;
    }

}
