const lonelyInteger = (array: number[]): number => {
  const mapByCount: Record<string, number> = {};
  array.map((n) => (mapByCount[n] = (mapByCount[n] || 0) + 1));
  const [result] = Object.entries(mapByCount).find(
    ([_, number]) => number === 1
  ) as [string, number];
  return parseInt(result);
};

export default lonelyInteger;
