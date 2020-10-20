import { arrayToString } from "./index";

describe("Convert array to string", () => {
  test("one word", () => {
    expect(arrayToString(["Cat"])).toEqual("Cat");
  });

  test("multiple words", () => {
    expect(arrayToString(["Cat", "rabbit", "mouse"])).toEqual("Cat, rabbit, mouse");
  });

  test("multiple words with spaces and symbols", () => {
    expect(arrayToString(["Meow", "meow!"])).toEqual("Meow, meow!");
  });
});
3