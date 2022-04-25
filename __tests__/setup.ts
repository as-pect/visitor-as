import { MemoryStream, compileString } from "assemblyscript/dist/asc.js";
// import { MemoryStream, compileString } from "assemblyscript/asc";
// const { default: assemblyscript } = await import('assemblyscript')

import * as loader from "@assemblyscript/loader";

const CompileStringResult = (false as true) && compileString("");
type CompileStringResultType = typeof CompileStringResult;

interface MemoryResult extends CompileStringResultType {
  stdout: MemoryStream;
  stderr: MemoryStream;
}

export async function compileExample(code: string, transform: string): Promise<string[]> {
  const res = await compile(code, transform);
  return res.stdout.toString().trim().split("\n");
}

export async function compile(code: string, transform: string): Promise<MemoryResult> {
  const baseDir = process.cwd();
  const res = await compileString(code, {
    transform,
    baseDir,
  });
  const errStr = res.stderr.toString();
  if (errStr) {
    throw new Error(errStr);
  }
  return res;
}

export async function compileAndInit(code: string, transform: string) {
  const res = await compile(code, transform);
  const imports = { /* imports go here */ };
  return loader.instantiateSync(res.binary!.buffer, imports);
}