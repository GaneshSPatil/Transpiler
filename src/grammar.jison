/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
';'                   return ';'
'='                   return '='
'+'                   return '+'
'-'                   return '-'
'/'                   return '/'
'%'                   return '%'
'*'                   return '*'
'('                   return '('
')'                   return ')'
[a-z]                 return 'VARIABLE';
<<EOF>>               return 'EOF';

/lex

/* operator associations and precedence */
%left '+' '-'
%left '*' '/'
%left '%'

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
    | ASSIGNMENT
        {$$ = $1}
    ;

ASSIGNMENT
    : VARIABLE '=' e
        {$$ = new nodes.AssignmentNode($1, $3);}
    ;

e
    :  NUMBER
        {$$ = new nodes.NumberNode($1);}
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
    ;