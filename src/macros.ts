import { ASTTransformVisitor, BaseVisitor, mergeTransformer, PathTransformVisitor } from ".";
import { DecoratorNode, FunctionDeclaration, ParameterNode, Parser, Node } from "../as";
import { PathVisitor } from "./path";
import { decorates, numOfParameters, returnsVoid } from "./utils";

export class TopLevelDecorator extends PathTransformVisitor {
  private static _visitor: Set<Node> = new Set();

  visitDecoratorNode(node: DecoratorNode) {
    if (decorates(node, visitor.name)) {
    }
  }

  afterParse(_: Parser): void {
    this.visit(this.program.sources.filter(this.visitor.sourceFilter));
  }

}

export class MacroFinder extends BaseVisitor {

  visitFunctionDeclaration(node: FunctionDeclaration) {
    if (numOfParameters(node) == 1 && !returnsVoid(node)) {
      ClassMacro.isMacro(node.signature.parameters[0]);
    }
  }

  
}

class ClassMacro extends BaseVisitor {
  private isMacro: boolean = false;
  private static singleton: ClassMacro = new ClassMacro();

  static isMacro(node: FunctionDeclaration): boolean {
    this.singleton.isMacro = false;
    this.singleton.visit(node)
    return this.singleton.isMacro
  }

  visitParameterNode(node: ParameterNode): void {
    console.log(node);
  }
}