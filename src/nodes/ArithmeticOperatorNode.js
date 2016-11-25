const NumberNode = require('./NumberNode.js');
const operators = require('../lib/arithmeticOperations.js');

const ArithmeticOperatorNode = function(op, args) {
  this.value = operators[op];
  this.args = args;
  this.type = 'Expression';
};

ArithmeticOperatorNode.prototype = {
  'evaluate': function(variables) {
    return new NumberNode(this.args.reduce(this.value));
  }
};

module.exports = ArithmeticOperatorNode;