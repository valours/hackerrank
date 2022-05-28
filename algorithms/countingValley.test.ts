import countingValleys from "./countingValley";

describe("What do you want to describe ?", () => {
  it("UDDDUDUU", () => {
    // given
    const [step, path] = [8, "UDDDUDUU"];

    // when
    const result = countingValleys(step, path);

    // then
    expect(result).toEqual(1);
  });

  it("DDUUDDUDUUUD", () => {
    // given
    const [step, path] = [12, "DDUUDDUDUUUD"];

    // when
    const result = countingValleys(step, path);

    // then
    expect(result).toEqual(2);
  });
});
