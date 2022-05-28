const miniMaxSum = (arr: any[]) => {
  arr.sort();

  const subMin = [...arr];
  subMin.pop();

  const subMax = [...arr];
  subMax.shift();

  const add = (accumulator, currentValue) => accumulator + currentValue;

  return [subMin.reduce(add), subMax.reduce(add)].join(" ");
};

export default miniMaxSum;
