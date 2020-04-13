import { compileExample } from "./setup";

const HelloWorldYay: string = `
@capitalize
const hello = \`hello\`;
@capitalize
const world = "world";
@capitalize
const yay = 'yay';
`;

describe("Capitilize", () => {
  it("should handle simple struct", () => {
    expect(
      compileExample(HelloWorldYay, "./src/examples/capitalize.ts")
    ).toStrictEqual(["hello -> HELLO", "world -> WORLD", "yay -> YAY"]);
  });
});
