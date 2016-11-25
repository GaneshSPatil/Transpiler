const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');
const treesWalker = require('../../src/lib/treesWalker.js');
const variables = {};

variables.list = {};
variables.parent = null;

describe('Parse Arithmetic Expressions', () => {
  it('should parse an addition expression input', () => {
    const input = '1+2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(3);
  });

  it('should parse a complex addition expression input', () => {
    const input = '1+1+2+1+5';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(10);
  });

  it('should parse a substraction expression input', () => {
    const input = '2-2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(0);
  });

  it('should parse a complex substraction expression input', () => {
    const input = '5-3-1-1';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(0);
  });

  it('should parse a multiplication expression input', () => {
    const input = '2*2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(4);
  });

  it('should parse a complex multiplication expression input', () => {
    const input = '5*3*2*1';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(30);
  });

  it('should parse a division expression input', () => {
    const input = '2/2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(1);
  });

  it('should parse a complex division expression input', () => {
    const input = '12/2/3';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(2);
  });
});