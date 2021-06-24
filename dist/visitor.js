"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTransformVisitor = exports.AbstractVisitor = void 0;
function isIterable(object) {
    // @ts-ignore
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
            // TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (let _node of node) {
                this.visit(_node);
            }
        }
        else {
            /// @ts-ignore Node is not iterable.
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
            // TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (let _node of node) {
                res.push(this.visit(_node));
            }
            return res;
        }
        else {
            /// @ts-ignore Node is not iterable.
            return this._visit(node);
        }
    }
}
exports.AbstractTransformVisitor = AbstractTransformVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsYUFBYTtJQUNiLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBc0IsZUFBZTtJQUNuQyxLQUFLLENBQUMsSUFBMEI7UUFDOUIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0QzthQUFNLElBQUksSUFBSSxZQUFZLEdBQUcsRUFBRTtZQUM5QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsNENBQTRDO1lBQzVDLHlCQUF5QjtZQUN6QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU07WUFDTCxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FHRjtBQXRCRCwwQ0FzQkM7QUFFRCxNQUFzQix3QkFBd0I7SUFDNUMsS0FBSyxDQUFDLElBQTBCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLDRDQUE0QztZQUM1Qyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FHRjtBQTFCRCw0REEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cclxuZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUIGV4dGVuZHMgdW5rbm93bj4gPVxyXG4gIHwgVFxyXG4gIHwgVFtdXHJcbiAgfCBNYXA8c3RyaW5nLCBUIHwgVFtdIHwgSXRlcmFibGU8VD4+XHJcbiAgfCBJdGVyYWJsZTxUPjtcclxuXHJcbmZ1bmN0aW9uIGlzSXRlcmFibGU8VD4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG4vKipcclxuICogVG9wIGxldmVsIHZpc2l0b3IgdGhhdCB3aWxsIGV4cGVjdCBhbiBpbXBsZW1lbnRlZCBfdmlzaXQgZnVuY3Rpb24gdG8gdmlzaXRcclxuICogYSBzaW5nbGUgbm9kZSBhbmQgdGhlbiBwcm92aWRlcyBhIGdlbmVyaWMgZnVuY3Rpb24gZm9yIGNvbGxlY3Rpb25zIG9mIG5vZGVzXHJcbiAqIGFuZCB3aWxsIHZpc2l0IGVhY2ggbWVtYmVyIG9mIHRoZSBjb2xsZWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmlzaXRvcjxUIGV4dGVuZHMgdW5rbm93bj4ge1xyXG4gIHZpc2l0KG5vZGU6IENvbGxlY3Rpb248VD4gfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIG5vZGUubWFwKChub2RlKSA9PiB0aGlzLnZpc2l0KG5vZGUpKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlLnZhbHVlcygpKSB7XHJcbiAgICAgICAgdGhpcy52aXNpdChfbm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xyXG4gICAgICAvLyBUT0RPOiBGaW5kIGJldHRlciB3YXkgdG8gdGVzdCBpZiBpdGVyYWJsZVxyXG4gICAgICAvLyBAdHMtaWdub3JlIGlzIGl0ZXJhYmxlXHJcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUpIHtcclxuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8vIEB0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXHJcbiAgICAgIHRoaXMuX3Zpc2l0KG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VHJhbnNmb3JtVmlzaXRvcjxUIGV4dGVuZHMgdW5rbm93bj4ge1xyXG4gIHZpc2l0KG5vZGU6IENvbGxlY3Rpb248VD4gfCBudWxsKTogQ29sbGVjdGlvbjxUPiB8IG51bGwge1xyXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHJldHVybiBub2RlLm1hcCgobm9kZSkgPT4gdGhpcy52aXNpdChub2RlKSBhcyBUKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICBsZXQgcmVzID0gbmV3IE1hcCgpO1xyXG4gICAgICBmb3IgKGxldCBba2V5LCBfbm9kZV0gb2Ygbm9kZS5lbnRyaWVzKCkpIHtcclxuICAgICAgICByZXMuc2V0KGtleSwgdGhpcy52aXNpdChfbm9kZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcclxuICAgICAgbGV0IHJlczogVFtdID0gW107XHJcbiAgICAgIC8vIFRPRE86IEZpbmQgYmV0dGVyIHdheSB0byB0ZXN0IGlmIGl0ZXJhYmxlXHJcbiAgICAgIC8vIEB0cy1pZ25vcmUgaXMgaXRlcmFibGVcclxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xyXG4gICAgICAgIHJlcy5wdXNoKHRoaXMudmlzaXQoX25vZGUpIGFzIFQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLy8gQHRzLWlnbm9yZSBOb2RlIGlzIG5vdCBpdGVyYWJsZS5cclxuICAgICAgcmV0dXJuIHRoaXMuX3Zpc2l0KG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogVDtcclxufSJdfQ==