"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const _1 = require(".");
class PathVisitor extends base_1.BaseVisitor {
    constructor() {
        super(...arguments);
        this.currentPath = [];
    }
    _visit(node) {
        this.currentPath.push(node);
        super._visit(node);
        this.currentPath.pop();
    }
    get currentNode() {
        return this.currentPath[this.currentPath.length - 1];
    }
    get currentParent() {
        if (this.currentPath.length == 1)
            return this.currentNode;
        return this.currentPath[this.currentPath.length - 2];
    }
    get cuerrentParentPath() {
        return this.currentPath.slice(0, this.currentPath.length - 1);
    }
    get currentGrandParentPath() {
        return this.currentPath.length < 3
            ? []
            : this.currentPath.slice(0, this.currentPath.length - 2);
    }
    cloneCurrentNode() {
        return _1.utils.cloneNode(this.currentNode);
    }
    replaceCurrentNode(node) {
        Object.getOwnPropertyNames(this.currentParent).forEach((name) => {
            //@ts-ignore
            const prop = this.currentParent[name];
            if (prop == this.currentNode) {
                //@ts-ignore
                this.currentParent[name] = node;
            }
        });
    }
}
exports.PathVisitor = PathVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsaUNBQXFDO0FBQ3JDLHdCQUEwQjtBQUUxQixNQUFhLFdBQVksU0FBUSxrQkFBVztJQUE1Qzs7UUFDRSxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQXlDM0IsQ0FBQztJQXZDQyxNQUFNLENBQUMsSUFBVTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxRQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBVTtRQUMzQixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlELFlBQVk7WUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTFDRCxrQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOb2RlLFxufSBmcm9tIFwiLi4vYXNcIjtcblxuaW1wb3J0IHsgQmFzZVZpc2l0b3IgfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXRoVmlzaXRvciBleHRlbmRzIEJhc2VWaXNpdG9yIHtcbiAgY3VycmVudFBhdGg6IE5vZGVbXSA9IFtdO1xuXG4gIF92aXNpdChub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50UGF0aC5wdXNoKG5vZGUpO1xuICAgIHN1cGVyLl92aXNpdChub2RlKTtcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnBvcCgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnROb2RlKCk6IE5vZGUge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYXRoW3RoaXMuY3VycmVudFBhdGgubGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgY3VycmVudFBhcmVudCgpOiBOb2RlIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGF0aC5sZW5ndGggPT0gMSkgcmV0dXJuIHRoaXMuY3VycmVudE5vZGU7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGhbdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAyXTtcbiAgfVxuXG4gIGdldCBjdWVycmVudFBhcmVudFBhdGgoKTogTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGF0aC5zbGljZSgwLCB0aGlzLmN1cnJlbnRQYXRoLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRHcmFuZFBhcmVudFBhdGgoKTogTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggPCAzXG4gICAgICA/IFtdXG4gICAgICA6IHRoaXMuY3VycmVudFBhdGguc2xpY2UoMCwgdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAyKTtcbiAgfVxuXG4gIGNsb25lQ3VycmVudE5vZGUoKTogTm9kZSB7XG4gICAgcmV0dXJuIHV0aWxzLmNsb25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgfVxuXG4gIHJlcGxhY2VDdXJyZW50Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5jdXJyZW50UGFyZW50KS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAvL0B0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHByb3AgPSB0aGlzLmN1cnJlbnRQYXJlbnRbbmFtZV07XG4gICAgICBpZiAocHJvcCA9PSB0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmN1cnJlbnRQYXJlbnRbbmFtZV0gPSBub2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=