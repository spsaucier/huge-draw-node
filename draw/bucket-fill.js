const assert = require('assert');
const {showLine, floodFill} = require('../utils');

function bucketFill([x, y, c, ...extra], lineNum, canv) {
  x = +x - 1;
  y = +y - 1;
  assertBucketParams({x, y, c, extra, lineNum, canv});

  let C = [...canv];
  C = floodFill(C, x, y, c);
  return C;
}
function assertBucketParams({x, y, c, extra, lineNum, canv}) {
  assert.equal(extra.length, 0, 'Extra params to Bucket Fill command detected' + showLine(lineNum));
  assert.equal(typeof x, 'number', 'Bucket x is not a number' + showLine(lineNum));
  assert(x >= 0, 'Bucket x must be >= 0' + showLine(lineNum));
  assert(x <= canv[0].length, 'Bucket x must be <= canvas width' + showLine(lineNum));
  assert.equal(typeof y, 'number', 'Bucket y is not a number' + showLine(lineNum));
  assert(y >= 0, 'Bucket y must be >= 0' + showLine(lineNum));
  assert(y <= canv.length, 'Bucket y must be <= canvas height' + showLine(lineNum));
  assert(c.length === 1, 'Bucket c must be a single character' + showLine(lineNum));
}

module.exports = bucketFill;
