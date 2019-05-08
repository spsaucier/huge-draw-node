function showLine(lineNum) {
  return typeof lineNum === 'undefined' ? '' : ` -- L${lineNum}`;
}

function getOutput(matrix) {
  let output = '';
  for (let index = 0; index <= matrix[0].length + 1; index++) {
    output += '-';
  }
  output += '\n';
  matrix.forEach(yArr => {
    output += '|';
    output += yArr.map(x => x).join('');
    output += '|';
    output += '\n';
  });
  for (let index = 0; index <= matrix[0].length + 1; index++) {
    output += '-';
  }
  output += '\n';
  return output;
}

function floodFill(canvas, x, y, newValue) {
  const matrix = [...canvas];
  const matchValue = matrix[y][x];
  // Maintain list of cells to process
  // put the starting cell in the queue
  const queue = [{y, x}];
  let item;

  while (queue.length) {
    item = queue.shift();
    y = item.y;
    x = item.x;
    if (matrix[y][x] === matchValue) {
      matrix[y][x] = newValue;
      // Up
      if (y > 0) {
        queue.push({y: y - 1, x});
      }
      // Down
      if (y + 1 < matrix.length) {
        queue.push({y: y + 1, x});
      }
      // Left
      if (x > 0) {
        queue.push({y, x: x - 1});
      }
      // Right
      if (x + 1 < matrix[y].length) {
        queue.push({y, x: x + 1});
      }
    }
  }
  return matrix;
}


module.exports = {
  showLine,
  getOutput,
  floodFill,
};
