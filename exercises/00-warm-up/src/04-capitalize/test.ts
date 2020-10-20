import { capialize } from "./index";

describe("Capitalize", () => {
  test("sentence", () => {
    expect(capialize("The first oranges weren’t orange")).toEqual("THE FIRST ORANGES WEREN’T ORANGE");
  });

  test("number", () => {
    expect(capialize("1a337bo")).toEqual("1A337BO");
  });
});