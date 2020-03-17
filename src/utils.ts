import { DecoratorNode, IdentifierExpression, DeclarationStatement } from "./assemblyscript";

export function isDecorator(name: string): (node: DecoratorNode)=>boolean {
  return (node) =>(<IdentifierExpression>node.name).text === name;
}

export function hasDecorator(node: DeclarationStatement, name: string): boolean {
  // because it could be undefined
  return node.decorators?.some(isDecorator(name)) == true;
}
