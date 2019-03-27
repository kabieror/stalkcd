import * as yaml from 'js-yaml';
import * as fs from 'fs';
import { Pipeline } from '../model/pipeline/Pipeline';

export class StalkCdParser {

    /**
     * Loads a CD process definition from a file
     * @param sourceFile The source file to load
     */
    load(sourceFile: string): Pipeline {
        const doc = yaml.safeLoad(fs.readFileSync(sourceFile, { encoding: 'utf8' }));
        return Pipeline.construct(doc);
    }

}