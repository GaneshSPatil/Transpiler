const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('NumberNode', () => {
  it('should create a node for the number', () => {
    const one = new nodes.NumberNode(1);

    assert.that(one.value).is.equalTo(1);
  });

  it('should create a node for the number provided value in strings', () => {
    const one = new nodes.NumberNode('12.50');

    assert.that(one.value).is.equalTo(12.50);
  });

  it('should not have any arguments', () => {
    const one = new nodes.NumberNode(1);

    assert.that(one.args).is.equalTo([]);
  });

  it('should have type as Number', () => {
    const one = new nodes.NumberNode(1);

    assert.that(one.type).is.equalTo('Number');
  });

  it('should evaluate and return itself', () => {
    const one = new nodes.NumberNode(1);

    assert.that(one.evaluate({}).value).is.equalTo(one.value);
  });
});