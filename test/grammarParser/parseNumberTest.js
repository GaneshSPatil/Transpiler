const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');

describe('Parse Number', () => {
  it('should parse a number input', () => {
    const input = '12';
    const trees = new Parser(grammar).parse(input);

    assert.that(trees.length).is.equalTo(1);
    assert.that(trees[0].value).is.equalTo(12);
  });
});