import lonelyInteger from "./lonelyInteger";

describe("lonelyInteger", () => {
  it("Sample Test case 0", () => {
    // given
    const input = [1];

    // when
    const result = lonelyInteger(input);

    // then
    expect(result).toEqual(1);
  });

  it("Sample Test case 1", () => {
    // given
    const input = [1, 1, 2];

    // when
    const result = lonelyInteger(input);

    // then
    expect(result).toEqual(2);
  });

  it("Sample Test case 2", () => {
    // given
    const input = [0, 0, 1, 2, 1];

    // when
    const result = lonelyInteger(input);

    // then
    expect(result).toEqual(2);
  });
});
