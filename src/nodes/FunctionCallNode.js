const treesWalker = require('../../src/lib/treesWalker.js');
const UndefinedNode = require('./UndefinedNode.js');
const util = require('../lib/util.js');
const getNumber = util.getNumber;

const findFnTillTop = function(fnName, variables) {

  if (variables === variables.parent) {
    return variables.functions[fnName];
  }

  return variables.functions[fnName] || findFnTillTop(fnName, variables.parent);
};

const populateArguments = function(names, values, variables) {
  names.forEach((name, index) => {
    variables.list[name.value] = getNumber(values[index], variables);
  });
};

const FunctionCallNode = function(name, args) {
  this.value = name;
  this.args = args;
  this.type = 'FunctionCall';
};

FunctionCallNode.prototype = {
  'evaluate': function(variables) {
    const childContext = {};

    childContext.list = {};
    childContext.functions = {};
    childContext.parent = variables;

    const fn = findFnTillTop(this.value, variables);

    if (!fn) {
      throw new Error(`${this.value} is not a function.`);
    }

    populateArguments(fn.args, this.args, childContext);

    const result = treesWalker.walk(fn.block, childContext);

    return result.length > 0
      ? result.pop()
      : new UndefinedNode();
  }
};

module.exports = FunctionCallNode;