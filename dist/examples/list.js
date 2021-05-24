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
        const sig = utils_1.getName(node.signature);
        this.stdout.write(name + ": " + sig + "\n");
    }
    visitClassDeclaration(node) {
        this.visit(node.members);
    }
    get name() { return "list"; }
}
module.exports = decorator_1.registerDecorator(new ListMembers());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSw0Q0FBaUU7QUFDakUsb0NBQTZDO0FBRTdDLE1BQU0sV0FBWSxTQUFRLDBCQUFjO0lBQ3RDLHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxJQUF1QjtRQUM1QyxNQUFNLElBQUksR0FBRyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFCQUFxQixDQUFDLElBQXNCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUksS0FBYSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FFdEM7QUFFRCxpQkFBUyw2QkFBaUIsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBEZWNvcmF0b3JOb2RlLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbn0gZnJvbSBcIi4uLy4uL2FzXCI7XG5pbXBvcnQgeyBDbGFzc0RlY29yYXRvciwgcmVnaXN0ZXJEZWNvcmF0b3IgfSBmcm9tIFwiLi4vZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyB0b1N0cmluZywgZ2V0TmFtZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5jbGFzcyBMaXN0TWVtYmVycyBleHRlbmRzIENsYXNzRGVjb3JhdG9yIHtcbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIW5vZGUubmFtZSkgY29uc29sZS5sb2coZ2V0TmFtZShub2RlKSArIFwiXFxuXCIpO1xuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKG5vZGUpO1xuICAgIGNvbnN0IF90eXBlID0gZ2V0TmFtZShub2RlLnR5cGUhKTtcbiAgICB0aGlzLnN0ZG91dC53cml0ZShuYW1lICsgXCI6IFwiICsgX3R5cGUgKyBcIlxcblwiKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0TmFtZShub2RlKTtcbiAgICBpZiAobmFtZSA9PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2lnID0gZ2V0TmFtZShub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy5zdGRvdXQud3JpdGUobmFtZSArIFwiOiBcIiArIHNpZyArIFwiXFxuXCIpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJsaXN0XCI7IH1cblxufVxuXG5leHBvcnQgPSByZWdpc3RlckRlY29yYXRvcihuZXcgTGlzdE1lbWJlcnMoKSk7XG4iXX0=