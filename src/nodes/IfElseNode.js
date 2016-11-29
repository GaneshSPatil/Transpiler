const treesWalker = require('../../src/lib/treesWalker.js');
const UndefinedNode = require('./UndefinedNode.js');

const IfNodeNode = function(predicate, ifBlock, elseBlock) {
  this.value = predicate;
  this.args = [ifBlock, elseBlock];
  this.type = 'Conditional';
};

IfNodeNode.prototype = {
  'evaluate': function(variables) {
    const predicate = this.value.evaluate(variables).value;
    const childContext = {};

    childContext.list = {};
    childContext.functions = {};
    childContext.parent = variables;

    if (predicate) {
      const result = treesWalker.walk(this.args[0], childContext);

      return result.length > 0
        ? result.pop()
        : new UndefinedNode();
    }
    const result = treesWalker.walk(this.args[1], childContext);

    return result.length > 0
      ? result.pop()
      : new UndefinedNode();
  }
};

module.exports = IfNodeNode;