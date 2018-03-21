module.exports = (input) => {
  const positiveNumber = input.filter(n => n > 0);
  const negativeNumber = input.filter(n => n < 0);
  const zero = input.filter(n => n === 0);
  const il = input.length;
  console.log(il);
  const output = [
    ((1 / il) * positiveNumber.length).toFixed(2),
    ((1 / il) * negativeNumber.length),
    ((1 / il) * zero.length),
  ];
  return output;
};
