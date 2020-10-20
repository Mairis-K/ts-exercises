import { divideAll } from "./index";

describe("Divide all numbers in array by 2", () => {
  test("test case 1", () => {
    expect(divideAll([2, 4, 6])).toEqual([1, 2, 3]);
  });

  test("test case 2", () => {
    expect(divideAll([8, 2, 10])).toEqual([4, 1, 5]);
  });
});