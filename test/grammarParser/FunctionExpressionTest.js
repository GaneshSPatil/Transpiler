const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');
const treesWalker = require('../../src/lib/treesWalker.js');
const variables = {};

variables.functions = {};
variables.list = {};
variables.parent = variables;

describe('Function Expressions', () => {
  beforeEach(() => {
    variables.functions = {};
    variables.list = {};
  });

  it('should allow defining functions', () => {
    const input = 'function add(a, b){ a+b; };';
    const trees = new Parser(grammar).parse(input);

    assert.that(variables.functions.add).is.undefined();

    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(undefined);
    assert.that(variables.functions.add).is.not.undefined();
  });

  it('should allow defining functions with no parameters', () => {
    const input = 'function add (){ a=10; };';
    const trees = new Parser(grammar).parse(input);

    assert.that(variables.functions.add).is.undefined();

    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(undefined);
    assert.that(variables.functions.add).is.not.undefined();
  });
});