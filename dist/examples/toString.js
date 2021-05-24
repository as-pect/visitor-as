"use strict";
const __1 = require("..");
const simpleParser_1 = require("../simpleParser");
const utils_1 = require("../utils");
class ToStringCallTransform extends __1.ASTTransformVisitor {
    visitFieldDeclaration(node) {
        const name = utils_1.getName(node);
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
        this.visit(node.members); // will visit fields and methods
        const method = `
  toString(): string {
    const sb = new Array<string>();
    ${this.fields.join(";\n\t")};
    return \`${utils_1.getName(node)}:\\n\\t\${sb.join("\\n\\t")}\`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvdG9TdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF5QztBQUV6QyxrREFBK0M7QUFDL0Msb0NBQXVGO0FBSXZGLE1BQU0scUJBQXNCLFNBQVEsdUJBQW1CO0lBSXJELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxxQkFBcUIsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDakUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBQzFELE1BQU0sTUFBTSxHQUFHOzs7TUFHYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDaEIsZUFBTyxDQUFDLElBQUksQ0FBQzs7S0FFdkIsQ0FBQTtRQUNELElBQUksTUFBTSxHQUFHLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGO0FBR0QsaUJBQVMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBU1RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBQYXJzZXIsIENsYXNzRGVjbGFyYXRpb24sIEZpZWxkRGVjbGFyYXRpb24gfSBmcm9tIFwiLi4vLi4vYXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLi9zaW1wbGVQYXJzZXJcIjtcbmltcG9ydCB7IG5vdCwgaXNMaWJyYXJ5LCBjbGFzc05hbWUsIHRvU3RyaW5nLCBpc01ldGhvZE5hbWVkLCBnZXROYW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5cblxuY2xhc3MgVG9TdHJpbmdDYWxsVHJhbnNmb3JtIGV4dGVuZHMgQVNUVHJhbnNmb3JtVmlzaXRvciB7XG4gIGN1cnJlbnRDbGFzcz86IENsYXNzRGVjbGFyYXRpb247XG4gIGZpZWxkczogc3RyaW5nW107XG5cbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0TmFtZShub2RlKTtcbiAgICBsZXQgcmhzID0gYHRoaXMuJHtuYW1lfS50b1N0cmluZygpYDtcbiAgICB0aGlzLmZpZWxkcy5wdXNoKGBzYi5wdXNoKFxcYCR7bmFtZX06IFxcJHske3Joc319XFxgKWApO1xuICAgIHN1cGVyLnZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlKTtcbiAgfVxuXG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIW5vZGUubWVtYmVycyB8fCBub2RlLm1lbWJlcnMuc29tZShpc01ldGhvZE5hbWVkKFwidG9TdHJpbmdcIikpKSB7XG4gICAgICBzdXBlci52aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3VycmVudENsYXNzID0gbm9kZTtcbiAgICB0aGlzLmZpZWxkcyA9IFtdO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTsgLy8gd2lsbCB2aXNpdCBmaWVsZHMgYW5kIG1ldGhvZHNcbiAgICBjb25zdCBtZXRob2QgPSBgXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2IgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICR7dGhpcy5maWVsZHMuam9pbihcIjtcXG5cXHRcIil9O1xuICAgIHJldHVybiBcXGAke2dldE5hbWUobm9kZSl9OlxcXFxuXFxcXHRcXCR7c2Iuam9pbihcIlxcXFxuXFxcXHRcIil9XFxgXG4gIH1cbiAgICBgXG4gICAgbGV0IG1lbWJlciA9IFNpbXBsZVBhcnNlci5wYXJzZUNsYXNzTWVtYmVyKG1ldGhvZCwgbm9kZSk7XG4gICAgbm9kZS5tZW1iZXJzLnB1c2gobWVtYmVyKTtcbiAgICBzdXBlci52aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSk7XG4gIH1cblxuICBhZnRlclBhcnNlKF86IFBhcnNlcik6IHZvaWQge1xuICAgIGxldCBzb3VyY2VzID0gXy5zb3VyY2VzLmZpbHRlcihub3QoaXNMaWJyYXJ5KSk7XG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcbiAgfVxuICBcbn1cblxuXG5leHBvcnQgPSBUb1N0cmluZ0NhbGxUcmFuc2Zvcm07XG4iXX0=