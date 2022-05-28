import staircase from "./staircase";

it("staircase", () => {
  // given
  const n = 6;

  // when
  const result = staircase(n);

  // then
  const argsExpected = [
    "     #",
    "    ##",
    "   ###",
    "  ####",
    " #####",
    "######",
  ];
  expect(result).toEqual(argsExpected);
});
