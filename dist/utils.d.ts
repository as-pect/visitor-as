import { DecoratorNode, IdentifierExpression, DeclarationStatement, Source, Node, ClassDeclaration, TypeNode, InterfaceDeclaration } from "../as";
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
export declare function cloneNode<T extends Node>(node: T): T;
export declare function isUserEntry(source: Source): boolean;
export declare function className(_class: ClassDeclaration | InterfaceDeclaration): string;
export declare function isMethodNamed(name: string): (_: DeclarationStatement) => boolean;
export declare class StringBuilder {
    private sb;
    push(s: string): void;
    finish(separator?: string): string;
    get last(): string;
}
export {};
