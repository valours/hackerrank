const diagonalDifference = require("./diagonalDifference");

it("diagonal difference", () => {
  // given
  const input = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  // when
  const result = diagonalDifference(input);

  // then
  expect(result).toEqual(15);
});
