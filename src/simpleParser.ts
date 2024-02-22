import {
  Parser,
  Tokenizer,
  Source,
  SourceKind,
  Expression,
  Statement,
  NamespaceDeclaration,
  ClassDeclaration,
  DeclarationStatement,
} from "assemblyscript/dist/assemblyscript.js";

export class SimpleParser {
  private static get parser(): Parser {
    return new Parser();
  }

  private static getTokenizer(s: string, file: string = "index.ts"): Tokenizer {
    return new Tokenizer(new Source(SourceKind.User, file, s));
  }

  static parseExpression(s: string): Expression {
    const res = this.parser.parseExpression(this.getTokenizer(s));
    if (res == null) {
      throw new Error("Failed to parse the expression: '" + s + "'");
    }
    return res;
  }

  static parseStatement(s: string, topLevel = false): Statement {
    const res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
    if (res == null) {
      throw new Error("Failed to parse the statement: '" + s + "'");
    }
    return res;
  }

  static parseTopLevelStatement(
    s: string,
    namespace?: NamespaceDeclaration | null
  ): Statement {
    const t = this.getTokenizer(s);
    const p = this.parser;
    p.currentSource = t.source;
    const res = p.parseTopLevelStatement(t, namespace);
    if (res == null) {
      throw new Error("Failed to parse the top level statement: '" + s + "'");
    }
    return res;
  }

  static parseClassMember(s: string, _class: ClassDeclaration): DeclarationStatement {
    let res = this.parser.parseClassMember(
      this.getTokenizer(s, _class.range.source.normalizedPath),
      _class
    );
    if (res == null) {
      throw new Error("Failed to parse the class member: '" + s + "'");
    }
    return <DeclarationStatement>res;
  }
}
