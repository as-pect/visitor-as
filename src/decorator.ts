import { PathTransformVisitor, mergeTransformer } from "./transformer";
import {
  ClassDeclaration,
  FieldDeclaration,
  MethodDeclaration,
  Parser,
  VariableDeclaration,
  FunctionDeclaration,
  Source,
  DecoratorNode,
  DeclarationStatement,
} from "../as";
import { decorates, not, isLibrary, getDecorator } from "./utils";

export function registerDecorator(decorator: DecoratorVisitor) {
  TopLevelDecorator.registerVisitor(decorator);
  return TopLevelDecorator;
}

interface DecoratorVisitor extends PathTransformVisitor {
  testDecorator: (node: DecoratorNode) => boolean;
  sourceFilter: (s: Source) => bool;
}

export class TopLevelDecorator extends PathTransformVisitor {
  private static _visitor: DecoratorVisitor;

  static registerVisitor(visitor: DecoratorVisitor): void {
    TopLevelDecorator._visitor = visitor;
  }

  private get visitor(): DecoratorVisitor {
    return TopLevelDecorator._visitor;
  }

  visitDecoratorNode(node: DecoratorNode) {
    if (this.visitor.testDecorator(node)) {
      this.visitor.currentPath = this.currentParentPath;
      this.visitor.visit(this.currentParent);
    }
  }

  afterParse(_: Parser): void {
    mergeTransformer(this, this.visitor);
    this.visit(this.program.sources.filter(this.visitor.sourceFilter));
  }

}

export abstract class Decorator extends PathTransformVisitor {
  /**
   * Default filter that removes library files
   */
  get sourceFilter(): (s: Source) => bool {
    return not(isLibrary);
  }

  abstract get testDecorator(): (node: DecoratorNode) => boolean;

  getDecorator(node: DeclarationStatement): DecoratorNode | null {
    return node.decorators && node.decorators.find(this.testDecorator) || null;
  }
}

export abstract class ClassDecorator extends Decorator {
  abstract visitFieldDeclaration(node: FieldDeclaration): void;
  abstract visitMethodDeclaration(node: MethodDeclaration): void;
  abstract visitClassDeclaration(node: ClassDeclaration): void;
}

export abstract class FunctionDecorator extends Decorator {
  abstract visitFunctionDeclaration(node: FunctionDeclaration): void;
}

export abstract class VariableDecorator extends Decorator {
  abstract visitVariableDeclaration(node: VariableDeclaration): void;
}
