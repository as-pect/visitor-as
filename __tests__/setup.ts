import * as asc from "assemblyscript/cli/asc";
import * as loader from "assemblyscript/lib/loader";

const CompileStringResult = (false as true) && asc.compileString("");
type CompileStringResultType = typeof CompileStringResult;

interface MemoryResult extends CompileStringResultType {
  stdout: asc.MemoryStream;
  stderr: asc.MemoryStream;
}

export function compileExample(code: string, transform: string): string[] {
  const baseDir = process.cwd();
  const res = <MemoryResult>asc.compileString(code, {
    transform,
    baseDir,
  });
  const errStr = res.stderr.toString();
  if (errStr) {
    throw new Error(errStr);
  }
  return res.stdout.toString().trim().split("\n");
}

export function compileAndRun(code: string, transform: string): void {
  const res = <MemoryResult>asc.compileString(code, {
    transform,
    baseDir: process.cwd(),
    runtime: "none",
  });
  const errStr = res.stderr.toString();
  if (errStr) {
    throw new Error(errStr);
  }
  const imports = { /* imports go here */ };
  const wasmModule = loader.instantiateSync(res.binary!.buffer, imports);

}