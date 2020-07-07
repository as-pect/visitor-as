import {
  Parser,
  Tokenizer,
  Source,
  SourceKind,
  Expression,
  Statement,
} from "../as";

export class SimpleParser {
  private static parser = new Parser();

  private static getTokenizer(s: string): Tokenizer {
    return new Tokenizer(new Source(SourceKind.USER, "index.ts", s));
  }

  static parseExpression(s: string): Expression {
    let res = this.parser.parseExpression(this.getTokenizer(s));
    if (res == null) {
      throw new Error("Failed to parse the expression: '" + s + "'");
    }
    return res;
  }

  static parseStatement(s: string, topLevel: boolean = false): Statement {
    let res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
    if (res == null) {
      throw new Error("Failed to parse the statement: '" + s + "'");
    }
    return res;
  }
}
