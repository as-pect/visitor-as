"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileExample = exports.utils = void 0;
__exportStar(require("./base"), exports);
__exportStar(require("./transformer"), exports);
__exportStar(require("./visitor"), exports);
__exportStar(require("./astBuilder"), exports);
__exportStar(require("./decorator"), exports);
__exportStar(require("./path"), exports);
__exportStar(require("./simpleParser"), exports);
const utils = require("./utils");
exports.utils = utils;
const asc = require("assemblyscript/cli/asc");
//import * as loader from "assemblyscript/lib/loader";
const CompileStringResult = false && asc.compileString("");
function compileExample(code, transform) {
    const res = compile(code, transform);
    return res.stdout.toString().trim().split("\n");
}
exports.compileExample = compileExample;
function compile(code, transform) {
    const baseDir = process.cwd();
    const res = asc.compileString(code, {
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
console.log("RUN START");
var res = compileExample("" +
    "declare function includeBytes(path: string): StaticArray<u8>;" +
    "static DAYS_IN_MONTH: i32[] = includeBytes('testIB.dat');" +
    "console.log(DAYS_IN_MONTH.length);", "./src/examples/includeBytesTransform.ts");
res.forEach(element => { console.log(element); });
console.log("RUN END");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVidWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QjtBQUN2QixnREFBOEI7QUFDOUIsNENBQTBCO0FBQzFCLCtDQUE2QjtBQUM3Qiw4Q0FBNEI7QUFDNUIseUNBQXVCO0FBQ3ZCLGlEQUE4QjtBQUM5QixpQ0FBaUM7QUFDeEIsc0JBQUs7QUFHZCw4Q0FBOEM7QUFDOUMsc0RBQXNEO0FBRXRELE1BQU0sbUJBQW1CLEdBQUksS0FBYyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFRckUsU0FBZ0IsY0FBYyxDQUFDLElBQVksRUFBRSxTQUFpQjtJQUM1RCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUhELHdDQUdDO0FBRUQsU0FBUyxPQUFPLENBQUMsSUFBWSxFQUFFLFNBQWlCO0lBQzlDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixNQUFNLEdBQUcsR0FBaUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFDaEQsU0FBUztRQUNULE9BQU87S0FDUixDQUFDLENBQUM7SUFDSCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7OztFQUtFO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUN4QixJQUFJLEdBQUcsR0FBQyxjQUFjLENBQUMsRUFBRTtJQUNULCtEQUErRDtJQUMvRCwyREFBMkQ7SUFDM0Qsb0NBQW9DLEVBR3hDLHlDQUF5QyxDQUN4QyxDQUFDO0FBRWQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vYmFzZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHJhbnNmb3JtZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Zpc2l0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2FzdEJ1aWxkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2RlY29yYXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcGF0aFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2ltcGxlUGFyc2VyXCJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5leHBvcnQgeyB1dGlscyB9O1xuXG5cbmltcG9ydCAqIGFzIGFzYyBmcm9tIFwiYXNzZW1ibHlzY3JpcHQvY2xpL2FzY1wiO1xuLy9pbXBvcnQgKiBhcyBsb2FkZXIgZnJvbSBcImFzc2VtYmx5c2NyaXB0L2xpYi9sb2FkZXJcIjtcblxuY29uc3QgQ29tcGlsZVN0cmluZ1Jlc3VsdCA9IChmYWxzZSBhcyB0cnVlKSAmJiBhc2MuY29tcGlsZVN0cmluZyhcIlwiKTtcbnR5cGUgQ29tcGlsZVN0cmluZ1Jlc3VsdFR5cGUgPSB0eXBlb2YgQ29tcGlsZVN0cmluZ1Jlc3VsdDtcblxuaW50ZXJmYWNlIE1lbW9yeVJlc3VsdCBleHRlbmRzIENvbXBpbGVTdHJpbmdSZXN1bHRUeXBlIHtcbiAgc3Rkb3V0OiBhc2MuTWVtb3J5U3RyZWFtO1xuICBzdGRlcnI6IGFzYy5NZW1vcnlTdHJlYW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlRXhhbXBsZShjb2RlOiBzdHJpbmcsIHRyYW5zZm9ybTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zdCByZXMgPSBjb21waWxlKGNvZGUsIHRyYW5zZm9ybSk7XG4gIHJldHVybiByZXMuc3Rkb3V0LnRvU3RyaW5nKCkudHJpbSgpLnNwbGl0KFwiXFxuXCIpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlKGNvZGU6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmcpOiBNZW1vcnlSZXN1bHQge1xuICBjb25zdCBiYXNlRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgY29uc3QgcmVzID0gPE1lbW9yeVJlc3VsdD5hc2MuY29tcGlsZVN0cmluZyhjb2RlLCB7XG4gICAgdHJhbnNmb3JtLFxuICAgIGJhc2VEaXIsXG4gIH0pO1xuICBjb25zdCBlcnJTdHIgPSByZXMuc3RkZXJyLnRvU3RyaW5nKCk7XG4gIGlmIChlcnJTdHIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyU3RyKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vKmV4cG9ydCBmdW5jdGlvbiBjb21waWxlQW5kUnVuKGNvZGU6IHN0cmluZywgdHJhbnNmb3JtOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgcmVzID0gY29tcGlsZShjb2RlLCB0cmFuc2Zvcm0pO1xuICBjb25zdCBpbXBvcnRzID0geyB9O1xuICBjb25zdCB3YXNtTW9kdWxlID0gbG9hZGVyLmluc3RhbnRpYXRlU3luYyhyZXMuYmluYXJ5IS5idWZmZXIsIGltcG9ydHMpO1xufVxuKi9cblxuY29uc29sZS5sb2coXCJSVU4gU1RBUlRcIilcbnZhciByZXM9Y29tcGlsZUV4YW1wbGUoXCJcIisgXG4gICAgICAgICAgICAgICAgXCJkZWNsYXJlIGZ1bmN0aW9uIGluY2x1ZGVCeXRlcyhwYXRoOiBzdHJpbmcpOiBTdGF0aWNBcnJheTx1OD47XCIrXG4gICAgICAgICAgICAgICAgXCJzdGF0aWMgREFZU19JTl9NT05USDogaTMyW10gPSBpbmNsdWRlQnl0ZXMoJ3Rlc3RJQi5kYXQnKTtcIitcbiAgICAgICAgICAgICAgICBcImNvbnNvbGUubG9nKERBWVNfSU5fTU9OVEgubGVuZ3RoKTtcIlxuICAgICAgICAgICAgICAgICwgXG5cbiAgICAgICAgICAgIFwiLi9zcmMvZXhhbXBsZXMvaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLnRzXCJcbiAgICAgICAgICAgICk7XG5cbnJlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge2NvbnNvbGUubG9nKGVsZW1lbnQpfSk7XG5jb25zb2xlLmxvZyhcIlJVTiBFTkRcIilcbiJdfQ==