grammar jenkinsfile;

/**
Parser
*/

pipeline                :
                        (
                            groovy_definition
                            |
                            JENKINSFILE_DECLARATIVE
                        )*
                        PIPELINE
                        LBRACE
                        (
                            environment
                            |
                            agent
                            |
                            tools
                            |
                            pipeline_options
                            |
                            parameters
                            |
                            triggers
                            |
                            stages
                            |
                            post
                        )*
                        RBRACE
                        ;

groovy_definition       :
                        DEF_LITERAL
                        |
                        LIBRARY_LITERAL
                        ;

environment             :
                        ENVIRONMENT
                        LBRACE
                        assignment*
                        RBRACE
                        ;

parameters              :
                        PARAMETERS
                        LBRACE
                        method_call*
                        RBRACE
                        ;

agent                   :
                        AGENT
                        (
                            agent_section
                            |
                            agent_type
                        )
                        ;

agent_section           :
                        LBRACE
                        (
                            agent_type
                            (
                                LBRACE
                                method_call*
                                RBRACE
                            )?
                            |
                            method_call*
                        )
                        RBRACE
                        ;

agent_type              : identifier ;

tools                   :
                        TOOLS
                        LBRACE
                        method_call*
                        RBRACE
                        ;

pipeline_options        :
                        OPTIONS
                        LBRACE
                        method_call*
                        RBRACE
                        ;

triggers                :
                        TRIGGERS
                        LBRACE
                        method_call*
                        RBRACE
                        ;

stages                  :
                        (
                            STAGES
                            |
                            PARALLEL
                        )
                        LBRACE
                        stage_definition*
                        RBRACE
                        ;

stage_definition        :
                        STAGE
                        (
                            LPAREN
                            stage_name?
                            RPAREN
                        )?
                        LBRACE
                        (
                            environment
                            |
                            input
                            |
                            tools
                            |
                            agent
                            |
                            when
                            |
                            stages
                            |
                            steps
                            |
                            post
                            |
                            fail_fast
                        )*
                        RBRACE
                        ;

stage_name              :
                        STRING_LITERAL
                        ;

fail_fast               :
                        FAIL_FAST
                        BOOL_LITERAL
                        ;

steps                   :
                        STEPS
                        LBRACE
                        step*
                        RBRACE
                        ;

step                    :
                        script
                        |
                        method_call
                        ;

script                  :
                        SCRIPT_LITERAL
                        ;

input                   :
                        INPUT
                        LBRACE
                        (
                            method_call
                        )*
                        RBRACE
                        ;

when                    :
                        WHEN
                        LBRACE
                        (
                            method_call
                            |
                            when_aggregation
                            |
                            when_expression
                        )*
                        RBRACE
                        ;

when_aggregation        :
                        when_aggregation_type
                        LBRACE
                        (
                            method_call
                            |
                            when_aggregation
                            |
                            when_expression
                        )*
                        RBRACE
                        ;

when_aggregation_type   :
                        ALLOF
                        |
                        ANYOF
                        |
                        NOT
                        ;

when_expression         :
                        EXPRESSION
                        LBRACE
                        expression
                        RBRACE
                        ;

post                    :
                        POST
                        LBRACE
                        post_condition*
                        RBRACE
                        ;

post_condition          :
                        identifier
                        LBRACE
                        step*
                        RBRACE
                        ;

assignment              :
                        assignment_key
                        ASSIGN
                        expression
                        ;

assignment_key          :
                        identifier
                        ;

method_call             :
                        (
                            method_call_simple
                            |
                            method_call_java
                            |
                            method_environment
                        )
                        ';'?
                        ;

method_environment      :
                        method_call_java
                        LBRACE
                        step*
                        RBRACE
                        ;

method_call_simple      :
                        identifier
                        method_arg_list
                        ;

method_call_java        :
                        identifier
                        LPAREN
                        (
                            method_arg_list
                        )?
                        RPAREN
                        ;


