import {
  DecoratorNode,
  IdentifierExpression,
  DeclarationStatement,
  Source,
  Node,
  SourceKind,
  ASTBuilder,
  FunctionDeclaration
} from "./as";


// const cloneDeep: <T>(t: T) => T = require("lodash.clonedeep");

export function decorates(node: DecoratorNode, name: string): boolean {
  return (<IdentifierExpression>node.name).text === name;
}

export function isDecorator(name: string): (node: DecoratorNode) => boolean {
  return (node) => decorates(node, name);
}


export function hasDecorator(
  node: DeclarationStatement | {declaration: DeclarationStatement},
  name: string
): boolean {
  let decl: DeclarationStatement;
  if (node instanceof DeclarationStatement) {
    decl = node;
  } else {
    decl = node.declaration; 
  }
  if (decl.decorators == null || decl.decorators.length == 0) {
    return false;
  }
  
  // because it could be undefined
  for ( let i = 0; i < decl.decorators.length; i++ ) {
    if (decorates(decl.decorators[i], name)) {
      return true;
    }
  }
  return false;
}

// export function getDecorator(
//   node: DeclarationStatement,
//   name: string
// ): DecoratorNode {
//   return node.decorators!.find(isDecorator(name))!;
// }

// export function isLibrary(node: Source): bool {
//   return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
// }

export function not<T>(fn: (t: T) => boolean): (t: T) => boolean {
  return (t: T) => !fn(t);
}

export function toString(node: Node): string {
  return ASTBuilder.build(node);
}

// export function cloneNode<T extends Node>(node: T): T {
//   return cloneDeep(node);
// }

export function isUserEntry(source: Source): boolean {
  return source.sourceKind == SourceKind.USER_ENTRY;
}

export function returnsVoid(node: FunctionDeclaration): boolean {
  return toString(node.signature.returnType) === "void";
}

export function numOfParameters(node: FunctionDeclaration): number {
  return node.signature.parameters.length;
}