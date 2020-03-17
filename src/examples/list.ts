import { ASTTransformVisitor } from '../transformer';
import {
    ClassDeclaration,
    Program,
    FieldDeclaration, 
    FieldPrototype, 
    MethodDeclaration
} from '../as';
import { hasDecorator } from '../utils';



class ListVisitor extends ASTTransformVisitor {

    visitFieldDeclaration(node: FieldDeclaration): void {
        const mem = <FieldPrototype>this.program.getElementByDeclaration(node);
        const name = mem.name;
        const _type = this.program.resolver.resolveType(mem.typeNode!, mem)!;
        this.stdout.write(name + ": " + _type.toString() + "\n");
    }

    visitMethodDeclaration(node: MethodDeclaration): void { }

    visitClassDeclaration(node: ClassDeclaration): void {
        if (hasDecorator(node, "list")) {
            super.visit(node.members);
        }
    }

    afterInitialize(program: Program): void {
        this.visit(program.sources);
    }
}

export = ListVisitor;