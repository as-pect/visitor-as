import { TransformVisitor, SimpleParser } from "../index.js";
import { Node, Expression, Parser, CallExpression, IdentifierExpression } from "assemblyscript/dist/assemblyscript.js";
import { not, isLibrary } from '../utils.js';

class FunctionCallTransform extends TransformVisitor {
  visitCallExpression(node: CallExpression): Expression {
    if (node.expression instanceof IdentifierExpression){
      if (node.expression.text == "foo") {
        let res = SimpleParser.parseExpression('"hello world"');
        res.range = node.range;
        return res;
      }
    }
    return super.visitCallExpression(node);
  }

  afterParse(_: Parser): void {
    let sources = _.sources.filter(not(isLibrary));
    this.visit(sources);
  }
}

export default new FunctionCallTransform();
