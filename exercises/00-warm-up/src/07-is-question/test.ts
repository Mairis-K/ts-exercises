import { isQuestion } from "./index";

describe("Find if sentence is a question", () => {
  test("is a question", () => {
    expect(isQuestion("Is this getting harder?")).toEqual(true);
  });

  test("is not a question", () => {
    expect(isQuestion("It is not")).toEqual(false);
  });
});