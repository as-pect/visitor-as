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
        let sources = _.sources.filter(utils_1.not(utils_1.isStdlib));
        this.visit(sources);
    }
}
module.exports = ToStringCallTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvdG9TdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF5QztBQUV6QyxrREFBK0M7QUFDL0Msb0NBQXNGO0FBSXRGLE1BQU0scUJBQXNCLFNBQVEsdUJBQW1CO0lBSXJELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxxQkFBcUIsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDakUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBQzFELE1BQU0sTUFBTSxHQUFHOzs7TUFHYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDaEIsZUFBTyxDQUFDLElBQUksQ0FBQzs7S0FFdkIsQ0FBQTtRQUNELElBQUksTUFBTSxHQUFHLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGdCQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGO0FBR0QsaUJBQVMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBU1RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBQYXJzZXIsIENsYXNzRGVjbGFyYXRpb24sIEZpZWxkRGVjbGFyYXRpb24gfSBmcm9tIFwiLi4vLi4vYXNcIjtcbmltcG9ydCB7IFNpbXBsZVBhcnNlciB9IGZyb20gXCIuLi9zaW1wbGVQYXJzZXJcIjtcbmltcG9ydCB7IG5vdCwgaXNTdGRsaWIsIGNsYXNzTmFtZSwgdG9TdHJpbmcsIGlzTWV0aG9kTmFtZWQsIGdldE5hbWUgfSBmcm9tICcuLi91dGlscyc7XG5cblxuXG5jbGFzcyBUb1N0cmluZ0NhbGxUcmFuc2Zvcm0gZXh0ZW5kcyBBU1RUcmFuc2Zvcm1WaXNpdG9yIHtcbiAgY3VycmVudENsYXNzPzogQ2xhc3NEZWNsYXJhdGlvbjtcbiAgZmllbGRzOiBzdHJpbmdbXTtcblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKG5vZGUpO1xuICAgIGxldCByaHMgPSBgdGhpcy4ke25hbWV9LnRvU3RyaW5nKClgO1xuICAgIHRoaXMuZmllbGRzLnB1c2goYHNiLnB1c2goXFxgJHtuYW1lfTogXFwkeyR7cmhzfX1cXGApYCk7XG4gICAgc3VwZXIudmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGUpO1xuICB9XG5cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIGlmICghbm9kZS5tZW1iZXJzIHx8IG5vZGUubWVtYmVycy5zb21lKGlzTWV0aG9kTmFtZWQoXCJ0b1N0cmluZ1wiKSkpIHtcbiAgICAgIHN1cGVyLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBub2RlO1xuICAgIHRoaXMuZmllbGRzID0gW107XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpOyAvLyB3aWxsIHZpc2l0IGZpZWxkcyBhbmQgbWV0aG9kc1xuICAgIGNvbnN0IG1ldGhvZCA9IGBcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzYiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgJHt0aGlzLmZpZWxkcy5qb2luKFwiO1xcblxcdFwiKX07XG4gICAgcmV0dXJuIFxcYCR7Z2V0TmFtZShub2RlKX06XFxcXG5cXFxcdFxcJHtzYi5qb2luKFwiXFxcXG5cXFxcdFwiKX1cXGBcbiAgfVxuICAgIGBcbiAgICBsZXQgbWVtYmVyID0gU2ltcGxlUGFyc2VyLnBhcnNlQ2xhc3NNZW1iZXIobWV0aG9kLCBub2RlKTtcbiAgICBub2RlLm1lbWJlcnMucHVzaChtZW1iZXIpO1xuICAgIHN1cGVyLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlKTtcbiAgfVxuXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XG4gICAgbGV0IHNvdXJjZXMgPSBfLnNvdXJjZXMuZmlsdGVyKG5vdChpc1N0ZGxpYikpO1xuICAgIHRoaXMudmlzaXQoc291cmNlcyk7XG4gIH1cbiAgXG59XG5cblxuZXhwb3J0ID0gVG9TdHJpbmdDYWxsVHJhbnNmb3JtO1xuIl19