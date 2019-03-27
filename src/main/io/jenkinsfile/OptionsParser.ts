import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { jenkinsfileParser, Method_callContext } from "./antlr4/jenkinsfileParser";
import { IOptionsSection } from "../../model/pipeline/OptionsSection";
import { MethodCallParser as MethodCallParser } from "./MethodCallParser";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";

export class OptionsParser
    extends AbstractParseTreeVisitor<string[]>
    implements jenkinsfileVisitor<string[]>
{
    constructor(
        private res: string[] = [],
    ) {
        super();
    }

    protected defaultResult(): string[] {
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): string[] {
        const call = new MethodCallParser();
        ctx.accept(call);
        this.res.push(call.toString()); 
        return this.res;
    }

}