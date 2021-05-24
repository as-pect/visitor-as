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

export function className(_class: ClassDeclaration): string {
  let name = _class.name.range.toString();
  const typeParameters = _class.typeParameters;
  if (typeParameters) {
    name += `<${typeParameters.map(p => p.range.toString()).join(", ")}>`;
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