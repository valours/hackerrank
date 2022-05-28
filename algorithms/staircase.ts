const staircase = (n: number) => {
  const result = [];
  Array(n)
    .fill(0)
    .forEach((_, lineIndex) => {
      const line = Array(n)
        .fill(" ")
        .map((_, itemIndex) => (n - lineIndex > itemIndex + 1 ? " " : "#"))
        .join("");
      result.push(line);
    });
  return result;
};

export default staircase;
