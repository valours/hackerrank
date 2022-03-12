const strongPassword = require("./StrongPassword");

it.skip("The password must be strong", () => {
  // given
  const input = [3, "Ab1"];

  // when
  const password = strongPassword(...input);

  // then
  expect(password).toEqual(3);
});
