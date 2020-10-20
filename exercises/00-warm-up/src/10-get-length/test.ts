import { getLength } from "./index";

describe("Find the length of an array", () => {
  test("empty array", () => {
    expect(getLength([])).toEqual(0);
  });

  test("short array", () => {
    expect(getLength(["pie", "apple"])).toEqual(2);
  });

  test("long array", () => {
    expect(getLength(["apple", "MELLON", "apple", "apple"])).toEqual(4);
  });
});