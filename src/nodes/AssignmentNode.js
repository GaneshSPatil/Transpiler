const util = require('../lib/util.js');
const getNumber = util.getNumber;

const AssignmentNode = function(variable, value) {
  this.value = variable;
  this.args = [value];
  this.type = 'Assignment';
};

AssignmentNode.prototype = {
  'evaluate': function(variables) {
    const number = getNumber(this.args[0], variables);

    variables.list[this.value] = number;

    return number;
  }
};

module.exports = AssignmentNode;