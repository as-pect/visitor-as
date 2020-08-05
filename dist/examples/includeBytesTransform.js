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
                    throw ("[Error] includeBytes requires a constant literal filename");
                let arg0 = node.args[0];
                let filename = path.join(path.dirname(node.range.source.normalizedPath), arg0.value);
                var data;
                try {
                    data = fs.readFileSync(filename);
                }
                catch (e) {
                    throw (`[Error] includeBytes '${filename}', ${e}`);
                }
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
module.exports = IncludeBytesTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQUEySTtBQUMzSSxvQ0FBMEM7QUFDMUMsaUNBQXVDO0FBQ3ZDLDZCQUE4QjtBQUM5Qix5QkFBMEI7QUFFMUIsTUFBTSxxQkFBc0IsU0FBUSxvQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLHlCQUFvQixFQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsZ0JBQVcsQ0FBQyxNQUFNLENBQUM7b0JBQUUsTUFBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQ3hILElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUE0QixDQUFDO2dCQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFO2dCQUNyRixJQUFLLElBQUksQ0FBQztnQkFDVixJQUFHO29CQUNELElBQUksR0FBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxPQUFNLENBQUMsRUFBQztvQkFDTixNQUFLLENBQUMseUJBQXlCLFFBQVEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2lCQUNsRDtnQkFDRCxJQUFJLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEseUNBQXlDO2dCQUMvRSxJQUFJLFVBQVUsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsMENBQTBDO2dCQUNuRixJQUFJLFFBQVEsR0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLE9BQU8sR0FBQyw0QkFBNEIsR0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxRQUFRLEdBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO2dCQUMzRixJQUFJLEdBQUcsR0FBRyxnQkFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztnQkFDekYsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWTtnQkFDcEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxjQUFjO2FBQzNCO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsaUJBQVMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm1WaXNpdG9yLCBTaW1wbGVQYXJzZXIgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IE5vZGUsIEV4cHJlc3Npb24sIFBhcnNlciwgQ2FsbEV4cHJlc3Npb24sIElkZW50aWZpZXJFeHByZXNzaW9uLCBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiwgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi9hc1wiO1xuaW1wb3J0IHsgbm90LCBpc0xpYnJhcnkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBMaXRlcmFsS2luZCB9IGZyb20gJy4uLy4uL2FzJztcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5pbXBvcnQgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbmNsYXNzIEluY2x1ZGVCeXRlc1RyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybVZpc2l0b3Ige1xuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogRXhwcmVzc2lvbiB7XG4gICAgaWYgKG5vZGUuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIElkZW50aWZpZXJFeHByZXNzaW9uKXtcbiAgICAgIGlmIChub2RlLmV4cHJlc3Npb24udGV4dCA9PSBcImluY2x1ZGVCeXRlc1wiKSB7XG4gICAgICAgIGlmICghbm9kZS5hcmdzWzBdLmlzTGl0ZXJhbEtpbmQoTGl0ZXJhbEtpbmQuU1RSSU5HKSkgdGhyb3coXCJbRXJyb3JdIGluY2x1ZGVCeXRlcyByZXF1aXJlcyBhIGNvbnN0YW50IGxpdGVyYWwgZmlsZW5hbWVcIik7XG4gICAgICAgIGxldCBhcmcwPW5vZGUuYXJnc1swXSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gcGF0aC5qb2luKHBhdGguZGlybmFtZShub2RlLnJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCksYXJnMC52YWx1ZSkgO1xuICAgICAgICB2YXIgIGRhdGE7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBkYXRhPSBmcy5yZWFkRmlsZVN5bmMoZmlsZW5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgIHRocm93KGBbRXJyb3JdIGluY2x1ZGVCeXRlcyAnJHtmaWxlbmFtZX0nLCAke2V9YClcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXNKU09OU3RyaW5nPUpTT04uc3RyaW5naWZ5KGRhdGEpOy8vIHVzZSBzdHJpbmdpZnkgdG8gY29udmVydCBieXRlcyB0byB0ZXh0XG4gICAgICAgIGxldCBhcnJheVN0YXJ0PWFzSlNPTlN0cmluZy5pbmRleE9mKFwiW1wiKTsvL2ZpbmQgdGhlIHU4IGFycmF5IGluc2lkZSB0aGUgSlNPTiBzdHJpbmdcbiAgICAgICAgbGV0IGFycmF5RW5kPWFzSlNPTlN0cmluZy5sYXN0SW5kZXhPZihcIl1cIik7XG4gICAgICAgIGxldCBuZXdDb2RlPSdTdGF0aWNBcnJheS5mcm9tQXJyYXk8dTg+KCcrYXNKU09OU3RyaW5nLnN1YnN0cmluZyhhcnJheVN0YXJ0LGFycmF5RW5kKzEpKycpJztcbiAgICAgICAgbGV0IHJlcyA9IFNpbXBsZVBhcnNlci5wYXJzZUV4cHJlc3Npb24obmV3Q29kZSk7IC8vcGFyc2UgU3RhdGljQXJyYXkuZnJvbUFycmF5IGV4cHJlc3Npb25cbiAgICAgICAgcmVzLnJhbmdlID0gbm9kZS5yYW5nZTsgLy9zYW1lIHJhbmdlXG4gICAgICAgIHJldHVybiByZXM7IC8vcmVwbGFjZSBub2RlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdENhbGxFeHByZXNzaW9uKG5vZGUpO1xuICB9XG5cbiAgYWZ0ZXJQYXJzZShfOiBQYXJzZXIpOiB2b2lkIHtcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xuICAgIHRoaXMudmlzaXQoc291cmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0ID0gSW5jbHVkZUJ5dGVzVHJhbnNmb3JtO1xuIl19