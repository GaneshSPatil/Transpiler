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

  it('should allow calling functions', () => {
    const input = '' +
      'a=10; ' +
      'function fact(num){ ' +
          'if(num < 2){' +
              'num;' +
          '} else {' +
              'num * fact(num - 1);' +
          '}' +
      '}; ' +
      'fact(5);';
    const trees = new Parser(grammar).parse(input);

    assert.that(variables.functions.add).is.undefined();

    const result = treesWalker.walk(trees, variables);

    assert.that(result[2].value).is.equalTo(120);
  });

  it('should return undefined if nothing is evaluated', () => {
    const input = '' +
      'function fact(num){ ' +
          'if(num < 2){' +
              'num;' +
          '}' +
      '}; ' +
      'fact(5);';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[1].value).is.equalTo(undefined);
  });

});