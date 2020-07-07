import { compileExample } from "./setup";

const FOO: string = `
@list
class Foo {
  a: u8;
  b: bool;
  i: i32;
}
`;

const VEC: string = `
@list
class Vec3 {
  constructor(public x: f64 = 0, public y: i64 = 0, public z: u32 = 0) {}
}
`;

describe("List", () => {
  it("should handle simple struct", () => {
    expect(compileExample(FOO, "./src/examples/list.ts")).toStrictEqual([
      "a: u8",
      "b: bool",
      "i: i32",
    ]);
  });
  it("should list fields defined in constructor", () => {
    expect(compileExample(VEC, "./src/examples/list.ts")).toStrictEqual([
      "x: f64",
      "y: i64",
      "z: u32",
    ]);
  });
});

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
