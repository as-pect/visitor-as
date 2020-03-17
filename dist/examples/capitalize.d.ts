import { ASTTransformVisitor } from '../transformer';
import { Program, StringLiteralExpression } from '../as';
declare class CapitalizeVisitor extends ASTTransformVisitor {
    visitStringLiteralExpression(node: StringLiteralExpression): void;
    afterInitialize(program: Program): void;
}
export = CapitalizeVisitor;
