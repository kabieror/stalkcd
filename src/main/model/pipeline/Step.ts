import { clean } from "../../util";

export interface IStep {

    label?: string;
    command?: string;

}

export class Step {
    constructor(
        init: IStep,
    ) {
        this.label = init.label;
        this.command = init.command;
    }

    
    label?: string;
    command?: string;

    toSerial(): any {
        return clean(Object.assign({}, this));
    }

    static fromSerial(init: IStep): Step {
        return new Step(init as IStep);
    }
}
