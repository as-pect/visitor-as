import { BaseVisitor } from "./base.js";
import { Transform as _Transform } from "assemblyscript/dist/transform.js";
import { ASTBuilder } from "./astBuilder.js";
import { PathVisitor } from "./path.js";
import { BaseTransformVisitor } from "./baseTransform.js";
declare class Transform extends _Transform {
}
declare const ASTTransformVisitor_base: import("ts-mixer/dist/types/types.js").Class<any[], BaseVisitor & Transform, typeof BaseVisitor & typeof Transform, false>;
export declare class ASTTransformVisitor extends ASTTransformVisitor_base {
}
declare const ASTBuilderVisitor_base: import("ts-mixer/dist/types/types.js").Class<any[], ASTBuilder & Transform, typeof ASTBuilder & typeof Transform, false>;
export declare class ASTBuilderVisitor extends ASTBuilderVisitor_base {
}
declare const PathTransformVisitor_base: import("ts-mixer/dist/types/types.js").Class<any[], PathVisitor & Transform, typeof PathVisitor & typeof Transform, false>;
export declare class PathTransformVisitor extends PathTransformVisitor_base {
}
export declare function mergeTransformer(from: Transform, to: Transform): void;
declare const TransformVisitor_base: import("ts-mixer/dist/types/types.js").Class<any[], BaseTransformVisitor & Transform, typeof BaseTransformVisitor & typeof Transform, false>;
export declare class TransformVisitor extends TransformVisitor_base {
}
export {};
