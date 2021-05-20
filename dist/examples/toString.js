"use strict";
const __1 = require("..");
const simpleParser_1 = require("../simpleParser");
const utils_1 = require("../utils");
class ToStringCallTransform extends __1.ASTTransformVisitor {
    visitFieldDeclaration(node) {
        const name = utils_1.toString(node.name);
        if (!node.type) {
            throw new Error(`Field ${name} is missing a type declaration`);
        }
        let rhs = `this.${name}.toString()`;
        this.fields.push(`sb.push(\`${name}: \${${rhs}}\`)`);
        super.visitFieldDeclaration(node);
    }
    visitClassDeclaration(node) {
        if (!node.members || node.members.some(utils_1.isMethodNamed("toString"))) {
            super.visitClassDeclaration(node);
            return;
        }
        this.currentClass = node;
        this.fields = [];
        this.visit(node.members);
        const method = `
  toString(): string {
    const sb = new Array<string>();
    ${this.fields.join(";\n\t")};
    return \`${utils_1.className(node)}:\\n\\t\${sb.join("\\n\\t")}\`
  }
    `;
        let member = simpleParser_1.SimpleParser.parseClassMember(method, node);
        node.members.push(member);
        super.visitClassDeclaration(node);
    }
    afterParse(_) {
        let sources = _.sources.filter(utils_1.not(utils_1.isLibrary));
        this.visit(sources);
    }
}
module.exports = ToStringCallTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvdG9TdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF5QztBQUV6QyxrREFBK0M7QUFDL0Msb0NBQThFO0FBSTlFLE1BQU0scUJBQXNCLFNBQVEsdUJBQW1CO0lBSXJELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksZ0NBQWdDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtZQUNqRSxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsTUFBTSxNQUFNLEdBQUc7OztNQUdiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztlQUNoQixpQkFBUyxDQUFDLElBQUksQ0FBQzs7S0FFekIsQ0FBQTtRQUNELElBQUksTUFBTSxHQUFHLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGO0FBR0QsaUJBQVMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBU1RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBQYXJzZXIsIENsYXNzRGVjbGFyYXRpb24sIEZpZWxkRGVjbGFyYXRpb24gfSBmcm9tIFwiLi4vLi4vYXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLi9zaW1wbGVQYXJzZXJcIjtcbmltcG9ydCB7IG5vdCwgaXNMaWJyYXJ5LCBjbGFzc05hbWUsIHRvU3RyaW5nLCBpc01ldGhvZE5hbWVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cblxuY2xhc3MgVG9TdHJpbmdDYWxsVHJhbnNmb3JtIGV4dGVuZHMgQVNUVHJhbnNmb3JtVmlzaXRvciB7XG4gIGN1cnJlbnRDbGFzcz86IENsYXNzRGVjbGFyYXRpb247XG4gIGZpZWxkczogc3RyaW5nW107XG5cbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBuYW1lID0gdG9TdHJpbmcobm9kZS5uYW1lKTtcbiAgICBpZiAoIW5vZGUudHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGaWVsZCAke25hbWV9IGlzIG1pc3NpbmcgYSB0eXBlIGRlY2xhcmF0aW9uYCk7XG4gICAgfVxuICAgIGxldCByaHMgPSBgdGhpcy4ke25hbWV9LnRvU3RyaW5nKClgO1xuICAgIHRoaXMuZmllbGRzLnB1c2goYHNiLnB1c2goXFxgJHtuYW1lfTogXFwkeyR7cmhzfX1cXGApYCk7XG4gICAgc3VwZXIudmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGUpO1xuICB9XG5cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGlmICghbm9kZS5tZW1iZXJzIHx8IG5vZGUubWVtYmVycy5zb21lKGlzTWV0aG9kTmFtZWQoXCJ0b1N0cmluZ1wiKSkpIHtcbiAgICAgIHN1cGVyLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBub2RlO1xuICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGBcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzYiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgJHt0aGlzLmZpZWxkcy5qb2luKFwiO1xcblxcdFwiKX07XG4gICAgcmV0dXJuIFxcYCR7Y2xhc3NOYW1lKG5vZGUpfTpcXFxcblxcXFx0XFwke3NiLmpvaW4oXCJcXFxcblxcXFx0XCIpfVxcYFxuICB9XG4gICAgYFxuICAgIGxldCBtZW1iZXIgPSBTaW1wbGVQYXJzZXIucGFyc2VDbGFzc01lbWJlcihtZXRob2QsIG5vZGUpO1xuXG4gICAgbm9kZS5tZW1iZXJzLnB1c2gobWVtYmVyKTtcbiAgICBzdXBlci52aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSk7XG4gIH1cblxuICBhZnRlclBhcnNlKF86IFBhcnNlcik6IHZvaWQge1xuICAgIGxldCBzb3VyY2VzID0gXy5zb3VyY2VzLmZpbHRlcihub3QoaXNMaWJyYXJ5KSk7XG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcbiAgfVxuICBcbn1cblxuXG5leHBvcnQgPSBUb1N0cmluZ0NhbGxUcmFuc2Zvcm07XG4iXX0=