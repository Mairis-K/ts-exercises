import { roundTofixed } from "./index";

describe("Round to fixed with 2 decimal places", () => {
  test("test case 1", () => {
    expect(roundTofixed(1.253)).toEqual("1.25");
  });

  test("test case 2", () => {
    expect(roundTofixed(5.3666)).toEqual("5.37");
  });
});