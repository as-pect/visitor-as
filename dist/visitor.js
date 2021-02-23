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
            for (let i = 0; i < node.length; i++) {
                this.visit(node[i]);
            }
        }
        else if (node instanceof Map) {
            console.log("hello here map");
            for (let _node of node.values()) {
                this.visit(_node);
            }
        }
        else if (isIterable(node)) {
            console.log("hello here");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsWUFBWTtJQUNaLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBc0IsZUFBZTtJQUNuQyxLQUFLLENBQUMsSUFBMEI7UUFDOUIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3pCLDJDQUEyQztZQUMzQyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7U0FDRjthQUFNO1lBQ0wsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0NBR0Y7QUExQkQsMENBMEJDO0FBRUQsTUFBc0Isd0JBQXdCO0lBQzVDLEtBQUssQ0FBQyxJQUEwQjtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDOUIsSUFBSSxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQU0sQ0FBQyxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxJQUFJLFlBQVksR0FBRyxFQUFFO1lBQzlCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztZQUNsQiwyQ0FBMkM7WUFDM0MseUJBQXlCO1lBQ3pCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFNLENBQUMsQ0FBQzthQUNsQztZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ1o7YUFBTTtZQUNMLG1DQUFtQztZQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0NBR0Y7QUExQkQsNERBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUIGV4dGVuZHMgb2JqZWN0PiA9XG4gIHwgVFxuICB8IFRbXVxuICB8IE1hcDxzdHJpbmcsIFQgfCBUW10gfCBJdGVyYWJsZTxUPj5cbiAgfCBJdGVyYWJsZTxUPjtcblxuZnVuY3Rpb24gaXNJdGVyYWJsZTxUPihvYmplY3Q6IFQpOiBib29sZWFuIHtcbiAgLy9AdHMtaWdub3JlXG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0gPT09IFwiZnVuY3Rpb25cIjtcbn1cbi8qKlxuICogVG9wIGxldmVsIHZpc2l0b3IgdGhhdCB3aWxsIGV4cGVjdCBhbiBpbXBsZW1lbnRlZCBfdmlzaXQgZnVuY3Rpb24gdG8gdmlzaXRcbiAqIGEgc2luZ2xlIG5vZGUgYW5kIHRoZW4gcHJvdmlkZXMgYSBnZW5lcmljIGZ1bmN0aW9uIGZvciBjb2xsZWN0aW9ucyBvZiBub2Rlc1xuICogYW5kIHdpbGwgdmlzaXQgZWFjaCBtZW1iZXIgb2YgdGhlIGNvbGxlY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFZpc2l0b3I8VCBleHRlbmRzIG9iamVjdD4ge1xuICB2aXNpdChub2RlOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gaGVyZSBtYXBcIik7XG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlLnZhbHVlcygpKSB7XG4gICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xuICAgICAgY29uc29sZS5sb2coXCJoZWxsbyBoZXJlXCIpXG4gICAgICAvL1RPRE86IEZpbmQgYmV0dGVyIHdheSB0byB0ZXN0IGlmIGl0ZXJhYmxlXG4gICAgICAvLyBAdHMtaWdub3JlIGlzIGl0ZXJhYmxlXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XG4gICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLy9AdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxuICAgICAgdGhpcy5fdmlzaXQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VHJhbnNmb3JtVmlzaXRvcjxUIGV4dGVuZHMgb2JqZWN0PiB7XG4gIHZpc2l0KG5vZGU6IENvbGxlY3Rpb248VD4gfCBudWxsKTogQ29sbGVjdGlvbjxUPiB8IG51bGwge1xuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBub2RlLm1hcCgobm9kZSkgPT4gdGhpcy52aXNpdChub2RlKSBhcyBUKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIGxldCByZXMgPSBuZXcgTWFwKCk7XG4gICAgICBmb3IgKGxldCBba2V5LCBfbm9kZV0gb2Ygbm9kZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgIHJlcy5zZXQoa2V5LCB0aGlzLnZpc2l0KF9ub2RlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xuICAgICAgbGV0IHJlczogVFtdID0gW107XG4gICAgICAvL1RPRE86IEZpbmQgYmV0dGVyIHdheSB0byB0ZXN0IGlmIGl0ZXJhYmxlXG4gICAgICAvLyBAdHMtaWdub3JlIGlzIGl0ZXJhYmxlXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMudmlzaXQoX25vZGUpIGFzIFQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8vQHRzLWlnbm9yZSBOb2RlIGlzIG5vdCBpdGVyYWJsZS5cbiAgICAgIHJldHVybiB0aGlzLl92aXNpdChub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiBUO1xufSJdfQ==