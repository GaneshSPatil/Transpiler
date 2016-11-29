var treesWalker = require('./src/lib/treesWalker.js');
var Parser = require("jison").Parser;
var fs = require('fs');
var grammar = fs.readFileSync('./src/grammar.jison', 'utf8');

//---------------------

const readline = require('readline');

const rl = readline.createInterface({
                                      input: process.stdin,
                                      output: process.stdout
                                    });

var variables = {};
variables.list = {};
variables.functions = {};
variables.parent = variables;

var buffer = '';

var onAnswer = function(ans){
  try{
    ans = buffer + ans;
    var trees = new Parser(grammar).parse(ans);
    var result = treesWalker.walk(trees, variables);
    result.forEach(function(r){ console.log(r.value); });
    buffer = '';
  }catch(e){
    (trees != undefined) && trees.pop();
    buffer = ans;
  }
  askQue();
}

var countBrackets = function(input) {
  return input.split('{').length;
};

var askQue = function(){
  var extra = new Array(countBrackets(buffer)).join('..');
  var que = buffer === '' ? '> ' : '.'.concat(extra);
  rl.question(que, onAnswer);
}

askQue();
