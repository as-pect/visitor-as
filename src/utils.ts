import {
  DecoratorNode,
  IdentifierExpression,
  DeclarationStatement,
  Source,
  Node,
  SourceKind,
  ClassDeclaration,
  TypeNode,
  NodeKind,
  NamedTypeNode,
  InterfaceDeclaration,
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

interface Named {
  name: IdentifierExpression;
}


export function getName(node: Node & Named | TypeNode): string {
  if (node instanceof TypeNode) {
    return node.range.toString();
  }
  if (node instanceof ClassDeclaration || node instanceof InterfaceDeclaration) {
    return className(node);
  }
  return node.name.range.toString();
}

export function cloneNode<T extends Node>(node: T): T {
  return cloneDeep(node);
}

export function isUserEntry(source: Source): boolean {
  return source.sourceKind == SourceKind.USER_ENTRY;
}

export function className(_class: ClassDeclaration |  InterfaceDeclaration): string {
  let name = _class.name.range.toString();
  const typeParameters = _class.typeParameters;
  if (typeParameters) {
    name += `<${typeParameters.map(getName).join(", ")}>`;
  }
  return name;
}

export function isMethodNamed(name: string): (_: DeclarationStatement) => boolean {
  return (stmt: DeclarationStatement) => stmt.kind == NodeKind.METHODDECLARATION && toString(stmt.name) === name;
}

export class StringBuilder {
  private sb: string[] = [];

  push(s: string): void {
    this.sb.push(s);
  }

  finish(separator = "\n"): string {
    let res = this.sb.join(separator);
    this.sb = [];
    return res;
  }

  get  last(): string { return this.sb[this.sb.length -1]}
}