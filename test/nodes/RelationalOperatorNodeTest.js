const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('RelationalOperatorNode', () => {
  it('should create a node for the relational operation', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const greaterThan = new nodes.RelationalOperatorNode('>', args);

    assert.that(greaterThan).is.not.null();
  });

  it('should store provided arguments', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const greaterThan = new nodes.RelationalOperatorNode('>', args);

    const nodeArgs = greaterThan.args;

    assert.that(nodeArgs.length).is.equalTo(2);
    assert.that(nodeArgs[0].value).is.equalTo(num1.value);
    assert.that(nodeArgs[1].value).is.equalTo(num2.value);
  });

  it('should have type as Expression', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const greaterThan = new nodes.RelationalOperatorNode('>', args);

    assert.that(greaterThan.type).is.equalTo('Expression');
  });

  it('should evaluate and return the relational operation result', () => {
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const args = [num1, num2];
    const greaterThan = new nodes.RelationalOperatorNode('>', args);

    assert.that(greaterThan.evaluate({}).value).is.equalTo(false);
  });
});