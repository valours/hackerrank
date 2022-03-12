module.exports = (input) => {
  const positiveNumber = input.filter((n) => n > 0);
  const negativeNumber = input.filter((n) => n < 0);
  const zero = input.filter((n) => n === 0);
  const il = input.length;
  const output = [
    parseFloat((1 / il) * positiveNumber.length).toFixed(6),
    parseFloat((1 / il) * negativeNumber.length).toFixed(6),
    parseFloat((1 / il) * zero.length).toFixed(6),
  ];
  return output;
};
