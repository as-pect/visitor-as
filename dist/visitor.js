function isIterable(object) {
    // @ts-ignore
    return object != null && typeof object[Symbol.iterator] === "function";
}
/**
 * Top level visitor that will expect an implemented _visit function to visit
 * a single node and then provides a generic function for collections of nodes
 * and will visit each member of the collection.
 */
export class AbstractVisitor {
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
export class AbstractTransformVisitor {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsYUFBYTtJQUNiLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFnQixlQUFlO0lBQ25DLEtBQUssQ0FBQyxJQUEwQjtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLFlBQVksR0FBRyxFQUFFO1lBQzlCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQiw0Q0FBNEM7WUFDNUMseUJBQXlCO1lBQ3pCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUdGO0FBRUQsTUFBTSxPQUFnQix3QkFBd0I7SUFDNUMsS0FBSyxDQUFDLElBQTBCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLDRDQUE0QztZQUM1Qyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FHRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUIGV4dGVuZHMgdW5rbm93bj4gPVxuICB8IFRcbiAgfCBUW11cbiAgfCBNYXA8c3RyaW5nLCBUIHwgVFtdIHwgSXRlcmFibGU8VD4+XG4gIHwgSXRlcmFibGU8VD47XG5cbmZ1bmN0aW9uIGlzSXRlcmFibGU8VD4ob2JqZWN0OiBUKTogYm9vbGVhbiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiO1xufVxuLyoqXG4gKiBUb3AgbGV2ZWwgdmlzaXRvciB0aGF0IHdpbGwgZXhwZWN0IGFuIGltcGxlbWVudGVkIF92aXNpdCBmdW5jdGlvbiB0byB2aXNpdFxuICogYSBzaW5nbGUgbm9kZSBhbmQgdGhlbiBwcm92aWRlcyBhIGdlbmVyaWMgZnVuY3Rpb24gZm9yIGNvbGxlY3Rpb25zIG9mIG5vZGVzXG4gKiBhbmQgd2lsbCB2aXNpdCBlYWNoIG1lbWJlciBvZiB0aGUgY29sbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VmlzaXRvcjxUIGV4dGVuZHMgdW5rbm93bj4ge1xuICB2aXNpdChub2RlOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBub2RlLm1hcCgobm9kZSkgPT4gdGhpcy52aXNpdChub2RlKSk7XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlLnZhbHVlcygpKSB7XG4gICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xuICAgICAgLy8gVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcbiAgICAgIC8vIEB0cy1pZ25vcmUgaXMgaXRlcmFibGVcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUpIHtcbiAgICAgICAgdGhpcy52aXNpdChfbm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vLyBAdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxuICAgICAgdGhpcy5fdmlzaXQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF92aXNpdChub2RlOiBUKTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VHJhbnNmb3JtVmlzaXRvcjxUIGV4dGVuZHMgdW5rbm93bj4ge1xuICB2aXNpdChub2RlOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCk6IENvbGxlY3Rpb248VD4gfCBudWxsIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gbm9kZS5tYXAoKG5vZGUpID0+IHRoaXMudmlzaXQobm9kZSkgYXMgVCk7XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBsZXQgcmVzID0gbmV3IE1hcCgpO1xuICAgICAgZm9yIChsZXQgW2tleSwgX25vZGVdIG9mIG5vZGUuZW50cmllcygpKSB7XG4gICAgICAgIHJlcy5zZXQoa2V5LCB0aGlzLnZpc2l0KF9ub2RlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xuICAgICAgbGV0IHJlczogVFtdID0gW107XG4gICAgICAvLyBUT0RPOiBGaW5kIGJldHRlciB3YXkgdG8gdGVzdCBpZiBpdGVyYWJsZVxuICAgICAgLy8gQHRzLWlnbm9yZSBpcyBpdGVyYWJsZVxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xuICAgICAgICByZXMucHVzaCh0aGlzLnZpc2l0KF9ub2RlKSBhcyBUKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vLyBAdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxuICAgICAgcmV0dXJuIHRoaXMuX3Zpc2l0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfdmlzaXQobm9kZTogVCk6IFQ7XG59Il19