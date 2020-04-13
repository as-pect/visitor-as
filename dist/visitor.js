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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsU0FBUyxVQUFVLENBQUksTUFBUztJQUM5QixZQUFZO0lBQ1osT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDekUsQ0FBQztBQUNEOzs7O0dBSUc7QUFDSCxNQUFzQixlQUFlO0lBQ25DLEtBQUssQ0FBQyxJQUEwQjtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLFlBQVksR0FBRyxFQUFFO1lBQzlCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQiwyQ0FBMkM7WUFDM0MseUJBQXlCO1lBQ3pCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUdGO0FBdEJELDBDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIENvbGxlY3Rpb248VCBleHRlbmRzIG9iamVjdD4gPVxuICB8IFRcbiAgfCBUW11cbiAgfCBNYXA8c3RyaW5nLCBUIHwgVFtdIHwgSXRlcmFibGU8VD4+XG4gIHwgSXRlcmFibGU8VD47XG5cbmZ1bmN0aW9uIGlzSXRlcmFibGU8VD4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XG4gIC8vQHRzLWlnbm9yZVxuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdFtTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCI7XG59XG4vKipcbiAqIFRvcCBsZXZlbCB2aXNpdG9yIHRoYXQgd2lsbCBleHBlY3QgYW4gaW1wbGVtZW50ZWQgX3Zpc2l0IGZ1bmN0aW9uIHRvIHZpc2l0XG4gKiBhIHNpbmdsZSBub2RlIGFuZCB0aGVuIHByb3ZpZGVzIGEgZ2VuZXJpYyBmdW5jdGlvbiBmb3IgY29sbGVjdGlvbnMgb2Ygbm9kZXNcbiAqIGFuZCB3aWxsIHZpc2l0IGVhY2ggbWVtYmVyIG9mIHRoZSBjb2xsZWN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaXNpdG9yPFQgZXh0ZW5kcyBvYmplY3Q+IHtcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbm9kZS5tYXAoKG5vZGUpID0+IHRoaXMudmlzaXQobm9kZSkpO1xuICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZS52YWx1ZXMoKSkge1xuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUobm9kZSkpIHtcbiAgICAgIC8vVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcbiAgICAgIC8vIEB0cy1pZ25vcmUgaXMgaXRlcmFibGVcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdChfbm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL0B0cy1pZ25vcmUgTm9kZSBpcyBub3QgaXRlcmFibGUuXG4gICAgICB0aGlzLl92aXNpdChub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiB2b2lkO1xufVxuIl19