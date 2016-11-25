const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');
const treesWalker = require('../../src/lib/treesWalker.js');
const variables = {};

variables.list = {};
variables.parent = null;

describe('Assignment Expressions', () => {
  it('should allow defining variables', () => {
    const input = 'a=2;b=4';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value).is.equalTo(2);
    assert.that(result[1].value).is.equalTo(4);
  });
});