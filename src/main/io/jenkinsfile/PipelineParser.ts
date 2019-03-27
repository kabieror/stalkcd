import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { EnvironmentContext, AgentContext, Pipeline_optionsContext, TriggersContext, StagesContext, PostContext, DefinitionContext, ParametersContext, ToolsContext } from "./antlr4/jenkinsfileParser";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { Pipeline } from "../../model/pipeline/Pipeline";
import { EnvironmentParser } from './EnvironmentParser';
import { AgentParser } from './AgentParser';
import { OptionsParser } from './OptionsParser';
import { TriggersParser } from './TriggersParser';
import { StagesParser } from './StagesParser';
import { PostSectionParser } from './PostSectionParser';

export class PipelineParser
    extends AbstractParseTreeVisitor<Pipeline>
    implements jenkinsfileVisitor<Pipeline>
{
    constructor(private res: Pipeline = new Pipeline()) {
        super();
    }
    protected defaultResult(): Pipeline {
        return this.res;
    }
    visitDefinition(ctx: DefinitionContext): Pipeline {
        if (!this.res.definitions) {
            this.res.definitions = [];
            this.res.savePropertyPosition('definitions');
        }
        this.res.definitions.push(ctx.text);
        return this.res;
    }
    visitAgent(ctx: AgentContext): Pipeline {
        this.res.agent = ctx.accept(new AgentParser());
        this.res.savePropertyPosition('agent');
        return this.res;
    }
    visitTools(ctx: ToolsContext): Pipeline {
        this.res.tools = ctx.accept(new OptionsParser());
        this.res.savePropertyPosition('tools');
        return this.res;
    }
    visitEnvironment(ctx: EnvironmentContext): Pipeline {
        this.res.environment = ctx.accept(new EnvironmentParser());
        this.res.savePropertyPosition('environment');
        return this.res;
    }
    visitParameters(ctx: ParametersContext): Pipeline {
        this.res.parameters = ctx.accept(new OptionsParser());
        this.res.savePropertyPosition('parameters');
        return this.res;
    }
    visitPipeline_options(ctx: Pipeline_optionsContext): Pipeline {
        this.res.options = ctx.accept(new OptionsParser());
        this.res.savePropertyPosition('options');
        return this.res;
    }
    visitTriggers(ctx: TriggersContext): Pipeline {
        this.res.triggers = ctx.accept(new TriggersParser()).triggers;
        this.res.savePropertyPosition('triggers');
        return this.res;
    }
    visitStages(ctx: StagesContext): Pipeline {
        this.res.stages = ctx.accept(new StagesParser());
        this.res.savePropertyPosition('stages');
        return this.res;
    }
    visitPost(ctx: PostContext): Pipeline {
        this.res.post = ctx.accept(new PostSectionParser());
        this.res.savePropertyPosition('post');
        return this.res;
    }
}
