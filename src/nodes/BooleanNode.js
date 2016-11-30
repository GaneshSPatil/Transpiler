const BooleanNode = function(boolean) {
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

BooleanNode.prototype = {
  'evaluate': function(variables) {
    return this;
  }
};

module.exports = BooleanNode;