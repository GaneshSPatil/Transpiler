const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');
const treesWalker = require('../../src/lib/treesWalker.js');
const variables = {};

variables.list = {};
variables.parent = null;

describe('Parse Addition', () => {
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
});