"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PathVisitor = void 0;
var base_1 = require("./base");
var _1 = require(".");
var PathVisitor = /** @class */ (function (_super) {
    __extends(PathVisitor, _super);
    function PathVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentPath = [];
        return _this;
    }
    PathVisitor.prototype._visit = function (node) {
        this.currentPath.push(node);
        _super.prototype._visit.call(this, node);
        this.currentPath.pop();
    };
    Object.defineProperty(PathVisitor.prototype, "currentNode", {
        get: function () {
            return this.currentPath[this.currentPath.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PathVisitor.prototype, "currentParent", {
        get: function () {
            if (this.currentPath.length == 1)
                return this.currentNode;
            return this.currentPath[this.currentPath.length - 2];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PathVisitor.prototype, "currentParentPath", {
        get: function () {
            return this.currentPath.slice(0, this.currentPath.length - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PathVisitor.prototype, "currentGrandParentPath", {
        get: function () {
            return this.currentPath.length < 3
                ? []
                : this.currentPath.slice(0, this.currentPath.length - 2);
        },
        enumerable: false,
        configurable: true
    });
    PathVisitor.prototype.cloneCurrentNode = function () {
        return _1.utils.cloneNode(this.currentNode);
    };
    PathVisitor.prototype.replaceCurrentNode = function (node) {
        var _this = this;
        Object.getOwnPropertyNames(this.currentParent).forEach(function (name) {
            //@ts-ignore
            var prop = _this.currentParent[name];
            if (prop == _this.currentNode) {
                //@ts-ignore
                _this.currentParent[name] = node;
            }
        });
    };
    return PathVisitor;
}(base_1.BaseVisitor));
exports.PathVisitor = PathVisitor;
