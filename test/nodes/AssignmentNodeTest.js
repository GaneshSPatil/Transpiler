const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('AssignmentNode', () => {
  it('should create a node for the number', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);

    assert.that(varA.value).is.equalTo('a');
  });

  it('should have value as argument', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);

    assert.that(varA.args[0].value).is.equalTo(one.value);
  });

  it('should have type as Assignment', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);

    assert.that(varA.type).is.equalTo('Assignment');
  });

  it('should evaluate and return the assigned value', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);
    const variables = {};

    variables.functions = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(varA.evaluate(variables).value).is.equalTo(one.value);
  });

  it('should evaluate and populate variable in the variables pool', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);
    const variables = {};

    variables.functions = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(variables.list.a).is.undefined();
    assert.that(varA.evaluate(variables).value).is.equalTo(one.value);
    assert.that(variables.list.a.value).is.equalTo(10);
  });

  it('should evaluate and override variable in the variables pool', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);
    const variables = {};

    variables.functions = {};
    variables.list = {};
    variables.parent = variables;

    const childContext = {};

    childContext.functions = {};
    childContext.list = {'a': new nodes.NumberNode(50)};
    childContext.parent = variables;


    assert.that(childContext.list.a.value).is.equalTo(50);
    assert.that(varA.evaluate(childContext).value).is.equalTo(one.value);
    assert.that(childContext.list.a.value).is.equalTo(10);
  });

  it('should evaluate and override variable from the global variables pool', () => {
    const one = new nodes.NumberNode(10);
    const varA = new nodes.AssignmentNode('a', one);
    const variables = {};

    variables.functions = {};
    variables.list = {'a': new nodes.NumberNode(50)};
    variables.parent = variables;

    const childContext = {};

    childContext.functions = {};
    childContext.list = {};
    childContext.parent = variables;

    assert.that(variables.list.a.value).is.equalTo(50);
    assert.that(varA.evaluate(childContext).value).is.equalTo(one.value);
    assert.that(variables.list.a.value).is.equalTo(10);
  });
});