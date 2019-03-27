import { Pipeline } from '../model/pipeline/Pipeline';
import * as yaml from 'js-yaml';
import { inspect } from 'util';

export class StalkCdWriter {

    async write(pipeline: Pipeline): Promise<string> {
        const serialPipeline = pipeline.toSerial();
        try {
            const res = yaml.safeDump(serialPipeline);
            return res;
        } catch (err) {
            console.error('Could not write YAML');
            console.log(inspect(serialPipeline, undefined, null));
            throw (err);
        }
    }

}