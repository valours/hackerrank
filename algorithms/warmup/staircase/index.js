module.exports = (input) => {
  const output = [];
  for (let l = 0; l < input; l++) {
    let line = '';
    for (let i = 0; i < input; i++) {
      if (i < input - l) {
        line = line.concat('#');
      } else {
        line = line.concat(' ');
      }
    }
    output.push(line);
  }
  return output;
};
