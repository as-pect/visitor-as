"use strict";
const decorator_1 = require("../decorator");
const utils_1 = require("../utils");
class ListMembers extends decorator_1.ClassDecorator {
    visitFieldDeclaration(node) {
        if (!node.name)
            console.log(utils_1.toString(node) + "\n");
        const name = utils_1.toString(node.name);
        const _type = utils_1.toString(node.type);
        this.stdout.write(name + ": " + _type + "\n");
    }
    visitMethodDeclaration(node) {
        const name = utils_1.toString(node.name);
        if (name == "constructor") {
            return;
        }
        const sig = utils_1.toString(node.signature);
        this.stdout.write(name + ": " + sig + "\n");
    }
    visitClassDeclaration(node) {
        this.visit(node.members);
    }
    get name() {
        return "list";
    }
}
module.exports = decorator_1.registerDecorator(new ListMembers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQSw0Q0FBaUU7QUFDakUsb0NBQW9DO0FBRXBDLE1BQU0sV0FBWSxTQUFRLDBCQUFjO0lBQ3RDLHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBdUI7UUFDNUMsTUFBTSxJQUFJLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBRUQsaUJBQVMsNkJBQWlCLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDbGFzc0RlY2xhcmF0aW9uLFxyXG4gIEZpZWxkRGVjbGFyYXRpb24sXHJcbiAgTWV0aG9kRGVjbGFyYXRpb24sXHJcbn0gZnJvbSBcIi4uLy4uL2FzXCI7XHJcbmltcG9ydCB7IENsYXNzRGVjb3JhdG9yLCByZWdpc3RlckRlY29yYXRvciB9IGZyb20gXCIuLi9kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgdG9TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmNsYXNzIExpc3RNZW1iZXJzIGV4dGVuZHMgQ2xhc3NEZWNvcmF0b3Ige1xyXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIW5vZGUubmFtZSkgY29uc29sZS5sb2codG9TdHJpbmcobm9kZSkgKyBcIlxcblwiKTtcclxuICAgIGNvbnN0IG5hbWUgPSB0b1N0cmluZyhub2RlLm5hbWUpO1xyXG4gICAgY29uc3QgX3R5cGUgPSB0b1N0cmluZyhub2RlLnR5cGUhKTtcclxuICAgIHRoaXMuc3Rkb3V0LndyaXRlKG5hbWUgKyBcIjogXCIgKyBfdHlwZSArIFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgbmFtZSA9IHRvU3RyaW5nKG5vZGUubmFtZSk7XHJcbiAgICBpZiAobmFtZSA9PSBcImNvbnN0cnVjdG9yXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2lnID0gdG9TdHJpbmcobm9kZS5zaWduYXR1cmUpO1xyXG4gICAgdGhpcy5zdGRvdXQud3JpdGUobmFtZSArIFwiOiBcIiArIHNpZyArIFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJsaXN0XCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgPSByZWdpc3RlckRlY29yYXRvcihuZXcgTGlzdE1lbWJlcnMoKSk7XHJcbiJdfQ==