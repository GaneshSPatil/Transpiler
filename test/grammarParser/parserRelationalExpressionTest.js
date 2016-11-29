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

describe('Parse Relational Expressions', () => {
  it('should parse a greater than expression input', () => {
    const input = '1>2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(false);
  });

  it('should parse a complex greater than expression input', () => {
    const input = '2>1>0';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a less than expression input', () => {
    const input = '1<2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a complex less than expression input', () => {
    const input = '2<4<6';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a less than equal to expression input', () => {
    const input = '1<=2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a complex less than equal to expression input', () => {
    const input = '1<=2<=3';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a greater than equal to expression input', () => {
    const input = '1>=2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(false);
  });

  it('should parse a complex less than equal to expression input', () => {
    const input = '2>=2>=1';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it.skip('should parse a equal to expression input', () => {
    const input = '1==2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(false);
  });

  it.skip('should parse a complex equal to expression input', () => {
    const input = '2==2==2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a not equal to expression input', () => {
    const input = '1!=2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a complex equal to expression input', () => {
    const input = '2!=2!=false';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(false);
  });

  it('should parse a equal to expression input', () => {
    const input = '2 eq 2';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });

  it('should parse a complex equal to expression input', () => {
    const input = '2 eq 2 eq true';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(true);
  });
});