const assert = require('assertthat');
const NumberNode = require('../../src/nodes/NumberNode.js');

describe('NumberNode', () => {
  it('should create a node for the number', () => {
    const one = new NumberNode(1);

    assert.that(one.value).is.equalTo(1);
  });

  it('should not have any arguments', () => {
    const one = new NumberNode(1);

    assert.that(one.args).is.equalTo([]);
  });

  it('should have type as Number', () => {
    const one = new NumberNode(1);

    assert.that(one.type).is.equalTo('Number');
  });

  it('should evaluate and return itself', () => {
    const one = new NumberNode(1);

    assert.that(one.evaluate({}).value).is.equalTo(one.value);
  });
});