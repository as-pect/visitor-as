import { TransformVisitor, SimpleParser } from "../index.js";
import { IdentifierExpression, LiteralKind, } from "assemblyscript/dist/assemblyscript.js";
import { not, isStdlib } from "../utils.js";
import * as path from "path";
import * as fs from "fs";
class IncludeBytesTransform extends TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof IdentifierExpression) {
            if (node.expression.text == "includeBytes") {
                if (!node.args[0].isLiteralKind(LiteralKind.STRING))
                    throw "[Error] includeBytes requires a constant literal filename";
                let arg0 = node.args[0];
                let filename = path.join(path.dirname(node.range.source.normalizedPath), arg0.value);
                var data;
                try {
                    data = fs.readFileSync(filename);
                }
                catch (e) {
                    throw `[Error] includeBytes '${filename}', ${e}`;
                }
                let asJSONString = JSON.stringify(data); // use stringify to convert bytes to text
                let arrayStart = asJSONString.indexOf("["); //find the u8 array inside the JSON string
                let arrayEnd = asJSONString.lastIndexOf("]");
                let newCode = "StaticArray.fromArray<u8>(" +
                    asJSONString.substring(arrayStart, arrayEnd + 1) +
                    ")";
                let res = SimpleParser.parseExpression(newCode); //parse StaticArray.fromArray expression
                res.range = node.range; //same range
                return res; //replace node
            }
        }
        return super.visitCallExpression(node);
    }
    afterParse(_) {
        let sources = _.sources.filter(not(isStdlib));
        this.visit(sources);
    }
}
export default IncludeBytesTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdELE9BQU8sRUFJTCxvQkFBb0IsRUFDcEIsV0FBVyxHQUVaLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekIsTUFBTSxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLG9CQUFvQixFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakQsTUFBTSwyREFBMkQsQ0FBQztnQkFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQTRCLENBQUM7Z0JBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQzlDLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJO29CQUNGLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixNQUFNLHlCQUF5QixRQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO2dCQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7Z0JBQ2xGLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7Z0JBQ3RGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksT0FBTyxHQUNULDRCQUE0QjtvQkFDNUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDaEQsR0FBRyxDQUFDO2dCQUNOLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7Z0JBQ3pGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVk7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDLENBQUMsY0FBYzthQUMzQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsZUFBZSxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybVZpc2l0b3IsIFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIEV4cHJlc3Npb24sXHJcbiAgUGFyc2VyLFxyXG4gIENhbGxFeHByZXNzaW9uLFxyXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxyXG4gIExpdGVyYWxLaW5kLFxyXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxyXG59IGZyb20gXCJhc3NlbWJseXNjcmlwdC9kaXN0L2Fzc2VtYmx5c2NyaXB0LmpzXCI7XHJcbmltcG9ydCB7IG5vdCwgaXNTdGRsaWIgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNsYXNzIEluY2x1ZGVCeXRlc1RyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybVZpc2l0b3Ige1xyXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiBFeHByZXNzaW9uIHtcclxuICAgIGlmIChub2RlLmV4cHJlc3Npb24gaW5zdGFuY2VvZiBJZGVudGlmaWVyRXhwcmVzc2lvbikge1xyXG4gICAgICBpZiAobm9kZS5leHByZXNzaW9uLnRleHQgPT0gXCJpbmNsdWRlQnl0ZXNcIikge1xyXG4gICAgICAgIGlmICghbm9kZS5hcmdzWzBdLmlzTGl0ZXJhbEtpbmQoTGl0ZXJhbEtpbmQuU1RSSU5HKSlcclxuICAgICAgICAgIHRocm93IFwiW0Vycm9yXSBpbmNsdWRlQnl0ZXMgcmVxdWlyZXMgYSBjb25zdGFudCBsaXRlcmFsIGZpbGVuYW1lXCI7XHJcbiAgICAgICAgbGV0IGFyZzAgPSBub2RlLmFyZ3NbMF0gYXMgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb247XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gcGF0aC5qb2luKFxyXG4gICAgICAgICAgcGF0aC5kaXJuYW1lKG5vZGUucmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoKSxcclxuICAgICAgICAgIGFyZzAudmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICB0aHJvdyBgW0Vycm9yXSBpbmNsdWRlQnl0ZXMgJyR7ZmlsZW5hbWV9JywgJHtlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhc0pTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTsgLy8gdXNlIHN0cmluZ2lmeSB0byBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcclxuICAgICAgICBsZXQgYXJyYXlTdGFydCA9IGFzSlNPTlN0cmluZy5pbmRleE9mKFwiW1wiKTsgLy9maW5kIHRoZSB1OCBhcnJheSBpbnNpZGUgdGhlIEpTT04gc3RyaW5nXHJcbiAgICAgICAgbGV0IGFycmF5RW5kID0gYXNKU09OU3RyaW5nLmxhc3RJbmRleE9mKFwiXVwiKTtcclxuICAgICAgICBsZXQgbmV3Q29kZSA9XHJcbiAgICAgICAgICBcIlN0YXRpY0FycmF5LmZyb21BcnJheTx1OD4oXCIgK1xyXG4gICAgICAgICAgYXNKU09OU3RyaW5nLnN1YnN0cmluZyhhcnJheVN0YXJ0LCBhcnJheUVuZCArIDEpICtcclxuICAgICAgICAgIFwiKVwiO1xyXG4gICAgICAgIGxldCByZXMgPSBTaW1wbGVQYXJzZXIucGFyc2VFeHByZXNzaW9uKG5ld0NvZGUpOyAvL3BhcnNlIFN0YXRpY0FycmF5LmZyb21BcnJheSBleHByZXNzaW9uXHJcbiAgICAgICAgcmVzLnJhbmdlID0gbm9kZS5yYW5nZTsgLy9zYW1lIHJhbmdlXHJcbiAgICAgICAgcmV0dXJuIHJlczsgLy9yZXBsYWNlIG5vZGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN1cGVyLnZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZSk7XHJcbiAgfVxyXG5cclxuICBhZnRlclBhcnNlKF86IFBhcnNlcik6IHZvaWQge1xyXG4gICAgbGV0IHNvdXJjZXMgPSBfLnNvdXJjZXMuZmlsdGVyKG5vdChpc1N0ZGxpYikpO1xyXG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluY2x1ZGVCeXRlc1RyYW5zZm9ybTtcclxuIl19