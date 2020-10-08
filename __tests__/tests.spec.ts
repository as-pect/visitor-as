import { compile, compileAndInit, compileExample } from "./setup";
import { SimpleParser, ASTBuilder } from '../src';

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


function expr(s: string): void {
  expect(ASTBuilder.build(SimpleParser.parseExpression(s)))
    .toBe(s)
}

function stmt(s: string): void {
  expect(ASTBuilder.build(SimpleParser.parseStatement(s)))
    .toBe(s)
}

describe("Parser", () => {
  describe("Expressions", () => {
    it("binary", ()=>{
      expr("1 + 1");
    });

    it("call", () => {
      expr("callFunction()");
    });
  });

  describe("Statements", () => {
    it("assignment", ()=>{
      stmt("let x = 1");
    });

  });

});

const EXPORT_AS = `
@exportAs("new")
export function main(): u32 {
  return 42;
}
`

describe("exportAs", () => {
  it("should rename exported function", () => {
    let res = compileAndInit(EXPORT_AS, "./src/examples/exportAs.ts");
    expect((<any>res.exports)["new"]()).toBe(42);
  })
})