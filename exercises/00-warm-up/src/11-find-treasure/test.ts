import { findTreasure } from "./index";

describe("Find treasure", () => {
  test("no treasure", () => {
    expect(findTreasure(['sand', 'sand', 'sand'])).toEqual(-1);
  });

  test("at the start", () => {
    expect(findTreasure(['treasure', 'sand', 'sand', 'boot'])).toEqual(0);
  });

  test("in the middle", () => {
    expect(findTreasure(['sand', 'sand', 'treasure', 'sand', 'boot'])).toEqual(2);
  });
});