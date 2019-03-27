import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { Agent_typeContext, Method_callContext } from "./antlr4/jenkinsfileParser";
import { jenkinsfileVisitor } from "./antlr4/jenkinsfileVisitor";
import { IAgentOption } from '../../model/pipeline/AgentSection';
import { MethodCallParser } from './MethodCallParser';

export class AgentParser
    extends AbstractParseTreeVisitor<IAgentOption[]>
    implements jenkinsfileVisitor<IAgentOption[]>
{

    constructor(private res: IAgentOption[] = []) {
        super();
    }

    private agentOption?: IAgentOption;

    protected defaultResult(): IAgentOption[] {
        return this.res;
    }

    visitAgent_type(ctx: Agent_typeContext): IAgentOption[] {
        this.agentOption = {
            name: ctx.text,
        };
        this.res.push(this.agentOption);
        return this.res;
    }
    
    visitMethod_call(ctx: Method_callContext): IAgentOption[] {
        if (!ctx.children) {
            throw new Error(`Could not find children of a method call`);
        }

        const callParser = new MethodCallParser();
        const call = ctx.accept(callParser);

        const option: IAgentOption = {
            name: call.name,
            value: call.argsToString(),
        };

        if (this.agentOption) {
            if (!this.agentOption.options) {
                this.agentOption.options = [];
            }
            this.agentOption.options.push(option);
        } else {
            this.res.push(option);
        }
        
        return this.res;
    }
}
