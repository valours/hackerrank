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

// Complete the staircase function below.
function staircase(n) {
  Array(n)
    .fill()
    .forEach((_, lineIndex) => {
      const line = Array(n)
        .fill(' ')
        .map((_, itemIndex) => (n - lineIndex > itemIndex + 1 ? ' ' : '#'))
        .join('');
      console.log(line);
    });
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}

module.exports = staircase;
