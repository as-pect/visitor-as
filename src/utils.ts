import {
  DecoratorNode,
  IdentifierExpression,
  DeclarationStatement,
  Source,
  Node,
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
  node: DeclarationStatement,
  name: string
): boolean {
  // because it could be undefined
  return node.decorators?.some(isDecorator(name)) == true;
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
