const util = {};

const primitiveTypes = ['Number', 'Boolean', 'Array'];

const getPrimitive = function(node, variables) {
  if (primitiveTypes.includes(node.type)) {
    return node;
  }

  return getPrimitive(node.evaluate(variables));
};

util.getNumber = getPrimitive;

module.exports = util;