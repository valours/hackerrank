module.exports = (input) => {
  const positiveNumber = input.filter(n => n > 0);
  const negativeNumber = input.filter(n => n < 0);
  const zero = input.filter(n => n === 0);
  const il = input.length;
  const output = [
    Number(parseFloat((1 / il) * positiveNumber.length)).toPrecision(6),
    Number(parseFloat((1 / il) * negativeNumber.length)).toPrecision(6),
    Number(parseFloat((1 / il) * zero.length)).toPrecision(6),
  ];
  return output;
};
