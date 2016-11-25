/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
<<EOF>>               return 'EOF';

/lex


%{
    var path = require('path');
    var nodes = require(path.resolve('./src/nodes.js'));
%}
%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return $$;}
    ;

e
    :  NUMBER
        {$$ = new nodes.NumberNode($1);}
    ;