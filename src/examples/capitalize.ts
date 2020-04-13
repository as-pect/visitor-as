import { cloneNode } from "../utils";
import { VariableDecorator, registerDecorator } from "../decorator";
import { StringLiteralExpression, VariableDeclaration } from "../../as";

class CapitalizeVisitor extends VariableDecorator {
  visitVariableDeclaration(node: VariableDeclaration): void {
    this.visit(node.initializer);
  }

  get name(): string {
    return "capitalize";
  }

  visitStringLiteralExpression(node: StringLiteralExpression): void {
    const newNode = cloneNode(node);
    newNode.value = node.value.toUpperCase();
    this.replaceCurrentNode(newNode);
    this.stdout.write(node.value + " -> " + newNode.value + "\n");
  }
}

export = registerDecorator(new CapitalizeVisitor());
