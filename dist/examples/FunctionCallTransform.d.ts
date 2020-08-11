import { TransformVisitor } from "..";
import { FunctionExpression, Expression, Parser } from "../../as";
declare class FunctionCallTransform extends TransformVisitor {
    visitFunctionExpression(node: FunctionExpression): Expression;
    afterParse(_: Parser): void;
}
declare const _default: FunctionCallTransform;
export = _default;
