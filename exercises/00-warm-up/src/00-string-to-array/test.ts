import { stringToArray } from "./index";

describe("Convert string to array", () => {
  test("one word", () => {
    expect(stringToArray("Cat")).toEqual(["C", "a", "t"]);
  });

  test("multiple words", () => {
    expect(stringToArray("Cat said meow")).toEqual(["C", "a", "t", " ", "s", "a", "i", "d", " ", "m", "e", "o", "w"]);
  });

  test("multiple words with spaces and symbols", () => {
    expect(stringToArray("Meow, meow!")).toEqual(["M", "e", "o", "w", ",", " ", "m", "e", "o", "w", "!"]);
  });
});
3