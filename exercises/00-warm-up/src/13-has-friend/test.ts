import { hasFriend } from "./index";

describe("Find if array contains friend", () => {
  test("has friend", () => {
    expect(hasFriend(["enemy", "friend", "enemy"])).toEqual(true);
  });

  test("has no friend", () => {
    expect(hasFriend(["enemy", "enemy"])).toEqual(false);
  });
});