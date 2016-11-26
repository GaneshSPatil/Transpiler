const NumberNode = function(boolean) {
   this.value = boolean;

  if (boolean === 'true') {
    this.value = true;
  }
  if (boolean === 'false') {
    this.value = false;
  }

  this.args = [];
  this.type = 'Boolean';
};

NumberNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = NumberNode;