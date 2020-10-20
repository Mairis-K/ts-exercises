import { isNumber } from "./index";

describe("Check if value is number", () => {
  test("is a number", () => {
    expect(isNumber(15)).toEqual(true);
  });

  test("is not a number", () => {
    expect(isNumber("Laptop")).toEqual(false);
  });
});