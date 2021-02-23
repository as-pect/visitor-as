import { helloWorld } from "./strings";

describe("Capitalize Visitor", () => {
  it("hello world --> HELLO WORLD", () => {
    expect(helloWorld()).toBe("HELLO WORLD");
  });
});
