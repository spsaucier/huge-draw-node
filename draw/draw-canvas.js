const assert = require('assert');
const {showLine} = require('../utils');

function drawCanvas([width, height, ...extra], lineNum) {
  assertCanvasParams({width, height, extra, lineNum});
  return [...Array(height)].map(() => Array(width).fill(' '));
}
function assertCanvasParams({width, height, extra, lineNum}) {
  assert.equal(extra.length, 0, 'Extra params to Canvas command detected' + showLine(lineNum));
  assert.equal(typeof width, 'number', 'Canvas width is not a number' + showLine(lineNum));
  assert.equal(typeof height, 'number', 'Canvas height is not a number' + showLine(lineNum));
  assert(height > 0, 'Canvas height must be greater than 0' + showLine(lineNum));
  assert(width > 0, 'Canvas width must be greater than 0' + showLine(lineNum));
}

module.exports = drawCanvas;
