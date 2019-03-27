import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Assignment_keyContext, ExpressionContext } from "./antlr4/jenkinsfileParser";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { IEnvironmentVariable } from "../../model/pipeline/EnvironmentSection";
import { ExpressionParser } from './ExpressionParser';

export class EnvironmentParser
    extends AbstractParseTreeVisitor<IEnvironmentVariable[]>
    implements jenkinsfileVisitor<IEnvironmentVariable[]>
{
    constructor() {
        super();
    }

    private res: IEnvironmentVariable [] = [];

    private preparedAssignment?: IEnvironmentVariable;

    protected defaultResult(): IEnvironmentVariable[] {
        return this.res;
    }
    
    visitAssignment_key(ctx: Assignment_keyContext): IEnvironmentVariable[] {
        this.preparedAssignment = {
            name: ctx.text,
            value: '',
        }
        return this.res;
    }

    visitExpression(ctx: ExpressionContext): IEnvironmentVariable[] {
        if (!this.preparedAssignment) {
            throw new Error();
        }

        this.preparedAssignment.value = ctx.accept(new ExpressionParser()).toString();
        this.res.push(this.preparedAssignment);
        this.preparedAssignment = undefined;
        return this.res;
    }
}
