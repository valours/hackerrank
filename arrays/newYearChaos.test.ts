import minimumBribes from "./newYearChaos";

test("new year chaos", () => {
  // given
  const queue = [2, 1, 5, 3, 4];

  // when
  const result = minimumBribes(queue);

  // then
  expect(result).toEqual(3);
});
