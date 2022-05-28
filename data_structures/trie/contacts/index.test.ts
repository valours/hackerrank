import contacts from ".";

test.skip("contacts", () => {
  // given
  const queries = [
    ["add", "hack"],
    ["add", "hackerrank"],
    ["find", "hac"],
    ["find", "hak"],
  ];
  const output = [2, 0];

  // when
  const c = contacts(queries);

  // then
  expect(c).toEqual(output);
});
