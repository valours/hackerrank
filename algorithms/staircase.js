module.exports = (input) => {
  const output = [];
  const line = Array.from({ length: input }, () => ' ');
  for (let l = input; l > 0; l-- ) {
    const currentLine = line;
    currentLine[l - 1] = '#';
    output.push(currentLine.slice().join(''));
  }
  return output;
};
