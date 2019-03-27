import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { Stage } from "../../model/pipeline/Stage";
import { StagesContext, Stage_nameContext, AgentContext, EnvironmentContext, StepsContext, WhenContext, Stage_definitionContext, Method_callContext, PostContext, jenkinsfileParser, ScriptContext, Fail_fastContext, InputContext, ToolsContext } from "./antlr4/jenkinsfileParser";
import { AgentParser } from "./AgentParser";
import { EnvironmentParser } from "./EnvironmentParser";
import { StepParser } from "./StepParser";
import { WhenParser } from "./WhenParser";
import { extractString } from "../../util";
import { PostSectionParser } from "./PostSectionParser";
import { OptionsParser } from "./OptionsParser";

export class StagesParser
    extends AbstractParseTreeVisitor<Stage[]>
    implements jenkinsfileVisitor<Stage[]>
{

    private res: Stage[] = [];

    protected defaultResult(): Stage[] {
        return this.res;
    }

    visitStages(ctx: StagesContext): Stage[] {
        if (!ctx.children) {
            return this.res;
        }
        for (const child of ctx.children) {
            if (child instanceof Stage_definitionContext) {
                this.res.push(child.accept(new StageParser()));
            }
        }
        return this.res;
    }
    
}

export class StageParser
    extends AbstractParseTreeVisitor<Stage>
    implements jenkinsfileVisitor<Stage>
{

    private res: Stage = new Stage({name: ''});

    protected defaultResult(): Stage {
        return this.res;
    }

    visitStage_name(ctx: Stage_nameContext): Stage {
        this.res.name = extractString(ctx.text);
        this.res.savePropertyPosition('name');
        return this.res;
    }

    visitFail_fast(ctx: Fail_fastContext): Stage {
        this.res.failFast = true;
        this.res.savePropertyPosition('failFast');
        if (!ctx.children) {
            return this.res;
        }
        for (const child of ctx.children) {
            if (child instanceof TerminalNode
                && child.symbol.type === jenkinsfileParser.BOOL_LITERAL
                && child.text === 'false') {
                this.res.failFast = false;
            }
        }
        return this.res;
    }

    visitAgent(ctx: AgentContext): Stage {
        this.res.agent = ctx.accept(new AgentParser());
        this.res.savePropertyPosition('agent');
        return this.res;
    }

    visitEnvironment(ctx: EnvironmentContext): Stage {
        this.res.environment = ctx.accept(new EnvironmentParser());
        this.res.savePropertyPosition('environment');
        return this.res;
    }

    visitTools(ctx: ToolsContext): Stage {
        this.res.tools = ctx.accept(new OptionsParser());
        this.res.savePropertyPosition('tools');
        return this.res;
    }

    visitInput(ctx: InputContext): Stage {
        this.res.input = ctx.accept(new OptionsParser());
        this.res.savePropertyPosition('input');
        return this.res;
    }

    visitWhen(ctx: WhenContext): Stage {
        this.res.when = ctx.accept(new WhenParser()).toString();
        this.res.savePropertyPosition('when');
        return this.res;
    }

    visitPost(ctx: PostContext): Stage {
        this.res.post = ctx.accept(new PostSectionParser());
        this.res.savePropertyPosition('post');
        return this.res;
    }

    visitStages(ctx: StagesContext): Stage {
        if (!this.res.stages) {
            this.res.stages = [];
        }
        if (!ctx.children || ctx.children.length <= 0) {
            return this.res;
        }
        
        for (const child of ctx.children) {
            if (
                child instanceof TerminalNode
                && child.symbol.type === jenkinsfileParser.PARALLEL
            ) {
                this.res.parallel = true;
            }
        }
        this.res.stages = this.res.stages.concat(
            ctx.accept(new StagesParser())
        );
        this.res.savePropertyPosition('parallel');
        this.res.savePropertyPosition('stages');
        return this.res;
    }

    visitSteps(ctx: StepsContext): Stage {
        if (ctx.children) {
            if (!this.res.steps) {
                this.res.steps = [];
            }
            for (const child of ctx.children) {
                if (child instanceof Method_callContext
                    || child instanceof ScriptContext) {
                    this.res.steps.push(child.accept(new StepParser()));
                }
            }
        }
        this.res.savePropertyPosition('steps');

        return this.res;
    }
    
}