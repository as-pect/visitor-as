import { ASTTransformVisitor } from "../index.js";
import { Parser, ClassDeclaration, FieldDeclaration } from "assemblyscript/dist/assemblyscript.js";
declare class ToStringCallTransform extends ASTTransformVisitor {
    currentClass?: ClassDeclaration;
    fields: string[];
    visitFieldDeclaration(node: FieldDeclaration): void;
    visitClassDeclaration(node: ClassDeclaration): void;
    afterParse(_: Parser): void;
}
export default ToStringCallTransform;
