const NumberNode = function(boolean) {
  let value = boolean;

  if (value === 'true') {
    value = true;
  }
  if (value === 'false') {
    value = false;
  }
  this.value = value;
  this.args = [];
  this.type = 'Boolean';
};

NumberNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = NumberNode;