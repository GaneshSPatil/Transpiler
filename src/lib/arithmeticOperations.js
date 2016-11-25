const util = require('./util.js');
const getNumber = util.getNumber;

const operators = {
  '*': function(num1, num2) {
    return getNumber(num1).value * getNumber(num2).value;
  },
  '+': function(num1, num2) {
    return getNumber(num1).value + getNumber(num2).value;
  },
  '-': function(num1, num2) {
    return getNumber(num1).value - getNumber(num2).value;
  },
  '/': function(num1, num2) {
    return getNumber(num1).value / getNumber(num2).value;
  }
};

module.exports = operators;