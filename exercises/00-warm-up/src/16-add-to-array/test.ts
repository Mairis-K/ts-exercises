import { addToArray } from "./index";

describe("Add to array", () => {
  test("test case 1", () => {
    expect(addToArray([1, 2, 3])).toEqual([1,2,3,1000]);
  });

  test("test case 2", () => {
    expect(addToArray([100, 200])).toEqual([100, 200, 1000]);
  });
});