"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            node.map(node => this.visit(node));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsU0FBUyxVQUFVLENBQUksTUFBUztJQUM5QixZQUFZO0lBQ1osT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDekUsQ0FBQztBQUNDOzs7O0dBSUc7QUFDTCxNQUFzQixlQUFlO0lBQ25DLEtBQUssQ0FBQyxJQUEwQjtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNwQzthQUNJLElBQUksSUFBSSxZQUFZLEdBQUcsRUFBRTtZQUM1QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQjtTQUNGO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsMkNBQTJDO1lBQzdDLHlCQUF5QjtZQUN6QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtTQUNGO2FBQU07WUFDTCxtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7Q0FHRjtBQXZCRCwwQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248VCBleHRlbmRzIG9iamVjdD4gPSBUIHwgVFtdIHwgTWFwPHN0cmluZywgVCB8IFRbXSB8IEl0ZXJhYmxlPFQ+PiB8IEl0ZXJhYmxlPFQ+O1xuXG5mdW5jdGlvbiBpc0l0ZXJhYmxlPFQ+KG9iamVjdDogVCk6IGJvb2xlYW4ge1xuICAvL0B0cy1pZ25vcmVcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiO1xufVxuICAvKipcbiAgICogVG9wIGxldmVsIHZpc2l0b3IgdGhhdCB3aWxsIGV4cGVjdCBhbiBpbXBsZW1lbnRlZCBfdmlzaXQgZnVuY3Rpb24gdG8gdmlzaXRcbiAgICogYSBzaW5nbGUgbm9kZSBhbmQgdGhlbiBwcm92aWRlcyBhIGdlbmVyaWMgZnVuY3Rpb24gZm9yIGNvbGxlY3Rpb25zIG9mIG5vZGVzXG4gICAqIGFuZCB3aWxsIHZpc2l0IGVhY2ggbWVtYmVyIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpc2l0b3I8VCBleHRlbmRzIG9iamVjdD4ge1xuICB2aXNpdChub2RlOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7IFxuICAgICAgbm9kZS5tYXAobm9kZSA9PiB0aGlzLnZpc2l0KG5vZGUpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZS52YWx1ZXMoKSkge1xuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcbiAgICAgICAgLy9UT0RPOiBGaW5kIGJldHRlciB3YXkgdG8gdGVzdCBpZiBpdGVyYWJsZVxuICAgICAgLy8gQHRzLWlnbm9yZSBpcyBpdGVyYWJsZVxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xuICAgICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLy9AdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxuICAgICAgdGhpcy5fdmlzaXQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcbn1cbiJdfQ==