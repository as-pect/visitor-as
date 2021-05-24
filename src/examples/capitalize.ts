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
    const oldValue = node.value; 
    node.value = node.value.toUpperCase();
    this.stdout.write(oldValue + " -> " + node.value + "\n");
  }
  
  visitTemplateLiteralExpression(node: TemplateLiteralExpression): void {
    if (node.parts.length == 1 && node.expressions.length == 0){
      const oldValue = node.parts[0];
      node.parts[0] = node.parts[0].toUpperCase();
      this.stdout.write(oldValue + " -> " + node.parts[0] + "\n");
    }
  }
}

export = registerDecorator(new CapitalizeVisitor());
