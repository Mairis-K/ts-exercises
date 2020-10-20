import { filterApples } from "./index";

describe("Filter for apples", () => {
  test("no apples", () => {
    expect(filterApples(["pie", "pie"])).toEqual([]);
  });

  test("one apple", () => {
    expect(filterApples(["pie", "apple"])).toEqual(["apple"]);
  });

  test("multiple apples", () => {
    expect(filterApples(["apple", "MELLON", "apple", "apple"])).toEqual(["apple", "apple", "apple"]);
  });
});