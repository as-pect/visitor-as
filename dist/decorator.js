"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transformer_1 = require("./transformer");
const utils_1 = require("./utils");
function registerDecorator(decorator) {
    TopLevelDecorator.registerVisitor(decorator);
    return TopLevelDecorator;
}
exports.registerDecorator = registerDecorator;
class TopLevelDecorator extends transformer_1.PathTransformVisitor {
    static registerVisitor(visitor) {
        TopLevelDecorator._visitor = visitor;
    }
    get visitor() {
        return TopLevelDecorator._visitor;
    }
    visitDecoratorNode(node) {
        if (utils_1.decorates(node, this.visitor.name)) {
            this.visitor.currentPath = this.cuerrentParentPath;
            this.visitor.visit(this.currentParent);
        }
    }
    afterParse(_) {
        transformer_1.mergeTransformer(this, this.visitor);
        this.visit(this.program.sources.filter(this.visitor.sourceFilter));
    }
}
exports.TopLevelDecorator = TopLevelDecorator;
class Decorator extends transformer_1.PathTransformVisitor {
    /**
     * Default filter that removes library files
     */
    get sourceFilter() {
        return utils_1.not(utils_1.isLibrary);
    }
}
exports.Decorator = Decorator;
class ClassDecorator extends Decorator {
}
exports.ClassDecorator = ClassDecorator;
class FunctionDecorator extends Decorator {
}
exports.FunctionDecorator = FunctionDecorator;
class VariableDecorator extends Decorator {
}
exports.VariableDecorator = VariableDecorator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF1RTtBQVd2RSxtQ0FBb0Q7QUFFcEQsU0FBZ0IsaUJBQWlCLENBQUMsU0FBMkI7SUFDM0QsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLE9BQU8saUJBQWlCLENBQUM7QUFDM0IsQ0FBQztBQUhELDhDQUdDO0FBT0QsTUFBYSxpQkFBa0IsU0FBUSxrQ0FBb0I7SUFHekQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUF5QjtRQUM5QyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFZLE9BQU87UUFDakIsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLElBQUksaUJBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFTO1FBQ2xCLDhCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQXRCRCw4Q0FzQkM7QUFFRCxNQUFzQixTQUFVLFNBQVEsa0NBQW9CO0lBQzFEOztPQUVHO0lBQ0gsSUFBSSxZQUFZO1FBQ2QsT0FBTyxXQUFHLENBQUMsaUJBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FHRjtBQVRELDhCQVNDO0FBRUQsTUFBc0IsY0FBZSxTQUFRLFNBQVM7Q0FJckQ7QUFKRCx3Q0FJQztBQUVELE1BQXNCLGlCQUFrQixTQUFRLFNBQVM7Q0FFeEQ7QUFGRCw4Q0FFQztBQUVELE1BQXNCLGlCQUFrQixTQUFRLFNBQVM7Q0FFeEQ7QUFGRCw4Q0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhdGhUcmFuc2Zvcm1WaXNpdG9yLCBtZXJnZVRyYW5zZm9ybWVyIH0gZnJvbSBcIi4vdHJhbnNmb3JtZXJcIjtcbmltcG9ydCB7XG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxuICBQYXJzZXIsXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIFNvdXJjZSxcbiAgRGVjb3JhdG9yTm9kZSxcbn0gZnJvbSBcIi4uL2FzXCI7XG5pbXBvcnQgeyBkZWNvcmF0ZXMsIG5vdCwgaXNMaWJyYXJ5IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKGRlY29yYXRvcjogRGVjb3JhdG9yVmlzaXRvcikge1xuICBUb3BMZXZlbERlY29yYXRvci5yZWdpc3RlclZpc2l0b3IoZGVjb3JhdG9yKTtcbiAgcmV0dXJuIFRvcExldmVsRGVjb3JhdG9yO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9yVmlzaXRvciBleHRlbmRzIFBhdGhUcmFuc2Zvcm1WaXNpdG9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzb3VyY2VGaWx0ZXI6IChzOiBTb3VyY2UpID0+IGJvb2w7XG59XG5cbmV4cG9ydCBjbGFzcyBUb3BMZXZlbERlY29yYXRvciBleHRlbmRzIFBhdGhUcmFuc2Zvcm1WaXNpdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX3Zpc2l0b3I6IERlY29yYXRvclZpc2l0b3I7XG5cbiAgc3RhdGljIHJlZ2lzdGVyVmlzaXRvcih2aXNpdG9yOiBEZWNvcmF0b3JWaXNpdG9yKTogdm9pZCB7XG4gICAgVG9wTGV2ZWxEZWNvcmF0b3IuX3Zpc2l0b3IgPSB2aXNpdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdmlzaXRvcigpOiBEZWNvcmF0b3JWaXNpdG9yIHtcbiAgICByZXR1cm4gVG9wTGV2ZWxEZWNvcmF0b3IuX3Zpc2l0b3I7XG4gIH1cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSkge1xuICAgIGlmIChkZWNvcmF0ZXMobm9kZSwgdGhpcy52aXNpdG9yLm5hbWUpKSB7XG4gICAgICB0aGlzLnZpc2l0b3IuY3VycmVudFBhdGggPSB0aGlzLmN1ZXJyZW50UGFyZW50UGF0aDtcbiAgICAgIHRoaXMudmlzaXRvci52aXNpdCh0aGlzLmN1cnJlbnRQYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyUGFyc2UoXzogUGFyc2VyKTogdm9pZCB7XG4gICAgbWVyZ2VUcmFuc2Zvcm1lcih0aGlzLCB0aGlzLnZpc2l0b3IpO1xuICAgIHRoaXMudmlzaXQodGhpcy5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKHRoaXMudmlzaXRvci5zb3VyY2VGaWx0ZXIpKTtcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgUGF0aFRyYW5zZm9ybVZpc2l0b3Ige1xuICAvKipcbiAgICogRGVmYXVsdCBmaWx0ZXIgdGhhdCByZW1vdmVzIGxpYnJhcnkgZmlsZXNcbiAgICovXG4gIGdldCBzb3VyY2VGaWx0ZXIoKTogKHM6IFNvdXJjZSkgPT4gYm9vbCB7XG4gICAgcmV0dXJuIG5vdChpc0xpYnJhcnkpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3NEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICBhYnN0cmFjdCB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQ7XG4gIGFic3RyYWN0IHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkO1xuICBhYnN0cmFjdCB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGdW5jdGlvbkRlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGFic3RyYWN0IHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhcmlhYmxlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgYWJzdHJhY3QgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkO1xufVxuIl19