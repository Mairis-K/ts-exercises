import { shortenWord } from "./index";

describe("Shorten word", () => {
  test("a long word", () => {
    expect(shortenWord("Earthquake")).toEqual("Ear");
  });

  test("a not so long word", () => {
    expect(shortenWord("Getto")).toEqual("Get");
  });
});