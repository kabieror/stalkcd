import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import { Method_arg_listContext, Method_argContext, Method_call_simpleContext, Method_call_javaContext, Method_environmentContext, Method_callContext } from "./antlr4/jenkinsfileParser";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { Expression, ExpressionParser } from "./ExpressionParser";

export class MethodCallParser
    extends AbstractParseTreeVisitor<MethodCall>
    implements jenkinsfileVisitor<MethodCall>
{

    constructor(
        private res: MethodCall = new MethodCallSimple(''),
    ) {
        super();
    }

    protected defaultResult(): MethodCall {
        return this.res;
    }

    visitMethod_call_java(ctx: Method_call_javaContext) {
        if (!ctx.children) {
            throw new Error('Could not find method arguments.');
        }
        this.res = new MethodCallJava(
            ctx.children[0].text,
            ctx.accept(new MethodArgListParser()),
        );
        return this.res;
    }

    visitMethod_call_simple(ctx: Method_call_simpleContext) {
        if (!ctx.children) {
            throw new Error('Could not find method arguments.');
        }
        this.res = new MethodCallSimple(
            ctx.children[0].text,
            ctx.accept(new MethodArgListParser()),
        );
        return this.res;
    }

    visitMethod_environment(ctx: Method_environmentContext) {
        if (!ctx.children || ctx.children.length <= 0) {
            return this.res;
        }

        for (const child of ctx.children) {
            if (child instanceof Method_call_javaContext) {
                // Create environment with first method call
                this.res = new MethodEnvironment(
                    child.accept(new MethodCallParser()),
                );
            } else if (child instanceof Method_callContext
                && this.res instanceof MethodEnvironment) {
                // Add subsequent method calls as children of the environment
                this.res.children.push(
                    child.accept(new MethodCallParser()),
                );
            }
        }
        return this.res;
    }

    toString(): string {
        return this.res ? this.res.toString() : '';
    }

}

export class MethodArgListParser
    extends AbstractParseTreeVisitor<MethodArg[]>
    implements jenkinsfileVisitor<MethodArg[]>
{

    constructor(
        private res: MethodArg[] = [],
    ) {
        super();
    }

    protected defaultResult(): MethodArg[] {
        return this.res;
    }

    visitMethod_arg_list(ctx: Method_arg_listContext): MethodArg[] {
        if (!ctx.children) {
            throw new Error();
        }

        for (const child of ctx.children) {
            const childRes = child.accept(new MethodArgParser());
            if (childRes) {
                this.res.push(childRes);
            }
        }
        return this.res;
    }
}

export class MethodArgParser
    extends AbstractParseTreeVisitor<MethodArg>
    implements jenkinsfileVisitor<MethodArg>
{

    constructor(
        private res: MethodArg = new Expression(),
    ) {
        super();
    }

    protected defaultResult(): MethodArg {
        return this.res;
    }

    visitMethod_arg(ctx: Method_argContext): MethodArg {
        if (!ctx.children) {
            return this.res;
        }
        if (ctx.children.length === 1) {
            // Simple value
            this.res = ctx.children[0].accept(new ExpressionParser());
        } else if (ctx.children.length === 3) {
            // Key-Value pair
            this.res = new KeyValuePair(
                ctx.children[0].text,
                ctx.children[2].accept(new ExpressionParser()),
            );
        } else {
            throw new Error('Found unknown method argument definition');
        }
        return this.res;
    }

}

export interface MethodCall {
    readonly name: string;
    toString(): string;
    argsToString(): string;
}

export type MethodArg = MethodCall | KeyValuePair | Expression;

export abstract class AbstractMethodCall implements MethodCall {

    constructor(
        public name: string,
        public args: MethodArg[] = [],
    ) { }

    abstract toString(): string;

    public argsToString(): string {
        return this.args
            .filter(a => a.toString().trim() !== '')
            .map(a => a.toString()).join(', ');
    }

}

export class MethodCallSimple extends AbstractMethodCall {
    toString(): string {
        return `${this.name} ${this.argsToString()}`;
    }
}

export class MethodCallJava extends AbstractMethodCall {
    toString(): string {
        return `${this.name}(${this.argsToString()})`;
    }
}

export class MethodEnvironment implements MethodCall {

    constructor(
        public initMethod: MethodCall,
    ) { }

    public get name() {
        return this.initMethod.name;
    }
    
    public children: MethodCall[] = [];

    toString(): string {
        return this.initMethod.toString()
            + ' {\n'
            + this.childrenToString('  ')
            + '\n}';
    }

    argsToString(): string {
        return '';
    }

    childrenToString(indent: string): string {
        return this.children.map(c => indent + c.toString()).join('\n');
    }
}

export class KeyValuePair {
    constructor(
        private key: string,
        private value: Expression,
    ) {

    }

    toString(): string {
        return `${this.key}: ${this.value.toString()}`;
    }
}
