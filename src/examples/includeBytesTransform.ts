import { TransformVisitor, SimpleParser } from "..";
import {
  Expression,
  Parser,
  CallExpression,
  IdentifierExpression,
  LiteralKind,
  StringLiteralExpression,
} from "../../as";
import { not, isStdlib } from "../utils";
import * as path from "path";
import * as fs from "fs";

class IncludeBytesTransform extends TransformVisitor {
  visitCallExpression(node: CallExpression): Expression {
    if (node.expression instanceof IdentifierExpression) {
      if (node.expression.text == "includeBytes") {
        if (!node.args[0].isLiteralKind(LiteralKind.STRING))
          throw "[Error] includeBytes requires a constant literal filename";
        let arg0 = node.args[0] as StringLiteralExpression;
        let filename = path.join(
          path.dirname(node.range.source.normalizedPath),
          arg0.value
        );
        var data;
        try {
          data = fs.readFileSync(filename);
        } catch (e) {
          throw `[Error] includeBytes '${filename}', ${e}`;
        }
        let asJSONString = JSON.stringify(data); // use stringify to convert bytes to text
        let arrayStart = asJSONString.indexOf("["); //find the u8 array inside the JSON string
        let arrayEnd = asJSONString.lastIndexOf("]");
        let newCode =
          "StaticArray.fromArray<u8>(" +
          asJSONString.substring(arrayStart, arrayEnd + 1) +
          ")";
        let res = SimpleParser.parseExpression(newCode); //parse StaticArray.fromArray expression
        res.range = node.range; //same range
        return res; //replace node
      }
    }
    return super.visitCallExpression(node);
  }

  afterParse(_: Parser): void {
    let sources = _.sources.filter(not(isStdlib));
    this.visit(sources);
  }
}

export = IncludeBytesTransform;
