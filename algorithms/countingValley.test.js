const countingValleys = require("./countingValley");

describe("What do you want to describe ?", () => {
  it("UDDDUDUU", () => {
    // given
    const input = [8, "UDDDUDUU"];

    // when
    const result = countingValleys(...input);

    // then
    expect(result).toEqual(1);
  });

  it("DDUUDDUDUUUD", () => {
    // given
    const input = [12, "DDUUDDUDUUUD"];

    // when
    const result = countingValleys(...input);

    // then
    expect(result).toEqual(2);
  });
});
