"use strict";
const __1 = require("..");
const as_1 = require("../../as");
const utils_1 = require("../utils");
const as_2 = require("../../as");
const path = require("path");
const fs = require("fs");
class IncludeBytesTransform extends __1.TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof as_1.IdentifierExpression) {
            if (node.expression.text == "includeBytes") {
                if (!node.args[0].isLiteralKind(as_2.LiteralKind.STRING))
                    throw ("includeBytes requires a constant literal filename");
                let arg0 = node.args[0];
                let filename = path.join(path.dirname(node.range.source.normalizedPath), arg0.value);
                let data = fs.readFileSync(filename);
                if (data == null || data.length == 0)
                    throw (`[Error] includeBytes File Not Found: "${filename}"`);
                let asJSONString = JSON.stringify(data); // use stringify to convert bytes to text
                let arrayStart = asJSONString.indexOf("["); //find the u8 array inside the JSON string
                let arrayEnd = asJSONString.lastIndexOf("]");
                let newCode = 'StaticArray.fromArray<u8>(' + asJSONString.substring(arrayStart, arrayEnd + 1) + ')';
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
module.exports = new IncludeBytesTransform();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQUEySTtBQUMzSSxvQ0FBMEM7QUFDMUMsaUNBQXVDO0FBQ3ZDLDZCQUE4QjtBQUM5Qix5QkFBMEI7QUFFMUIsTUFBTSxxQkFBc0IsU0FBUSxvQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLHlCQUFvQixFQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQUUsTUFBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7Z0JBQ2hILElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUE0QixDQUFDO2dCQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFO2dCQUNyRixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLElBQUksSUFBRSxJQUFJLElBQUUsSUFBSSxDQUFDLE1BQU0sSUFBRSxDQUFDO29CQUFFLE1BQUssQ0FBQyx5Q0FBeUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDNUYsSUFBSSxZQUFZLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLHlDQUF5QztnQkFDL0UsSUFBSSxVQUFVLEdBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLDBDQUEwQztnQkFDbkYsSUFBSSxRQUFRLEdBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxPQUFPLEdBQUMsNEJBQTRCLEdBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztnQkFDM0YsSUFBSSxHQUFHLEdBQUcsZ0JBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx3Q0FBd0M7Z0JBQ3pGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVk7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDLENBQUMsY0FBYzthQUMzQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUcsQ0FBQyxpQkFBUyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUVELGlCQUFVLElBQUkscUJBQXFCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybVZpc2l0b3IsIFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgTm9kZSwgRXhwcmVzc2lvbiwgUGFyc2VyLCBDYWxsRXhwcmVzc2lvbiwgSWRlbnRpZmllckV4cHJlc3Npb24sIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLCBGbG9hdExpdGVyYWxFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2FzXCI7XG5pbXBvcnQgeyBub3QsIGlzTGlicmFyeSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IExpdGVyYWxLaW5kIH0gZnJvbSAnLi4vLi4vYXMnO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmltcG9ydCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuY2xhc3MgSW5jbHVkZUJ5dGVzVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtVmlzaXRvciB7XG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiBFeHByZXNzaW9uIHtcbiAgICBpZiAobm9kZS5leHByZXNzaW9uIGluc3RhbmNlb2YgSWRlbnRpZmllckV4cHJlc3Npb24pe1xuICAgICAgaWYgKG5vZGUuZXhwcmVzc2lvbi50ZXh0ID09IFwiaW5jbHVkZUJ5dGVzXCIpIHtcbiAgICAgICAgaWYgKCFub2RlLmFyZ3NbMF0uaXNMaXRlcmFsS2luZChMaXRlcmFsS2luZC5TVFJJTkcpKSB0aHJvdyhcImluY2x1ZGVCeXRlcyByZXF1aXJlcyBhIGNvbnN0YW50IGxpdGVyYWwgZmlsZW5hbWVcIik7XG4gICAgICAgIGxldCBhcmcwPW5vZGUuYXJnc1swXSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShub2RlLnJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCksYXJnMC52YWx1ZSkgO1xuICAgICAgICBsZXQgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSk7XG4gICAgICAgIGlmIChkYXRhPT1udWxsfHxkYXRhLmxlbmd0aD09MCkgdGhyb3coYFtFcnJvcl0gaW5jbHVkZUJ5dGVzIEZpbGUgTm90IEZvdW5kOiBcIiR7ZmlsZW5hbWV9XCJgKTtcbiAgICAgICAgbGV0IGFzSlNPTlN0cmluZz1KU09OLnN0cmluZ2lmeShkYXRhKTsvLyB1c2Ugc3RyaW5naWZ5IHRvIGNvbnZlcnQgYnl0ZXMgdG8gdGV4dFxuICAgICAgICBsZXQgYXJyYXlTdGFydD1hc0pTT05TdHJpbmcuaW5kZXhPZihcIltcIik7Ly9maW5kIHRoZSB1OCBhcnJheSBpbnNpZGUgdGhlIEpTT04gc3RyaW5nXG4gICAgICAgIGxldCBhcnJheUVuZD1hc0pTT05TdHJpbmcubGFzdEluZGV4T2YoXCJdXCIpO1xuICAgICAgICBsZXQgbmV3Q29kZT0nU3RhdGljQXJyYXkuZnJvbUFycmF5PHU4PignK2FzSlNPTlN0cmluZy5zdWJzdHJpbmcoYXJyYXlTdGFydCxhcnJheUVuZCsxKSsnKSc7XG4gICAgICAgIGxldCByZXMgPSBTaW1wbGVQYXJzZXIucGFyc2VFeHByZXNzaW9uKG5ld0NvZGUpOyAvL3BhcnNlIFN0YXRpY0FycmF5LmZyb21BcnJheSBleHByZXNzaW9uXG4gICAgICAgIHJlcy5yYW5nZSA9IG5vZGUucmFuZ2U7IC8vc2FtZSByYW5nZVxuICAgICAgICByZXR1cm4gcmVzOyAvL3JlcGxhY2Ugbm9kZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VwZXIudmlzaXRDYWxsRXhwcmVzc2lvbihub2RlKTtcbiAgfVxuXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XG4gICAgbGV0IHNvdXJjZXMgPSBfLnNvdXJjZXMuZmlsdGVyKG5vdChpc0xpYnJhcnkpKTtcbiAgICB0aGlzLnZpc2l0KHNvdXJjZXMpO1xuICB9XG59XG5cbmV4cG9ydCA9ICBuZXcgSW5jbHVkZUJ5dGVzVHJhbnNmb3JtKCk7XG4iXX0=