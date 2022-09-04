import diagonalDifference from "./diagonalDifference";

describe("diagonal difference", () => {
  it("Test Case test 0", () => {
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
});
