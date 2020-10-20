import { removeWhitespace } from "./index";

describe("Remove whitespace", () => {
  test("from the end", () => {
    expect(removeWhitespace("A good day it was   ")).toEqual("A good day it was");
  });

  test("from the start", () => {
    expect(removeWhitespace("  A good day it was")).toEqual("A good day it was");
  });

  test("from both sides", () => {
    expect(removeWhitespace("  A good day it was   ")).toEqual("A good day it was");
  });
});