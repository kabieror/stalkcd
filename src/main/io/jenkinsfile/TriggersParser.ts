import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { ITriggersSection } from "../../model/pipeline/TriggersSection";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { MethodCallParser } from "./MethodCallParser";
import { Method_callContext } from "./antlr4/jenkinsfileParser";

export class TriggersParser
    extends AbstractParseTreeVisitor<ITriggersSection>
    implements jenkinsfileVisitor<ITriggersSection>
{
    constructor(
        private res: ITriggersSection = {
            triggers: [],
        },
    ) {
        super();
    }

    protected defaultResult(): ITriggersSection {
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): ITriggersSection {
        const call = new MethodCallParser();
        ctx.accept(call);
        if (!this.res.triggers) {
            this.res.triggers = [];
        }
        this.res.triggers.push(call.toString()); 
        return this.res;
    }

}