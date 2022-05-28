import strongPassword from "./StrongPassword";

test.skip("The password must be strong", () => {
  // given
  const [length, password] = [3, "Ab1"];

  // when
  const passwordGenerated = strongPassword(length, password);

  // then
  expect(passwordGenerated).toEqual(3);
});
