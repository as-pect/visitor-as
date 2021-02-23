import {
  DecoratorNode,
  IdentifierExpression,
  DeclarationStatement,
  Source,
  Node,
  SourceKind,
  FunctionDeclaration,
  TypeNode,
} from "../as";
import { ASTBuilder } from "./astBuilder";

const cloneDeep: <T>(t: T) => T = require("lodash.clonedeep");

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
  let decl;
  if (node instanceof DeclarationStatement) {
    decl = node;
  } else {
    decl = node.declaration; 
  } 
  // because it could be undefined
  return decl.decorators?.some(isDecorator(name)) == true;
}

export function getDecorator(
  node: DeclarationStatement,
  name: string
): DecoratorNode {
  return node.decorators?.find(isDecorator(name))!;
}

export function isLibrary(node: Source): boolean {
  return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
}

export function not<T>(fn: (t: T) => boolean): (t: T) => boolean {
  return (t: T) => !fn(t);
}

export function toString(node: Node): string {
  return ASTBuilder.build(node);
}

export function cloneNode<T extends Node>(node: T): T {
  return cloneDeep(node);
}

export function isUserEntry(source: Source): boolean {
  return source.sourceKind == SourceKind.USER_ENTRY;
}

export function returnsVoid(node: FunctionDeclaration): boolean {
  return toString(node.signature.returnType) === "void";
}

export function numOfParameters(node: FunctionDeclaration): number {
  return node.signature.parameters.length;
}

export function isEntry(source: Source | Node): boolean {
  return source.range.source.sourceKind == SourceKind.USER_ENTRY;
}

export function isClass(type: Node): boolean {
  return type.kind == NodeKind.CLASSDECLARATION;
}

export function isField(mem: DeclarationStatement) {
  return mem.kind == NodeKind.FIELDDECLARATION;
}

export function typeName(type: TypeNode | ClassDeclaration): string {
  if (!isClass(type)) {
    return toString(type);
  }
  type = <ClassDeclaration>type;
  let className = toString(type.name);
  if (type.isGeneric) {
    className += "<" + type.typeParameters!.map(toString).join(", ") + ">";
  }
  return className;
}