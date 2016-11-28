const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('UndefinedNode', () => {
  it('should create a node for undefined', () => {
    const notDefined = new nodes.UndefinedNode();

    assert.that(notDefined.value).is.equalTo(undefined);
  });

  it('should not have any arguments', () => {
    const notDefined = new nodes.UndefinedNode();

    assert.that(notDefined.args).is.equalTo([]);
  });

  it('should have type as Undefined', () => {
    const notDefined = new nodes.UndefinedNode();

    assert.that(notDefined.type).is.equalTo('Undefined');
  });

  it('should evaluate and return itself', () => {
    const notDefined = new nodes.UndefinedNode();

    assert.that(notDefined.evaluate({}).value).is.equalTo(notDefined.value);
  });
});