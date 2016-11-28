const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

describe('IfElseNode', () => {
  it('should create a node for the If Else block', () => {
    const num = new nodes.NumberNode(10);
    const ifBlock = [new nodes.AssignmentNode('a', num)];
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(true), ifBlock, []);

    assert.that(conditional.value.value).is.equalTo(true);
  });

  it('should have blocks as arguments', () => {
    const num = new nodes.NumberNode(10);
    const ifBlock = [new nodes.AssignmentNode('a', num)];
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(true), ifBlock, []);

    assert.that(conditional.args[0].length).is.equalTo(1);
    assert.that(conditional.args[1].length).is.equalTo(0);
  });

  it('should have type as Conditional', () => {
    const num = new nodes.NumberNode(10);
    const ifBlock = [new nodes.AssignmentNode('a', num)];
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(false), ifBlock, []);

    assert.that(conditional.type).is.equalTo('Conditional');
  });

  it('should evaluate the if block when predicate is true', () => {
    const num = new nodes.NumberNode(10);
    const ifBlock = [new nodes.AssignmentNode('a', num)];
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(true), ifBlock, []);
    const variables = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(conditional.evaluate(variables).value).is.equalTo(num.value);
  });

  it('should evaluate the if block when predicate is a variable', () => {
    const num = new nodes.NumberNode(10);
    const ifBlock = [new nodes.AssignmentNode('a', num)];
    const pred = new nodes.AssignmentNode('predicate', new nodes.BooleanNode(true));
    const conditional = new nodes.IfElseNode(pred, ifBlock, []);
    const variables = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(conditional.evaluate(variables).value).is.equalTo(num.value);
  });

  it('should evaluate the else block when predicate is true', () => {
    const num = new nodes.NumberNode(10);
    const elseBlock = [new nodes.AssignmentNode('a', num)];
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(false), [], elseBlock);
    const variables = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(conditional.evaluate(variables).value).is.equalTo(num.value);
  });

  it('should return undefined when the evaluated ifblock is empty', () => {
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(true), [], []);
    const variables = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(conditional.evaluate(variables).value).is.equalTo(undefined);
  });

  it('should return undefined when the evaluated elseblock is empty', () => {
    const conditional = new nodes.IfElseNode(new nodes.BooleanNode(false), [], []);
    const variables = {};

    variables.list = {};
    variables.parent = variables;

    assert.that(conditional.evaluate(variables).value).is.equalTo(undefined);
  });
});