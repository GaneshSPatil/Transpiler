const BooleanNode = require('./BooleanNode.js');
const operators = require('../lib/relationalOperations.js');

const ArithmeticOperatorNode = function(op, args) {
  this.value = operators[op];
  this.args = args;
  this.type = 'Expression';
};

ArithmeticOperatorNode.prototype = {
  'evaluate': function(variables) {
    return new BooleanNode(this.value(this.args[0], this.args[1], variables));
  }
};

module.exports = ArithmeticOperatorNode;