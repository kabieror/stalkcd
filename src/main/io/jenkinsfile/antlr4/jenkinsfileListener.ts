// Generated from src/io/jenkinsfile/antlr4/jenkinsfile.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PipelineContext } from "./jenkinsfileParser";
import { DefinitionContext } from "./jenkinsfileParser";
import { EnvironmentContext } from "./jenkinsfileParser";
import { ParametersContext } from "./jenkinsfileParser";
import { AgentContext } from "./jenkinsfileParser";
import { Agent_typeContext } from "./jenkinsfileParser";
import { ToolsContext } from "./jenkinsfileParser";
import { Pipeline_optionsContext } from "./jenkinsfileParser";
import { TriggersContext } from "./jenkinsfileParser";
import { StagesContext } from "./jenkinsfileParser";
import { Stage_definitionContext } from "./jenkinsfileParser";
import { Stage_nameContext } from "./jenkinsfileParser";
import { Fail_fastContext } from "./jenkinsfileParser";
import { StepsContext } from "./jenkinsfileParser";
import { ScriptContext } from "./jenkinsfileParser";
import { InputContext } from "./jenkinsfileParser";
import { WhenContext } from "./jenkinsfileParser";
import { When_aggregationContext } from "./jenkinsfileParser";
import { When_aggregation_typeContext } from "./jenkinsfileParser";
import { When_expressionContext } from "./jenkinsfileParser";
import { PostContext } from "./jenkinsfileParser";
import { Post_conditionContext } from "./jenkinsfileParser";
import { AssignmentContext } from "./jenkinsfileParser";
import { Assignment_keyContext } from "./jenkinsfileParser";
import { Method_callContext } from "./jenkinsfileParser";
import { Method_environmentContext } from "./jenkinsfileParser";
import { Method_call_simpleContext } from "./jenkinsfileParser";
import { Method_call_javaContext } from "./jenkinsfileParser";
import { Method_arg_listContext } from "./jenkinsfileParser";
import { Method_argContext } from "./jenkinsfileParser";
import { Method_arg_keyContext } from "./jenkinsfileParser";
import { ExpressionContext } from "./jenkinsfileParser";
import { Expression_listContext } from "./jenkinsfileParser";
import { PrimaryContext } from "./jenkinsfileParser";
import { LiteralContext } from "./jenkinsfileParser";
import { IdentifierContext } from "./jenkinsfileParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `jenkinsfileParser`.
 */
