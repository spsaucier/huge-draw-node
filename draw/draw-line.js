const assert = require('assert');
const {showLine} = require('../utils');

function drawLine([x1, y1, x2, y2, ...extra], lineNum, canv) {
  const xMatch = x1 === x2;
  const yMatch = y1 === y2;
  assertLineParams({x1, y1, x2, y2, extra, lineNum, canv, xMatch, yMatch});

  const C = [...canv];
  if (xMatch && yMatch) {
    C[y1][x1] = 'x';
    return C;
  }
  if (yMatch) {
    C[y1] = C[y1].map((x, i) => {
      if (
        i >= Math.min(x1, x2) &&
        i <= Math.max(x1, x2)
      ) {
        x = 'x';
      }
      return x;
    });
    return C;
  }
  return C.map((yArr, i) => {
    if (
        i >= Math.min(y1, y2) &&
        i <= Math.max(y1, y2)
    ) {
      yArr[x1] = 'x';
    }
    return yArr;
  });
}
function assertLineParams({x1, y1, x2, y2, extra, lineNum, canv, xMatch, yMatch}) {
  assert.equal(extra.length, 0, 'Extra params to Line command detected' + showLine(lineNum));
  assert.equal(typeof x1, 'number', 'Line x1 is not a number' + showLine(lineNum));
  assert(x1 >= 0, 'Line x1 must be >= 0' + showLine(lineNum));
  assert(canv[0], 'Canvas has a height' + showLine(lineNum));
  assert(x1 <= canv[0].length, 'Line x1 must be <= canvas width' + showLine(lineNum));
  assert.equal(typeof y1, 'number', 'Line y1 is not a number' + showLine(lineNum));
  assert(y1 >= 0, 'Line y1 must be >= 0' + showLine(lineNum));
  assert(y1 <= canv.length, 'Line y1 must be <= canvas height' + showLine(lineNum));
  assert.equal(typeof x2, 'number', 'Line x2 is not a number' + showLine(lineNum));
  assert(x2 >= 0, 'Line x2 must be >= 0' + showLine(lineNum));
  assert(x2 <= canv[0].length, 'Line x2 must be <= canvas width' + showLine(lineNum));
  assert.equal(typeof y2, 'number', 'Line y2 is not a number' + showLine(lineNum));
  assert(y2 >= 0, 'Line y2 must be >= 0' + showLine(lineNum));
  assert(y2 <= canv.length, 'Line y2 must be <= canvas height' + showLine(lineNum));
  assert(xMatch || yMatch, 'x or y params do not match' + showLine(lineNum));
  assert(!(xMatch && yMatch), 'x or y params do not match' + showLine(lineNum));
}

module.exports = drawLine;
