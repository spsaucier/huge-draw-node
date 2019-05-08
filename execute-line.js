const drawCanvas = require('./draw/draw-canvas');
const drawLine = require('./draw/draw-line');
const drawRect = require('./draw/draw-rect');
const bucketFill = require('./draw/bucket-fill');

const updateCanvas = {
  C: drawCanvas,
  L: drawLine,
  R: drawRect,
  B: bucketFill,
};

function executeLine(line, lineNumber, canvas) {
  let params = line.split(' ');
  const instructionType = params[0];
  params.shift();
  switch (instructionType) {
    case 'B':
      break;
    case 'C':
      // Convert to number
      params = params.map(param => +param);
      break;
    default:
      // Convert to number & use base 0
      params = params.map(param => +param - 1);
      break;
  }
  canvas = updateCanvas[instructionType](params, lineNumber, canvas);
  return canvas;
}

module.exports = executeLine;
