import {
  DecoratorNode,
  IdentifierExpression,
  DeclarationStatement,
  Source,
  Node,
  SourceKind,
  Program,
  ClassDeclaration,
  TypeNode,
  NodeKind,
  InterfaceDeclaration,
  FunctionDeclaration,
  TypeName,
  DiagnosticCategory,
  DiagnosticEmitter,
  NamedTypeNode,
  Range,
  util,
} from "../as";
import { ASTBuilder } from "./astBuilder";

const cloneDeep: <T>(t: T) => T = require("lodash.clonedeep") as any;

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

const OR_NULL = /\|.*null/;


export function getName(node: Node & Named | TypeNode): string {
  if (node instanceof TypeNode) {
    if (node instanceof NamedTypeNode) {
      let name = getTypeName(node.name)
      const typeParameters = node.typeArguments;
      if (typeParameters && typeParameters.length > 0) {
        name += `<${typeParameters.map(getName).join(", ")}>`;
      }
      if (node.isNullable && !OR_NULL.test(name)) {
        name = `${name} | null`;
      }
      return name
    } else if (node instanceof TypeName) {
      return toString(node.identifier)
    }
    return "";
  }
  if (node instanceof ClassDeclaration || node instanceof InterfaceDeclaration || node instanceof FunctionDeclaration) {
    return className(node);
  } 
  return toString(node.name);
}


export function getTypeName(node: TypeName): string {
  let name = toString(node.identifier);
  if (node.next) {
    name += getTypeName(node.next);
  }
  return name;
  
}

export function cloneNode<T extends Node>(node: T): T {
  return cloneDeep(node);
}

export function isUserEntry(node: Node): boolean {
  return node.range.source.sourceKind == SourceKind.USER_ENTRY;
}

export function isEntry(node: Node): boolean {
  return isUserEntry(node) || node.range.source.sourceKind == SourceKind.LIBRARY_ENTRY;
}

export function className(_class: ClassDeclaration |  InterfaceDeclaration | FunctionDeclaration): string {
  let name = toString(_class.name)
  const typeParameters = _class.typeParameters;
  if (typeParameters) {
    name += `<${typeParameters.map(getName).join(", ")}>`;
  }
  return name;
}

export function isMethodNamed(name: string): (_: DeclarationStatement) => boolean {
  return (stmt: DeclarationStatement) => stmt.kind == NodeKind.METHODDECLARATION && toString(stmt.name) === name;
}

export function updateSource(program: Program, newSource: Source) {
  const sources = program.sources;
  for (let i = 0, len = sources.length; i < len; i++) {
      if (sources[i].internalPath == newSource.internalPath) {
          sources[i] = newSource;
          break;
      }
  }
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

/**
 *
 * @param emitter DiagnosticEmitter
 * @returns return true if emitter have ERROR message
 */
 export function hasErrorMessage(emitter: DiagnosticEmitter): boolean {
  return hasMessage(emitter, DiagnosticCategory.ERROR);
}

/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have WARNING message
*/
export function hasWarningMessage(emitter: DiagnosticEmitter): boolean {
  return hasMessage(emitter, DiagnosticCategory.WARNING);
}

/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have `category` message
*/
export function hasMessage(
  emitter: DiagnosticEmitter,
  category: DiagnosticCategory
): boolean {
  const diagnostics = emitter.diagnostics ? emitter.diagnostics : [];
  for (const msg of diagnostics) {
      if (msg.category === category) {
          return true;
      }
  }
  return false;
}


let isStdlibRegex =
  /\~lib\/(?:array|arraybuffer|atomics|builtins|crypto|console|compat|dataview|date|diagnostics|error|function|iterator|map|math|number|object|process|reference|regexp|set|staticarray|string|symbol|table|typedarray|vector|rt\/?|bindings\/|shared\/typeinfo)|util\/|uri|polyfills|memory/;

export function isStdlib(s: Source | { range: Range }): boolean {
  let source = s instanceof Source ? s : s.range.source;
  return isStdlibRegex.test(source.internalPath);
}

export const indent = util.indent;
