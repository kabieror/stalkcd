// Generated from d:\oliver\Repos\master-thesis-generator\src\main\io\jenkinsfile\antlr4\jenkinsfile.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class jenkinsfileParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, DECIMAL_LITERAL=34, HEX_LITERAL=35, OCT_LITERAL=36, 
		BINARY_LITERAL=37, FLOAT_LITERAL=38, HEX_FLOAT_LITERAL=39, BOOL_LITERAL=40, 
		NULL_LITERAL=41, STRING_LITERAL=42, PIPELINE=43, STAGES=44, PARALLEL=45, 
		STAGE=46, STEPS=47, ENVIRONMENT=48, INPUT=49, TOOLS=50, PARAMETERS=51, 
		OPTIONS=52, TRIGGERS=53, AGENT=54, POST=55, WHEN=56, ANYOF=57, ALLOF=58, 
		NOT=59, EXPRESSION=60, FAIL_FAST=61, SCRIPT_LITERAL=62, DEF_LITERAL=63, 
		JENKINSFILE_DECLARATIVE=64, LIBRARY_LITERAL=65, IMPORT_LITERAL=66, LPAREN=67, 
		RPAREN=68, LBRACE=69, RBRACE=70, LBRACK=71, RBRACK=72, COLON=73, COMMA=74, 
		DOT=75, EQUALS=76, ASSIGN=77, MULTI_COMMENT=78, WS=79, LINE_COMMENT1=80, 
		LINE_COMMENT2=81, REGEXP_LITERAL=82, IDENTIFIER=83;
	public static final int
		RULE_pipeline = 0, RULE_groovy_definition = 1, RULE_environment = 2, RULE_parameters = 3, 
		RULE_agent = 4, RULE_agent_section = 5, RULE_agent_type = 6, RULE_tools = 7, 
		RULE_pipeline_options = 8, RULE_triggers = 9, RULE_stages = 10, RULE_stage_definition = 11, 
		RULE_stage_name = 12, RULE_fail_fast = 13, RULE_steps = 14, RULE_step = 15, 
		RULE_script = 16, RULE_input = 17, RULE_when = 18, RULE_when_aggregation = 19, 
		RULE_when_aggregation_type = 20, RULE_when_expression = 21, RULE_post = 22, 
		RULE_post_condition = 23, RULE_assignment = 24, RULE_assignment_key = 25, 
		RULE_method_call = 26, RULE_method_environment = 27, RULE_method_call_simple = 28, 
		RULE_method_call_java = 29, RULE_method_arg_list = 30, RULE_method_arg = 31, 
		RULE_method_arg_key = 32, RULE_expression = 33, RULE_expression_list = 34, 
		RULE_primary = 35, RULE_literal = 36, RULE_identifier = 37;
	public static final String[] ruleNames = {
		"pipeline", "groovy_definition", "environment", "parameters", "agent", 
		"agent_section", "agent_type", "tools", "pipeline_options", "triggers", 
		"stages", "stage_definition", "stage_name", "fail_fast", "steps", "step", 
		"script", "input", "when", "when_aggregation", "when_aggregation_type", 
		"when_expression", "post", "post_condition", "assignment", "assignment_key", 
		"method_call", "method_environment", "method_call_simple", "method_call_java", 
		"method_arg_list", "method_arg", "method_arg_key", "expression", "expression_list", 
		"primary", "literal", "identifier"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "';'", "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", 
		"'%'", "'<='", "'>='", "'>'", "'<'", "'!='", "'==~'", "'&'", "'^'", "'|'", 
		"'&&'", "'||'", "'?'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", 
		"'^='", "'>>='", "'>>>='", "'<<='", "'%='", null, null, null, null, null, 
		null, null, "'null'", null, "'pipeline'", "'stages'", "'parallel'", "'stage'", 
		"'steps'", "'environment'", "'input'", "'tools'", "'parameters'", "'options'", 
		"'triggers'", "'agent'", "'post'", "'when'", null, null, "'not'", "'expression'", 
		null, null, null, "'Jenkinsfile (Declarative Pipeline)'", null, null, 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "':'", "','", "'.'", "'=='", 
		"'='"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, "DECIMAL_LITERAL", 
		"HEX_LITERAL", "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL", 
		"BOOL_LITERAL", "NULL_LITERAL", "STRING_LITERAL", "PIPELINE", "STAGES", 
		"PARALLEL", "STAGE", "STEPS", "ENVIRONMENT", "INPUT", "TOOLS", "PARAMETERS", 
		"OPTIONS", "TRIGGERS", "AGENT", "POST", "WHEN", "ANYOF", "ALLOF", "NOT", 
		"EXPRESSION", "FAIL_FAST", "SCRIPT_LITERAL", "DEF_LITERAL", "JENKINSFILE_DECLARATIVE", 
		"LIBRARY_LITERAL", "IMPORT_LITERAL", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"LBRACK", "RBRACK", "COLON", "COMMA", "DOT", "EQUALS", "ASSIGN", "MULTI_COMMENT", 
		"WS", "LINE_COMMENT1", "LINE_COMMENT2", "REGEXP_LITERAL", "IDENTIFIER"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "jenkinsfile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public jenkinsfileParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class PipelineContext extends ParserRuleContext {
		public TerminalNode PIPELINE() { return getToken(jenkinsfileParser.PIPELINE, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Groovy_definitionContext> groovy_definition() {
			return getRuleContexts(Groovy_definitionContext.class);
		}
		public Groovy_definitionContext groovy_definition(int i) {
			return getRuleContext(Groovy_definitionContext.class,i);
		}
		public List<TerminalNode> JENKINSFILE_DECLARATIVE() { return getTokens(jenkinsfileParser.JENKINSFILE_DECLARATIVE); }
		public TerminalNode JENKINSFILE_DECLARATIVE(int i) {
			return getToken(jenkinsfileParser.JENKINSFILE_DECLARATIVE, i);
		}
		public List<EnvironmentContext> environment() {
			return getRuleContexts(EnvironmentContext.class);
		}
		public EnvironmentContext environment(int i) {
			return getRuleContext(EnvironmentContext.class,i);
		}
		public List<AgentContext> agent() {
			return getRuleContexts(AgentContext.class);
		}
		public AgentContext agent(int i) {
			return getRuleContext(AgentContext.class,i);
		}
		public List<ToolsContext> tools() {
			return getRuleContexts(ToolsContext.class);
		}
		public ToolsContext tools(int i) {
			return getRuleContext(ToolsContext.class,i);
		}
		public List<Pipeline_optionsContext> pipeline_options() {
			return getRuleContexts(Pipeline_optionsContext.class);
		}
		public Pipeline_optionsContext pipeline_options(int i) {
			return getRuleContext(Pipeline_optionsContext.class,i);
		}
		public List<ParametersContext> parameters() {
			return getRuleContexts(ParametersContext.class);
		}
		public ParametersContext parameters(int i) {
			return getRuleContext(ParametersContext.class,i);
		}
		public List<TriggersContext> triggers() {
			return getRuleContexts(TriggersContext.class);
		}
		public TriggersContext triggers(int i) {
			return getRuleContext(TriggersContext.class,i);
		}
		public List<StagesContext> stages() {
			return getRuleContexts(StagesContext.class);
		}
		public StagesContext stages(int i) {
			return getRuleContext(StagesContext.class,i);
		}
		public List<PostContext> post() {
			return getRuleContexts(PostContext.class);
		}
		public PostContext post(int i) {
			return getRuleContext(PostContext.class,i);
		}
		public PipelineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pipeline; }
	}

	public final PipelineContext pipeline() throws RecognitionException {
		PipelineContext _localctx = new PipelineContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_pipeline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 63)) & ~0x3f) == 0 && ((1L << (_la - 63)) & ((1L << (DEF_LITERAL - 63)) | (1L << (JENKINSFILE_DECLARATIVE - 63)) | (1L << (LIBRARY_LITERAL - 63)))) != 0)) {
				{
				setState(78);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DEF_LITERAL:
				case LIBRARY_LITERAL:
					{
					setState(76);
					groovy_definition();
					}
					break;
				case JENKINSFILE_DECLARATIVE:
					{
					setState(77);
					match(JENKINSFILE_DECLARATIVE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
			match(PIPELINE);
			setState(84);
			match(LBRACE);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAGES) | (1L << PARALLEL) | (1L << ENVIRONMENT) | (1L << TOOLS) | (1L << PARAMETERS) | (1L << OPTIONS) | (1L << TRIGGERS) | (1L << AGENT) | (1L << POST))) != 0)) {
				{
				setState(93);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ENVIRONMENT:
					{
					setState(85);
					environment();
					}
					break;
				case AGENT:
					{
					setState(86);
					agent();
					}
					break;
				case TOOLS:
					{
					setState(87);
					tools();
					}
					break;
				case OPTIONS:
					{
					setState(88);
					pipeline_options();
					}
					break;
				case PARAMETERS:
					{
					setState(89);
					parameters();
					}
					break;
				case TRIGGERS:
					{
					setState(90);
					triggers();
					}
					break;
				case STAGES:
				case PARALLEL:
					{
					setState(91);
					stages();
					}
					break;
				case POST:
					{
					setState(92);
					post();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(98);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Groovy_definitionContext extends ParserRuleContext {
		public TerminalNode DEF_LITERAL() { return getToken(jenkinsfileParser.DEF_LITERAL, 0); }
		public TerminalNode LIBRARY_LITERAL() { return getToken(jenkinsfileParser.LIBRARY_LITERAL, 0); }
		public Groovy_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groovy_definition; }
	}

	public final Groovy_definitionContext groovy_definition() throws RecognitionException {
		Groovy_definitionContext _localctx = new Groovy_definitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_groovy_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_la = _input.LA(1);
			if ( !(_la==DEF_LITERAL || _la==LIBRARY_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnvironmentContext extends ParserRuleContext {
		public TerminalNode ENVIRONMENT() { return getToken(jenkinsfileParser.ENVIRONMENT, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<AssignmentContext> assignment() {
			return getRuleContexts(AssignmentContext.class);
		}
		public AssignmentContext assignment(int i) {
			return getRuleContext(AssignmentContext.class,i);
		}
		public EnvironmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_environment; }
	}

	public final EnvironmentContext environment() throws RecognitionException {
		EnvironmentContext _localctx = new EnvironmentContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_environment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(102);
			match(ENVIRONMENT);
			setState(103);
			match(LBRACE);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(104);
				assignment();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParametersContext extends ParserRuleContext {
		public TerminalNode PARAMETERS() { return getToken(jenkinsfileParser.PARAMETERS, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(PARAMETERS);
			setState(113);
			match(LBRACE);
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(114);
				method_call();
				}
				}
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(120);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AgentContext extends ParserRuleContext {
		public TerminalNode AGENT() { return getToken(jenkinsfileParser.AGENT, 0); }
		public Agent_sectionContext agent_section() {
			return getRuleContext(Agent_sectionContext.class,0);
		}
		public Agent_typeContext agent_type() {
			return getRuleContext(Agent_typeContext.class,0);
		}
		public AgentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_agent; }
	}

	public final AgentContext agent() throws RecognitionException {
		AgentContext _localctx = new AgentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_agent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(AGENT);
			setState(125);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				{
				setState(123);
				agent_section();
				}
				break;
			case PIPELINE:
			case STAGES:
			case PARALLEL:
			case STAGE:
			case STEPS:
			case ENVIRONMENT:
			case INPUT:
			case TOOLS:
			case PARAMETERS:
			case OPTIONS:
			case TRIGGERS:
			case AGENT:
			case POST:
			case WHEN:
			case ANYOF:
			case ALLOF:
			case NOT:
			case EXPRESSION:
			case FAIL_FAST:
			case IDENTIFIER:
				{
				setState(124);
				agent_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Agent_sectionContext extends ParserRuleContext {
		public List<TerminalNode> LBRACE() { return getTokens(jenkinsfileParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(jenkinsfileParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(jenkinsfileParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(jenkinsfileParser.RBRACE, i);
		}
		public Agent_typeContext agent_type() {
			return getRuleContext(Agent_typeContext.class,0);
		}
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public Agent_sectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_agent_section; }
	}

	public final Agent_sectionContext agent_section() throws RecognitionException {
		Agent_sectionContext _localctx = new Agent_sectionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_agent_section);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(LBRACE);
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(128);
				agent_type();
				setState(137);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACE) {
					{
					setState(129);
					match(LBRACE);
					setState(133);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
						{
						{
						setState(130);
						method_call();
						}
						}
						setState(135);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(136);
					match(RBRACE);
					}
				}

				}
				break;
			case 2:
				{
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
					{
					{
					setState(139);
					method_call();
					}
					}
					setState(144);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
			setState(147);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Agent_typeContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Agent_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_agent_type; }
	}

	public final Agent_typeContext agent_type() throws RecognitionException {
		Agent_typeContext _localctx = new Agent_typeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_agent_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ToolsContext extends ParserRuleContext {
		public TerminalNode TOOLS() { return getToken(jenkinsfileParser.TOOLS, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public ToolsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tools; }
	}

	public final ToolsContext tools() throws RecognitionException {
		ToolsContext _localctx = new ToolsContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_tools);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(TOOLS);
			setState(152);
			match(LBRACE);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(153);
				method_call();
				}
				}
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(159);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pipeline_optionsContext extends ParserRuleContext {
		public TerminalNode OPTIONS() { return getToken(jenkinsfileParser.OPTIONS, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public Pipeline_optionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pipeline_options; }
	}

	public final Pipeline_optionsContext pipeline_options() throws RecognitionException {
		Pipeline_optionsContext _localctx = new Pipeline_optionsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_pipeline_options);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(OPTIONS);
			setState(162);
			match(LBRACE);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(163);
				method_call();
				}
				}
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(169);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TriggersContext extends ParserRuleContext {
		public TerminalNode TRIGGERS() { return getToken(jenkinsfileParser.TRIGGERS, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public TriggersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triggers; }
	}

	public final TriggersContext triggers() throws RecognitionException {
		TriggersContext _localctx = new TriggersContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_triggers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(TRIGGERS);
			setState(172);
			match(LBRACE);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(173);
				method_call();
				}
				}
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(179);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StagesContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public TerminalNode STAGES() { return getToken(jenkinsfileParser.STAGES, 0); }
		public TerminalNode PARALLEL() { return getToken(jenkinsfileParser.PARALLEL, 0); }
		public List<Stage_definitionContext> stage_definition() {
			return getRuleContexts(Stage_definitionContext.class);
		}
		public Stage_definitionContext stage_definition(int i) {
			return getRuleContext(Stage_definitionContext.class,i);
		}
		public StagesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stages; }
	}

	public final StagesContext stages() throws RecognitionException {
		StagesContext _localctx = new StagesContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_stages);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			_la = _input.LA(1);
			if ( !(_la==STAGES || _la==PARALLEL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(182);
			match(LBRACE);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STAGE) {
				{
				{
				setState(183);
				stage_definition();
				}
				}
				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(189);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stage_definitionContext extends ParserRuleContext {
		public TerminalNode STAGE() { return getToken(jenkinsfileParser.STAGE, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public TerminalNode LPAREN() { return getToken(jenkinsfileParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(jenkinsfileParser.RPAREN, 0); }
		public List<EnvironmentContext> environment() {
			return getRuleContexts(EnvironmentContext.class);
		}
		public EnvironmentContext environment(int i) {
			return getRuleContext(EnvironmentContext.class,i);
		}
		public List<InputContext> input() {
			return getRuleContexts(InputContext.class);
		}
		public InputContext input(int i) {
			return getRuleContext(InputContext.class,i);
		}
		public List<ToolsContext> tools() {
			return getRuleContexts(ToolsContext.class);
		}
		public ToolsContext tools(int i) {
			return getRuleContext(ToolsContext.class,i);
		}
		public List<AgentContext> agent() {
			return getRuleContexts(AgentContext.class);
		}
		public AgentContext agent(int i) {
			return getRuleContext(AgentContext.class,i);
		}
		public List<WhenContext> when() {
			return getRuleContexts(WhenContext.class);
		}
		public WhenContext when(int i) {
			return getRuleContext(WhenContext.class,i);
		}
		public List<StagesContext> stages() {
			return getRuleContexts(StagesContext.class);
		}
		public StagesContext stages(int i) {
			return getRuleContext(StagesContext.class,i);
		}
		public List<StepsContext> steps() {
			return getRuleContexts(StepsContext.class);
		}
		public StepsContext steps(int i) {
			return getRuleContext(StepsContext.class,i);
		}
		public List<PostContext> post() {
			return getRuleContexts(PostContext.class);
		}
		public PostContext post(int i) {
			return getRuleContext(PostContext.class,i);
		}
		public List<Fail_fastContext> fail_fast() {
			return getRuleContexts(Fail_fastContext.class);
		}
		public Fail_fastContext fail_fast(int i) {
			return getRuleContext(Fail_fastContext.class,i);
		}
		public Stage_nameContext stage_name() {
			return getRuleContext(Stage_nameContext.class,0);
		}
		public Stage_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stage_definition; }
	}

	public final Stage_definitionContext stage_definition() throws RecognitionException {
		Stage_definitionContext _localctx = new Stage_definitionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_stage_definition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(STAGE);
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(192);
				match(LPAREN);
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING_LITERAL) {
					{
					setState(193);
					stage_name();
					}
				}

				setState(196);
				match(RPAREN);
				}
			}

			setState(199);
			match(LBRACE);
			setState(211);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAGES) | (1L << PARALLEL) | (1L << STEPS) | (1L << ENVIRONMENT) | (1L << INPUT) | (1L << TOOLS) | (1L << AGENT) | (1L << POST) | (1L << WHEN) | (1L << FAIL_FAST))) != 0)) {
				{
				setState(209);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ENVIRONMENT:
					{
					setState(200);
					environment();
					}
					break;
				case INPUT:
					{
					setState(201);
					input();
					}
					break;
				case TOOLS:
					{
					setState(202);
					tools();
					}
					break;
				case AGENT:
					{
					setState(203);
					agent();
					}
					break;
				case WHEN:
					{
					setState(204);
					when();
					}
					break;
				case STAGES:
				case PARALLEL:
					{
					setState(205);
					stages();
					}
					break;
				case STEPS:
					{
					setState(206);
					steps();
					}
					break;
				case POST:
					{
					setState(207);
					post();
					}
					break;
				case FAIL_FAST:
					{
					setState(208);
					fail_fast();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(213);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(214);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stage_nameContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(jenkinsfileParser.STRING_LITERAL, 0); }
		public Stage_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stage_name; }
	}

	public final Stage_nameContext stage_name() throws RecognitionException {
		Stage_nameContext _localctx = new Stage_nameContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_stage_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Fail_fastContext extends ParserRuleContext {
		public TerminalNode FAIL_FAST() { return getToken(jenkinsfileParser.FAIL_FAST, 0); }
		public TerminalNode BOOL_LITERAL() { return getToken(jenkinsfileParser.BOOL_LITERAL, 0); }
		public Fail_fastContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fail_fast; }
	}

	public final Fail_fastContext fail_fast() throws RecognitionException {
		Fail_fastContext _localctx = new Fail_fastContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_fail_fast);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(FAIL_FAST);
			setState(219);
			match(BOOL_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StepsContext extends ParserRuleContext {
		public TerminalNode STEPS() { return getToken(jenkinsfileParser.STEPS, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public StepsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_steps; }
	}

	public final StepsContext steps() throws RecognitionException {
		StepsContext _localctx = new StepsContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_steps);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(STEPS);
			setState(222);
			match(LBRACE);
			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (SCRIPT_LITERAL - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(223);
				step();
				}
				}
				setState(228);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(229);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StepContext extends ParserRuleContext {
		public ScriptContext script() {
			return getRuleContext(ScriptContext.class,0);
		}
		public Method_callContext method_call() {
			return getRuleContext(Method_callContext.class,0);
		}
		public StepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_step; }
	}

	public final StepContext step() throws RecognitionException {
		StepContext _localctx = new StepContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_step);
		try {
			setState(233);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SCRIPT_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(231);
				script();
				}
				break;
			case PIPELINE:
			case STAGES:
			case PARALLEL:
			case STAGE:
			case STEPS:
			case ENVIRONMENT:
			case INPUT:
			case TOOLS:
			case PARAMETERS:
			case OPTIONS:
			case TRIGGERS:
			case AGENT:
			case POST:
			case WHEN:
			case ANYOF:
			case ALLOF:
			case NOT:
			case EXPRESSION:
			case FAIL_FAST:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(232);
				method_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScriptContext extends ParserRuleContext {
		public TerminalNode SCRIPT_LITERAL() { return getToken(jenkinsfileParser.SCRIPT_LITERAL, 0); }
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_script);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(SCRIPT_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InputContext extends ParserRuleContext {
		public TerminalNode INPUT() { return getToken(jenkinsfileParser.INPUT, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public InputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_input; }
	}

	public final InputContext input() throws RecognitionException {
		InputContext _localctx = new InputContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_input);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			match(INPUT);
			setState(238);
			match(LBRACE);
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(239);
				method_call();
				}
				}
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(245);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(jenkinsfileParser.WHEN, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public List<When_aggregationContext> when_aggregation() {
			return getRuleContexts(When_aggregationContext.class);
		}
		public When_aggregationContext when_aggregation(int i) {
			return getRuleContext(When_aggregationContext.class,i);
		}
		public List<When_expressionContext> when_expression() {
			return getRuleContexts(When_expressionContext.class);
		}
		public When_expressionContext when_expression(int i) {
			return getRuleContext(When_expressionContext.class,i);
		}
		public WhenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_when; }
	}

	public final WhenContext when() throws RecognitionException {
		WhenContext _localctx = new WhenContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_when);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(WHEN);
			setState(248);
			match(LBRACE);
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				setState(252);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
				case 1:
					{
					setState(249);
					method_call();
					}
					break;
				case 2:
					{
					setState(250);
					when_aggregation();
					}
					break;
				case 3:
					{
					setState(251);
					when_expression();
					}
					break;
				}
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(257);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class When_aggregationContext extends ParserRuleContext {
		public When_aggregation_typeContext when_aggregation_type() {
			return getRuleContext(When_aggregation_typeContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Method_callContext> method_call() {
			return getRuleContexts(Method_callContext.class);
		}
		public Method_callContext method_call(int i) {
			return getRuleContext(Method_callContext.class,i);
		}
		public List<When_aggregationContext> when_aggregation() {
			return getRuleContexts(When_aggregationContext.class);
		}
		public When_aggregationContext when_aggregation(int i) {
			return getRuleContext(When_aggregationContext.class,i);
		}
		public List<When_expressionContext> when_expression() {
			return getRuleContexts(When_expressionContext.class);
		}
		public When_expressionContext when_expression(int i) {
			return getRuleContext(When_expressionContext.class,i);
		}
		public When_aggregationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_when_aggregation; }
	}

	public final When_aggregationContext when_aggregation() throws RecognitionException {
		When_aggregationContext _localctx = new When_aggregationContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_when_aggregation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			when_aggregation_type();
			setState(260);
			match(LBRACE);
			setState(266);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				setState(264);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(261);
					method_call();
					}
					break;
				case 2:
					{
					setState(262);
					when_aggregation();
					}
					break;
				case 3:
					{
					setState(263);
					when_expression();
					}
					break;
				}
				}
				setState(268);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(269);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class When_aggregation_typeContext extends ParserRuleContext {
		public TerminalNode ALLOF() { return getToken(jenkinsfileParser.ALLOF, 0); }
		public TerminalNode ANYOF() { return getToken(jenkinsfileParser.ANYOF, 0); }
		public TerminalNode NOT() { return getToken(jenkinsfileParser.NOT, 0); }
		public When_aggregation_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_when_aggregation_type; }
	}

	public final When_aggregation_typeContext when_aggregation_type() throws RecognitionException {
		When_aggregation_typeContext _localctx = new When_aggregation_typeContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_when_aggregation_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ANYOF) | (1L << ALLOF) | (1L << NOT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class When_expressionContext extends ParserRuleContext {
		public TerminalNode EXPRESSION() { return getToken(jenkinsfileParser.EXPRESSION, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public When_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_when_expression; }
	}

	public final When_expressionContext when_expression() throws RecognitionException {
		When_expressionContext _localctx = new When_expressionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_when_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(EXPRESSION);
			setState(274);
			match(LBRACE);
			setState(275);
			expression(0);
			setState(276);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostContext extends ParserRuleContext {
		public TerminalNode POST() { return getToken(jenkinsfileParser.POST, 0); }
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<Post_conditionContext> post_condition() {
			return getRuleContexts(Post_conditionContext.class);
		}
		public Post_conditionContext post_condition(int i) {
			return getRuleContext(Post_conditionContext.class,i);
		}
		public PostContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_post; }
	}

	public final PostContext post() throws RecognitionException {
		PostContext _localctx = new PostContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_post);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			match(POST);
			setState(279);
			match(LBRACE);
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(280);
				post_condition();
				}
				}
				setState(285);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(286);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Post_conditionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public Post_conditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_post_condition; }
	}

	public final Post_conditionContext post_condition() throws RecognitionException {
		Post_conditionContext _localctx = new Post_conditionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_post_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			identifier();
			setState(289);
			match(LBRACE);
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (SCRIPT_LITERAL - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(290);
				step();
				}
				}
				setState(295);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(296);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public Assignment_keyContext assignment_key() {
			return getRuleContext(Assignment_keyContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(jenkinsfileParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			assignment_key();
			setState(299);
			match(ASSIGN);
			setState(300);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assignment_keyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Assignment_keyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_key; }
	}

	public final Assignment_keyContext assignment_key() throws RecognitionException {
		Assignment_keyContext _localctx = new Assignment_keyContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_assignment_key);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_callContext extends ParserRuleContext {
		public Method_call_simpleContext method_call_simple() {
			return getRuleContext(Method_call_simpleContext.class,0);
		}
		public Method_call_javaContext method_call_java() {
			return getRuleContext(Method_call_javaContext.class,0);
		}
		public Method_environmentContext method_environment() {
			return getRuleContext(Method_environmentContext.class,0);
		}
		public Method_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_call; }
	}

	public final Method_callContext method_call() throws RecognitionException {
		Method_callContext _localctx = new Method_callContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_method_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(304);
				method_call_simple();
				}
				break;
			case 2:
				{
				setState(305);
				method_call_java();
				}
				break;
			case 3:
				{
				setState(306);
				method_environment();
				}
				break;
			}
			setState(310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(309);
				match(T__0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_environmentContext extends ParserRuleContext {
		public Method_call_javaContext method_call_java() {
			return getRuleContext(Method_call_javaContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(jenkinsfileParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(jenkinsfileParser.RBRACE, 0); }
		public List<StepContext> step() {
			return getRuleContexts(StepContext.class);
		}
		public StepContext step(int i) {
			return getRuleContext(StepContext.class,i);
		}
		public Method_environmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_environment; }
	}

	public final Method_environmentContext method_environment() throws RecognitionException {
		Method_environmentContext _localctx = new Method_environmentContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_method_environment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			method_call_java();
			setState(313);
			match(LBRACE);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (SCRIPT_LITERAL - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) {
				{
				{
				setState(314);
				step();
				}
				}
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(320);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_call_simpleContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Method_arg_listContext method_arg_list() {
			return getRuleContext(Method_arg_listContext.class,0);
		}
		public Method_call_simpleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_call_simple; }
	}

	public final Method_call_simpleContext method_call_simple() throws RecognitionException {
		Method_call_simpleContext _localctx = new Method_call_simpleContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_method_call_simple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			identifier();
			setState(323);
			method_arg_list();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_call_javaContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(jenkinsfileParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(jenkinsfileParser.RPAREN, 0); }
		public Method_arg_listContext method_arg_list() {
			return getRuleContext(Method_arg_listContext.class,0);
		}
		public Method_call_javaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_call_java; }
	}

	public final Method_call_javaContext method_call_java() throws RecognitionException {
		Method_call_javaContext _localctx = new Method_call_javaContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_method_call_java);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			identifier();
			setState(326);
			match(LPAREN);
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << DECIMAL_LITERAL) | (1L << FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << NULL_LITERAL) | (1L << STRING_LITERAL) | (1L << PIPELINE) | (1L << STAGES) | (1L << PARALLEL) | (1L << STAGE) | (1L << STEPS) | (1L << ENVIRONMENT) | (1L << INPUT) | (1L << TOOLS) | (1L << PARAMETERS) | (1L << OPTIONS) | (1L << TRIGGERS) | (1L << AGENT) | (1L << POST) | (1L << WHEN) | (1L << ANYOF) | (1L << ALLOF) | (1L << NOT) | (1L << EXPRESSION) | (1L << FAIL_FAST))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (LPAREN - 67)) | (1L << (LBRACK - 67)) | (1L << (REGEXP_LITERAL - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
				{
				setState(327);
				method_arg_list();
				}
			}

			setState(330);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_arg_listContext extends ParserRuleContext {
		public List<Method_argContext> method_arg() {
			return getRuleContexts(Method_argContext.class);
		}
		public Method_argContext method_arg(int i) {
			return getRuleContext(Method_argContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(jenkinsfileParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(jenkinsfileParser.COMMA, i);
		}
		public Method_arg_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_arg_list; }
	}

	public final Method_arg_listContext method_arg_list() throws RecognitionException {
		Method_arg_listContext _localctx = new Method_arg_listContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_method_arg_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			method_arg();
			setState(337);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(333);
					match(COMMA);
					setState(334);
					method_arg();
					}
					} 
				}
				setState(339);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			}
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(340);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_argContext extends ParserRuleContext {
		public Method_arg_keyContext method_arg_key() {
			return getRuleContext(Method_arg_keyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(jenkinsfileParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Method_argContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_arg; }
	}

	public final Method_argContext method_arg() throws RecognitionException {
		Method_argContext _localctx = new Method_argContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_method_arg);
		try {
			setState(348);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				method_arg_key();
				setState(344);
				match(COLON);
				setState(345);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(347);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Method_arg_keyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Method_arg_keyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_method_arg_key; }
	}

	public final Method_arg_keyContext method_arg_key() throws RecognitionException {
		Method_arg_keyContext _localctx = new Method_arg_keyContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_method_arg_key);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token prefix;
		public Token postfix;
		public Token bop;
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Method_call_javaContext method_call_java() {
			return getRuleContext(Method_call_javaContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 66;
		enterRecursionRule(_localctx, 66, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(353);
				primary();
				}
				break;
			case 2:
				{
				setState(354);
				((ExpressionContext)_localctx).prefix = match(LBRACK);
				setState(356);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << DECIMAL_LITERAL) | (1L << FLOAT_LITERAL) | (1L << BOOL_LITERAL) | (1L << NULL_LITERAL) | (1L << STRING_LITERAL) | (1L << PIPELINE) | (1L << STAGES) | (1L << PARALLEL) | (1L << STAGE) | (1L << STEPS) | (1L << ENVIRONMENT) | (1L << INPUT) | (1L << TOOLS) | (1L << PARAMETERS) | (1L << OPTIONS) | (1L << TRIGGERS) | (1L << AGENT) | (1L << POST) | (1L << WHEN) | (1L << ANYOF) | (1L << ALLOF) | (1L << NOT) | (1L << EXPRESSION) | (1L << FAIL_FAST))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (LPAREN - 67)) | (1L << (LBRACK - 67)) | (1L << (REGEXP_LITERAL - 67)) | (1L << (IDENTIFIER - 67)))) != 0)) {
					{
					setState(355);
					expression_list();
					}
				}

				setState(358);
				((ExpressionContext)_localctx).postfix = match(RBRACK);
				}
				break;
			case 3:
				{
				setState(359);
				identifier();
				setState(360);
				((ExpressionContext)_localctx).bop = match(COLON);
				setState(361);
				expression(16);
				}
				break;
			case 4:
				{
				setState(363);
				method_call_java();
				}
				break;
			case 5:
				{
				setState(364);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4))) != 0)) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(365);
				expression(13);
				}
				break;
			case 6:
				{
				setState(366);
				((ExpressionContext)_localctx).prefix = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__5 || _la==T__6) ) {
					((ExpressionContext)_localctx).prefix = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(367);
				expression(12);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(421);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(419);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(370);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(371);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(372);
						expression(12);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(373);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(374);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__3 || _la==T__4) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(375);
						expression(11);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(376);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(377);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(378);
						expression(10);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(379);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(380);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 15)) & ~0x3f) == 0 && ((1L << (_la - 15)) & ((1L << (T__14 - 15)) | (1L << (T__15 - 15)) | (1L << (EQUALS - 15)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(381);
						expression(9);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(382);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(383);
						((ExpressionContext)_localctx).bop = match(T__16);
						setState(384);
						expression(8);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(385);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(386);
						((ExpressionContext)_localctx).bop = match(T__17);
						setState(387);
						expression(7);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(388);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(389);
						((ExpressionContext)_localctx).bop = match(T__18);
						setState(390);
						expression(6);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(391);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(392);
						((ExpressionContext)_localctx).bop = match(T__19);
						setState(393);
						expression(5);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(394);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(395);
						((ExpressionContext)_localctx).bop = match(T__20);
						setState(396);
						expression(4);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(397);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(398);
						((ExpressionContext)_localctx).bop = match(T__21);
						setState(399);
						expression(0);
						setState(400);
						match(COLON);
						setState(401);
						expression(3);
						}
						break;
					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(403);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(404);
						((ExpressionContext)_localctx).bop = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 23)) & ~0x3f) == 0 && ((1L << (_la - 23)) & ((1L << (T__22 - 23)) | (1L << (T__23 - 23)) | (1L << (T__24 - 23)) | (1L << (T__25 - 23)) | (1L << (T__26 - 23)) | (1L << (T__27 - 23)) | (1L << (T__28 - 23)) | (1L << (T__29 - 23)) | (1L << (T__30 - 23)) | (1L << (T__31 - 23)) | (1L << (T__32 - 23)) | (1L << (ASSIGN - 23)))) != 0)) ) {
							((ExpressionContext)_localctx).bop = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(405);
						expression(1);
						}
						break;
					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(406);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(407);
						((ExpressionContext)_localctx).bop = match(DOT);
						setState(410);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
						case 1:
							{
							setState(408);
							identifier();
							}
							break;
						case 2:
							{
							setState(409);
							method_call_java();
							}
							break;
						}
						}
						break;
					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(412);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(413);
						match(LBRACK);
						setState(414);
						expression(0);
						setState(415);
						match(RBRACK);
						}
						break;
					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(417);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(418);
						((ExpressionContext)_localctx).postfix = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==T__1 || _la==T__2) ) {
							((ExpressionContext)_localctx).postfix = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					}
					} 
				}
				setState(423);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Expression_listContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(jenkinsfileParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(jenkinsfileParser.COMMA, i);
		}
		public Expression_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_list; }
	}

	public final Expression_listContext expression_list() throws RecognitionException {
		Expression_listContext _localctx = new Expression_listContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_expression_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(424);
			expression(0);
			setState(429);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(425);
					match(COMMA);
					setState(426);
					expression(0);
					}
					} 
				}
				setState(431);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			}
			setState(433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(432);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_primary);
		try {
			setState(441);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(435);
				match(LPAREN);
				setState(436);
				expression(0);
				setState(437);
				match(RPAREN);
				}
				break;
			case DECIMAL_LITERAL:
			case FLOAT_LITERAL:
			case BOOL_LITERAL:
			case NULL_LITERAL:
			case STRING_LITERAL:
			case REGEXP_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(439);
				literal();
				}
				break;
			case PIPELINE:
			case STAGES:
			case PARALLEL:
			case STAGE:
			case STEPS:
			case ENVIRONMENT:
			case INPUT:
			case TOOLS:
			case PARAMETERS:
			case OPTIONS:
			case TRIGGERS:
			case AGENT:
			case POST:
			case WHEN:
			case ANYOF:
			case ALLOF:
			case NOT:
			case EXPRESSION:
			case FAIL_FAST:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 3);
				{
				setState(440);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode DECIMAL_LITERAL() { return getToken(jenkinsfileParser.DECIMAL_LITERAL, 0); }
		public TerminalNode FLOAT_LITERAL() { return getToken(jenkinsfileParser.FLOAT_LITERAL, 0); }
		public TerminalNode STRING_LITERAL() { return getToken(jenkinsfileParser.STRING_LITERAL, 0); }
		public TerminalNode BOOL_LITERAL() { return getToken(jenkinsfileParser.BOOL_LITERAL, 0); }
		public TerminalNode NULL_LITERAL() { return getToken(jenkinsfileParser.NULL_LITERAL, 0); }
		public TerminalNode REGEXP_LITERAL() { return getToken(jenkinsfileParser.REGEXP_LITERAL, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(443);
			_la = _input.LA(1);
			if ( !(((((_la - 34)) & ~0x3f) == 0 && ((1L << (_la - 34)) & ((1L << (DECIMAL_LITERAL - 34)) | (1L << (FLOAT_LITERAL - 34)) | (1L << (BOOL_LITERAL - 34)) | (1L << (NULL_LITERAL - 34)) | (1L << (STRING_LITERAL - 34)) | (1L << (REGEXP_LITERAL - 34)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(jenkinsfileParser.IDENTIFIER, 0); }
		public TerminalNode PIPELINE() { return getToken(jenkinsfileParser.PIPELINE, 0); }
		public TerminalNode STAGES() { return getToken(jenkinsfileParser.STAGES, 0); }
		public TerminalNode PARALLEL() { return getToken(jenkinsfileParser.PARALLEL, 0); }
		public TerminalNode STAGE() { return getToken(jenkinsfileParser.STAGE, 0); }
		public TerminalNode STEPS() { return getToken(jenkinsfileParser.STEPS, 0); }
		public TerminalNode ENVIRONMENT() { return getToken(jenkinsfileParser.ENVIRONMENT, 0); }
		public TerminalNode INPUT() { return getToken(jenkinsfileParser.INPUT, 0); }
		public TerminalNode TOOLS() { return getToken(jenkinsfileParser.TOOLS, 0); }
		public TerminalNode PARAMETERS() { return getToken(jenkinsfileParser.PARAMETERS, 0); }
		public TerminalNode OPTIONS() { return getToken(jenkinsfileParser.OPTIONS, 0); }
		public TerminalNode TRIGGERS() { return getToken(jenkinsfileParser.TRIGGERS, 0); }
		public TerminalNode AGENT() { return getToken(jenkinsfileParser.AGENT, 0); }
		public TerminalNode POST() { return getToken(jenkinsfileParser.POST, 0); }
		public TerminalNode WHEN() { return getToken(jenkinsfileParser.WHEN, 0); }
		public TerminalNode ANYOF() { return getToken(jenkinsfileParser.ANYOF, 0); }
		public TerminalNode ALLOF() { return getToken(jenkinsfileParser.ALLOF, 0); }
		public TerminalNode EXPRESSION() { return getToken(jenkinsfileParser.EXPRESSION, 0); }
		public TerminalNode FAIL_FAST() { return getToken(jenkinsfileParser.FAIL_FAST, 0); }
		public TerminalNode NOT() { return getToken(jenkinsfileParser.NOT, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			_la = _input.LA(1);
			if ( !(((((_la - 43)) & ~0x3f) == 0 && ((1L << (_la - 43)) & ((1L << (PIPELINE - 43)) | (1L << (STAGES - 43)) | (1L << (PARALLEL - 43)) | (1L << (STAGE - 43)) | (1L << (STEPS - 43)) | (1L << (ENVIRONMENT - 43)) | (1L << (INPUT - 43)) | (1L << (TOOLS - 43)) | (1L << (PARAMETERS - 43)) | (1L << (OPTIONS - 43)) | (1L << (TRIGGERS - 43)) | (1L << (AGENT - 43)) | (1L << (POST - 43)) | (1L << (WHEN - 43)) | (1L << (ANYOF - 43)) | (1L << (ALLOF - 43)) | (1L << (NOT - 43)) | (1L << (EXPRESSION - 43)) | (1L << (FAIL_FAST - 43)) | (1L << (IDENTIFIER - 43)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 33:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 9);
		case 3:
			return precpred(_ctx, 8);
		case 4:
			return precpred(_ctx, 7);
		case 5:
			return precpred(_ctx, 6);
		case 6:
			return precpred(_ctx, 5);
		case 7:
			return precpred(_ctx, 4);
		case 8:
			return precpred(_ctx, 3);
		case 9:
			return precpred(_ctx, 2);
		case 10:
			return precpred(_ctx, 1);
		case 11:
			return precpred(_ctx, 19);
		case 12:
			return precpred(_ctx, 18);
		case 13:
			return precpred(_ctx, 14);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3U\u01c2\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\3\2\3\2\7\2Q\n\2\f\2\16\2"+
		"T\13\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\7\2`\n\2\f\2\16\2c\13\2"+
		"\3\2\3\2\3\3\3\3\3\4\3\4\3\4\7\4l\n\4\f\4\16\4o\13\4\3\4\3\4\3\5\3\5\3"+
		"\5\7\5v\n\5\f\5\16\5y\13\5\3\5\3\5\3\6\3\6\3\6\5\6\u0080\n\6\3\7\3\7\3"+
		"\7\3\7\7\7\u0086\n\7\f\7\16\7\u0089\13\7\3\7\5\7\u008c\n\7\3\7\7\7\u008f"+
		"\n\7\f\7\16\7\u0092\13\7\5\7\u0094\n\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\7\t"+
		"\u009d\n\t\f\t\16\t\u00a0\13\t\3\t\3\t\3\n\3\n\3\n\7\n\u00a7\n\n\f\n\16"+
		"\n\u00aa\13\n\3\n\3\n\3\13\3\13\3\13\7\13\u00b1\n\13\f\13\16\13\u00b4"+
		"\13\13\3\13\3\13\3\f\3\f\3\f\7\f\u00bb\n\f\f\f\16\f\u00be\13\f\3\f\3\f"+
		"\3\r\3\r\3\r\5\r\u00c5\n\r\3\r\5\r\u00c8\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\7\r\u00d4\n\r\f\r\16\r\u00d7\13\r\3\r\3\r\3\16\3\16\3\17"+
		"\3\17\3\17\3\20\3\20\3\20\7\20\u00e3\n\20\f\20\16\20\u00e6\13\20\3\20"+
		"\3\20\3\21\3\21\5\21\u00ec\n\21\3\22\3\22\3\23\3\23\3\23\7\23\u00f3\n"+
		"\23\f\23\16\23\u00f6\13\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\7\24\u00ff"+
		"\n\24\f\24\16\24\u0102\13\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\7\25\u010b"+
		"\n\25\f\25\16\25\u010e\13\25\3\25\3\25\3\26\3\26\3\27\3\27\3\27\3\27\3"+
		"\27\3\30\3\30\3\30\7\30\u011c\n\30\f\30\16\30\u011f\13\30\3\30\3\30\3"+
		"\31\3\31\3\31\7\31\u0126\n\31\f\31\16\31\u0129\13\31\3\31\3\31\3\32\3"+
		"\32\3\32\3\32\3\33\3\33\3\34\3\34\3\34\5\34\u0136\n\34\3\34\5\34\u0139"+
		"\n\34\3\35\3\35\3\35\7\35\u013e\n\35\f\35\16\35\u0141\13\35\3\35\3\35"+
		"\3\36\3\36\3\36\3\37\3\37\3\37\5\37\u014b\n\37\3\37\3\37\3 \3 \3 \7 \u0152"+
		"\n \f \16 \u0155\13 \3 \5 \u0158\n \3!\3!\3!\3!\3!\5!\u015f\n!\3\"\3\""+
		"\3#\3#\3#\3#\5#\u0167\n#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\5#\u0173\n#\3#"+
		"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#"+
		"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\5#\u019d\n#\3#\3#\3#"+
		"\3#\3#\3#\3#\7#\u01a6\n#\f#\16#\u01a9\13#\3$\3$\3$\7$\u01ae\n$\f$\16$"+
		"\u01b1\13$\3$\5$\u01b4\n$\3%\3%\3%\3%\3%\3%\5%\u01bc\n%\3&\3&\3\'\3\'"+
		"\3\'\2\3D(\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\66"+
		"8:<>@BDFHJL\2\17\4\2AACC\3\2./\3\2;=\3\2\4\7\3\2\b\t\3\2\n\f\3\2\6\7\3"+
		"\2\r\20\4\2\21\22NN\4\2\31#OO\3\2\4\5\6\2$$((*,TT\4\2-?UU\2\u01e7\2R\3"+
		"\2\2\2\4f\3\2\2\2\6h\3\2\2\2\br\3\2\2\2\n|\3\2\2\2\f\u0081\3\2\2\2\16"+
		"\u0097\3\2\2\2\20\u0099\3\2\2\2\22\u00a3\3\2\2\2\24\u00ad\3\2\2\2\26\u00b7"+
		"\3\2\2\2\30\u00c1\3\2\2\2\32\u00da\3\2\2\2\34\u00dc\3\2\2\2\36\u00df\3"+
		"\2\2\2 \u00eb\3\2\2\2\"\u00ed\3\2\2\2$\u00ef\3\2\2\2&\u00f9\3\2\2\2(\u0105"+
		"\3\2\2\2*\u0111\3\2\2\2,\u0113\3\2\2\2.\u0118\3\2\2\2\60\u0122\3\2\2\2"+
		"\62\u012c\3\2\2\2\64\u0130\3\2\2\2\66\u0135\3\2\2\28\u013a\3\2\2\2:\u0144"+
		"\3\2\2\2<\u0147\3\2\2\2>\u014e\3\2\2\2@\u015e\3\2\2\2B\u0160\3\2\2\2D"+
		"\u0172\3\2\2\2F\u01aa\3\2\2\2H\u01bb\3\2\2\2J\u01bd\3\2\2\2L\u01bf\3\2"+
		"\2\2NQ\5\4\3\2OQ\7B\2\2PN\3\2\2\2PO\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2"+
		"\2\2SU\3\2\2\2TR\3\2\2\2UV\7-\2\2Va\7G\2\2W`\5\6\4\2X`\5\n\6\2Y`\5\20"+
		"\t\2Z`\5\22\n\2[`\5\b\5\2\\`\5\24\13\2]`\5\26\f\2^`\5.\30\2_W\3\2\2\2"+
		"_X\3\2\2\2_Y\3\2\2\2_Z\3\2\2\2_[\3\2\2\2_\\\3\2\2\2_]\3\2\2\2_^\3\2\2"+
		"\2`c\3\2\2\2a_\3\2\2\2ab\3\2\2\2bd\3\2\2\2ca\3\2\2\2de\7H\2\2e\3\3\2\2"+
		"\2fg\t\2\2\2g\5\3\2\2\2hi\7\62\2\2im\7G\2\2jl\5\62\32\2kj\3\2\2\2lo\3"+
		"\2\2\2mk\3\2\2\2mn\3\2\2\2np\3\2\2\2om\3\2\2\2pq\7H\2\2q\7\3\2\2\2rs\7"+
		"\65\2\2sw\7G\2\2tv\5\66\34\2ut\3\2\2\2vy\3\2\2\2wu\3\2\2\2wx\3\2\2\2x"+
		"z\3\2\2\2yw\3\2\2\2z{\7H\2\2{\t\3\2\2\2|\177\78\2\2}\u0080\5\f\7\2~\u0080"+
		"\5\16\b\2\177}\3\2\2\2\177~\3\2\2\2\u0080\13\3\2\2\2\u0081\u0093\7G\2"+
		"\2\u0082\u008b\5\16\b\2\u0083\u0087\7G\2\2\u0084\u0086\5\66\34\2\u0085"+
		"\u0084\3\2\2\2\u0086\u0089\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2"+
		"\2\2\u0088\u008a\3\2\2\2\u0089\u0087\3\2\2\2\u008a\u008c\7H\2\2\u008b"+
		"\u0083\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u0094\3\2\2\2\u008d\u008f\5\66"+
		"\34\2\u008e\u008d\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090"+
		"\u0091\3\2\2\2\u0091\u0094\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0082\3\2"+
		"\2\2\u0093\u0090\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\7H\2\2\u0096"+
		"\r\3\2\2\2\u0097\u0098\5L\'\2\u0098\17\3\2\2\2\u0099\u009a\7\64\2\2\u009a"+
		"\u009e\7G\2\2\u009b\u009d\5\66\34\2\u009c\u009b\3\2\2\2\u009d\u00a0\3"+
		"\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a1\3\2\2\2\u00a0"+
		"\u009e\3\2\2\2\u00a1\u00a2\7H\2\2\u00a2\21\3\2\2\2\u00a3\u00a4\7\66\2"+
		"\2\u00a4\u00a8\7G\2\2\u00a5\u00a7\5\66\34\2\u00a6\u00a5\3\2\2\2\u00a7"+
		"\u00aa\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ab\3\2"+
		"\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00ac\7H\2\2\u00ac\23\3\2\2\2\u00ad\u00ae"+
		"\7\67\2\2\u00ae\u00b2\7G\2\2\u00af\u00b1\5\66\34\2\u00b0\u00af\3\2\2\2"+
		"\u00b1\u00b4\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b5"+
		"\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5\u00b6\7H\2\2\u00b6\25\3\2\2\2\u00b7"+
		"\u00b8\t\3\2\2\u00b8\u00bc\7G\2\2\u00b9\u00bb\5\30\r\2\u00ba\u00b9\3\2"+
		"\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd"+
		"\u00bf\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf\u00c0\7H\2\2\u00c0\27\3\2\2\2"+
		"\u00c1\u00c7\7\60\2\2\u00c2\u00c4\7E\2\2\u00c3\u00c5\5\32\16\2\u00c4\u00c3"+
		"\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c8\7F\2\2\u00c7"+
		"\u00c2\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00d5\7G"+
		"\2\2\u00ca\u00d4\5\6\4\2\u00cb\u00d4\5$\23\2\u00cc\u00d4\5\20\t\2\u00cd"+
		"\u00d4\5\n\6\2\u00ce\u00d4\5&\24\2\u00cf\u00d4\5\26\f\2\u00d0\u00d4\5"+
		"\36\20\2\u00d1\u00d4\5.\30\2\u00d2\u00d4\5\34\17\2\u00d3\u00ca\3\2\2\2"+
		"\u00d3\u00cb\3\2\2\2\u00d3\u00cc\3\2\2\2\u00d3\u00cd\3\2\2\2\u00d3\u00ce"+
		"\3\2\2\2\u00d3\u00cf\3\2\2\2\u00d3\u00d0\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3"+
		"\u00d2\3\2\2\2\u00d4\u00d7\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d5\u00d6\3\2"+
		"\2\2\u00d6\u00d8\3\2\2\2\u00d7\u00d5\3\2\2\2\u00d8\u00d9\7H\2\2\u00d9"+
		"\31\3\2\2\2\u00da\u00db\7,\2\2\u00db\33\3\2\2\2\u00dc\u00dd\7?\2\2\u00dd"+
		"\u00de\7*\2\2\u00de\35\3\2\2\2\u00df\u00e0\7\61\2\2\u00e0\u00e4\7G\2\2"+
		"\u00e1\u00e3\5 \21\2\u00e2\u00e1\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e2"+
		"\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5\u00e7\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7"+
		"\u00e8\7H\2\2\u00e8\37\3\2\2\2\u00e9\u00ec\5\"\22\2\u00ea\u00ec\5\66\34"+
		"\2\u00eb\u00e9\3\2\2\2\u00eb\u00ea\3\2\2\2\u00ec!\3\2\2\2\u00ed\u00ee"+
		"\7@\2\2\u00ee#\3\2\2\2\u00ef\u00f0\7\63\2\2\u00f0\u00f4\7G\2\2\u00f1\u00f3"+
		"\5\66\34\2\u00f2\u00f1\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2"+
		"\u00f4\u00f5\3\2\2\2\u00f5\u00f7\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f7\u00f8"+
		"\7H\2\2\u00f8%\3\2\2\2\u00f9\u00fa\7:\2\2\u00fa\u0100\7G\2\2\u00fb\u00ff"+
		"\5\66\34\2\u00fc\u00ff\5(\25\2\u00fd\u00ff\5,\27\2\u00fe\u00fb\3\2\2\2"+
		"\u00fe\u00fc\3\2\2\2\u00fe\u00fd\3\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe"+
		"\3\2\2\2\u0100\u0101\3\2\2\2\u0101\u0103\3\2\2\2\u0102\u0100\3\2\2\2\u0103"+
		"\u0104\7H\2\2\u0104\'\3\2\2\2\u0105\u0106\5*\26\2\u0106\u010c\7G\2\2\u0107"+
		"\u010b\5\66\34\2\u0108\u010b\5(\25\2\u0109\u010b\5,\27\2\u010a\u0107\3"+
		"\2\2\2\u010a\u0108\3\2\2\2\u010a\u0109\3\2\2\2\u010b\u010e\3\2\2\2\u010c"+
		"\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010f\3\2\2\2\u010e\u010c\3\2"+
		"\2\2\u010f\u0110\7H\2\2\u0110)\3\2\2\2\u0111\u0112\t\4\2\2\u0112+\3\2"+
		"\2\2\u0113\u0114\7>\2\2\u0114\u0115\7G\2\2\u0115\u0116\5D#\2\u0116\u0117"+
		"\7H\2\2\u0117-\3\2\2\2\u0118\u0119\79\2\2\u0119\u011d\7G\2\2\u011a\u011c"+
		"\5\60\31\2\u011b\u011a\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2\2"+
		"\u011d\u011e\3\2\2\2\u011e\u0120\3\2\2\2\u011f\u011d\3\2\2\2\u0120\u0121"+
		"\7H\2\2\u0121/\3\2\2\2\u0122\u0123\5L\'\2\u0123\u0127\7G\2\2\u0124\u0126"+
		"\5 \21\2\u0125\u0124\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2\2\2\u0127"+
		"\u0128\3\2\2\2\u0128\u012a\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012b\7H"+
		"\2\2\u012b\61\3\2\2\2\u012c\u012d\5\64\33\2\u012d\u012e\7O\2\2\u012e\u012f"+
		"\5D#\2\u012f\63\3\2\2\2\u0130\u0131\5L\'\2\u0131\65\3\2\2\2\u0132\u0136"+
		"\5:\36\2\u0133\u0136\5<\37\2\u0134\u0136\58\35\2\u0135\u0132\3\2\2\2\u0135"+
		"\u0133\3\2\2\2\u0135\u0134\3\2\2\2\u0136\u0138\3\2\2\2\u0137\u0139\7\3"+
		"\2\2\u0138\u0137\3\2\2\2\u0138\u0139\3\2\2\2\u0139\67\3\2\2\2\u013a\u013b"+
		"\5<\37\2\u013b\u013f\7G\2\2\u013c\u013e\5 \21\2\u013d\u013c\3\2\2\2\u013e"+
		"\u0141\3\2\2\2\u013f\u013d\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u0142\3\2"+
		"\2\2\u0141\u013f\3\2\2\2\u0142\u0143\7H\2\2\u01439\3\2\2\2\u0144\u0145"+
		"\5L\'\2\u0145\u0146\5> \2\u0146;\3\2\2\2\u0147\u0148\5L\'\2\u0148\u014a"+
		"\7E\2\2\u0149\u014b\5> \2\u014a\u0149\3\2\2\2\u014a\u014b\3\2\2\2\u014b"+
		"\u014c\3\2\2\2\u014c\u014d\7F\2\2\u014d=\3\2\2\2\u014e\u0153\5@!\2\u014f"+
		"\u0150\7L\2\2\u0150\u0152\5@!\2\u0151\u014f\3\2\2\2\u0152\u0155\3\2\2"+
		"\2\u0153\u0151\3\2\2\2\u0153\u0154\3\2\2\2\u0154\u0157\3\2\2\2\u0155\u0153"+
		"\3\2\2\2\u0156\u0158\7L\2\2\u0157\u0156\3\2\2\2\u0157\u0158\3\2\2\2\u0158"+
		"?\3\2\2\2\u0159\u015a\5B\"\2\u015a\u015b\7K\2\2\u015b\u015c\5D#\2\u015c"+
		"\u015f\3\2\2\2\u015d\u015f\5D#\2\u015e\u0159\3\2\2\2\u015e\u015d\3\2\2"+
		"\2\u015fA\3\2\2\2\u0160\u0161\5L\'\2\u0161C\3\2\2\2\u0162\u0163\b#\1\2"+
		"\u0163\u0173\5H%\2\u0164\u0166\7I\2\2\u0165\u0167\5F$\2\u0166\u0165\3"+
		"\2\2\2\u0166\u0167\3\2\2\2\u0167\u0168\3\2\2\2\u0168\u0173\7J\2\2\u0169"+
		"\u016a\5L\'\2\u016a\u016b\7K\2\2\u016b\u016c\5D#\22\u016c\u0173\3\2\2"+
		"\2\u016d\u0173\5<\37\2\u016e\u016f\t\5\2\2\u016f\u0173\5D#\17\u0170\u0171"+
		"\t\6\2\2\u0171\u0173\5D#\16\u0172\u0162\3\2\2\2\u0172\u0164\3\2\2\2\u0172"+
		"\u0169\3\2\2\2\u0172\u016d\3\2\2\2\u0172\u016e\3\2\2\2\u0172\u0170\3\2"+
		"\2\2\u0173\u01a7\3\2\2\2\u0174\u0175\f\r\2\2\u0175\u0176\t\7\2\2\u0176"+
		"\u01a6\5D#\16\u0177\u0178\f\f\2\2\u0178\u0179\t\b\2\2\u0179\u01a6\5D#"+
		"\r\u017a\u017b\f\13\2\2\u017b\u017c\t\t\2\2\u017c\u01a6\5D#\f\u017d\u017e"+
		"\f\n\2\2\u017e\u017f\t\n\2\2\u017f\u01a6\5D#\13\u0180\u0181\f\t\2\2\u0181"+
		"\u0182\7\23\2\2\u0182\u01a6\5D#\n\u0183\u0184\f\b\2\2\u0184\u0185\7\24"+
		"\2\2\u0185\u01a6\5D#\t\u0186\u0187\f\7\2\2\u0187\u0188\7\25\2\2\u0188"+
		"\u01a6\5D#\b\u0189\u018a\f\6\2\2\u018a\u018b\7\26\2\2\u018b\u01a6\5D#"+
		"\7\u018c\u018d\f\5\2\2\u018d\u018e\7\27\2\2\u018e\u01a6\5D#\6\u018f\u0190"+
		"\f\4\2\2\u0190\u0191\7\30\2\2\u0191\u0192\5D#\2\u0192\u0193\7K\2\2\u0193"+
		"\u0194\5D#\5\u0194\u01a6\3\2\2\2\u0195\u0196\f\3\2\2\u0196\u0197\t\13"+
		"\2\2\u0197\u01a6\5D#\3\u0198\u0199\f\25\2\2\u0199\u019c\7M\2\2\u019a\u019d"+
		"\5L\'\2\u019b\u019d\5<\37\2\u019c\u019a\3\2\2\2\u019c\u019b\3\2\2\2\u019d"+
		"\u01a6\3\2\2\2\u019e\u019f\f\24\2\2\u019f\u01a0\7I\2\2\u01a0\u01a1\5D"+
		"#\2\u01a1\u01a2\7J\2\2\u01a2\u01a6\3\2\2\2\u01a3\u01a4\f\20\2\2\u01a4"+
		"\u01a6\t\f\2\2\u01a5\u0174\3\2\2\2\u01a5\u0177\3\2\2\2\u01a5\u017a\3\2"+
		"\2\2\u01a5\u017d\3\2\2\2\u01a5\u0180\3\2\2\2\u01a5\u0183\3\2\2\2\u01a5"+
		"\u0186\3\2\2\2\u01a5\u0189\3\2\2\2\u01a5\u018c\3\2\2\2\u01a5\u018f\3\2"+
		"\2\2\u01a5\u0195\3\2\2\2\u01a5\u0198\3\2\2\2\u01a5\u019e\3\2\2\2\u01a5"+
		"\u01a3\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a7\u01a8\3\2"+
		"\2\2\u01a8E\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa\u01af\5D#\2\u01ab\u01ac"+
		"\7L\2\2\u01ac\u01ae\5D#\2\u01ad\u01ab\3\2\2\2\u01ae\u01b1\3\2\2\2\u01af"+
		"\u01ad\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b3\3\2\2\2\u01b1\u01af\3\2"+
		"\2\2\u01b2\u01b4\7L\2\2\u01b3\u01b2\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4"+
		"G\3\2\2\2\u01b5\u01b6\7E\2\2\u01b6\u01b7\5D#\2\u01b7\u01b8\7F\2\2\u01b8"+
		"\u01bc\3\2\2\2\u01b9\u01bc\5J&\2\u01ba\u01bc\5L\'\2\u01bb\u01b5\3\2\2"+
		"\2\u01bb\u01b9\3\2\2\2\u01bb\u01ba\3\2\2\2\u01bcI\3\2\2\2\u01bd\u01be"+
		"\t\r\2\2\u01beK\3\2\2\2\u01bf\u01c0\t\16\2\2\u01c0M\3\2\2\2-PR_amw\177"+
		"\u0087\u008b\u0090\u0093\u009e\u00a8\u00b2\u00bc\u00c4\u00c7\u00d3\u00d5"+
		"\u00e4\u00eb\u00f4\u00fe\u0100\u010a\u010c\u011d\u0127\u0135\u0138\u013f"+
		"\u014a\u0153\u0157\u015e\u0166\u0172\u019c\u01a5\u01a7\u01af\u01b3\u01bb";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}