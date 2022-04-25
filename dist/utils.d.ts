import { DecoratorNode, IdentifierExpression, DeclarationStatement, Source, Node, Program, ClassDeclaration, TypeNode, InterfaceDeclaration, FunctionDeclaration, TypeName, DiagnosticCategory, DiagnosticEmitter, Range, util } from "assemblyscript/dist/assemblyscript.js";
export declare function decorates(node: DecoratorNode, name: string): boolean;
export declare function isDecorator(name: string): (node: DecoratorNode) => boolean;
export declare function hasDecorator(node: DeclarationStatement | {
    declaration: DeclarationStatement;
}, name: string): boolean;
export declare function getDecorator(node: DeclarationStatement, name: string): DecoratorNode;
export declare function isLibrary(node: Source): boolean;
export declare function not<T>(fn: (t: T) => boolean): (t: T) => boolean;
export declare function toString(node: Node): string;
interface Named {
    name: IdentifierExpression;
}
export declare function getName(node: Node & Named | TypeNode): string;
export declare function getTypeName(node: TypeName): string;
export declare function cloneNode<T extends Node>(node: T): T;
export declare function isUserEntry(node: Node): boolean;
export declare function isEntry(node: Node): boolean;
export declare function className(_class: ClassDeclaration | InterfaceDeclaration | FunctionDeclaration): string;
export declare function isMethodNamed(name: string): (_: DeclarationStatement) => boolean;
export declare function updateSource(program: Program, newSource: Source): void;
export declare class StringBuilder {
    private sb;
    push(s: string): void;
    finish(separator?: string): string;
    get last(): string;
}
/**
 *
 * @param emitter DiagnosticEmitter
 * @returns return true if emitter have ERROR message
 */
export declare function hasErrorMessage(emitter: DiagnosticEmitter): boolean;
/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have WARNING message
*/
export declare function hasWarningMessage(emitter: DiagnosticEmitter): boolean;
/**
*
* @param emitter DiagnosticEmitter
* @returns return true if emitter have `category` message
*/
export declare function hasMessage(emitter: DiagnosticEmitter, category: DiagnosticCategory): boolean;
export declare function isStdlib(s: Source | {
    range: Range;
}): boolean;
export declare const indent: typeof util.indent;
export {};
