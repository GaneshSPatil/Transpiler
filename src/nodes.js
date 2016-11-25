const NumberNode = require('./nodes/NumberNode.js');
const VariableNode = require('./nodes/VariableNode.js');
const ArithmeticOperatorNode = require('./nodes/ArithmeticOperatorNode.js');

const allNodes = {
  'ArithmeticOperatorNode': ArithmeticOperatorNode,
  'NumberNode': NumberNode,
  'VariableNode': VariableNode
};

module.exports = allNodes;