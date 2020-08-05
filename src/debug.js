"use strict";
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
exports.__esModule = true;
exports.compileExample = void 0;
var asc = require("assemblyscript/cli/asc");
//import * as loader from "assemblyscript/lib/loader";
var CompileStringResult = false && asc.compileString("");
function compileExample(code, transform) {
    var res = compile(code, transform);
    return res.stdout.toString().trim().split("\n");
}
exports.compileExample = compileExample;
function compile(code, transform) {
    var baseDir = process.cwd();
    var res = asc.compileString(code, {
        transform: transform,
        baseDir: baseDir
    });
    var errStr = res.stderr.toString();
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
console.log("RUN START");
var res = compileExample("" +
    "declare function includeBytes(path: string): StaticArray<u8>;" +
    "static DAYS_IN_MONTH: i32[] = includeBytes('testIB.dat');" +
    "console.log(DAYS_IN_MONTH.length);", "./src/examples/includeBytesTransform.ts");
res.forEach(function (element) { console.log(element); });
console.log("RUN END");
