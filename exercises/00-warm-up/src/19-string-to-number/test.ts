import { stringToNumber } from "./index";

describe("Round to fixed with 2 decimal places", () => {
  test("test case 1", () => {
    expect(stringToNumber("78")).toEqual(78);
  });

  test("test case 2", () => {
    expect(stringToNumber("123")).toEqual(123);
  });
});