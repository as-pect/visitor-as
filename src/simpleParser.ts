import {
  Parser,
  Tokenizer,
  Source,
  SourceKind,
  Expression,
  Statement,
  NamespaceDeclaration,
} from "../as";

export class SimpleParser {

  private static getTokenizer(s: string): Tokenizer {
    return new Tokenizer(new Source(SourceKind.USER, "index.ts", s));
  }

  static parseExpression(s: string): Expression {
    const parser = new Parser();
    let res = parser.parseExpression(this.getTokenizer(s));
    if (res == null) {
      throw new Error("Failed to parse the expression: '" + s + "'");
    }
    return res;
  }

  static parseStatement(s: string, topLevel = false): Statement {
    const parser = new Parser();
    let res = parser.parseStatement(this.getTokenizer(s), topLevel);
    if (res == null) {
      throw new Error("Failed to parse the statement: '" + s + "'");
    }
    return res;
  }

  static parseTopLevelStatement(s: string, namespace?: NamespaceDeclaration | null): Statement {
    const parser = new Parser();
    let res = parser.parseTopLevelStatement(this.getTokenizer(s), namespace);
    if (res == null) {
        throw new Error("Failed to parse the top level statement: '" + s + "'");
    }
    return res;
}
}
