const NumberNode = require('./NumberNode.js');
const operators = require('../lib/arithmeticOperations.js');

const ArithmeticOperatorNode = function(op, args) {
  this.value = operators[op];
  this.args = args;
  this.type = 'Expression';
};

ArithmeticOperatorNode.prototype = {
  'evaluate': function(variables) {
    const self = this;

    return new NumberNode(this.args.reduce(
      (num1, num2) => self.value(num1, num2, variables))
    );
  }
};

module.exports = ArithmeticOperatorNode;