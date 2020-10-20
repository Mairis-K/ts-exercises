import { replaceCommas } from "./index";

describe("Replace commas with question marks", () => {
  test("one comma", () => {
    expect(replaceCommas("Peanut butter, Sandwich")).toEqual("Peanut butter? Sandwich");
  });

  test("multiple commas", () => {
    expect(replaceCommas("Go, Where,,,")).toEqual("Go? Where???");
  });
});