import { Node } from "assemblyscript/dist/assemblyscript.js";
import { BaseTransformVisitor } from "./baseTransform.js";
export declare class RangeTransform extends BaseTransformVisitor {
    private node;
    constructor(node: Node);
    _visit(node: Node): Node;
    static visit(node: Node, from: Node): Node;
}
