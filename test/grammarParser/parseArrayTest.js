const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');
const treesWalker = require('../../src/lib/treesWalker.js');

const variables = {};

variables.list = {};
variables.parent = null;

describe('Parse Array', () => {

  it('should parse an array input', () => {
    const input = '[1, 2, 3]';
    const trees = new Parser(grammar).parse(input);
    const result = treesWalker.walk(trees, variables);

    assert.that(result[0].value.length).is.equalTo(3);

    assert.that(result[0].value[0].value).is.equalTo(1);
    assert.that(result[0].value[1].value).is.equalTo(2);
    assert.that(result[0].value[2].value).is.equalTo(3);
  });
});