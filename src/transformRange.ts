import {Node} from "../as"
import { BaseTransformVisitor } from "./baseTransform";



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