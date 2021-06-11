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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtUmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNmb3JtUmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQXVEO0FBSXZELE1BQWEsY0FBZSxTQUFRLG9DQUFvQjtJQUN0RCxZQUFvQixJQUFVO1FBQUUsS0FBSyxFQUFFLENBQUE7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFTLENBQUM7SUFBQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxJQUFVO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVSxFQUFFLElBQVU7UUFDakMsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRWhELENBQUM7Q0FDRjtBQVpELHdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vYXNcIlxyXG5pbXBvcnQgeyBCYXNlVHJhbnNmb3JtVmlzaXRvciB9IGZyb20gXCIuL2Jhc2VUcmFuc2Zvcm1cIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmdlVHJhbnNmb3JtIGV4dGVuZHMgQmFzZVRyYW5zZm9ybVZpc2l0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm9kZTogTm9kZSl7c3VwZXIoKX07XHJcblxyXG4gIF92aXNpdChub2RlOiBOb2RlKTogTm9kZSB7XHJcbiAgICBub2RlLnJhbmdlID0gdGhpcy5ub2RlLnJhbmdlO1xyXG4gICAgcmV0dXJuIHN1cGVyLl92aXNpdChub2RlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB2aXNpdChub2RlOiBOb2RlLCBmcm9tOiBOb2RlKTogTm9kZSB7XHJcbiAgICByZXR1cm4gKG5ldyBSYW5nZVRyYW5zZm9ybShmcm9tKSkuX3Zpc2l0KG5vZGUpXHJcblxyXG4gIH1cclxufSJdfQ==