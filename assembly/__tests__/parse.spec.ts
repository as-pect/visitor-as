import { SimpleParser } from "../simpleParser";
import { toString } from "../utils";

describe("parser", () => {
  it("should be reversable", () => {
    let s = `
    let x: u8 = 42;
    `
    let res = SimpleParser.parseStatement(s, true); 
    expect(toString(res)).toBe(s.trim());
  })
})