import { ASTTransformVisitor } from '../transformer';
import { isLibrary, not } from '../utils';
import {
    ClassDeclaration,
    Program,
    FieldDeclaration, 
    FieldPrototype, 
    MethodDeclaration,
    StringLiteralExpression,
    Parser,
    Source
} from '../as';



class CapitalizeVisitor extends ASTTransformVisitor {


    visitStringLiteralExpression(node: StringLiteralExpression): void {
      node.value = node.value.toUpperCase();
      this.stdout.write(node.value + "\n");
    }

    afterInitialize(program: Program): void {
      const sources = program.sources.filter(not(isLibrary));
      this.visit(sources);
    }
}

export = CapitalizeVisitor;