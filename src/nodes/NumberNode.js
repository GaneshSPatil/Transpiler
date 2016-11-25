const NumberNode = function(number) {
  this.value = Number(number);
  this.args = [];
  this.type = 'Number';
};

NumberNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = NumberNode;