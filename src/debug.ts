/*export * from "./base";
export * from "./transformer";
export * from "./visitor";
export * from "./astBuilder";
export * from "./decorator";
export * from "./path";
export * from "./simpleParser"
import * as utils from "./utils";
export { utils };
*/

import * as asc from "assemblyscript/cli/asc";
//import * as loader from "assemblyscript/lib/loader";

const CompileStringResult = (false as true) && asc.compileString("");
type CompileStringResultType = typeof CompileStringResult;

interface MemoryResult extends CompileStringResultType {
  stdout: asc.MemoryStream;
  stderr: asc.MemoryStream;
}

export function compileExample(code: string, transform: string): string[] {
  const res = compile(code, transform);
  return res.stdout.toString().trim().split("\n");
}

function compile(code: string, transform: string): MemoryResult {
  const baseDir = process.cwd();
  const res = <MemoryResult>asc.compileString(code, {
    transform,
    baseDir,
  });
  const errStr = res.stderr.toString();
  if (errStr) {
    throw new Error(errStr);
  }
  return res;
}

/*export function compileAndRun(code: string, transform: string): void {
  const res = compile(code, transform);
  const imports = { };
  const wasmModule = loader.instantiateSync(res.binary!.buffer, imports);
}
*/

console.log("RUN START")
var res=compileExample(""+ 
                "declare function includeBytes(path: string): StaticArray<u8>;"+
                "static DAYS_IN_MONTH: i32[] = includeBytes('testIB.dat');"+
                "console.log(DAYS_IN_MONTH.length);"
                , 

            "./src/examples/includeBytesTransform.ts"
            );

res.forEach(element => {console.log(element)});
console.log("RUN END")
