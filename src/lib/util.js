const util = {};

const getNumber = function(node) {
  if (node.type === 'Number') {
    return node;
  }

  return getNumber(node.evaluate());
};

util.getNumber = getNumber;

module.exports = util;