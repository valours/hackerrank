import dArray from "./2dArray";

test("case n°1", () => {
  // given
  const n = [
    [0, 4, 3],
    [2, 1, 0],
    [8, 6, 6],
  ];

  // when
  const result = dArray(n);

  // then
  expect(result).toBe(28);
});

test("case n°2", () => {
  // given
  const n = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];

  // when
  const result = dArray(n);

  // then
  expect(result).toBe(28);
});

test("case n°3", () => {
  // given
  const n = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 2, 4, 4],
    [0, 0, 0, 0, 2, 0],
    [0, 0, 0, 1, 2, 4],
  ];

  // when
  const result = dArray(n);

  // then
  expect(result).toBe(19);
});

test("case n°3", () => {
  // given
  const n = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7],
  ];

  // when
  const result = dArray(n);

  // then
  expect(result).toEqual(-19);
});

test("case n°4", () => {
  // given
  const n = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ];

  // when
  const result = dArray(n);

  // then
  expect(result).toBe(0);
});
