import { findThirdLetter } from "./index";

describe("Find third letter in a word", () => {
  test("short word", () => {
    expect(findThirdLetter("WATER")).toEqual("T");
  });

  test("long word", () => {
    expect(findThirdLetter("MELLON")).toEqual("L");
  });
});