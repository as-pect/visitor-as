import { Node } from "assemblyscript/dist/assemblyscript.js"
import { BaseTransformVisitor } from "./baseTransform.js";



export class RangeTransform extends BaseTransformVisitor {
  constructor(private node: Node){super()};

  _visit(node: Node): Node {
    node.range = this.node.range;
    return super._visit(node);
  }

  static visit(node: Node, from: Node): Node {
    return (new RangeTransform(from))._visit(node)

  }
}