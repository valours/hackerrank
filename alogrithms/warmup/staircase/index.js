module.exports = (input) => {
  const output = [];
  for (let l = 0; l < input; l++) {
    let line = '';
    for (let i = 0; i < input; i++) {
      console.log('line', l);
      if (i < input - l) {
        line = line.concat('#');
      } else {
        line = line.concat(' ');
      }
      console.log('line', line);
    }
    output.push(line);
  }
  return output;
};
