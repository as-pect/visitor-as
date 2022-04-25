import { TransformVisitor } from "../index.js";
import { Expression, Parser, CallExpression } from "assemblyscript/dist/assemblyscript.js";
declare class FunctionCallTransform extends TransformVisitor {
    visitCallExpression(node: CallExpression): Expression;
    afterParse(_: Parser): void;
}
declare const _default: FunctionCallTransform;
export default _default;
