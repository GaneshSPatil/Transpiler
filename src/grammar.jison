/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                          /* skip whitespace */
[0-9]+("."[0-9]+)?\b         return 'NUMBER';
'function'                   return 'FUNCTION';
'true'                       return 'boolean';
'false'                      return 'boolean';
'if'                         return 'if';
'elsif'                      return 'elsif';
'else'                       return 'else';
';'                          return ';';
'='                          return '=';
'+'                          return '+';
'-'                          return '-';
'/'                          return '/';
'%'                          return '%';
'*'                          return '*';
'('                          return '(';
')'                          return ')';
'['                          return '[';
']'                          return ']';
'{'                          return '{';
'}'                          return '}';
','                          return ',';
'>'                          return '>';
'<'                          return '<';
'!'                          return '!';
[a-z]+                       return 'VARIABLE';
<<EOF>>                      return 'EOF';

/lex

/* operator associations and precedence */
%left '>' '<'
%left '+' '-'
%left '!'
%left '*' '/'
%left '%'
%left '='

%{
    var path = require('path');
    var nodes = require(path.resolve('./src/nodes.js'));
%}

%start expressions

%% /* language grammar */

expressions
    : MULTIPLE-STATEMENTS EOF
        {return $$;}
    ;

MULTIPLE-STATEMENTS
    : STATEMENT
        {$$ = [$1] }
    | STATEMENT ';'
        {$$ = [$1]}
    | STATEMENT MULTIPLE-STATEMENTS
        { $$ = [$1].concat($2); }
    | STATEMENT ';' MULTIPLE-STATEMENTS
        { $$ = [$1].concat($3); }
    ;

STATEMENT
    : e
        {$$ = $1}
        |FUNCTION-DEFINITION
        {$$ = $1}
    | ASSIGNMENT
        {$$ = $1}
    | IF-ELSE
        {$$ = $1}
    ;

ASSIGNMENT
    : VARIABLE '=' e
        {$$ = new nodes.AssignmentNode($1, $3);}
    ;

FUNCTION-DEFINITION
    : FUNCTION VARIABLE '(' COMMA-SEPERATED-VARIABLES ')' BLOCK
        {$$ = new nodes.FunctionNode($2, $4, $6);}
    | FUNCTION VARIABLE '(' ')' BLOCK
        {$$ = new nodes.FunctionNode($2, [], $5);}
    ;

COMMA-SEPERATED-VARIABLES
    : VARIABLE
        {$$ = [new nodes.VariableNode($1)];}
    | VARIABLE ',' COMMA-SEPERATED-VARIABLES
        {$$ = [new nodes.VariableNode($1)].concat($3); }
    ;

IF-ELSE
    : 'if' '(' e ')' BLOCK
        {$$ = new nodes.IfElseNode($3, $5, []);}
    | 'if' '(' e ')' BLOCK ELSE
        {$$ = new nodes.IfElseNode($3, $5, $6);}
    ;

ELSE
  : 'else' BLOCK
    { $$ = $2; }
  | 'elsif' '(' e ')' BLOCK ELSE
    {$$ = [new nodes.IfElseNode($3, $5, $6)]}
  ;

BLOCK
    : '{' MULTIPLE-STATEMENTS '}'
        {$$ = $2}
    ;

e
    :  DATA-TYPES
        {$$ = $1;}
    | '(' e ')'
        {$$ = $2;}
    | e '+' e
        {$$ = new nodes.ArithmeticOperatorNode($2, [$1, $3]);}
    | e '-' e
        {$$ = new nodes.ArithmeticOperatorNode($2, [$1, $3]);}
    | e '/' e
        {$$ = new nodes.ArithmeticOperatorNode($2, [$1, $3]);}
    | e '*' e
        {$$ = new nodes.ArithmeticOperatorNode($2, [$1, $3]);}
    | e '%' e
        {$$ = new nodes.ArithmeticOperatorNode($2, [$1, $3]);}
    |  VARIABLE
        {$$ = new nodes.VariableNode($1);}
    | e '<' '=' e
        {$$ = new nodes.RelationalOperatorNode('<=', [$1, $4]);}
    | e '>' '=' e
        {$$ = new nodes.RelationalOperatorNode('>=', [$1, $4]);}
    | e '!' '=' e
        {$$ = new nodes.RelationalOperatorNode('!=', [$1, $4]);}
    | e '>' e
        {$$ = new nodes.RelationalOperatorNode($2, [$1, $3]);}
    | e '<' e
        {$$ = new nodes.RelationalOperatorNode($2, [$1, $3]);}
    ;

DATA-TYPES
    : NUMBER
        {$$ = new nodes.NumberNode($1);}
    | boolean
        {$$ = new nodes.BooleanNode($1);}
    | ARRAY
        {$$ = new nodes.ArrayNode($1);}
    ;

ARRAY
    : '[' ']'
        {$$ = [];}
    | '[' comma-seperated-values ']'
        {$$ = $2;}
    ;

comma-seperated-values
    : e
        {$$ = $1}
    | e ',' comma-seperated-values
        {$$ = [$1].concat($3);}
    ;