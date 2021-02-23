import { compileAndInit } from "./setup";


describe('hello world transform', () => {
  it("should not throw", () => {
    compileAndInit("assert(foo() == 'hello world', 'should equal')", "./src/examples/functionCallTransform.ts")
  });
});