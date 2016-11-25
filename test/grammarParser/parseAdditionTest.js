const assert = require('assertthat');
const nodes = require('../../src/nodes.js');

const Parser = require('jison').Parser;
const fs = require('fs');
const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');

describe('Parse Addition', () => {
  it('should parse an addition expression input', () => {
    const input = '1+2';
    const trees = new Parser(grammar).parse(input);

    assert.that(trees.length).is.equalTo(1);
    assert.that(trees[0].evaluate().value).is.equalTo(3);
  });

  it.skip('should parse a complex addition expression input', () => {
    const input = '1+1+2+1+5';
    const trees = new Parser(grammar).parse(input);

    assert.that(trees.length).is.equalTo(1);
    assert.that(trees[0].evaluate().value).is.equalTo(10);
  });
});