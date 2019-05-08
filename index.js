const fs = require('fs');
const rl = require('readline');
const assert = require('assert');
const executeLine = require('./execute-line');
const {getOutput} = require('./utils');

let canvas = [];
let lineNumber = 0;
let output = '';

// Begin file reading & handling
const rs = fs.createReadStream('input.txt')
  .on('error', e => console.error(e));

rl.createInterface({input: rs})
  .on('line', line => {
    // Ensure that we start with a canvas instruction
    if (lineNumber === 0) {
      assert.equal(line.split(' ')[0], 'C', 'First line needs to be a canvas (C)');
    }
    canvas = executeLine(line, lineNumber + 1, canvas);
    output += getOutput(canvas);
    lineNumber++;
  })
  .on('close', () => {
    fs.writeFile('output.txt', output, err =>
      err ? console.error(err) : console.log(output)
    );
  });
