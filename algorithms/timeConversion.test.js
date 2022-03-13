const timeConversion = require("./timeConversion");

it("Il est 19:05:45", () => {
  // given
  const input = "07:05:45PM";

  // when
  const result = timeConversion(input);

  // then
  const output = "19:05:45";
  expect(result).toEqual(output);
});

it("Il est 19:05:45", () => {
  // given
  const input = "11:05:45PM";

  // when
  const result = timeConversion(input);

  // then
  const output = "23:05:45";
  expect(result).toEqual(output);
});

it("Il est 19:05:45", () => {
  // given
  const input = "12:05:45AM";

  // when
  const result = timeConversion(input);

  // then
  const output = "00:05:45";
  expect(result).toEqual(output);
});
