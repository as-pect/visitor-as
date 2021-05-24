import { Node } from "../as";
import { BaseTransformVisitor } from "./baseTransform";
export declare class RangeTransform extends BaseTransformVisitor {
    private node;
    constructor(node: Node);
    _visit(node: Node): Node;
    static visit(node: Node, from: Node): Node;
}
