import { MemoryStream, compileString } from "../as";
import * as loader from "assemblyscript/lib/loader/umd";

const CompileStringResult = (false as true) && compileString("");
type CompileStringResultType = typeof CompileStringResult;

interface MemoryResult extends CompileStringResultType {
  stdout: MemoryStream;
  stderr: MemoryStream;
}

export function compileExample(code: string, transform: string): string[] {
  const res = compile(code, transform);
  return res.stdout.toString().trim().split("\n");
}

export function compile(code: string, transform: string): MemoryResult {
  const baseDir = process.cwd();
  const res = <MemoryResult>compileString(code, {
    transform,
    baseDir,
  });
  const errStr = res.stderr.toString();
  if (errStr) {
    throw new Error(errStr);
  }
  return res;
}

export function compileAndInit(code: string, transform: string) {
  const res = compile(code, transform);
  const imports = { /* imports go here */ };
  return loader.instantiateSync(res.binary!.buffer, imports);
}