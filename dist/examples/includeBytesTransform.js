"use strict";
const __1 = require("..");
const as_1 = require("../../as");
const utils_1 = require("../utils");
class InncludeBytesTransform extends __1.TransformVisitor {
    visitCallExpression(node) {
        if (node.expression instanceof as_1.IdentifierExpression) {
            if (node.expression.text == "includeBytes") {
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
module.exports = new InncludeBytesTransform();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZUJ5dGVzVHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4YW1wbGVzL2luY2x1ZGVCeXRlc1RyYW5zZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQW9EO0FBQ3BELGlDQUEwRjtBQUMxRixvQ0FBMEM7QUFFMUMsTUFBTSxzQkFBdUIsU0FBUSxvQkFBZ0I7SUFDbkQsbUJBQW1CLENBQUMsSUFBb0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLHlCQUFvQixFQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksY0FBYyxFQUFFO2dCQUMxQyxJQUFJLEdBQUcsR0FBRyxnQkFBWSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEdBQUcsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBRUQsaUJBQVMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtVmlzaXRvciwgU2ltcGxlUGFyc2VyIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBOb2RlLCBFeHByZXNzaW9uLCBQYXJzZXIsIENhbGxFeHByZXNzaW9uLCBJZGVudGlmaWVyRXhwcmVzc2lvbiB9IGZyb20gXCIuLi8uLi9hc1wiO1xuaW1wb3J0IHsgbm90LCBpc0xpYnJhcnkgfSBmcm9tICcuLi91dGlscyc7XG5cbmNsYXNzIElubmNsdWRlQnl0ZXNUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm1WaXNpdG9yIHtcbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xuICAgIGlmIChub2RlLmV4cHJlc3Npb24gaW5zdGFuY2VvZiBJZGVudGlmaWVyRXhwcmVzc2lvbil7XG4gICAgICBpZiAobm9kZS5leHByZXNzaW9uLnRleHQgPT0gXCJpbmNsdWRlQnl0ZXNcIikge1xuICAgICAgICBsZXQgcmVzID0gU2ltcGxlUGFyc2VyLnBhcnNlRXhwcmVzc2lvbignXCJoZWxsbyB3b3JsZFwiJyk7XG4gICAgICAgIHJlcy5yYW5nZSA9IG5vZGUucmFuZ2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBlci52aXNpdENhbGxFeHByZXNzaW9uKG5vZGUpO1xuICB9XG5cbiAgYWZ0ZXJQYXJzZShfOiBQYXJzZXIpOiB2b2lkIHtcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xuICAgIHRoaXMudmlzaXQoc291cmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0ID0gbmV3IElubmNsdWRlQnl0ZXNUcmFuc2Zvcm0oKTtcbiJdfQ==