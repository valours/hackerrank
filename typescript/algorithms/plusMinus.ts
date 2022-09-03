const plusMinus = (arr: Number[]) => {
  const arraySize = arr.length;

  const positiveNumber = arr.filter((n) => n > 0);
  const negativeNumber = arr.filter((n) => n < 0);
  const zero = arr.filter((n) => n === 0);

  const ratioPositive = (1 / arraySize) * positiveNumber.length;
  const ratioNegative = (1 / arraySize) * negativeNumber.length;
  const ratioNull = (1 / arraySize) * zero.length;

  const roundToSixDecimal = (n: number): string => n.toFixed(6);

  const result = [ratioPositive, ratioNegative, ratioNull].map(
    roundToSixDecimal
  );

  result.map((r) => console.log(r));

  return result;
};

export default plusMinus;
