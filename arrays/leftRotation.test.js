const leftRotation = require("./leftRotation");

test("leftRotation", () => {
  // given
  const a = [1, 2, 3, 4, 5];
  const b = 4;

  // when
  const result = leftRotation(a, b);

  // then
  expect(result).toEqual([5, 1, 2, 3, 4]);
});
