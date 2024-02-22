import { compileAndInit, compileExample } from "./setup.js";
import { ASTBuilder, SimpleParser } from "../dist/index.js";
import mocha from "mocha"
const { describe, it } = mocha
import { expect } from "chai"

const FOO = `
@list
class Foo {
  a: u8;
  b: bool;
  i: i32;
  c: Animal.Cat;
}
`;

const VEC = `
@list
class Vec3 {
  constructor(public x: f64 = 0, public y: i64 = 0, public z: u32 = 0) {}
}
`;

const GENERIC = `
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
  it("should handle simple struct", async () => {
    expect(await compileExample(FOO, "./dist/examples/list.js")).to.deep.equal([
      "a: u8",
      "b: bool",
      "i: i32",
      "c: Animal.Cat",
    ]);
  });
  it("should list fields defined in constructor", async () => {
    expect(await compileExample(VEC, "./dist/examples/list.js")).to.deep.equal([
      "x: f64",
      "y: i64",
      "z: u32",
    ]);
  });
  it("should list methods", async () => {
    expect(await compileExample(GENERIC, "./dist/examples/list.js")).to.deep.equal([
      "nonGeneric: () => void",
      "foo<T>: (t: T) => void",
      "faa<A, B>: () => string",
      "orNull: () => string | null",
      "orNullMap: () => Map<string, string | null> | null",
    ]);
  });
});

const HelloWorldYay = `
@capitalize
const hello = \`hello\`;
@capitalize
const world = "world";
@capitalize
const yay = 'yay';
`;

describe("Capitilize", () => {
  it("should handle simple struct", async () => {
    expect(
      await compileExample(HelloWorldYay, "./dist/examples/capitalize.js")
    ).to.deep.equal(["hello -> HELLO", "world -> WORLD", "yay -> YAY"]);
  });
});




const EXPORT_AS = `
@exportAs("new")
export function main(): u32 {
  return 42;
}
`

describe("exportAs", () => {
  it("should rename exported function", async () => {
    let res = await compileAndInit(EXPORT_AS, "./dist/examples/exportAs.js");
    expect(res.exports["new"]()).to.equal(42);
  })
})

describe('hello world transform', () => {
  it("should not throw", async () => {
    await compileAndInit("assert(foo() == 'hello world', 'should equal')", "./dist/examples/functionCallTransform.js")
  });
  it("should handle \`'s", async () => {
    await compileAndInit("assert(foo() == `hello world`, 'should equal')", "./dist/examples/functionCallTransform.js")
  });
});

function expr(s) {
  expect(ASTBuilder.build(SimpleParser.parseExpression(s)))
    .to.equal(s)
}

function stmt(s) {
  expect(ASTBuilder.build(SimpleParser.parseStatement(s)))
    .to.equal(s)
}

const foo = `
class Foo {
  f: i32 = 0;
}
`


describe("Parser", () => {
  describe("Expressions", () => {
    it("binary", () => {
      expr("1 + 1");
    });

    it("call", () => {
      expr("callFunction()");
    });
  });

  describe("Statements", () => {
    it("assignment", () => {
      stmt("let x = 1");
    });

  });

  describe("top level", () => {
    let _class;
    beforeEach(() => {
      _class = SimpleParser.parseTopLevelStatement(foo);
    });

    it("should have a field", () => {
      expect(_class.members.length).to.equal(1);
      expect(_class.members[0].name.range.toString()).to.equal("f");
    });

    it("should be able to add member", () => {
      let method = `
      getF(): i32 { return this.f; }
      `
      let methodAST = SimpleParser.parseClassMember(method, _class);
      _class.members.push(methodAST);
      expect(_class.members[1].name.text).to.equal("getF");
    })

    it("should be able to import something", () => {
      SimpleParser.parseTopLevelStatement("import { x } from 'y'");
    });
  })

});



