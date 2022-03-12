"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  arr.sort();

  const subMin = [...arr];
  subMin.pop();

  const subMax = [...arr];
  subMax.shift();

  const add = (accumulator, currentValue) => accumulator + currentValue;

  return [subMin.reduce(add), subMax.reduce(add)].join(" ");
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  miniMaxSum(arr);
}

module.exports = miniMaxSum;
