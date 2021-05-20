import { ASTTransformVisitor } from "..";
import { Parser, ClassDeclaration, FieldDeclaration } from "../../as";
declare class ToStringCallTransform extends ASTTransformVisitor {
    currentClass?: ClassDeclaration;
    fields: string[];
    visitFieldDeclaration(node: FieldDeclaration): void;
    visitClassDeclaration(node: ClassDeclaration): void;
    afterParse(_: Parser): void;
}
export = ToStringCallTransform;
