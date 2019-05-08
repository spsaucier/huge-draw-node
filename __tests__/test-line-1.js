const assert = require('assert');
const executeLine = require('../execute-line');
const {getOutput} = require('../utils');

const lines = [
  'C 20 4',
  'L 1 2 6 2',
  'L 6 3 6 4',
  'R 16 1 20 3',
  'B 10 3 o',
];

// Test Line 2
const startCanvas = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
const endCanvas =
`----------------------
|                    |
|xxxxxx              |
|                    |
|                    |
----------------------`;
module.exports = assert.equal(
  getOutput(executeLine(lines[1], 2, startCanvas)).trim(),
  endCanvas.trim(),
  'Create Line 1 did not succeed'
);
