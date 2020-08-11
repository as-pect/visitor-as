import {compileAndRun} from "./setup";


describe('hello world transform', () => {
  it("should not throw", () => {
    compileAndRun("assert(foo() == 'hello world', 'should equal')", "./src/examples/functionCallTransform.ts")
  });
});