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

// Test Line 4
const startCanvas = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
const endCanvas =
`----------------------
|               xxxxx|
|xxxxxx         x   x|
|     x         xxxxx|
|     x              |
----------------------`;
module.exports = assert.equal(
  getOutput(executeLine(lines[3], 4, startCanvas)).trim(),
  endCanvas.trim(),
  'Create Rectangle did not succeed'
);
