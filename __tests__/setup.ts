import * as asc from "assemblyscript/cli/asc";

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
