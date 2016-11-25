const util = require('./util.js');
const getNumber = util.getNumber;

const operators = {
  '*': function(num1, num2, variables) {
    return getNumber(num1, variables).value * getNumber(num2, variables).value;
  },
  '+': function(num1, num2, variables) {
    return getNumber(num1, variables).value + getNumber(num2, variables).value;
  },
  '-': function(num1, num2, variables) {
    return getNumber(num1, variables).value - getNumber(num2, variables).value;
  },
  '/': function(num1, num2, variables) {
    return getNumber(num1, variables).value / getNumber(num2, variables).value;
  }
};

module.exports = operators;