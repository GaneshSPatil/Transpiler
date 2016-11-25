const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('VariableNode', () => {
  it('should create a node for the variable', () => {
    const varA = new nodes.VariableNode('a');

    assert.that(varA.value).is.equalTo('a');
  });

  it('should not have any arguments', () => {
    const varA = new nodes.VariableNode('a');

    assert.that(varA.args).is.equalTo([]);
  });

  it('should have type as Variable', () => {
    const varA = new nodes.VariableNode(1);

    assert.that(varA.type).is.equalTo('Variable');
  });

  it('should evaluate and return the variable value', () => {
    const varA = new nodes.VariableNode('a');
    const variables = {};

    variables[varA.value] = new nodes.NumberNode(1);

    assert.that(varA.evaluate(variables).value).is.equalTo(1);
  });
});