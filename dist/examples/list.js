"use strict";
const decorator_1 = require("../decorator");
const utils_1 = require("../utils");
class ListMembers extends decorator_1.ClassDecorator {
    visitFieldDeclaration(node) {
        if (!node.name)
            console.log(utils_1.getName(node) + "\n");
        const name = utils_1.getName(node);
        const _type = utils_1.getName(node.type);
        this.stdout.write(name + ": " + _type + "\n");
    }
    visitMethodDeclaration(node) {
        const name = utils_1.getName(node);
        if (name == "constructor") {
            return;
        }
        const sig = utils_1.toString(node.signature);
        this.stdout.write(name + ": " + sig + "\n");
    }
    visitClassDeclaration(node) {
        this.visit(node.members);
    }
    get name() { return "list"; }
}
module.exports = decorator_1.registerDecorator(new ListMembers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSw0Q0FBaUU7QUFDakUsb0NBQTZDO0FBRTdDLE1BQU0sV0FBWSxTQUFRLDBCQUFjO0lBQ3RDLHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxJQUF1QjtRQUM1QyxNQUFNLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxJQUFzQjtRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJLEtBQWEsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBRXRDO0FBRUQsaUJBQVMsNkJBQWlCLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRGVjb3JhdG9yTm9kZSxcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG59IGZyb20gXCIuLi8uLi9hc1wiO1xuaW1wb3J0IHsgQ2xhc3NEZWNvcmF0b3IsIHJlZ2lzdGVyRGVjb3JhdG9yIH0gZnJvbSBcIi4uL2RlY29yYXRvclwiO1xuaW1wb3J0IHsgZ2V0TmFtZSwgdG9TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuY2xhc3MgTGlzdE1lbWJlcnMgZXh0ZW5kcyBDbGFzc0RlY29yYXRvciB7XG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgaWYgKCFub2RlLm5hbWUpIGNvbnNvbGUubG9nKGdldE5hbWUobm9kZSkgKyBcIlxcblwiKTtcbiAgICBjb25zdCBuYW1lID0gZ2V0TmFtZShub2RlKTtcbiAgICBjb25zdCBfdHlwZSA9IGdldE5hbWUobm9kZS50eXBlISk7XG4gICAgdGhpcy5zdGRvdXQud3JpdGUobmFtZSArIFwiOiBcIiArIF90eXBlICsgXCJcXG5cIik7XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgbmFtZSA9IGdldE5hbWUobm9kZSk7XG4gICAgaWYgKG5hbWUgPT0gXCJjb25zdHJ1Y3RvclwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNpZyA9IHRvU3RyaW5nKG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLnN0ZG91dC53cml0ZShuYW1lICsgXCI6IFwiICsgc2lnICsgXCJcXG5cIik7XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcImxpc3RcIjsgfVxuXG59XG5cbmV4cG9ydCA9IHJlZ2lzdGVyRGVjb3JhdG9yKG5ldyBMaXN0TWVtYmVycygpKTtcbiJdfQ==