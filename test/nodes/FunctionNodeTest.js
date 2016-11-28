const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('FunctionNode', () => {
  it('should create a node for the number', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];

    const params = [new nodes.VariableNode('a'), new nodes.VariableNode('b')];
    const block = [new nodes.ArithmeticOperatorNode('+', params)];

    const add = new nodes.FunctionNode(name, args, block);

    assert.that(add.value).is.equalTo('add');
  });

  it('should not have arguments', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];

    const params = [new nodes.VariableNode('a'), new nodes.VariableNode('b')];
    const block = [new nodes.ArithmeticOperatorNode('+', params)];

    const add = new nodes.FunctionNode(name, args, block);

    assert.that(add.args.length).is.equalTo(2);
  });

  it('should have type as Number', () => {
    const name = 'add';
    const args = [new nodes.NumberNode(1), new nodes.NumberNode(2)];

    const params = [new nodes.VariableNode('a'), new nodes.VariableNode('b')];
    const block = [new nodes.ArithmeticOperatorNode('+', params)];

    const add = new nodes.FunctionNode(name, args, block);

    assert.that(add.type).is.equalTo('Function');
  });

  it('should evaluate and populate itself into functions pool', () => {
    const name = 'add';
    const args = [new nodes.VariableNode('a'), new nodes.VariableNode('b')];
    const block = [new nodes.ArithmeticOperatorNode('+', args)];

    const add = new nodes.FunctionNode(name, args, block);

    const variables = {};

    variables.list = {};
    variables.functions = {};
    variables.parent = variables;

    assert.that(variables.functions.add).is.undefined();
    assert.that(add.evaluate(variables).value).is.equalTo(undefined);
    assert.that(variables.functions.add).is.not.undefined();
  });
});