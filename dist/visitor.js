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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsYUFBYTtJQUNiLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBc0IsZUFBZTtJQUNuQyxLQUFLLENBQUMsSUFBMEI7UUFDOUIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0QzthQUFNLElBQUksSUFBSSxZQUFZLEdBQUcsRUFBRTtZQUM5QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsNENBQTRDO1lBQzVDLHlCQUF5QjtZQUN6QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU07WUFDTCxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FHRjtBQXRCRCwwQ0FzQkM7QUFFRCxNQUFzQix3QkFBd0I7SUFDNUMsS0FBSyxDQUFDLElBQTBCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLDRDQUE0QztZQUM1Qyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FHRjtBQTFCRCw0REEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248VCBleHRlbmRzIHVua25vd24+ID1cbiAgfCBUXG4gIHwgVFtdXG4gIHwgTWFwPHN0cmluZywgVCB8IFRbXSB8IEl0ZXJhYmxlPFQ+PlxuICB8IEl0ZXJhYmxlPFQ+O1xuXG5mdW5jdGlvbiBpc0l0ZXJhYmxlPFQ+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIjtcbn1cbi8qKlxuICogVG9wIGxldmVsIHZpc2l0b3IgdGhhdCB3aWxsIGV4cGVjdCBhbiBpbXBsZW1lbnRlZCBfdmlzaXQgZnVuY3Rpb24gdG8gdmlzaXRcbiAqIGEgc2luZ2xlIG5vZGUgYW5kIHRoZW4gcHJvdmlkZXMgYSBnZW5lcmljIGZ1bmN0aW9uIGZvciBjb2xsZWN0aW9ucyBvZiBub2Rlc1xuICogYW5kIHdpbGwgdmlzaXQgZWFjaCBtZW1iZXIgb2YgdGhlIGNvbGxlY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpc2l0b3I8VCBleHRlbmRzIHVua25vd24+IHtcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbm9kZS5tYXAoKG5vZGUpID0+IHRoaXMudmlzaXQobm9kZSkpO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZS52YWx1ZXMoKSkge1xuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcbiAgICAgIC8vIFRPRE86IEZpbmQgYmV0dGVyIHdheSB0byB0ZXN0IGlmIGl0ZXJhYmxlXG4gICAgICAvLyBAdHMtaWdub3JlIGlzIGl0ZXJhYmxlXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XG4gICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLy8gQHRzLWlnbm9yZSBOb2RlIGlzIG5vdCBpdGVyYWJsZS5cbiAgICAgIHRoaXMuX3Zpc2l0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfdmlzaXQobm9kZTogVCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRyYW5zZm9ybVZpc2l0b3I8VCBleHRlbmRzIHVua25vd24+IHtcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgcmV0dXJuIG5vZGUubWFwKChub2RlKSA9PiB0aGlzLnZpc2l0KG5vZGUpIGFzIFQpO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgbGV0IHJlcyA9IG5ldyBNYXAoKTtcbiAgICAgIGZvciAobGV0IFtrZXksIF9ub2RlXSBvZiBub2RlLmVudHJpZXMoKSkge1xuICAgICAgICByZXMuc2V0KGtleSwgdGhpcy52aXNpdChfbm9kZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcbiAgICAgIGxldCByZXM6IFRbXSA9IFtdO1xuICAgICAgLy8gVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcbiAgICAgIC8vIEB0cy1pZ25vcmUgaXMgaXRlcmFibGVcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUpIHtcbiAgICAgICAgcmVzLnB1c2godGhpcy52aXNpdChfbm9kZSkgYXMgVCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLy8gQHRzLWlnbm9yZSBOb2RlIGlzIG5vdCBpdGVyYWJsZS5cbiAgICAgIHJldHVybiB0aGlzLl92aXNpdChub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiBUO1xufSJdfQ==