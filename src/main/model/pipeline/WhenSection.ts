import { Step } from "./Step";
import { Segment } from "../../io/jenkinsfile/jenkinsfile-writer";

export interface IWhenSection {
    conditions: IWhenCondition[];
}

export class WhenSection {

    public conditions: WhenCondition[] = [];

    public static fromSerial(init: IWhenSection): WhenSection {
        const res = new WhenSection();
        for (const cond of init.conditions) {
            res.conditions.push(WhenSection.conditionFromSerial(cond));
        }
        return res;
    }

    public static conditionFromSerial(init: IWhenCondition): WhenCondition {
        if (typeof init === 'object') {
            let subConditions: WhenCondition[] = [];
            if (init.conditions) {
                subConditions = init.conditions.map(
                    c => WhenSection.conditionFromSerial(c),
                );
            }
            return new WhenAggregation(init.type, subConditions);
        } else {
            return init;
        }
    }

    toString(): string {
        return this.conditions.map(c => {
            if (c instanceof WhenAggregation) {
                return c.toJenkinsfile().toString();
            } else if (typeof c === 'string') {
                return c;
            } else {
                throw new Error();
            }
        }).join('\n');
    }
}

export type IWhenCondition = IWhenAggregation | string;
export type WhenCondition = WhenAggregation | string;

export interface IWhenAggregation {
    type: 'anyOf' | 'allOf' | 'not';
    conditions: IWhenCondition[];
}

export class WhenAggregation {

    constructor(
        public type: 'anyOf' | 'allOf' | 'not',
        public conditions: WhenCondition[] = [],
    ) {

    }

    toJenkinsfile(parentSegment?: Segment): Segment {
        const segment = parentSegment
            ? parentSegment.add(this.type)
            : new Segment(this.type);

        for (const cond of this.conditions) {
            if (cond instanceof WhenAggregation) {
                cond.toJenkinsfile(segment);
            } else if (typeof cond === 'string') {
                segment.add(cond);
            } else {
                throw new Error();
            }
        }

        return segment;
    }

}