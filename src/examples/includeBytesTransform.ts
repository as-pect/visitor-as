import { TransformVisitor, SimpleParser } from "..";
import { Node, Expression, Parser, CallExpression, IdentifierExpression } from "../../as";
import { not, isLibrary } from '../utils';

import { Transform } from "../../as";

class IncludeBytesTransform extends TransformVisitor {
  visitCallExpression(node: CallExpression): Expression {
    if (node.expression instanceof IdentifierExpression){
      if (node.expression.text == "includeBytes") {
        var argumentFileName=node.args[0].range.toString()
        var data =  this. .visitForStatement.readFile(argumentFileName, this.baseDir);
        let res = SimpleParser.parseExpression('StaticArray.fromArray<u8>([1,2,3,4])');
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

export = new IncludeBytesTransform();
