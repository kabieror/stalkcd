import { IStep, Step } from "./Step";
import { clean, PositionAwareObject, sortObject } from "../../util";

export interface IPostSection {
    always?: IStep[],
    changed?: IStep[],
    fixed?: IStep[],
    regression?: IStep[],
    aborted?: IStep[],
    failure?: IStep[],
    success?: IStep[],
    unstable?: IStep[],
    unsuccessful?: IStep[],
    cleanup?: IStep[],
}

export class PostSection extends PositionAwareObject<IPostSection> {
    
    always: Step[] = []; 
    changed: Step[] = [];
    fixed: Step[] = [];
    regression: Step[] = [];
    aborted: Step[] = [];
    failure: Step[] = [];
    success: Step[] = [];
    unstable: Step[] = [];
    unsuccessful: Step[] = [];
    cleanup: Step[] = [];

    has(cond: PostCondition | string): boolean {
        const list = this.get(cond);
        return !!list && list.length > 0;
    }

    set(cond: PostCondition | string, steps: Step[]) {
        if (!isNaN(Number(cond))) {
            cond = Number(cond);
        }
        if (typeof cond === 'number') {
            cond = PostCondition[Number(cond)];
        }
        (this as any)[cond] = steps;
    }

    get(cond: PostCondition | string): Step[] {
        if (!isNaN(Number(cond))) {
            cond = Number(cond);
        }
        if (typeof cond === 'number') {
            cond = PostCondition[Number(cond)];
        }
        return (this as any)[cond];
    }

    toSerial(): IPostSection {
        const res: any = {};
        for (const cond in PostCondition) {
            if (isNaN(Number(cond))) {
                continue;
            }
            const key = PostCondition[Number(cond)];
            res[key] = this.get(cond).map(s => s.toSerial());
        }
        return clean(sortObject(res as IPostSection, this.propertiesOrder));
    }

    static fromSerial(init: IPostSection): PostSection {
        const res = new PostSection();
        for (const cond in PostCondition) {
            if (isNaN(Number(cond))) {
                continue;
            }
            const key = PostCondition[Number(cond)];
            if (!(init as any)[key]) continue;
            res.set(key, ((init as any)[key] as IStep[]).map(s => Step.fromSerial(s)));
        }

        res.savePropertyPosition(init);
        return res;
    }
}

export enum PostCondition {
    always,
    changed,
    fixed,
    regression,
    aborted,
    failure,
    success,
    unstable,
    unsuccessful,
    cleanup,
}
