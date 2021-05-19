"use strict";
const __1 = require("..");
const as_1 = require("../../as");
const utils_1 = require("../utils");
const path = require("path");
const fs = require("fs");
class IncludeBytesTransform extends __1.TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof as_1.IdentifierExpression) {
            if (node.expression.text == "includeBytes") {
                if (!node.args[0].isLiteralKind(as_1.LiteralKind.STRING))
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
                let res = __1.SimpleParser.parseExpression(newCode); //parse StaticArray.fromArray expression
                res.range = node.range; //same range
                return res; //replace node
            }
        }
        return super.visitCallExpression(node);
    }
    afterParse(_) {
        let sources = _.sources.filter(utils_1.not(utils_1.isLibrary));
        this.visit(sources);
    }
}
module.exports = IncludeBytesTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQU9rQjtBQUNsQixvQ0FBMEM7QUFDMUMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6QixNQUFNLHFCQUFzQixTQUFRLG9CQUFnQjtJQUNsRCxtQkFBbUIsQ0FBQyxJQUFvQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLFlBQVkseUJBQW9CLEVBQUU7WUFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakQsTUFBTSwyREFBMkQsQ0FBQztnQkFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQTRCLENBQUM7Z0JBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQzlDLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJO29CQUNGLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixNQUFNLHlCQUF5QixRQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO2dCQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7Z0JBQ2xGLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7Z0JBQ3RGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksT0FBTyxHQUNULDRCQUE0QjtvQkFDNUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDaEQsR0FBRyxDQUFDO2dCQUNOLElBQUksR0FBRyxHQUFHLGdCQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0NBQXdDO2dCQUN6RixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZO2dCQUNwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLGNBQWM7YUFDM0I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNsQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFHLENBQUMsaUJBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxpQkFBUyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybVZpc2l0b3IsIFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge1xyXG4gIEV4cHJlc3Npb24sXHJcbiAgUGFyc2VyLFxyXG4gIENhbGxFeHByZXNzaW9uLFxyXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxyXG4gIExpdGVyYWxLaW5kLFxyXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxyXG59IGZyb20gXCIuLi8uLi9hc1wiO1xyXG5pbXBvcnQgeyBub3QsIGlzTGlicmFyeSB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5cclxuY2xhc3MgSW5jbHVkZUJ5dGVzVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtVmlzaXRvciB7XHJcbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xyXG4gICAgaWYgKG5vZGUuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIElkZW50aWZpZXJFeHByZXNzaW9uKSB7XHJcbiAgICAgIGlmIChub2RlLmV4cHJlc3Npb24udGV4dCA9PSBcImluY2x1ZGVCeXRlc1wiKSB7XHJcbiAgICAgICAgaWYgKCFub2RlLmFyZ3NbMF0uaXNMaXRlcmFsS2luZChMaXRlcmFsS2luZC5TVFJJTkcpKVxyXG4gICAgICAgICAgdGhyb3cgXCJbRXJyb3JdIGluY2x1ZGVCeXRlcyByZXF1aXJlcyBhIGNvbnN0YW50IGxpdGVyYWwgZmlsZW5hbWVcIjtcclxuICAgICAgICBsZXQgYXJnMCA9IG5vZGUuYXJnc1swXSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICBwYXRoLmRpcm5hbWUobm9kZS5yYW5nZS5zb3VyY2Uubm9ybWFsaXplZFBhdGgpLFxyXG4gICAgICAgICAgYXJnMC52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGRhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRocm93IGBbRXJyb3JdIGluY2x1ZGVCeXRlcyAnJHtmaWxlbmFtZX0nLCAke2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFzSlNPTlN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpOyAvLyB1c2Ugc3RyaW5naWZ5IHRvIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxyXG4gICAgICAgIGxldCBhcnJheVN0YXJ0ID0gYXNKU09OU3RyaW5nLmluZGV4T2YoXCJbXCIpOyAvL2ZpbmQgdGhlIHU4IGFycmF5IGluc2lkZSB0aGUgSlNPTiBzdHJpbmdcclxuICAgICAgICBsZXQgYXJyYXlFbmQgPSBhc0pTT05TdHJpbmcubGFzdEluZGV4T2YoXCJdXCIpO1xyXG4gICAgICAgIGxldCBuZXdDb2RlID1cclxuICAgICAgICAgIFwiU3RhdGljQXJyYXkuZnJvbUFycmF5PHU4PihcIiArXHJcbiAgICAgICAgICBhc0pTT05TdHJpbmcuc3Vic3RyaW5nKGFycmF5U3RhcnQsIGFycmF5RW5kICsgMSkgK1xyXG4gICAgICAgICAgXCIpXCI7XHJcbiAgICAgICAgbGV0IHJlcyA9IFNpbXBsZVBhcnNlci5wYXJzZUV4cHJlc3Npb24obmV3Q29kZSk7IC8vcGFyc2UgU3RhdGljQXJyYXkuZnJvbUFycmF5IGV4cHJlc3Npb25cclxuICAgICAgICByZXMucmFuZ2UgPSBub2RlLnJhbmdlOyAvL3NhbWUgcmFuZ2VcclxuICAgICAgICByZXR1cm4gcmVzOyAvL3JlcGxhY2Ugbm9kZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIudmlzaXRDYWxsRXhwcmVzc2lvbihub2RlKTtcclxuICB9XHJcblxyXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XHJcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xyXG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCA9IEluY2x1ZGVCeXRlc1RyYW5zZm9ybTtcclxuIl19