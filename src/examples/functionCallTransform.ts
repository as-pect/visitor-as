import { TransformVisitor, SimpleParser } from "..";
import { Node, Expression, Parser, CallExpression, IdentifierExpression } from "../../as";
import { not, isLibrary } from '../utils';

class FunctionCallTransform extends TransformVisitor {
  visitCallExpression(node: CallExpression): Expression {
    if (node.expression instanceof IdentifierExpression){
      if (node.expression.text == "foo") {
        console.log("changeing to 'hello world'")
        let res = SimpleParser.parseExpression('"hello world"');
        res.range = node.range;
        console.log(res);
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

export = new FunctionCallTransform();
