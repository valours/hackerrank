import plusMinus from "./plusMinus";

describe("plusMinus", () => {
  it("Sample Test case 0", () => {
    // given
    const input = [-4, 3, -9, 0, 4, 1];

    // when
    const result = plusMinus(input);

    // then
    expect(result).toEqual(["0.500000", "0.333333", "0.166667"]);
  });

  it("Sample Test case 1", () => {
    // given
    const input = [1, 2, 3, -1, -2, -3, 0, 0];

    // when
    const result = plusMinus(input);

    // then
    expect(result).toEqual(["0.375000", "0.375000", "0.250000"]);
  });
});
