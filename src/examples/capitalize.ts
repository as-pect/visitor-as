import { cloneNode } from "../utils";
import { VariableDecorator, registerDecorator } from "../decorator";
import { StringLiteralExpression, TemplateLiteralExpression, VariableDeclaration } from "../../as";

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
  
  visitTemplateLiteralExpression(node: TemplateLiteralExpression): void {
    if (node.parts.length == 1 && node.expressions.length == 0){
      const newNode = cloneNode(node);
      newNode.parts[0] = node.parts[0].toUpperCase();
      this.replaceCurrentNode(newNode);
      this.stdout.write(node.parts[0] + " -> " + newNode.parts[0] + "\n");
    }
  }
}

export = registerDecorator(new CapitalizeVisitor());
