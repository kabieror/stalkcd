import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { ExpressionContext, Method_call_javaContext, LiteralContext, PrimaryContext, jenkinsfileParser, Expression_listContext } from "./antlr4/jenkinsfileParser";
import { MethodCallParser, MethodCall } from "./MethodCallParser";

export class ExpressionParser
    extends AbstractParseTreeVisitor<Expression>
    implements jenkinsfileVisitor<Expression>
{

    private res = new Expression();

    protected defaultResult() {
        return this.res;
    }

    visitExpression(ctx: ExpressionContext): Expression {
        if (!ctx.children) {
            return this.res;
        }

        this.res.operator = ctx._bop ? ctx._bop.text : undefined;
        this.res.prefix = ctx._prefix ? ctx._prefix.text : undefined;
        this.res.suffix = ctx._postfix ? ctx._postfix.text : undefined;
        
        for (const child of ctx.children) {
            if (child instanceof ExpressionContext) {
                const subExpr = child.accept(new ExpressionParser());
                this.next(subExpr);
            } else {
                child.accept(this);
            }
        }

        return this.res;
    }

    visitTerminal(ctx: TerminalNode): Expression {
        switch (ctx.symbol.type) {
            case jenkinsfileParser.IDENTIFIER:
                this.next(ctx.text);
                break;
        }
        return this.res;
    }

    visitMethod_call_java(ctx: Method_call_javaContext): Expression {
        this.next(ctx.accept(new MethodCallParser()));
        return this.res;
    }

    visitLiteral(ctx: LiteralContext): Expression {
        this.next(ctx.text);
        return this.res;
    }

    visitPrimary(ctx: PrimaryContext): Expression {
        if (ctx.children && ctx.children.length > 0) {
            if (ctx.children[0].text === '(') {
                this.res.brackets = true;
            }
            for (const child of ctx.children) {
                child.accept(this);
            }
        }
        return this.res;
    }

    visitExpression_list(ctx: Expression_listContext): Expression {
        if (!ctx.children || ctx.children.length < 1) {
            return this.res;
        }
        
        const list = new ExpressionList();
        for (const child of ctx.children) {
            if (child instanceof ExpressionContext) {
                list.expressions.push(child.accept(new ExpressionParser()));
            }
        }
        this.next(list);
        
        return this.res;
    }

    private next(element: SubExpression) {
        if (!this.res.left) {
            this.res.left = element;
        } else if (!this.res.right) {
            this.res.right = element;
        } else if (!this.res.alternative) {
            this.res.alternative = element;
        } else {
            throw new Error('Too many expression parts');
        }
    }
    
}

export type SubExpression = Expression | MethodCall | ExpressionList | string;

export class Expression {

    public left?: SubExpression;
    public right?: SubExpression;
    public alternative?: SubExpression;
    public brackets: boolean = false;

    public prefix?: string;
    public suffix?: string;

    public operator?: string;

    toString(): string {
        let parts = [];
        if (this.prefix) {
            parts.push(this.prefix);
        }

        if (this.operator === '.') {
            if (!this.left || !this.right) {
                throw new Error();
            }
            parts.push(
                this.left.toString()
                + '.'
                + this.right.toString()
            );
        } else {
            if (this.left) {
                parts.push(this.left.toString());
            }
            if (this.operator) {
                parts.push(this.operator);
            }
            if (this.right) {
                parts.push(this.right.toString());
            }
        }

        if (this.alternative) {
            parts.push(':');
            parts.push(this.alternative.toString());
        }
        if (this.suffix) {
            parts.push(this.suffix);
        }

        let output = parts.join(' ');
        if (this.brackets) {
            output = `(${output})`;
        }
        return output;
    }
}

export class ExpressionList {

    expressions: SubExpression[] = [];

    toString(): string {
        return this.expressions.join(', ');
    }
}