method_arg_list         :
                        method_arg
                        (
                            COMMA
                            method_arg
                        )*
                        COMMA?
                        ;

method_arg              :
                        method_arg_key
                        COLON
                        expression
                        |
                        expression
                        ;

method_arg_key          : identifier ;


expression              : primary
                        | expression bop='.'
                            (
                                identifier
                                | method_call_java
                            )
                        | expression '[' expression ']'
                        | prefix='[' expression_list? postfix=']'
                        | identifier bop=':' expression
                        | method_call_java
                        | expression postfix=('++' | '--')
                        | prefix=('+'|'-'|'++'|'--') expression
                        | prefix=('~'|'!') expression
                        | expression bop=('*'|'/'|'%') expression
                        | expression bop=('+'|'-') expression
                        | expression bop=('<=' | '>=' | '>' | '<') expression
                        | expression bop=('==' | '!=' | '==~') expression
                        | expression bop='&' expression
                        | expression bop='^' expression
                        | expression bop='|' expression
                        | expression bop='&&' expression
                        | expression bop='||' expression
                        | expression bop='?' expression ':' expression
                        | <assoc=right> expression
                        bop=('=' | '+=' | '-=' | '*=' | '/=' | '&=' | '|=' | '^=' | '>>=' | '>>>=' | '<<=' | '%=')
                        expression
                        ;

expression_list         : expression
                        (
                            COMMA
                            expression
                        )*
                        COMMA?
                        ;

primary                 : '(' expression ')'
                        | literal
                        | identifier
                        ;

literal                 : DECIMAL_LITERAL
                        | FLOAT_LITERAL
                        | STRING_LITERAL
                        | BOOL_LITERAL
                        | NULL_LITERAL
                        | REGEXP_LITERAL
                        ;

identifier              : IDENTIFIER
                        | PIPELINE
                        | STAGES
                        | PARALLEL
                        | STAGE
                        | STEPS
                        | ENVIRONMENT
                        | INPUT
                        | TOOLS
                        | PARAMETERS
                        | OPTIONS
                        | TRIGGERS
                        | AGENT
                        | POST
                        | WHEN
                        | ANYOF
                        | ALLOF
                        | EXPRESSION
                        | FAIL_FAST
                        | NOT
                        ;

/**
Lexer
*/

// Literals

DECIMAL_LITERAL:    ('0' | [1-9] (Digits? | '_'+ Digits)) [lL]?;
HEX_LITERAL:        '0' [xX] [0-9a-fA-F] ([0-9a-fA-F_]* [0-9a-fA-F])? [lL]?;
OCT_LITERAL:        '0' '_'* [0-7] ([0-7_]* [0-7])? [lL]?;
BINARY_LITERAL:     '0' [bB] [01] ([01_]* [01])? [lL]?;
                    
FLOAT_LITERAL:      (Digits '.' Digits? | '.' Digits) ExponentPart? [fFdD]?
             |       Digits (ExponentPart [fFdD]? | [fFdD])
             ;

HEX_FLOAT_LITERAL:  '0' [xX] (HexDigits '.'? | HexDigits? '.' HexDigits) [pP] [+-]? Digits [fFdD]?;

BOOL_LITERAL:       'true'
            |       'false'
            ;

NULL_LITERAL:       'null'
            ;

STRING_LITERAL: (
    StringLiteralMultilineDouble
    | StringLiteralMultilineSingle
    | StringLiteralDouble
    | StringLiteralSingle
    ) ;
