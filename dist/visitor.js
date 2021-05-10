"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransformVisitor = exports.AbstractVisitor = void 0;
function isIterable(object) {
    //@ts-ignore
    return object != null && typeof object[Symbol.iterator] === "function";
}
/**
 * Top level visitor that will expect an implemented _visit function to visit
 * a single node and then provides a generic function for collections of nodes
 * and will visit each member of the collection.
 */
class AbstractVisitor {
    visit(node) {
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map((node) => this.visit(node));
        }
        else if (node instanceof Map) {
            for (let _node of node.values()) {
                this.visit(_node);
            }
        }
        else if (isIterable(node)) {
            //TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (let _node of node) {
                this.visit(_node);
            }
        }
        else {
            ///@ts-ignore Node is not iterable.
            this._visit(node);
        }
    }
}
exports.AbstractVisitor = AbstractVisitor;
class AbstractTransformVisitor {
    visit(node) {
        if (node == null)
            return null;
        if (node instanceof Array) {
            return node.map((node) => this.visit(node));
        }
        else if (node instanceof Map) {
            let res = new Map();
            for (let [key, _node] of node.entries()) {
                res.set(key, this.visit(_node));
            }
            return res;
        }
        else if (isIterable(node)) {
            let res = [];
            //TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (let _node of node) {
                res.push(this.visit(_node));
            }
            return res;
        }
        else {
            ///@ts-ignore Node is not iterable.
            return this._visit(node);
        }
    }
}
exports.AbstractTransformVisitor = AbstractTransformVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsWUFBWTtJQUNaLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBc0IsZUFBZTtJQUNuQyxLQUFLLENBQUMsSUFBMEI7UUFDOUIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0QzthQUFNLElBQUksSUFBSSxZQUFZLEdBQUcsRUFBRTtZQUM5QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsMkNBQTJDO1lBQzNDLHlCQUF5QjtZQUN6QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU07WUFDTCxtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FHRjtBQXRCRCwwQ0FzQkM7QUFFRCxNQUFzQix3QkFBd0I7SUFDNUMsS0FBSyxDQUFDLElBQTBCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLDJDQUEyQztZQUMzQyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsbUNBQW1DO1lBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FHRjtBQTFCRCw0REEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBDb2xsZWN0aW9uPFQgZXh0ZW5kcyBvYmplY3Q+ID1cclxuICB8IFRcclxuICB8IFRbXVxyXG4gIHwgTWFwPHN0cmluZywgVCB8IFRbXSB8IEl0ZXJhYmxlPFQ+PlxyXG4gIHwgSXRlcmFibGU8VD47XHJcblxyXG5mdW5jdGlvbiBpc0l0ZXJhYmxlPFQ+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG4vKipcclxuICogVG9wIGxldmVsIHZpc2l0b3IgdGhhdCB3aWxsIGV4cGVjdCBhbiBpbXBsZW1lbnRlZCBfdmlzaXQgZnVuY3Rpb24gdG8gdmlzaXRcclxuICogYSBzaW5nbGUgbm9kZSBhbmQgdGhlbiBwcm92aWRlcyBhIGdlbmVyaWMgZnVuY3Rpb24gZm9yIGNvbGxlY3Rpb25zIG9mIG5vZGVzXHJcbiAqIGFuZCB3aWxsIHZpc2l0IGVhY2ggbWVtYmVyIG9mIHRoZSBjb2xsZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmlzaXRvcjxUIGV4dGVuZHMgb2JqZWN0PiB7XHJcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgbm9kZS5tYXAoKG5vZGUpID0+IHRoaXMudmlzaXQobm9kZSkpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUudmFsdWVzKCkpIHtcclxuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc0l0ZXJhYmxlKG5vZGUpKSB7XHJcbiAgICAgIC8vVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcclxuICAgICAgLy8gQHRzLWlnbm9yZSBpcyBpdGVyYWJsZVxyXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XHJcbiAgICAgICAgdGhpcy52aXNpdChfbm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vL0B0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXHJcbiAgICAgIHRoaXMuX3Zpc2l0KG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VHJhbnNmb3JtVmlzaXRvcjxUIGV4dGVuZHMgb2JqZWN0PiB7XHJcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCB7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgcmV0dXJuIG5vZGUubWFwKChub2RlKSA9PiB0aGlzLnZpc2l0KG5vZGUpIGFzIFQpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgIGxldCByZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIF9ub2RlXSBvZiBub2RlLmVudHJpZXMoKSkge1xyXG4gICAgICAgICByZXMuc2V0KGtleSwgdGhpcy52aXNpdChfbm9kZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcclxuICAgICAgbGV0IHJlczogVFtdID0gW107XHJcbiAgICAgIC8vVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcclxuICAgICAgLy8gQHRzLWlnbm9yZSBpcyBpdGVyYWJsZVxyXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XHJcbiAgICAgICAgcmVzLnB1c2godGhpcy52aXNpdChfbm9kZSkgYXMgVCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vL0B0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXHJcbiAgICAgIHJldHVybiB0aGlzLl92aXNpdChub2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfdmlzaXQobm9kZTogVCk6IFQ7XHJcbn0iXX0=