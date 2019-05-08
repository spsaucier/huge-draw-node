const assert = require('assert');
const {showLine} = require('../utils');
const drawLine = require('./draw-line');

function drawRect([x1, y1, x2, y2, ...extra], lineNum, canv) {
  assertRectParams({x1, y1, x2, y2, extra, lineNum, canv});

  let C = drawLine([x1, y1, x1, y2], lineNum, canv); // Match x1
  C = drawLine([x1, y1, x2, y1], lineNum, C); // Match y1
  C = drawLine([x2, y1, x2, y2], lineNum, C); // Match x2
  C = drawLine([x1, y2, x2, y2], lineNum, C); // Match y2
  return C;
}
function assertRectParams({x1, y1, x2, y2, extra, lineNum, canv}) {
  assert.equal(extra.length, 0, 'Extra params to Rectangle command detected' + showLine(lineNum));
  assert.equal(typeof x1, 'number', 'Rect x1 is not a number' + showLine(lineNum));
  assert(x1 >= 0, 'Rect x1 must be >= 0' + showLine(lineNum));
  assert(x1 <= canv[0].length, 'Rect x1 must be <= canvas width' + showLine(lineNum));
  assert.equal(typeof y1, 'number', 'Rect y1 is not a number' + showLine(lineNum));
  assert(y1 >= 0, 'Rect y1 must be >= 0' + showLine(lineNum));
  assert(y1 <= canv.length, 'Rect y1 must be <= canvas height' + showLine(lineNum));
  assert.equal(typeof x2, 'number', 'Rect x2 is not a number' + showLine(lineNum));
  assert(x2 >= 0, 'Rect x2 must be >= 0' + showLine(lineNum));
  assert(x2 <= canv[0].length, 'Rect x2 must be <= canvas width' + showLine(lineNum));
  assert.equal(typeof y2, 'number', 'Rect y2 is not a number' + showLine(lineNum));
  assert(y2 >= 0, 'Rect y2 must be >= 0' + showLine(lineNum));
  assert(y2 <= canv.length, 'Rect y2 must be <= canvas height' + showLine(lineNum));
}

module.exports = drawRect;