fragment StringLiteralMultilineDouble: '"""' .*? '"""';
fragment StringLiteralMultilineSingle: '\'\'\'' .*? '\'\'\'';
fragment StringLiteralDouble: '"' (~["\\\r\n\u000C] | EscapeSequence)* '"';
fragment StringLiteralSingle: '\'' (~['\\\r\n\u000C] | EscapeSequence)* '\'';

// Keywords
PIPELINE                : 'pipeline';
STAGES                  : 'stages';
PARALLEL                : 'parallel';
STAGE                   : 'stage';
STEPS                   : 'steps';
ENVIRONMENT             : 'environment';
INPUT                   : 'input';
TOOLS                   : 'tools';
PARAMETERS              : 'parameters';
OPTIONS                 : 'options';
TRIGGERS                : 'triggers';
AGENT                   : 'agent';
POST                    : 'post';
WHEN                    : 'when';
ANYOF                   : 'anyOf' | 'anyof';
ALLOF                   : 'allOf' | 'allof';
NOT                     : 'not';
EXPRESSION              : 'expression';
FAIL_FAST               : 'failFast' | 'failfast';

// Literals
SCRIPT_LITERAL          :
                        'script'
                        ScriptBlock
                        ;

DEF_LITERAL             :
                        'def' [ \t]+
                        DefLiteralId
                        (
                            DefLiteralParam
                            |
                            '=' [ \t]*
                        )
                        DefLiteralVal
                        ;

fragment DefLiteralId   :
                        Letter
                        LetterOrDigit*
                        [ \t]*
                        ;

fragment DefLiteralParam:
                        '('
                        ~[)]*
                        ')'
                        [ \t]*
                        ;
                        
fragment DefLiteralVal  :
                        (
                            ScriptBlock
                            |
                            STRING_LITERAL
                            |
                            BOOL_LITERAL
                            |
                            NULL_LITERAL
                            |
                            DECIMAL_LITERAL
                            |
                            FLOAT_LITERAL
                            |
                            BINARY_LITERAL
                            |
                            Letter
                            LetterOrDigit*
                        )
                        ;

JENKINSFILE_DECLARATIVE :
                        'Jenkinsfile (Declarative Pipeline)'
                        ;

LIBRARY_LITERAL         :
                        '@Library('
                        STRING_LITERAL
                        ')'
                        (
                            [ \t]+
                            '_'
                        )?
                        ;

IMPORT_LITERAL          :
                        'import'
                        [ \t]
                        (
                            Letter
                            LetterOrDigit
                            |
                            '.'
                            |
                            '*'
                        )+
                        ;

fragment ScriptBlock    :
                        [ \t\r\n\u000C]*
                        '{'
                        (
                            ScriptBlock
                            |
                            ~[{}]
                        )*
                        '}'
                        ;

// Separators
LPAREN:             '(';
RPAREN:             ')';
LBRACE:             '{';
RBRACE:             '}';
LBRACK:             '[';
RBRACK:             ']';
COLON:              ':';
COMMA:              ',';
DOT:                '.';
EQUALS:             '==';

// Operators
ASSIGN:             '=';

// Whitespace and comments
MULTI_COMMENT:      '/*' .*? '*/'    -> skip;
WS:                 [ \t\r\n\u000C]+ -> skip;
LINE_COMMENT1:      '#' ~[\r\n\u000C]*    -> channel(HIDDEN);
LINE_COMMENT2:      '//' ~[\r\n\u000C]*    -> channel(HIDDEN);

// Identifiers
REGEXP_LITERAL:     '/' (~[/\\\r\n\u000C] | EscapeSequence)* '/';
IDENTIFIER:         '$'? Letter LetterOrDigit*;

// Fragment rules
fragment ExponentPart
    : [eE] [+-]? Digits
    ;
fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;
fragment HexDigits
    : HexDigit ((HexDigit | '_')* HexDigit)?
    ;
fragment HexDigit
    : [0-9a-fA-F]
    ;
fragment Digits
    : [0-9] ([0-9_]* [0-9])?
    ;
fragment LetterOrDigit
    : Letter
    | [0-9]
    ;
fragment Letter
    : [a-zA-Z$_] // these are the "java letters" below 0x7F
    | ~[\u0000-\u007F\uD800-\uDBFF] // covers all characters above 0x7F which are not a surrogate
    | [\uD800-\uDBFF] [\uDC00-\uDFFF] // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
    ;
