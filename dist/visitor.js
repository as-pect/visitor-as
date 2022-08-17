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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLFNBQVMsVUFBVSxDQUFJLE1BQVM7SUFDOUIsYUFBYTtJQUNiLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFDRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFnQixlQUFlO0lBQ25DLEtBQUssQ0FBQyxJQUEwQjtRQUM5QixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLFlBQVksR0FBRyxFQUFFO1lBQzlCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQiw0Q0FBNEM7WUFDNUMseUJBQXlCO1lBQ3pCLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7YUFBTTtZQUNMLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUdGO0FBRUQsTUFBTSxPQUFnQix3QkFBd0I7SUFDNUMsS0FBSyxDQUFDLElBQTBCO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM5QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBTSxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7WUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLDRDQUE0QztZQUM1Qyx5QkFBeUI7WUFDekIsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDWjthQUFNO1lBQ0wsb0NBQW9DO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FHRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xyXG5leHBvcnQgdHlwZSBDb2xsZWN0aW9uPFQgZXh0ZW5kcyB1bmtub3duPiA9XHJcbiAgfCBUXHJcbiAgfCBUW11cclxuICB8IE1hcDxzdHJpbmcsIFQgfCBUW10gfCBJdGVyYWJsZTxUPj5cclxuICB8IEl0ZXJhYmxlPFQ+O1xyXG5cclxuZnVuY3Rpb24gaXNJdGVyYWJsZTxUPihvYmplY3Q6IFQpOiBib29sZWFuIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbi8qKlxyXG4gKiBUb3AgbGV2ZWwgdmlzaXRvciB0aGF0IHdpbGwgZXhwZWN0IGFuIGltcGxlbWVudGVkIF92aXNpdCBmdW5jdGlvbiB0byB2aXNpdFxyXG4gKiBhIHNpbmdsZSBub2RlIGFuZCB0aGVuIHByb3ZpZGVzIGEgZ2VuZXJpYyBmdW5jdGlvbiBmb3IgY29sbGVjdGlvbnMgb2Ygbm9kZXNcclxuICogYW5kIHdpbGwgdmlzaXQgZWFjaCBtZW1iZXIgb2YgdGhlIGNvbGxlY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaXNpdG9yPFQgZXh0ZW5kcyB1bmtub3duPiB7XHJcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgbm9kZS5tYXAoKG5vZGUpID0+IHRoaXMudmlzaXQobm9kZSkpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUudmFsdWVzKCkpIHtcclxuICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc0l0ZXJhYmxlKG5vZGUpKSB7XHJcbiAgICAgIC8vIFRPRE86IEZpbmQgYmV0dGVyIHdheSB0byB0ZXN0IGlmIGl0ZXJhYmxlXHJcbiAgICAgIC8vIEB0cy1pZ25vcmUgaXMgaXRlcmFibGVcclxuICAgICAgZm9yIChsZXQgX25vZGUgb2Ygbm9kZSkge1xyXG4gICAgICAgIHRoaXMudmlzaXQoX25vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLy8gQHRzLWlnbm9yZSBOb2RlIGlzIG5vdCBpdGVyYWJsZS5cclxuICAgICAgdGhpcy5fdmlzaXQobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUcmFuc2Zvcm1WaXNpdG9yPFQgZXh0ZW5kcyB1bmtub3duPiB7XHJcbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiBDb2xsZWN0aW9uPFQ+IHwgbnVsbCB7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgcmV0dXJuIG5vZGUubWFwKChub2RlKSA9PiB0aGlzLnZpc2l0KG5vZGUpIGFzIFQpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XHJcbiAgICAgIGxldCByZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIF9ub2RlXSBvZiBub2RlLmVudHJpZXMoKSkge1xyXG4gICAgICAgIHJlcy5zZXQoa2V5LCB0aGlzLnZpc2l0KF9ub2RlKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShub2RlKSkge1xyXG4gICAgICBsZXQgcmVzOiBUW10gPSBbXTtcclxuICAgICAgLy8gVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcclxuICAgICAgLy8gQHRzLWlnbm9yZSBpcyBpdGVyYWJsZVxyXG4gICAgICBmb3IgKGxldCBfbm9kZSBvZiBub2RlKSB7XHJcbiAgICAgICAgcmVzLnB1c2godGhpcy52aXNpdChfbm9kZSkgYXMgVCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vLyBAdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxyXG4gICAgICByZXR1cm4gdGhpcy5fdmlzaXQobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3Zpc2l0KG5vZGU6IFQpOiBUO1xyXG59Il19