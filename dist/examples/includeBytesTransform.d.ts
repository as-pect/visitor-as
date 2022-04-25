import { TransformVisitor } from "../index.js";
import { Expression, Parser, CallExpression } from "assemblyscript/dist/assemblyscript.js";
declare class IncludeBytesTransform extends TransformVisitor {
    visitCallExpression(node: CallExpression): Expression;
    afterParse(_: Parser): void;
}
export default IncludeBytesTransform;
