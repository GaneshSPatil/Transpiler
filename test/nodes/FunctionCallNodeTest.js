const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('FunctionCallNode', () => {
  it('should create a node for the function call', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);

    assert.that(add.value).is.equalTo('add');
  });

  it('should have arguments', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);

    assert.that(add.args.length).is.equalTo(2);
  });

  it('should have type as Function Call', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);

    assert.that(add.type).is.equalTo('FunctionCall');
  });

  it('should throw error when the function does not exist', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);
    const variables = {};

    variables.list = {};
    variables.parent = variables;
    variables.functions = {};

    assert.that(() => add.evaluate(variables)).is.throwing('add is not a function.');
  });

  it('should evaluate functions call', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);
    const num1 = new nodes.NumberNode(1);
    const num2 = new nodes.NumberNode(2);
    const params = [num1, num2];

    const variables = {};

    variables.list = {};
    variables.parent = variables;
    variables.functions = {'add': {
      'args': [new nodes.VariableNode('a'), new nodes.VariableNode('b')],
      'block': [new nodes.ArithmeticOperatorNode('+', params)]
    }};

    assert.that(add.evaluate(variables).value).is.equalTo(3);
  });

  it('should evaluate functions call', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];
    const add = new nodes.FunctionCallNode(name, args);

    const variables = {};

    variables.list = {};
    variables.parent = variables;
    variables.functions = {'add': {
      'args': [new nodes.VariableNode('a'), new nodes.VariableNode('b')],
      'block': []
    }};

    assert.that(add.evaluate(variables).value).is.equalTo(undefined);
  });

});