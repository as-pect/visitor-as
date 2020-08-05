"use strict";
exports.__esModule = true;
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
var AbstractVisitor = /** @class */ (function () {
    function AbstractVisitor() {
    }
    AbstractVisitor.prototype.visit = function (node) {
        var _this = this;
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map(function (node) { return _this.visit(node); });
        }
        else if (node instanceof Map) {
            for (var _i = 0, _a = node.values(); _i < _a.length; _i++) {
                var _node = _a[_i];
                this.visit(_node);
            }
        }
        else if (isIterable(node)) {
            //TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (var _b = 0, node_1 = node; _b < node_1.length; _b++) {
                var _node = node_1[_b];
                this.visit(_node);
            }
        }
        else {
            ///@ts-ignore Node is not iterable.
            this._visit(node);
        }
    };
    return AbstractVisitor;
}());
exports.AbstractVisitor = AbstractVisitor;
var AbstractTransformVisitor = /** @class */ (function () {
    function AbstractTransformVisitor() {
    }
    AbstractTransformVisitor.prototype.visit = function (node) {
        var _this = this;
        if (node == null)
            return null;
        if (node instanceof Array) {
            return node.map(function (node) { return _this.visit(node); });
        }
        else if (node instanceof Map) {
            var res = new Map();
            for (var _i = 0, _a = node.entries(); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], _node = _b[1];
                res.set(key, this.visit(_node));
            }
            return res;
        }
        else if (isIterable(node)) {
            var res = [];
            //TODO: Find better way to test if iterable
            // @ts-ignore is iterable
            for (var _c = 0, node_2 = node; _c < node_2.length; _c++) {
                var _node = node_2[_c];
                res.push(this.visit(_node));
            }
            return res;
        }
        else {
            ///@ts-ignore Node is not iterable.
            return this._visit(node);
        }
    };
    return AbstractTransformVisitor;
}());
exports.AbstractTransformVisitor = AbstractTransformVisitor;
