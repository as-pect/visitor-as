import { DecoratorNode, DeclarationStatement, Source } from "./as";
export declare function isDecorator(name: string): (node: DecoratorNode) => boolean;
export declare function hasDecorator(node: DeclarationStatement, name: string): boolean;
export declare function isLibrary(node: Source): boolean;
export declare function not<T>(fn: (t: T) => boolean): (t: T) => boolean;