export interface jenkinsfileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `jenkinsfileParser.pipeline`.
	 * @param ctx the parse tree
	 */
	enterPipeline?: (ctx: PipelineContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.pipeline`.
	 * @param ctx the parse tree
	 */
	exitPipeline?: (ctx: PipelineContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.environment`.
	 * @param ctx the parse tree
	 */
	enterEnvironment?: (ctx: EnvironmentContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.environment`.
	 * @param ctx the parse tree
	 */
	exitEnvironment?: (ctx: EnvironmentContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.agent`.
	 * @param ctx the parse tree
	 */
	enterAgent?: (ctx: AgentContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.agent`.
	 * @param ctx the parse tree
	 */
	exitAgent?: (ctx: AgentContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.agent_type`.
	 * @param ctx the parse tree
	 */
	enterAgent_type?: (ctx: Agent_typeContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.agent_type`.
	 * @param ctx the parse tree
	 */
	exitAgent_type?: (ctx: Agent_typeContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.tools`.
	 * @param ctx the parse tree
	 */
	enterTools?: (ctx: ToolsContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.tools`.
	 * @param ctx the parse tree
	 */
	exitTools?: (ctx: ToolsContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.pipeline_options`.
	 * @param ctx the parse tree
	 */
	enterPipeline_options?: (ctx: Pipeline_optionsContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.pipeline_options`.
	 * @param ctx the parse tree
	 */
	exitPipeline_options?: (ctx: Pipeline_optionsContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.triggers`.
	 * @param ctx the parse tree
	 */
	enterTriggers?: (ctx: TriggersContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.triggers`.
	 * @param ctx the parse tree
	 */
	exitTriggers?: (ctx: TriggersContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.stages`.
	 * @param ctx the parse tree
	 */
	enterStages?: (ctx: StagesContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.stages`.
	 * @param ctx the parse tree
	 */
	exitStages?: (ctx: StagesContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.stage_definition`.
	 * @param ctx the parse tree
	 */
	enterStage_definition?: (ctx: Stage_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.stage_definition`.
	 * @param ctx the parse tree
	 */
	exitStage_definition?: (ctx: Stage_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.stage_name`.
	 * @param ctx the parse tree
	 */
	enterStage_name?: (ctx: Stage_nameContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.stage_name`.
	 * @param ctx the parse tree
	 */
	exitStage_name?: (ctx: Stage_nameContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.fail_fast`.
	 * @param ctx the parse tree
	 */
	enterFail_fast?: (ctx: Fail_fastContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.fail_fast`.
	 * @param ctx the parse tree
	 */
	exitFail_fast?: (ctx: Fail_fastContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.steps`.
	 * @param ctx the parse tree
	 */
	enterSteps?: (ctx: StepsContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.steps`.
	 * @param ctx the parse tree
	 */
	exitSteps?: (ctx: StepsContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.when`.
	 * @param ctx the parse tree
	 */
	enterWhen?: (ctx: WhenContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.when`.
	 * @param ctx the parse tree
	 */
	exitWhen?: (ctx: WhenContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.when_aggregation`.
	 * @param ctx the parse tree
	 */
	enterWhen_aggregation?: (ctx: When_aggregationContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.when_aggregation`.
	 * @param ctx the parse tree
	 */
	exitWhen_aggregation?: (ctx: When_aggregationContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.when_aggregation_type`.
	 * @param ctx the parse tree
	 */
	enterWhen_aggregation_type?: (ctx: When_aggregation_typeContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.when_aggregation_type`.
	 * @param ctx the parse tree
	 */
	exitWhen_aggregation_type?: (ctx: When_aggregation_typeContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.when_expression`.
	 * @param ctx the parse tree
	 */
	enterWhen_expression?: (ctx: When_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.when_expression`.
	 * @param ctx the parse tree
	 */
	exitWhen_expression?: (ctx: When_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.post`.
	 * @param ctx the parse tree
	 */
	enterPost?: (ctx: PostContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.post`.
	 * @param ctx the parse tree
	 */
	exitPost?: (ctx: PostContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.post_condition`.
	 * @param ctx the parse tree
	 */
	enterPost_condition?: (ctx: Post_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.post_condition`.
	 * @param ctx the parse tree
	 */
	exitPost_condition?: (ctx: Post_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.assignment_key`.
	 * @param ctx the parse tree
	 */
	enterAssignment_key?: (ctx: Assignment_keyContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.assignment_key`.
	 * @param ctx the parse tree
	 */
	exitAssignment_key?: (ctx: Assignment_keyContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_call`.
	 * @param ctx the parse tree
	 */
	enterMethod_call?: (ctx: Method_callContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_call`.
	 * @param ctx the parse tree
	 */
	exitMethod_call?: (ctx: Method_callContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_environment`.
	 * @param ctx the parse tree
	 */
	enterMethod_environment?: (ctx: Method_environmentContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_environment`.
	 * @param ctx the parse tree
	 */
	exitMethod_environment?: (ctx: Method_environmentContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_call_simple`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_simple?: (ctx: Method_call_simpleContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_call_simple`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_simple?: (ctx: Method_call_simpleContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_call_java`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_java?: (ctx: Method_call_javaContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_call_java`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_java?: (ctx: Method_call_javaContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_arg_list`.
	 * @param ctx the parse tree
	 */
	enterMethod_arg_list?: (ctx: Method_arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_arg_list`.
	 * @param ctx the parse tree
	 */
	exitMethod_arg_list?: (ctx: Method_arg_listContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_arg`.
	 * @param ctx the parse tree
	 */
	enterMethod_arg?: (ctx: Method_argContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_arg`.
	 * @param ctx the parse tree
	 */
	exitMethod_arg?: (ctx: Method_argContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.method_arg_key`.
	 * @param ctx the parse tree
	 */
	enterMethod_arg_key?: (ctx: Method_arg_keyContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.method_arg_key`.
	 * @param ctx the parse tree
	 */
	exitMethod_arg_key?: (ctx: Method_arg_keyContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `jenkinsfileParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `jenkinsfileParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

