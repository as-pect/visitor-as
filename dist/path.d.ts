import { Node } from "assemblyscript/dist/assemblyscript.js";
import { BaseVisitor } from "./base.js";
export declare class PathVisitor extends BaseVisitor {
    currentPath: Node[];
    _visit(node: Node): void;
    get currentNode(): Node;
    get currentParent(): Node;
    get currentParentPath(): Node[];
    get currentGrandParentPath(): Node[];
    cloneCurrentNode(): Node;
    replaceCurrentNode(node: Node): void;
}
