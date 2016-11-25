const util = {};

const getNumber = function(node, variables) {
  if (node.type === 'Number') {
    return node;
  }

  return getNumber(node.evaluate(variables));
};

util.getNumber = getNumber;

module.exports = util;