import { DecoratorNode, IdentifierExpression, DeclarationStatement, Source } from "./as";

export function isDecorator(name: string): (node: DecoratorNode)=>boolean {
  return (node) =>(<IdentifierExpression>node.name).text === name;
}

export function hasDecorator(node: DeclarationStatement, name: string): boolean {
  // because it could be undefined
  return node.decorators?.some(isDecorator(name)) == true;
}


export function isLibrary(node: Source): boolean {
  return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
}

export function not<T>(fn: (t:T) => boolean): (t:T) => boolean {
  return (t: T) => !fn(t);
}