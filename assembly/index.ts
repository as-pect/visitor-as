import "wasi";
import { SimpleParser} from "./simpleParser"
import { toString } from "./utils";


function transform(text: string): string {
  let statement = SimpleParser.parseStatement(text);
  console.log(text);
  console.log("becomes");
  let res = toString(statement)
  console.log(res);
  return res;
}

console.log(transform(process.argv[1]));
import "./baseTransform";