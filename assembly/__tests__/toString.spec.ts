import { Obj } from "../obj";

describe("Obj", () => {
  it("should print nicely", ()=> {
    expect((new Obj()).toString()).toStrictEqual(`Obj:\n\ta: 34\n\tb: 1111111\n\tc: hello,wassup`)
  });
})