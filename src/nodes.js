const NumberNode = require('./nodes/NumberNode.js');
const VariableNode = require('./nodes/VariableNode.js');
const ArithmeticOperatorNode = require('./nodes/ArithmeticOperatorNode.js');
const AssignmentNode = require('./nodes/AssignmentNode.js');

const allNodes = {
  'ArithmeticOperatorNode': ArithmeticOperatorNode,
  'AssignmentNode': AssignmentNode,
  'NumberNode': NumberNode,
  'VariableNode': VariableNode
};

module.exports = allNodes;