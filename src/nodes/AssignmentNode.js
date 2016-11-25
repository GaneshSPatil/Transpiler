const AssignmentNode = function(variable, value) {
  this.value = variable;
  this.args = [value];
  this.type = 'Assignment';
};

AssignmentNode.prototype = {
  'evaluate': function(variables) {
    variables.list[this.value] = this.args[0];

    return this.args[0];
  }
};

module.exports = AssignmentNode;