const UndefinedNode = require('./UndefinedNode.js');

const findTillTop = function(value, variables) {

  if (variables === variables.parent) {
    return variables.list[value];
  }

  return variables.list[value] || findTillTop(value, variables.parent);
};

const VariableNode = function(variableName) {
  this.value = variableName;
  this.args = [];
  this.type = 'Variable';
};

VariableNode.prototype = {
  'evaluate': function(variables) {
    const value = findTillTop(this.value, variables);

    return value || new UndefinedNode();
  }
};

module.exports = VariableNode;