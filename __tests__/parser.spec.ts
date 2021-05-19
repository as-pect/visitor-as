import { ASTBuilder, SimpleParser } from "../src";

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



