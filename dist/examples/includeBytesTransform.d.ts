import { TransformVisitor } from "..";
import { Expression, Parser, CallExpression } from "../../as";
declare class InncludeBytesTransform extends TransformVisitor {
    visitCallExpression(node: CallExpression): Expression;
    afterParse(_: Parser): void;
}
declare const _default: InncludeBytesTransform;
export = _default;
