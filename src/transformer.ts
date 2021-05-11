/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BaseVisitor } from "./base";
import { Transform as _Transform } from "../as";
import { ASTBuilder } from "./astBuilder";
import { PathVisitor } from "./path";
import { Mixin } from "ts-mixer";
import { BaseTransformVisitor } from "./baseTransform";

class Transform extends _Transform {}

export class ASTTransformVisitor extends Mixin(BaseVisitor, Transform) {}

export class ASTBuilderVisitor extends Mixin(ASTBuilder, Transform) {}

export class PathTransformVisitor extends Mixin(PathVisitor, Transform) {}

export function mergeTransformer(from: Transform, to: Transform): void {
  // @ts-ignore
  to.program = from.program;
  // @ts-ignore
  to.baseDir = from.baseDir;
  // @ts-ignore
  to.stdout = from.stdout;
  // @ts-ignore
  to.stderr = from.stderr;
  // @ts-ignore
  to.log = from.log;
  to.writeFile = from.writeFile;
  to.readFile = from.readFile;
  to.listFiles = from.listFiles;
}

export class TransformVisitor extends Mixin(BaseTransformVisitor, Transform) {}