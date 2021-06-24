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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvdG9TdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF5QztBQUV6QyxrREFBK0M7QUFDL0Msb0NBQXVGO0FBSXZGLE1BQU0scUJBQXNCLFNBQVEsdUJBQW1CO0lBSXJELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCxxQkFBcUIsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDakUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBQzFELE1BQU0sTUFBTSxHQUFHOzs7TUFHYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7ZUFDaEIsZUFBTyxDQUFDLElBQUksQ0FBQzs7S0FFdkIsQ0FBQTtRQUNELElBQUksTUFBTSxHQUFHLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVSxDQUFDLENBQVM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBRyxDQUFDLGlCQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUVGO0FBR0QsaUJBQVMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBU1RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFBhcnNlciwgQ2xhc3NEZWNsYXJhdGlvbiwgRmllbGREZWNsYXJhdGlvbiB9IGZyb20gXCIuLi8uLi9hc1wiO1xyXG5pbXBvcnQgeyBTaW1wbGVQYXJzZXIgfSBmcm9tIFwiLi4vc2ltcGxlUGFyc2VyXCI7XHJcbmltcG9ydCB7IG5vdCwgaXNMaWJyYXJ5LCBjbGFzc05hbWUsIHRvU3RyaW5nLCBpc01ldGhvZE5hbWVkLCBnZXROYW1lIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBUb1N0cmluZ0NhbGxUcmFuc2Zvcm0gZXh0ZW5kcyBBU1RUcmFuc2Zvcm1WaXNpdG9yIHtcclxuICBjdXJyZW50Q2xhc3M/OiBDbGFzc0RlY2xhcmF0aW9uO1xyXG4gIGZpZWxkczogc3RyaW5nW107XHJcblxyXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBuYW1lID0gZ2V0TmFtZShub2RlKTtcclxuICAgIGxldCByaHMgPSBgdGhpcy4ke25hbWV9LnRvU3RyaW5nKClgO1xyXG4gICAgdGhpcy5maWVsZHMucHVzaChgc2IucHVzaChcXGAke25hbWV9OiBcXCR7JHtyaHN9fVxcYClgKTtcclxuICAgIHN1cGVyLnZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlKTtcclxuICB9XHJcblxyXG5cclxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFub2RlLm1lbWJlcnMgfHwgbm9kZS5tZW1iZXJzLnNvbWUoaXNNZXRob2ROYW1lZChcInRvU3RyaW5nXCIpKSkge1xyXG4gICAgICBzdXBlci52aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jdXJyZW50Q2xhc3MgPSBub2RlO1xyXG4gICAgdGhpcy5maWVsZHMgPSBbXTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTsgLy8gd2lsbCB2aXNpdCBmaWVsZHMgYW5kIG1ldGhvZHNcclxuICAgIGNvbnN0IG1ldGhvZCA9IGBcclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2IgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgJHt0aGlzLmZpZWxkcy5qb2luKFwiO1xcblxcdFwiKX07XHJcbiAgICByZXR1cm4gXFxgJHtnZXROYW1lKG5vZGUpfTpcXFxcblxcXFx0XFwke3NiLmpvaW4oXCJcXFxcblxcXFx0XCIpfVxcYFxyXG4gIH1cclxuICAgIGBcclxuICAgIGxldCBtZW1iZXIgPSBTaW1wbGVQYXJzZXIucGFyc2VDbGFzc01lbWJlcihtZXRob2QsIG5vZGUpO1xyXG4gICAgbm9kZS5tZW1iZXJzLnB1c2gobWVtYmVyKTtcclxuICAgIHN1cGVyLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlKTtcclxuICB9XHJcblxyXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XHJcbiAgICBsZXQgc291cmNlcyA9IF8uc291cmNlcy5maWx0ZXIobm90KGlzTGlicmFyeSkpO1xyXG4gICAgdGhpcy52aXNpdChzb3VyY2VzKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgPSBUb1N0cmluZ0NhbGxUcmFuc2Zvcm07XHJcbiJdfQ==