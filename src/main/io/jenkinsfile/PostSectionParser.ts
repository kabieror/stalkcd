import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import { PostSection, IPostSection } from "../../model/pipeline/PostSection";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { Post_conditionContext, Method_callContext, jenkinsfileParser, ScriptContext } from "./antlr4/jenkinsfileParser";
import { MethodCallParser } from "./MethodCallParser";
import { StepParser } from "./StepParser";

export class PostSectionParser
    extends AbstractParseTreeVisitor<PostSection>
    implements jenkinsfileVisitor<PostSection>
{

    private res: PostSection = new PostSection();

    protected defaultResult(): PostSection {
        return this.res;
    }

    visitPost_condition(ctx: Post_conditionContext): PostSection {
        const parser = new PostConditionParser(this.res);
        ctx.accept(parser);

        const condition = parser.getCondition();
        if (condition) {
            this.res.savePropertyPosition(condition as (keyof IPostSection));
        }
        
        return this.res;
    }
    
}

export class PostConditionParser
    extends AbstractParseTreeVisitor<PostSection>
    implements jenkinsfileVisitor<PostSection>
{
    constructor(
        private res: PostSection,
    ) {
        super();
    }

    private condition?: string;

    public getCondition(): string | undefined {
        return this.condition;
    }

    protected defaultResult(): PostSection {
        return this.res;
    }

    visitTerminal(ctx: TerminalNode): PostSection {
        if (ctx.symbol.type === jenkinsfileParser.IDENTIFIER) {
            this.condition = ctx.text;
            if (!this.res.has(this.condition)) {
                this.res.set(this.condition, []);
            }
        }
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): PostSection {
        if (!this.condition) {
            throw new Error();
        }
        this.res.get(this.condition).push(ctx.accept(new StepParser()));
        return this.res;
    }

    visitScript(ctx: ScriptContext): PostSection {
        if (!this.condition) {
            throw new Error();
        }
        this.res.get(this.condition).push(ctx.accept(new StepParser()));
        return this.res;
    }

    
}