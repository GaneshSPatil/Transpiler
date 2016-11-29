const util = require('../lib/util.js');
const getNumber = util.getNumber;

const findTillTopAndAssign = function(variable, value, variables) {

  if (variables === variables.parent) {
    if (variables.list[variable] !== undefined) {
      variables.list[variable] = value;

      return true;
    }

    return false;
  }

  if (variables.list[variable] !== undefined) {
    variables.list[variable] = value;

    return true;
  }

  return findTillTopAndAssign(variable, value, variables.parent);
};

const AssignmentNode = function(variable, value) {
  this.value = variable;
  this.args = [value];
  this.type = 'Assignment';
};

AssignmentNode.prototype = {
  'evaluate': function(variables) {
    const number = getNumber(this.args[0], variables);

    const isAssigned = findTillTopAndAssign(this.value, number, variables);

    if (!isAssigned) {
      variables.list[this.value] = number;
    }

    return number;
  }
};

module.exports = AssignmentNode;