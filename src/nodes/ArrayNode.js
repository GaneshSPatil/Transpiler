const ArrayNode = function(arrayElements) {
  this.value = arrayElements;
  this.args = [];
  this.type = 'Array';
};

ArrayNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = ArrayNode;