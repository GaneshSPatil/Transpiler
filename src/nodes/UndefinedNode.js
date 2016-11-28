const NumberNode = function() {
  this.value = undefined;
  this.args = [];
  this.type = 'Undefined';
};

NumberNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = NumberNode;