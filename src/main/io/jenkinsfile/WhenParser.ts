import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { WhenSection, WhenAggregation } from "../../model/pipeline/WhenSection";
import {
    Method_callContext,
    When_aggregationContext,
    When_expressionContext,
    When_aggregation_typeContext
} from "./antlr4/jenkinsfileParser";
import { MethodCallParser } from "./MethodCallParser";
import { ExpressionParser } from "./ExpressionParser";

export class WhenParser
    extends AbstractParseTreeVisitor<WhenSection>
    implements jenkinsfileVisitor<WhenSection>
{

    private res = new WhenSection();

    protected defaultResult() {
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): WhenSection {
        const call = ctx.accept(new MethodCallParser());
        this.res.conditions.push(call.toString());
        return this.res;
    }

    visitWhen_aggregation(ctx: When_aggregationContext): WhenSection {
        const agg = ctx.accept(new WhenAggregationParser());
        this.res.conditions.push(agg);
        return this.res;
    }

    visitWhen_expression(ctx: When_expressionContext): WhenSection {
        const exp = ctx.accept(new ExpressionParser());
        this.res.conditions.push('expression { ' + exp.toString() + ' }');
        return this.res;
    }
    
}

export class WhenAggregationParser
    extends AbstractParseTreeVisitor<WhenAggregation>
    implements jenkinsfileVisitor<WhenAggregation>
{

    private res: WhenAggregation = new WhenAggregation('allOf');

    protected defaultResult(): WhenAggregation {
        return this.res;
    }

    visitWhen_aggregation_type(ctx: When_aggregation_typeContext): WhenAggregation {
        switch (ctx.text.toLowerCase()) {
            case 'allof':
                this.res.type = 'allOf';
                break;
            case 'anyof':
                this.res.type = 'anyOf';
                break;
            case 'not':
                this.res.type = 'not';
                break;
            default:
                throw new Error(`When aggregation type '${ctx.text}' is unsupported.`);
        }
        return this.res;
    }

    visitMethod_call(ctx: Method_callContext): WhenAggregation {
        this.res.conditions.push(ctx.accept(new MethodCallParser()).toString());
        return this.res;
    }

    visitWhen_expression(ctx: When_expressionContext): WhenAggregation {
        this.res.conditions.push(ctx.accept(new ExpressionParser()).toString());
        return this.res;
    }
    
    visitWhen_aggregation(ctx: When_aggregationContext): WhenAggregation {
        if (!ctx.children || ctx.children.length < 1) {
            return this.res;
        }
        for (const child of ctx.children) {
            if (child instanceof When_aggregationContext) {
                this.res.conditions.push(child.accept(new WhenAggregationParser()));
            } else {
                child.accept(this);
            }
        }
        return this.res;
    }

}