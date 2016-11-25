const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('ArithmeticOperatorNode', () => {
  it('should create a node for the arithmetic operation', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const add = new nodes.ArithmeticOperatorNode('+', args);

    assert.that(add).is.not.null();
  });

  it('should store provided arguments', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const add = new nodes.ArithmeticOperatorNode('+', args);

    const nodeArgs = add.args;

    assert.that(nodeArgs.length).is.equalTo(2);
    assert.that(nodeArgs[0].value).is.equalTo(num1.value);
    assert.that(nodeArgs[1].value).is.equalTo(num2.value);
  });

  it('should have type as Expression', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const add = new nodes.ArithmeticOperatorNode('+', args);

    assert.that(add.type).is.equalTo('Expression');
  });

  it('should evaluate and return the arithmetic operation result', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const add = new nodes.ArithmeticOperatorNode('+', args);

    assert.that(add.evaluate({}).value).is.equalTo(3);
  });
});