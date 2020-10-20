import { roundUp } from "./index";

describe("Round up", () => {
  test("test case 1", () => {
    expect(roundUp(1.25)).toEqual(2);
  });

  test("test case 2", () => {
    expect(roundUp(5.336)).toEqual(6);
  });
});