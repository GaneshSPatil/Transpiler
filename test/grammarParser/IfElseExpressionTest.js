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

describe('Assignment Expressions', () => {
  it('should allow defining if block', () => {
    const input = 'if (true) { a=10; } a;';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(10);
    assert.that(result[1].value).is.equalTo(undefined);
  });

  it('should allow defining if else block', () => {
    const input = 'if (false) { a=10; } else { a=20; }';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(20);
  });

  it('should allow defining if elsif else block', () => {
    const input = 'if (false) { a=10; } elsif (true) { a=20; } else { a=30;} ';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(20);
  });

  it('should allow accessing variables inside if block', () => {
    const input = 'a=10; if (true) { a; }';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(10);
    assert.that(result[1].value).is.equalTo(10);
  });

});