import miniMaxSum from "./miniMaxSum";

describe("miniMaxSum", () => {
  it("return '10 14' for [1, 2, 3, 4, 5]", () => {
    // given
    const n = [1, 2, 3, 4, 5];

    // when
    const result = miniMaxSum(n);

    // then
    expect(result).toEqual("10 14");
  });

  it("return '299 9271' for [1, 2, 3, 4, 5]", () => {
    // given
    const n = [7, 69, 2, 221, 8974];

    // when
    const result = miniMaxSum(n);

    // then
    expect(result).toEqual("299 9271");
  });
});
