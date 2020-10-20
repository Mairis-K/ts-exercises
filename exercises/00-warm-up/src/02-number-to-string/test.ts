import { numberToString } from "./index";

describe("Convert number to string", () => {
  test("number", () => {
    expect(numberToString(123)).toEqual("123");
  });

  test("decimal number", () => {
    expect(numberToString(1.543)).toEqual("1.543");
  });
});