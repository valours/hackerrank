import camelCase from "./camelCase";

test("camel case", () => {
  // given
  const input = "saveChangesInTheEditor";

  // when
  const result = camelCase(input);

  // then
  expect(result).toEqual(5);
});
