import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { Step } from "../../model/pipeline/Step";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { Method_callContext, ScriptContext } from "./antlr4/jenkinsfileParser";
import { MethodCallParser } from "./MethodCallParser";

export class StepParser
    extends AbstractParseTreeVisitor<Step>
    implements jenkinsfileVisitor<Step>
{

    private res: Step = new Step({});

    protected defaultResult(): Step {
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): Step {
        const call = ctx.accept(new MethodCallParser());
        this.res.command = call.toString();
        this.res.label = call.name;
        return this.res;
    }

    visitScript(ctx: ScriptContext): Step {
        this.res.command = ctx.text;
        this.res.label = 'script';
        return this.res;
    }
    
}