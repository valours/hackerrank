const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function hourglassSum(arr) {
  const hourglass = arr.reduce((hgs, a, b, ar) => {
    console.log(ar)
  }, []);


  const hourglassCalc = (hg) = hg
    .reduce((acc, line, lineIndex) => acc + (lineIndex === 1 ? line.slice(1, 2) : line)
      .reduce((accLine, item) => accLine + item, 0), 0);

  console.log(hourglassCalc(arr));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(`${result}\n`);

  ws.end();
}

module.exports = hourglassSum;
