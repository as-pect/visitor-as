"use strict";
const __1 = require("..");
const as_1 = require("../../as");
const utils_1 = require("../utils");
class FunctionCallTransform extends __1.TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof as_1.IdentifierExpression) {
            if (node.expression.text == "foo") {
                let res = __1.SimpleParser.parseExpression('"hello world"');
                res.range = node.range;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25DYWxsVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2Z1bmN0aW9uQ2FsbFRyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQUEwRjtBQUMxRixvQ0FBMEM7QUFFMUMsTUFBTSxxQkFBc0IsU0FBUSxvQkFBZ0I7SUFDbEQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLHlCQUFvQixFQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsR0FBRyxnQkFBWSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEdBQUcsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsaUJBQVMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtVmlzaXRvciwgU2ltcGxlUGFyc2VyIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IE5vZGUsIEV4cHJlc3Npb24sIFBhcnNlciwgQ2FsbEV4cHJlc3Npb24sIElkZW50aWZpZXJFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2FzXCI7XHJcbmltcG9ydCB7IG5vdCwgaXNMaWJyYXJ5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuY2xhc3MgRnVuY3Rpb25DYWxsVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtVmlzaXRvciB7XHJcbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xyXG4gICAgaWYgKG5vZGUuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIElkZW50aWZpZXJFeHByZXNzaW9uKXtcclxuICAgICAgaWYgKG5vZGUuZXhwcmVzc2lvbi50ZXh0ID09IFwiZm9vXCIpIHtcclxuICAgICAgICBsZXQgcmVzID0gU2ltcGxlUGFyc2VyLnBhcnNlRXhwcmVzc2lvbignXCJoZWxsbyB3b3JsZFwiJyk7XHJcbiAgICAgICAgcmVzLnJhbmdlID0gbm9kZS5yYW5nZTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIudmlzaXRDYWxsRXhwcmVzc2lvbihub2RlKTtcclxuICB9XHJcblxyXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XHJcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xyXG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCA9IG5ldyBGdW5jdGlvbkNhbGxUcmFuc2Zvcm0oKTtcclxuIl19