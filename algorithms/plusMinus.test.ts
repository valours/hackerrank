import plusMinus from "./plusMinus";

it("plusMinus", () => {
  // given
  const input = [-4, 3, -9, 0, 4, 1];

  // when
  const result = plusMinus(input);

  // then
  expect(result).toEqual(["0.500000", "0.333333", "0.166667"]);
});
