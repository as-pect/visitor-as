import { compileAndInit, compileExample } from "./setup";
import { ASTBuilder, SimpleParser } from "../src";

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

const GENERIC: string = `
@list
class GenericMethods {
  nonGeneric(): void {}

  foo<T>(t: T): void {}

  faa<A,B>(): string { return "hello"; }

  orNull(): string | null { return null; }

  orNullMap(): Map<string, string | null> | null {
    return null;
  }
}
`

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
  it("should list methods", () => {
    expect(compileExample(GENERIC, "./src/examples/list.ts")).toStrictEqual([
      "nonGeneric: () => void",
      "foo<T>: (t: T) => void",
      "faa<A, B>: () => string",
      "orNull: () => string | null",
      "orNullMap: () => Map<string, string | null> | null",
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

describe('hello world transform', () => {
  it("should not throw", () => {
    compileAndInit("assert(foo() == 'hello world', 'should equal')", "./src/examples/functionCallTransform.ts")
  });
  it("should handle \`'s", () => {
    compileAndInit("assert(foo() == `hello world`, 'should equal')", "./src/examples/functionCallTransform.ts")
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

const foo = `
class Foo {
  f: i32 = 0;
}
`


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

  describe("top level", () => {
    let _class: any;
    beforeEach(() => {
      _class = SimpleParser.parseTopLevelStatement(foo);
    });

    it("should have a field", () => {
      expect(_class.members.length).toBe(1);
      expect(_class.members[0].name.range.toString()).toBe("f");
    });

    it("should be able to add member", () => {
      let method = `
      getF(): i32 { return this.f; }
      `
      let methodAST = SimpleParser.parseClassMember(method, _class);
      _class.members.push(methodAST);
      expect(_class.members[1].name.text).toBe("getF");
    })
  })

});



