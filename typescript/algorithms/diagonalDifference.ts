const diagonalDifference = (arr: number[][]): number =>
  arr
    .reduce(
      (acc, cv, i) => [acc[0] + cv[i], acc[1] + cv[cv.length - 1 - i]],
      [0, 0]
    )
    .reduce((_, __, ___, [a, b]) => Math.abs(a - b), 0);

export default diagonalDifference;
