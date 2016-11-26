const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('ArrayNode', () => {
  it('should create a node for the number', () => {
    const one = new nodes.ArrayNode([1, 2, 3]);

    assert.that(one.value.length).is.equalTo(3);
  });

  it('should not have any arguments', () => {
    const one = new nodes.ArrayNode([1, 2, 3]);

    assert.that(one.args).is.equalTo([]);
  });

  it('should have type as Array', () => {
    const one = new nodes.ArrayNode([1, 2, 3]);

    assert.that(one.type).is.equalTo('Array');
  });

  it('should evaluate and return itself', () => {
    const one = new nodes.ArrayNode([1, 2, 3]);

    assert.that(one.evaluate({}).value).is.equalTo(one.value);
  });
});