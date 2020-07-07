import { SimpleParser, ASTBuilder } from '../src';

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
