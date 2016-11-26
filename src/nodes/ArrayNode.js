const NumberNode = function(arrayElements) {
  this.value = arrayElements;
  this.args = [];
  this.type = 'Array';
};

NumberNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = NumberNode;