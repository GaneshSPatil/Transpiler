const NumberNode = require('./NumberNode.js');

const operators = {
  '+': function(num1, num2) {
    return num1.value + num2.value;
  }
};

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