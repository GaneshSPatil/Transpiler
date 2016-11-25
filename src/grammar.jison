/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
'+'                   return '+'
'-'                   return '-'
'('                   return '('
')'                   return ')'
[a-z]                 return 'VARIABLE';
<<EOF>>               return 'EOF';

/lex

/* operator associations and precedence */
%left '+' '-'

%{
    var path = require('path');
    var nodes = require(path.resolve('./src/nodes.js'));
%}

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return [$$];}
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
    |  VARIABLE
        {$$ = new nodes.VariableNode($1);}
    ;