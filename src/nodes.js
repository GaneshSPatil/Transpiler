const NumberNode = require('./nodes/NumberNode.js');
const VariableNode = require('./nodes/VariableNode.js');

const allNodes = {
  'NumberNode': NumberNode,
  'VariableNode': VariableNode
};

module.exports = allNodes;