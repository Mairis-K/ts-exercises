import { reverseArray } from "./index";

describe("Reverse array", () => {
  test("number array", () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("string array", () => {
    expect(reverseArray(['I', 'AM', 'HERE'])).toEqual(["HERE", "AM", "I"]);
  });
});