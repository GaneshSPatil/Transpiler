const NumberNode = require('./nodes/NumberNode.js');
const VariableNode = require('./nodes/VariableNode.js');
const ArithmeticOperatorNode = require('./nodes/ArithmeticOperatorNode.js');
const RelationalOperatorNode = require('./nodes/RelationalOperatorNode.js');
const AssignmentNode = require('./nodes/AssignmentNode.js');
const BooleanNode = require('./nodes/BooleanNode.js');
const ArrayNode = require('./nodes/ArrayNode.js');
const IfElseNode = require('./nodes/IfElseNode.js');
const UndefinedNode = require('./nodes/UndefinedNode.js');

const allNodes = {
  'ArithmeticOperatorNode': ArithmeticOperatorNode,
  'RelationalOperatorNode': RelationalOperatorNode,
  'AssignmentNode': AssignmentNode,
  'NumberNode': NumberNode,
  'VariableNode': VariableNode,
  'BooleanNode': BooleanNode,
  'ArrayNode': ArrayNode,
  'IfElseNode': IfElseNode,
  'UndefinedNode': UndefinedNode
};

module.exports = allNodes;