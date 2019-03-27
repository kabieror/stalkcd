import { Pipeline } from "./Pipeline";
import { Stage, IStage } from "./Stage";
import { Step } from "./Step";
import { PostCondition } from "./PostSection";
import { IAgentOption } from "./AgentSection";

export class PipelineBuilder {
    constructor (
    ) { }

    private _pipeline: Pipeline = new Pipeline();

    public get pipeline(): Pipeline {
        return this._pipeline;
    }

    private _currentStage: Stage | undefined;

    public get currentStage(): Stage | undefined {
        return this._currentStage;
    }

    public get currentStageLevel(): number {
        let level = 0;
        let cStage = this._currentStage;
        while (cStage) {
            cStage = cStage.parent;
            level++;
        }
        return level;
    }

    private _currentPostSection: Step[] | undefined;
    private _currentPostSectionCondition: PostCondition | undefined;

    /**
     * Appends a step to the current stage
     * @param step The next step
     */
    public step(step: Step): PipelineBuilder {
        if (!step) {
            throw new Error('The step cannot be undefined.');
        }
        if (this._currentPostSection) {
            // Fill post section
            this._currentPostSection.push(step);
            return this;
        }
        if (!this._currentStage) {
            // Begin first stage
            this.beginStage(this.generateNextStageName(true));
            if (!this._currentStage) throw new Error('Could not start a new stage.');
        }
        if (this._currentStage.stages) {
            this.endStage();
            this.beginStage(this.generateNextStageName());
        }
        if (!this._currentStage.steps) {
            this._currentStage.steps = [];
        }
        this._currentStage.steps.push(step);
        return this;
    }

    /**
     * Starts a new stage
     * @param newStage The new stage to begin
     */
    public beginStage(init: IStage): PipelineBuilder {
        if (this._currentPostSection) {
            throw new Error('Cannot start a new stage inside a post section');
        }

        const newStage = new Stage(init);
        
        if (this._currentStage) {
            // Begin a sub-stage
            if (this._currentStage.steps) {
                if (this._currentStage.isAutoStage) {
                    this.endStage();
                } else {
                    // Move steps to new stage
                    this._currentStage.stages = [new Stage({
                        name: `${this._currentStage.name} > Seq 1`,
                        baseName: `${this._currentStage.name} > Seq`,
                        steps: this._currentStage.steps,
                        parent: this._currentStage,
                    })];
                    this._currentStage.steps = undefined;
                }
                return this.beginStage(init);
            } else {
                // Current stage is clean and can be used as container for further stages
                if (!this._currentStage.stages) {
                    this._currentStage.stages = [];
                }
                newStage.parent = this._currentStage;
                this._currentStage.stages.push(newStage);
            }
        } else {
            // Begin a top-level stage
            newStage.parent = undefined;
            this._pipeline.stages.push(newStage);
        }
        this._currentStage = newStage;
        return this;
    }

    /**
     * Ends the currently active stage
     */
    public endStage(): PipelineBuilder {
        if (this._currentPostSection) {
            throw new Error('Cannot end a stage while a post section is unfinished');
        }

        if (!this._currentStage) {
            throw new Error('There is no stage to be terminated');
        }
        this._currentStage = this._currentStage.parent;
        return this;
    }

    /**
     * 
     * @param condition The condition of the post section
     */
    public beginPostSection(condition: PostCondition): PipelineBuilder {
        if (this._currentPostSection) {
            throw new Error('Cannot open a new post section when there is another one unfinished');
        }
        if (!this._currentStage) {
            throw new Error('Cannot open a new post section while there is no active stage');
        }

        this._currentPostSection = [];
        this._currentPostSectionCondition = condition;

        if (this._currentStage.post.has(condition)) {
            throw new Error(`There post section for ${condition} is already defined.`);
        }

        return this;
    }

    /**
     * Finishes the current post section
     */
    public endPostSection(): PipelineBuilder {
        if (!this._currentPostSection) {
            throw new Error('Cannot end a post section because there has none been started');
        }
        if (!this._currentStage) {
            throw new Error('Cannot end the post section because there is no active stage');
        }
        if (this._currentPostSectionCondition === undefined) {
            throw new Error('The current post condition has to be defined');
        }

        this._currentStage.post.set(this._currentPostSectionCondition, this._currentPostSection);

        this._currentPostSection = undefined;
        this._currentPostSectionCondition = undefined;

        return this;
    }

    /**
     * Generates the name for the next stage
     */
    public generateNextStageName(isAutoStage = false): IStage {
        if (!this._currentStage) {
            return {
                name: `Stage ${this._pipeline.stages.length + 1}`,
                baseName: 'Stage',
                isAutoStage,
            };
        }
        let number = 1;
        if (this._currentStage.parent && this._currentStage.parent.stages) {
            number = this._currentStage.parent.stages.length + 1;
        }
        if (this._currentStage.baseName) {
            return {
                name: `${this._currentStage.baseName} ${number}`,
                baseName: this._currentStage.baseName,
                isAutoStage,
            };
        }
        return {
            name: `${this._currentStage.name} ${number}`,
            baseName: this._currentStage.name,
            isAutoStage,
        }
    }
    
    /**
     * Sets the agent section of the current stage or the first one, if there is none yet.
     * @param agent The agent section
     */
    setAgentSection(agent: IAgentOption[]) {
        if (this.currentStage) {
            this.currentStage.agent = agent;
        } else {
            this._pipeline.agent = agent;
        }
    }

    setOptions(options: string[]): any {
        if (this.currentStage) {
            this.currentStage.options = options;
        } else {
            this._pipeline.options = options;
        }
    }

    setTools(tools: string[]): any {
        if (this.currentStage) {
            this.currentStage.tools = tools;
        } else {
            this._pipeline.tools = tools;
        }
    }

    setInput(input: string[]): any {
        if (this.currentStage) {
            this.currentStage.input = input;
        }
    }

    setTriggers(triggers: string[]): any {
        if (!this.currentStage) {
            this._pipeline.triggers = triggers;
        }
    }

}