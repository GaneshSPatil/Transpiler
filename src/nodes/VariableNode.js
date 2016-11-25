const VariableNode = function(variableName) {
  this.value = variableName;
  this.args = [];
  this.type = 'Variable';
};

VariableNode.prototype = {
  'evaluate': function(variables) {
    return variables[this.value];
  }
};

module.exports = VariableNode;