const miniMaxSum = (arr: any[]) => {
  const arrayStored = arr.sort();

  const subMin = [...arrayStored];
  subMin.pop();

  const subMax = [...arrayStored];
  subMax.shift();

  const add = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;

  const result = [subMin.reduce(add), subMax.reduce(add)].join(" ");

  // console.log(result);

  return result;
};

export default miniMaxSum;
