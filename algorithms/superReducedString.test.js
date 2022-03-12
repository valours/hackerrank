const superReducedString = require("./superReducedString");

it("superReducedString", () => {
  // given
  const input = "aabbcccdd";

  // when
  const result = superReducedString(input);

  // then
  expect(result).toEqual("abcd");
});
