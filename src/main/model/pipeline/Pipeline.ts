import { Stage, IStage } from './Stage';
import { clean, sortObject, PositionAwareObject } from '../../util';
import { IEnvironmentVariable } from './EnvironmentSection';
import { PostSection, IPostSection } from './PostSection';
import { IAgentOption } from './AgentSection';

export interface IPipeline {
    definitions?: string[];
    environment?: IEnvironmentVariable[];
    agent?: IAgentOption[];
    tools?: string[];
    options?: string[];
    parameters?: string[];
    triggers?: string[];
    stages: IStage[];
    post?: IPostSection;
}

export class Pipeline extends PositionAwareObject<IPipeline> implements IPipeline{
    
    constructor(
        init: IPipeline = {
            stages: [],
        }
    ) {
        super();
        if (init.definitions) {
            this.definitions = init.definitions;
        }
        if (init.environment) {
            this.environment = init.environment;
        }
        if (init.agent) {
            this.agent = init.agent;
        }
        if (init.tools) {
            this.tools = init.tools;
        }
        if (init.triggers) {
            this.triggers = init.triggers;
        }
        if (init.options) {
            this.options = init.options;
        }
        if (init.parameters) {
            this.parameters = init.parameters;
        }
        if (init.stages) {
            this.stages = init.stages.map(s => new Stage(s));
        }
        if (init.post) {
            this.post = PostSection.fromSerial(init.post);
        }

        this.savePropertyPosition(init);
    }

    definitions?: string[];
    environment?: IEnvironmentVariable[];
    agent?: IAgentOption[];
    tools?: string[];
    options?: string[];
    parameters?: string[];
    triggers?: string[];
    stages: Stage[] = [];
    post?: PostSection;

    toSerial(): any {
        const res: IPipeline = {
            definitions: clean(this.definitions),
            environment: clean(this.environment),
            agent: clean(this.agent),
            tools: clean(this.tools),
            options: clean(this.options),
            parameters: clean(this.parameters),
            triggers: clean(this.triggers),
            stages: this.stages.map(s => s.toSerial()),
            post: clean(this.post ? this.post.toSerial() : undefined),
        };

        return clean(sortObject(res, this.propertiesOrder));
    }

    static construct(doc: any): Pipeline {
        return new Pipeline(doc);
    }

}