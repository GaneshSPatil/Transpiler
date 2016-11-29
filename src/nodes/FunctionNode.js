const treesWalker = require('../../src/lib/treesWalker.js');
const UndefinedNode = require('./UndefinedNode.js');

const FunctionNode = function(name, args, block) {
  this.value = name;
  this.args = args;
  this.block = block;
  this.type = 'Function';
};

FunctionNode.prototype = {
  'evaluate': function(variables) {
    variables.functions[this.value] = {
      'args': this.args,
      'block': this.block
    };

    return new UndefinedNode();
  }
};

module.exports = FunctionNode;