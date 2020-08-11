"use strict";
const __1 = require("..");
const as_1 = require("../../as");
const utils_1 = require("../utils");
class FunctionCallTransform extends __1.TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof as_1.IdentifierExpression) {
            if (node.expression.text == "foo") {
                console.log("changeing to 'hello world'");
                let res = __1.SimpleParser.parseExpression('"hello world"');
                res.range = node.range;
                console.log(res);
                return res;
            }
        }
        return super.visitCallExpression(node);
    }
    afterParse(_) {
        let sources = _.sources.filter(utils_1.not(utils_1.isLibrary));
        this.visit(sources);
    }
}
module.exports = new FunctionCallTransform();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25DYWxsVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2Z1bmN0aW9uQ2FsbFRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQUEwRjtBQUMxRixvQ0FBMEM7QUFFMUMsTUFBTSxxQkFBc0IsU0FBUSxvQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLHlCQUFvQixFQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7Z0JBQ3pDLElBQUksR0FBRyxHQUFHLGdCQUFZLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RCxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sR0FBRyxDQUFDO2FBQ1o7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUztRQUNsQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFHLENBQUMsaUJBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxpQkFBUyxJQUFJLHFCQUFxQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm1WaXNpdG9yLCBTaW1wbGVQYXJzZXIgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IE5vZGUsIEV4cHJlc3Npb24sIFBhcnNlciwgQ2FsbEV4cHJlc3Npb24sIElkZW50aWZpZXJFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2FzXCI7XG5pbXBvcnQgeyBub3QsIGlzTGlicmFyeSB9IGZyb20gJy4uL3V0aWxzJztcblxuY2xhc3MgRnVuY3Rpb25DYWxsVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtVmlzaXRvciB7XG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiBFeHByZXNzaW9uIHtcbiAgICBpZiAobm9kZS5leHByZXNzaW9uIGluc3RhbmNlb2YgSWRlbnRpZmllckV4cHJlc3Npb24pe1xuICAgICAgaWYgKG5vZGUuZXhwcmVzc2lvbi50ZXh0ID09IFwiZm9vXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VpbmcgdG8gJ2hlbGxvIHdvcmxkJ1wiKVxuICAgICAgICBsZXQgcmVzID0gU2ltcGxlUGFyc2VyLnBhcnNlRXhwcmVzc2lvbignXCJoZWxsbyB3b3JsZFwiJyk7XG4gICAgICAgIHJlcy5yYW5nZSA9IG5vZGUucmFuZ2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdENhbGxFeHByZXNzaW9uKG5vZGUpO1xuICB9XG5cbiAgYWZ0ZXJQYXJzZShfOiBQYXJzZXIpOiB2b2lkIHtcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xuICAgIHRoaXMudmlzaXQoc291cmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0ID0gbmV3IEZ1bmN0aW9uQ2FsbFRyYW5zZm9ybSgpO1xuIl19