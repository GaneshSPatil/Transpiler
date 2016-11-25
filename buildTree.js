const Parser = require('jison').Parser;
const fs = require('fs');

const grammar = fs.readFileSync('./src/grammar.jison', 'utf8');

const parser = new Parser(grammar);
const input = process.argv[2];
const trees = parser.parse(input);

console.log(trees);