import { getName } from "./index";

describe("Get name", () => {
  test("test case one", () => {
    expect(getName({ name: 'Violet', age: 12 })).toEqual('Violet');
  });

  test("test case two", () => {
    expect(getName({ name: 'Count Olaf', age: 56 })).toEqual('Count Olaf');
  });
});