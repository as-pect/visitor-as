import { Program } from "assemblyscript/dist/assemblyscript.js";
import { Transform } from "assemblyscript/dist/transform.js";
declare class Transformer extends Transform {
    afterInitialize(program: Program): void;
}
export default Transformer;
