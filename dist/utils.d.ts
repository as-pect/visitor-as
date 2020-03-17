import { DecoratorNode, DeclarationStatement } from "./assemblyscript";
export declare function isDecorator(name: string): (node: DecoratorNode) => boolean;
export declare function hasDecorator(node: DeclarationStatement, name: string): boolean;
