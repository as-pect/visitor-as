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
        let sources = _.sources.filter(utils_1.not(utils_1.isStdlib));
        this.visit(sources);
    }
}
module.exports = IncludeBytesTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQU9rQjtBQUNsQixvQ0FBeUM7QUFDekMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUV6QixNQUFNLHFCQUFzQixTQUFRLG9CQUFnQjtJQUNsRCxtQkFBbUIsQ0FBQyxJQUFvQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLFlBQVkseUJBQW9CLEVBQUU7WUFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBVyxDQUFDLE1BQU0sQ0FBQztvQkFDakQsTUFBTSwyREFBMkQsQ0FBQztnQkFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQTRCLENBQUM7Z0JBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQzlDLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQztnQkFDVCxJQUFJO29CQUNGLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNsQztnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixNQUFNLHlCQUF5QixRQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO2dCQUNELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7Z0JBQ2xGLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7Z0JBQ3RGLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLElBQUksT0FBTyxHQUNULDRCQUE0QjtvQkFDNUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDaEQsR0FBRyxDQUFDO2dCQUNOLElBQUksR0FBRyxHQUFHLGdCQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0NBQXdDO2dCQUN6RixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZO2dCQUNwQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLGNBQWM7YUFDM0I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNsQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFHLENBQUMsZ0JBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxpQkFBUyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybVZpc2l0b3IsIFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHtcbiAgRXhwcmVzc2lvbixcbiAgUGFyc2VyLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgSWRlbnRpZmllckV4cHJlc3Npb24sXG4gIExpdGVyYWxLaW5kLFxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcIi4uLy4uL2FzXCI7XG5pbXBvcnQgeyBub3QsIGlzU3RkbGliIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxuY2xhc3MgSW5jbHVkZUJ5dGVzVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtVmlzaXRvciB7XG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiBFeHByZXNzaW9uIHtcbiAgICBpZiAobm9kZS5leHByZXNzaW9uIGluc3RhbmNlb2YgSWRlbnRpZmllckV4cHJlc3Npb24pIHtcbiAgICAgIGlmIChub2RlLmV4cHJlc3Npb24udGV4dCA9PSBcImluY2x1ZGVCeXRlc1wiKSB7XG4gICAgICAgIGlmICghbm9kZS5hcmdzWzBdLmlzTGl0ZXJhbEtpbmQoTGl0ZXJhbEtpbmQuU1RSSU5HKSlcbiAgICAgICAgICB0aHJvdyBcIltFcnJvcl0gaW5jbHVkZUJ5dGVzIHJlcXVpcmVzIGEgY29uc3RhbnQgbGl0ZXJhbCBmaWxlbmFtZVwiO1xuICAgICAgICBsZXQgYXJnMCA9IG5vZGUuYXJnc1swXSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gcGF0aC5qb2luKFxuICAgICAgICAgIHBhdGguZGlybmFtZShub2RlLnJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCksXG4gICAgICAgICAgYXJnMC52YWx1ZVxuICAgICAgICApO1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IGBbRXJyb3JdIGluY2x1ZGVCeXRlcyAnJHtmaWxlbmFtZX0nLCAke2V9YDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXNKU09OU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7IC8vIHVzZSBzdHJpbmdpZnkgdG8gY29udmVydCBieXRlcyB0byB0ZXh0XG4gICAgICAgIGxldCBhcnJheVN0YXJ0ID0gYXNKU09OU3RyaW5nLmluZGV4T2YoXCJbXCIpOyAvL2ZpbmQgdGhlIHU4IGFycmF5IGluc2lkZSB0aGUgSlNPTiBzdHJpbmdcbiAgICAgICAgbGV0IGFycmF5RW5kID0gYXNKU09OU3RyaW5nLmxhc3RJbmRleE9mKFwiXVwiKTtcbiAgICAgICAgbGV0IG5ld0NvZGUgPVxuICAgICAgICAgIFwiU3RhdGljQXJyYXkuZnJvbUFycmF5PHU4PihcIiArXG4gICAgICAgICAgYXNKU09OU3RyaW5nLnN1YnN0cmluZyhhcnJheVN0YXJ0LCBhcnJheUVuZCArIDEpICtcbiAgICAgICAgICBcIilcIjtcbiAgICAgICAgbGV0IHJlcyA9IFNpbXBsZVBhcnNlci5wYXJzZUV4cHJlc3Npb24obmV3Q29kZSk7IC8vcGFyc2UgU3RhdGljQXJyYXkuZnJvbUFycmF5IGV4cHJlc3Npb25cbiAgICAgICAgcmVzLnJhbmdlID0gbm9kZS5yYW5nZTsgLy9zYW1lIHJhbmdlXG4gICAgICAgIHJldHVybiByZXM7IC8vcmVwbGFjZSBub2RlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdENhbGxFeHByZXNzaW9uKG5vZGUpO1xuICB9XG5cbiAgYWZ0ZXJQYXJzZShfOiBQYXJzZXIpOiB2b2lkIHtcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzU3RkbGliKSk7XG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcbiAgfVxufVxuXG5leHBvcnQgPSBJbmNsdWRlQnl0ZXNUcmFuc2Zvcm07XG4iXX0=