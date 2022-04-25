import { cloneNode, decorates } from "../utils.js";
import { VariableDecorator, registerDecorator } from "../decorator.js";
import { DecoratorNode, StringLiteralExpression, TemplateLiteralExpression, VariableDeclaration, Module, Parser } from "assemblyscript/dist/assemblyscript.js";

class CapitalizeVisitor extends VariableDecorator {
  visitVariableDeclaration(node: VariableDeclaration): void {
    this.visit(node.initializer);
  }

  get decoratorMatcher(): (node: DecoratorNode) => boolean {
    return (node) => decorates(node, "capitalize");
  }

  afterParse(parser: Parser) {
    // console.log(parser.)
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

export default registerDecorator(new CapitalizeVisitor());
