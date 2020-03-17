import { ASTTransformVisitor } from '../transformer';
import { ClassDeclaration, Program, FieldDeclaration, MethodDeclaration } from '../as';
declare class ListVisitor extends ASTTransformVisitor {
    visitFieldDeclaration(node: FieldDeclaration): void;
    visitMethodDeclaration(node: MethodDeclaration): void;
    visitClassDeclaration(node: ClassDeclaration): void;
    afterInitialize(program: Program): void;
}
export = ListVisitor;
