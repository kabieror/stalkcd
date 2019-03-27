// Generated from src/io/jenkinsfile/antlr4/jenkinsfile.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `jenkinsfileParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface jenkinsfileVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `jenkinsfileParser.pipeline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipeline?: (ctx: PipelineContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.environment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnvironment?: (ctx: EnvironmentContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.agent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgent?: (ctx: AgentContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.agent_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgent_type?: (ctx: Agent_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.tools`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTools?: (ctx: ToolsContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.pipeline_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPipeline_options?: (ctx: Pipeline_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.triggers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggers?: (ctx: TriggersContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.stages`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStages?: (ctx: StagesContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.stage_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStage_definition?: (ctx: Stage_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.stage_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStage_name?: (ctx: Stage_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.fail_fast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFail_fast?: (ctx: Fail_fastContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.steps`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSteps?: (ctx: StepsContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.when`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen?: (ctx: WhenContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.when_aggregation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_aggregation?: (ctx: When_aggregationContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.when_aggregation_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_aggregation_type?: (ctx: When_aggregation_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.when_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_expression?: (ctx: When_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.post`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPost?: (ctx: PostContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.post_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPost_condition?: (ctx: Post_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.assignment_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_key?: (ctx: Assignment_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call?: (ctx: Method_callContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_environment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_environment?: (ctx: Method_environmentContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_call_simple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_simple?: (ctx: Method_call_simpleContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_call_java`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_call_java?: (ctx: Method_call_javaContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_arg_list?: (ctx: Method_arg_listContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_arg?: (ctx: Method_argContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.method_arg_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod_arg_key?: (ctx: Method_arg_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `jenkinsfileParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

