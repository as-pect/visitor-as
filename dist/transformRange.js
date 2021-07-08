"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeTransform = void 0;
const baseTransform_1 = require("./baseTransform");
class RangeTransform extends baseTransform_1.BaseTransformVisitor {
    constructor(node) {
        super();
        this.node = node;
    }
    ;
    _visit(node) {
        node.range = this.node.range;
        return super._visit(node);
    }
    static visit(node, from) {
        return (new RangeTransform(from))._visit(node);
    }
}
exports.RangeTransform = RangeTransform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNmb3JtUmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQXVEO0FBSXZELE1BQWEsY0FBZSxTQUFRLG9DQUFvQjtJQUN0RCxZQUFvQixJQUFVO1FBQUUsS0FBSyxFQUFFLENBQUE7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFTLENBQUM7SUFBQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxJQUFVO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVSxFQUFFLElBQVU7UUFDakMsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRWhELENBQUM7Q0FDRjtBQVpELHdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vYXNcIlxuaW1wb3J0IHsgQmFzZVRyYW5zZm9ybVZpc2l0b3IgfSBmcm9tIFwiLi9iYXNlVHJhbnNmb3JtXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgUmFuZ2VUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlVHJhbnNmb3JtVmlzaXRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm9kZTogTm9kZSl7c3VwZXIoKX07XG5cbiAgX3Zpc2l0KG5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgICBub2RlLnJhbmdlID0gdGhpcy5ub2RlLnJhbmdlO1xuICAgIHJldHVybiBzdXBlci5fdmlzaXQobm9kZSk7XG4gIH1cblxuICBzdGF0aWMgdmlzaXQobm9kZTogTm9kZSwgZnJvbTogTm9kZSk6IE5vZGUge1xuICAgIHJldHVybiAobmV3IFJhbmdlVHJhbnNmb3JtKGZyb20pKS5fdmlzaXQobm9kZSlcblxuICB9XG59Il19