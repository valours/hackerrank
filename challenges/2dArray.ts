const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  // inputString = inputString
  //   .replace(/\s*$/, "")
  //   .split("\n")
  //   .map((str) => str.replace(/\s*$/, ""))
  //   .concat("");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function hourglassSum(arr) {
  const [line] = arr;
  const x = line.length;

  const flat = [].concat.apply([], arr);
  const indexesValid = [].concat.apply(
    [],
    arr
      .filter((_, indexLine) => indexLine < arr.length - 2)
      .map((line, indexLine) =>
        line.map((_, index) => index + x * indexLine).slice(0, line.length - 2)
      )
  );
  const result = flat.reduce((acc, item, index, ar) => {
    if (index <= ar.length - x * 2 + 2 && indexesValid.includes(index)) {
      const resultTemp = ar
        .slice(index, index + 3)
        .concat(ar.slice(index + x + 1, index + x + 2))
        .concat(ar.slice(index + 2 * x, index + 2 * x + 3))
        .reduce((acc, item) => acc + item, 0);
      return resultTemp > acc || acc === undefined ? resultTemp : acc;
    }
    return acc;
  }, undefined);

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(`${result}\n`);

  ws.end();
}

export default hourglassSum;
