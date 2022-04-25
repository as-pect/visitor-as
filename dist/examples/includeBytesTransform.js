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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdELE9BQU8sRUFJTCxvQkFBb0IsRUFDcEIsV0FBVyxHQUVaLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFekIsTUFBTSxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLG9CQUFvQixFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakQsTUFBTSwyREFBMkQsQ0FBQztnQkFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQTRCLENBQUM7Z0JBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQzlDLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJO29CQUNGLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixNQUFNLHlCQUF5QixRQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO2dCQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7Z0JBQ2xGLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7Z0JBQ3RGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksT0FBTyxHQUNULDRCQUE0QjtvQkFDNUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDaEQsR0FBRyxDQUFDO2dCQUNOLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7Z0JBQ3pGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVk7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDLENBQUMsY0FBYzthQUMzQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsZUFBZSxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybVZpc2l0b3IsIFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgRXhwcmVzc2lvbixcbiAgUGFyc2VyLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgSWRlbnRpZmllckV4cHJlc3Npb24sXG4gIExpdGVyYWxLaW5kLFxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcImFzc2VtYmx5c2NyaXB0L2Rpc3QvYXNzZW1ibHlzY3JpcHQuanNcIjtcbmltcG9ydCB7IG5vdCwgaXNTdGRsaWIgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5jbGFzcyBJbmNsdWRlQnl0ZXNUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm1WaXNpdG9yIHtcbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xuICAgIGlmIChub2RlLmV4cHJlc3Npb24gaW5zdGFuY2VvZiBJZGVudGlmaWVyRXhwcmVzc2lvbikge1xuICAgICAgaWYgKG5vZGUuZXhwcmVzc2lvbi50ZXh0ID09IFwiaW5jbHVkZUJ5dGVzXCIpIHtcbiAgICAgICAgaWYgKCFub2RlLmFyZ3NbMF0uaXNMaXRlcmFsS2luZChMaXRlcmFsS2luZC5TVFJJTkcpKVxuICAgICAgICAgIHRocm93IFwiW0Vycm9yXSBpbmNsdWRlQnl0ZXMgcmVxdWlyZXMgYSBjb25zdGFudCBsaXRlcmFsIGZpbGVuYW1lXCI7XG4gICAgICAgIGxldCBhcmcwID0gbm9kZS5hcmdzWzBdIGFzIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uO1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSBwYXRoLmpvaW4oXG4gICAgICAgICAgcGF0aC5kaXJuYW1lKG5vZGUucmFuZ2Uuc291cmNlLm5vcm1hbGl6ZWRQYXRoKSxcbiAgICAgICAgICBhcmcwLnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhyb3cgYFtFcnJvcl0gaW5jbHVkZUJ5dGVzICcke2ZpbGVuYW1lfScsICR7ZX1gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhc0pTT05TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTsgLy8gdXNlIHN0cmluZ2lmeSB0byBjb252ZXJ0IGJ5dGVzIHRvIHRleHRcbiAgICAgICAgbGV0IGFycmF5U3RhcnQgPSBhc0pTT05TdHJpbmcuaW5kZXhPZihcIltcIik7IC8vZmluZCB0aGUgdTggYXJyYXkgaW5zaWRlIHRoZSBKU09OIHN0cmluZ1xuICAgICAgICBsZXQgYXJyYXlFbmQgPSBhc0pTT05TdHJpbmcubGFzdEluZGV4T2YoXCJdXCIpO1xuICAgICAgICBsZXQgbmV3Q29kZSA9XG4gICAgICAgICAgXCJTdGF0aWNBcnJheS5mcm9tQXJyYXk8dTg+KFwiICtcbiAgICAgICAgICBhc0pTT05TdHJpbmcuc3Vic3RyaW5nKGFycmF5U3RhcnQsIGFycmF5RW5kICsgMSkgK1xuICAgICAgICAgIFwiKVwiO1xuICAgICAgICBsZXQgcmVzID0gU2ltcGxlUGFyc2VyLnBhcnNlRXhwcmVzc2lvbihuZXdDb2RlKTsgLy9wYXJzZSBTdGF0aWNBcnJheS5mcm9tQXJyYXkgZXhwcmVzc2lvblxuICAgICAgICByZXMucmFuZ2UgPSBub2RlLnJhbmdlOyAvL3NhbWUgcmFuZ2VcbiAgICAgICAgcmV0dXJuIHJlczsgLy9yZXBsYWNlIG5vZGVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZSk7XG4gIH1cblxuICBhZnRlclBhcnNlKF86IFBhcnNlcik6IHZvaWQge1xuICAgIGxldCBzb3VyY2VzID0gXy5zb3VyY2VzLmZpbHRlcihub3QoaXNTdGRsaWIpKTtcbiAgICB0aGlzLnZpc2l0KHNvdXJjZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1ZGVCeXRlc1RyYW5zZm9ybTtcbiJdfQ==