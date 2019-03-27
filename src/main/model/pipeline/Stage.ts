import { Step, IStep } from "./Step";
import { clean, sortObject, PositionAwareObject } from "../../util";
import { IPostSection, PostSection } from "./PostSection";
import { IAgentOption } from "./AgentSection";
import { IEnvironmentVariable } from "./EnvironmentSection";

export interface IStage {

    name: string;
    failFast?: boolean;
    baseName?: string;
    isAutoStage?: boolean;
    parent?: IStage;
    agent?: IAgentOption[];
    environment?: IEnvironmentVariable[];
    options?: string[];
    tools?: string[];
    input?: string[];
    when?: string;
    parallel?: boolean;
    steps?: IStep[] ;
    stages?: IStage[];
    post?: IPostSection;
    
}

export class Stage extends PositionAwareObject<IStage> {

    constructor(
        init: IStage,
    ) {
        super();
        Object.assign(this, init);
        if (init.stages) {
            this.stages = init.stages.map(s => new Stage(s));
        }
        if (init.steps) {
            this.steps = init.steps.map(s => Step.fromSerial(s));
        }
        if (init.post) {
            this.post = PostSection.fromSerial(init.post);
        }

        this.savePropertyPosition(init);
    }

    name: string = "";
    baseName?: string;

    failFast?: boolean;

    isAutoStage: boolean = false;

    parallel: boolean = false;

    parent?: Stage;

    agent?: IAgentOption[];

    environment?: IEnvironmentVariable[];

    options?: string[];

    tools?: string[];

    input?: string[];
    
    when?: string;

    steps?: Step[];

    stages?: Stage[];

    post: PostSection = new PostSection();


    get isEmpty(): boolean {
        return (!this.steps || this.steps.length === 0)
            || (!this.stages || this.stages.length === 0);
    }

    toSerial(): any {
        const res: IStage = {
            name: this.name,
            failFast: this.failFast,
            baseName: this.baseName,
            agent: clean(this.agent),
            environment: clean(this.environment),
            options: clean(this.options),
            tools: clean(this.tools),
            input: this.input,
            when: this.when,
            parallel: this.parallel ? true : undefined,
            steps: this.steps ? this.steps.map(s => s.toSerial()) : undefined,
            stages: this.stages ? this.stages.map(s => s.toSerial()) : undefined,
            post: this.post.toSerial(),
        };
        return clean(sortObject(res, this.propertiesOrder));
    }
}
