import { BaseVisitor } from './base';
import { Transform, Program, OutputStream } from './as';


export abstract class ASTTransformVisitor extends BaseVisitor implements Transform  {
  program: Program;
  baseDir: string;
  stdout: OutputStream;
  stderr: OutputStream;
  log: (message?: any, ...optionalParams: any[]) => void;
  writeFile: (filename: string, contents: string | Uint8Array, baseDir: string) => boolean;
  readFile: (filename: string, baseDir: string) => string | null;
  listFiles: (dirname: string, baseDir: string) => string[] | null;
}

