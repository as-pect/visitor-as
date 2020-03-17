import { compileExample } from './setup';


const HelloWorldYay: string = `
const hello = \`hello\`;
const world = "world";
const yay = 'yay';
`



describe("Capitilize", () => {
  it("should handle simple struct", () => {
    expect(compileExample(HelloWorldYay, "./src/examples/capitalize.ts"))
      .toStrictEqual(["HELLO", "WORLD", "YAY"]);
  });
  
});