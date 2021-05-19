import {
  Parser,
  Tokenizer,
  Source,
  SourceKind,
  Expression,
  Statement,
  ClassDeclaration,
  Node,
} from "../as";
import { RangeTransform } from "./transformRange";

export class SimpleParser {
  private static get parser(): Parser { return new Parser() };

  private static getTokenizer(s: string, file: string  = "index.ts"): Tokenizer {
    return new Tokenizer(new Source(SourceKind.USER, file, s));
  }

  static parseExpression(s: string): Expression {
    let res = this.parser.parseExpression(this.getTokenizer(s));
    if (res == null) {
      throw new Error("Failed to parse the expression: '" + s + "'");
    }
    return res;
  }

  static parseStatement(s: string, topLevel = false): Statement {
    let res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
    if (res == null) {
      throw new Error("Failed to parse the statement: '" + s + "'");
    }
    return res;
  }

  static parseClassMember(s: string, _class: ClassDeclaration): Node {
    let res = this.parser.parseClassMember(this.getTokenizer(s, _class.range.source.normalizedPath), _class);
    if (res == null) {
      throw new Error("Failed to parse the class member: '" + s + "'");
    }
    return RangeTransform.visit(res, _class);
  }
}
