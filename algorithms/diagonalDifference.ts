const diagonalDifference = (arr) => {
  const [a, b] = arr.reduce(
    (acc, cv, i) => [acc[0] + cv[i], acc[1] + cv[cv.length - 1 - i]],
    [0, 0]
  );
  return Math.abs(a - b);
};

export default diagonalDifference;
