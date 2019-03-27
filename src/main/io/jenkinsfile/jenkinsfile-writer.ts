import { Pipeline } from "../../model/pipeline/Pipeline";
import { Stage } from "../../model/pipeline/Stage";
import { Step } from "../../model/pipeline/Step";
import { IAgentOption } from "../../model/pipeline/AgentSection";
import { PostSection } from "../../model/pipeline/PostSection";

export class JenkinsfileWriter {

    async write(pipeline: Pipeline): Promise<string> {
        if (!pipeline) {
            throw new Error('A Jenkinsfile has to contain a pipeline');
        }

        return this.processPipeline(pipeline);
    }

    processPipeline(pipeline: Pipeline): string {
        let definitionsString = '';

        if (pipeline.definitions) {
            for (const def of pipeline.definitions) {
                definitionsString += def + '\n\n';
            }
        }

        const root = new Segment('pipeline');

        for (const prop of pipeline.propertiesOrder) {
            if (prop === 'agent' && pipeline.agent) {
                this.processAgentSection(
                    pipeline.agent, root.add('agent')
                );
            }

            if (prop === 'tools' && pipeline.tools) {
                const tools = root.add('tools');
                for (const t of pipeline.tools) {
                    tools.add(t);
                }
            }
    
            if (prop === 'environment' && pipeline.environment) {
                const section = root.add('environment');
                for (const assignment of pipeline.environment) {
                    section.add(assignment.name + ' = ' + assignment.value);
                }
            }

            if (prop === 'options' && pipeline.options) {
                const section = root.add('options');
                for (const option of pipeline.options) {
                    section.add(option);
                }
            }

            if (prop === 'parameters' && pipeline.parameters) {
                const section = root.add('parameters');
                for (const param of pipeline.parameters) {
                    section.add(param);
                }
            }

            if (prop === 'post' && pipeline.post) {
                this.processPostSection(
                    pipeline.post, root.add('post'),
                )
            }

            if (prop === 'triggers' && pipeline.triggers) {
                const section = root.add('triggers');
                for (const trigger of pipeline.triggers) {
                    section.add(trigger);
                }
            }
            
            if (prop === 'stages' && pipeline.stages) {
                const stages = root.add('stages');
                for (const stage of pipeline.stages) {
                    this.processStage(stage, stages);
                }
            }
        }

        const pipelineString = root.toString();

        return definitionsString + pipelineString;
    }

    /**
     * Adds a stage to a Jenkinsfile
     */
    processStage(stage: Stage, parent: Segment) {
        const segment = parent.add(`stage('${stage.name.replace(/'/g, "\'")}')`);

        for (const prop of stage.propertiesOrder) {
            if (prop === 'failFast' && stage.failFast !== undefined) {
                segment.add('failFast').addParam(stage.failFast ? 'true' : 'false');
            }

            if (prop === 'environment' && stage.environment) {
                const env = segment.add('environment');
                for (const e of stage.environment) {
                    env.add(e.name + ' = ' + e.value);
                }
            }

            if (prop === 'input' && stage.input) {
                const input = segment.add('input');
                for (const i of stage.input) {
                    input.add(i);
                }
            }

            if (prop === 'agent' && stage.agent) {
                this.processAgentSection(stage.agent, segment.add('agent'));
            }

            if (prop === 'tools' && stage.tools) {
                const tools = segment.add('tools');
                for (const t of stage.tools) {
                    tools.add(t);
                }
            }
    
            if (prop === 'when' && stage.when) {
                segment.add('when').add(stage.when);
            }
    
            if (prop === 'stages' && stage.stages) {
                const stages = segment.add(stage.parallel ? 'parallel' : 'stages');
                for (const sub of stage.stages) {
                    this.processStage(sub, stages);
                }
            } else if (prop === 'steps' && stage.steps) {
                const steps = segment.add('steps');
                for (const step of stage.steps) {
                    this.processStep(step, steps);
                }
            }
    
            if (prop === 'post' && stage.post) {
                this.processPostSection(
                    stage.post, segment.add('post'),
                );
            }
        }
    }

    /**
     * Adds a step to a Jenkinsfile
     */
    processStep(step: Step, parent: Segment) {
        if (!step.command) {
            return;
        }
        parent.add(step.command);
    }

    /**
     * Adds an agent section to the Jenkinsfile
     * @param src The agent configuration
     * @param segment The segment where the agent settings are to be added to
     */
    processAgentSection(src: IAgentOption[], segment: Segment) {
        for (const option of src) {
            this.processAgentOption(option, segment);
        }
    }

    processAgentOption(option: IAgentOption, parent: Segment) {
        if (
            (option.name === 'any'
            || option.name === 'none')
            && !option.value
            && !option.options
        ) {
            parent.addParam(option.name);
            return;
        }

        const segment = parent.add(option.name);
        if (option.value) {
            segment.addParam(option.value);
        }
        if (option.options) {
            for (const child of option.options) {
                this.processAgentOption(child, segment);
            }
        }
    }

    /**
     * Adds a post section to a Jenkinsfile
     */
    processPostSection(post: PostSection, segment: Segment) {
        for (const key of post.propertiesOrder) {
            if (!post.has(key)) {
                continue;
            }
            const conditionSection = segment.add(key);
            const conditions = post.get(key);
            for (const condition of conditions) {
                if (!condition.command) {
                    continue;
                }
                conditionSection.add(condition.command);
            }
        }
    }

}

export class Segment {
    constructor(
        private keyword: string,
        parent: Segment | undefined = undefined,
    ) {
        if (parent) {
            this.depth = parent.depth + 1;
            parent.children.push(this);
        }
    }

    public depth = 0;

    public children: Segment[] = [];

    add(keyword: string): Segment {
        return new Segment(keyword, this);
    }

    addParam(param: string) {
        this.keyword += ' ' + param;
    }

    addParamEscape(param: string): Segment {
        const lines = param.split('\n');
        if (lines.length <= 1) {
            this.keyword += ` '${param.replace(/'/g, "\\'")}'`;
        } else {
            this.keyword += ` '''`;
            const indent = this.getIndentation(1);
            for (const line of lines) {
                this.keyword += '\n' + indent + line.replace(/'/g, "\\'");
            }
            this.keyword += '\n' + this.getIndentation() + `'''.stripIndent()`;
        }
        return this;
    }

    toString(): string {
        const indent = this.getIndentation();
        let res = indent + this.keyword;
        if (this.children.length > 0) {
            res += ' {\n';
            res += this.children.map(child => child.toString()).join('\n');
            res += `\n${indent}}`;
        }
        return res;
    }

    getIndentation(depthIncrement: number = 0): string {
        if (isNaN(depthIncrement)) {
            depthIncrement = this.depth;
        }
        let res = '';
        for (let i = 0; i < this.depth + depthIncrement; i++) {
            res += '  ';
        }
        return res;
    }
}