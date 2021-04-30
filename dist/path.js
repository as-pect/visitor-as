"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathVisitor = void 0;
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
    get currentParentPath() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLGlDQUFxQztBQUNyQyx3QkFBMEI7QUFFMUIsTUFBYSxXQUFZLFNBQVEsa0JBQVc7SUFBNUM7O1FBQ0UsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUF5QzNCLENBQUM7SUF2Q0MsTUFBTSxDQUFDLElBQVU7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNoQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sUUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVU7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5RCxZQUFZO1lBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixZQUFZO2dCQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUExQ0Qsa0NBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBOb2RlLFxyXG59IGZyb20gXCIuLi9hc1wiO1xyXG5cclxuaW1wb3J0IHsgQmFzZVZpc2l0b3IgfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoVmlzaXRvciBleHRlbmRzIEJhc2VWaXNpdG9yIHtcclxuICBjdXJyZW50UGF0aDogTm9kZVtdID0gW107XHJcblxyXG4gIF92aXNpdChub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnB1c2gobm9kZSk7XHJcbiAgICBzdXBlci5fdmlzaXQobm9kZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnROb2RlKCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGhbdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UGFyZW50KCk6IE5vZGUge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBhdGgubGVuZ3RoID09IDEpIHJldHVybiB0aGlzLmN1cnJlbnROb2RlO1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGhbdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAyXTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UGFyZW50UGF0aCgpOiBOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhdGguc2xpY2UoMCwgdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50R3JhbmRQYXJlbnRQYXRoKCk6IE5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGF0aC5sZW5ndGggPCAzXHJcbiAgICAgID8gW11cclxuICAgICAgOiB0aGlzLmN1cnJlbnRQYXRoLnNsaWNlKDAsIHRoaXMuY3VycmVudFBhdGgubGVuZ3RoIC0gMik7XHJcbiAgfVxyXG5cclxuICBjbG9uZUN1cnJlbnROb2RlKCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIHV0aWxzLmNsb25lTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VDdXJyZW50Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmN1cnJlbnRQYXJlbnQpLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IHByb3AgPSB0aGlzLmN1cnJlbnRQYXJlbnRbbmFtZV07XHJcbiAgICAgIGlmIChwcm9wID09IHRoaXMuY3VycmVudE5vZGUpIHtcclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXJlbnRbbmFtZV0gPSBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19