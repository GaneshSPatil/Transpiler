const util = {};

const primitiveTypes = ['Number', 'Boolean', 'Array', 'Undefined'];

const getPrimitive = function(node, variables) {
  if (primitiveTypes.includes(node.type)) {
    return node;
  }

  return getPrimitive(node.evaluate(variables), variables);
};

util.getNumber = getPrimitive;

module.exports = util;