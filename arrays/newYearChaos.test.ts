import minimumBribes from "./newYearChaos";

// TODO: clean that tests
describe("New Year Chaos", () => {
  it("damn", () => {
    // given
    const queue = [2, 1, 5, 3, 4];

    // when
    const result = minimumBribes(queue);

    // then
    expect(result).toEqual(3);
  });

  it("damn", () => {
    // given
    const queue = [2, 5, 1, 3, 4];

    // when
    const result = minimumBribes(queue);

    // then
    expect(result).toEqual(7);
  });
});
