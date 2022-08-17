import { compileString } from "assemblyscript/dist/asc.js";

import * as loader from "@assemblyscript/loader";

export async function compileExample(code, transform) {
  const res = await compile(code, transform);
  return res.stdout.toString().trim().split("\n");
}

export async function compile(code, transform) {
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

export async function compileAndInit(code, transform) {
  const res = await compile(code, transform);
  const imports = { /* imports go here */ };
  return loader.instantiateSync(res.binary.buffer, imports);
}