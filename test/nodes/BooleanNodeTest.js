const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('BooleanNode', () => {
  it('should create a node for the boolean type', () => {
    const truthy = new nodes.BooleanNode(true);

    assert.that(truthy.value).is.equalTo(true);
  });

  it('should create a node for the number provided value in strings', () => {
    const truthy = new nodes.BooleanNode('true');
    const falsy = new nodes.BooleanNode('false');

    assert.that(truthy.value).is.equalTo(true);
    assert.that(falsy.value).is.equalTo(false);
  });

  it('should not have any arguments', () => {
    const truthy = new nodes.BooleanNode(true);

    assert.that(truthy.args).is.equalTo([]);
  });

  it('should have type as Boolean', () => {
    const truthy = new nodes.BooleanNode(true);

    assert.that(truthy.type).is.equalTo('Boolean');
  });

  it('should evaluate and return itself', () => {
    const truthy = new nodes.BooleanNode(true);

    assert.that(truthy.evaluate({}).value).is.equalTo(truthy.value);
  });
});