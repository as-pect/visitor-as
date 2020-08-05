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
exports.TransformVisitor = exports.mergeTransformer = exports.PathTransformVisitor = exports.ASTBuilderVisitor = exports.ASTTransformVisitor = void 0;
var base_1 = require("./base");
var as_1 = require("../as");
var astBuilder_1 = require("./astBuilder");
var path_1 = require("./path");
var ts_mixer_1 = require("ts-mixer");
var baseTransform_1 = require("./baseTransform");
var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Transform;
}(as_1.Transform));
var ASTTransformVisitor = /** @class */ (function (_super) {
    __extends(ASTTransformVisitor, _super);
    function ASTTransformVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ASTTransformVisitor;
}(ts_mixer_1.Mixin(base_1.BaseVisitor, Transform)));
exports.ASTTransformVisitor = ASTTransformVisitor;
var ASTBuilderVisitor = /** @class */ (function (_super) {
    __extends(ASTBuilderVisitor, _super);
    function ASTBuilderVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ASTBuilderVisitor;
}(ts_mixer_1.Mixin(astBuilder_1.ASTBuilder, Transform)));
exports.ASTBuilderVisitor = ASTBuilderVisitor;
var PathTransformVisitor = /** @class */ (function (_super) {
    __extends(PathTransformVisitor, _super);
    function PathTransformVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PathTransformVisitor;
}(ts_mixer_1.Mixin(path_1.PathVisitor, Transform)));
exports.PathTransformVisitor = PathTransformVisitor;
function mergeTransformer(from, to) {
    //@ts-ignore
    to.program = from.program;
    //@ts-ignore
    to.baseDir = from.baseDir;
    //@ts-ignore
    to.stdout = from.stdout;
    //@ts-ignore
    to.stderr = from.stderr;
    //@ts-ignore
    to.log = from.log;
    to.writeFile = from.writeFile;
    to.readFile = from.readFile;
    to.listFiles = from.listFiles;
}
exports.mergeTransformer = mergeTransformer;
var TransformVisitor = /** @class */ (function (_super) {
    __extends(TransformVisitor, _super);
    function TransformVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransformVisitor;
}(ts_mixer_1.Mixin(baseTransform_1.BaseTransformVisitor, Transform)));
exports.TransformVisitor = TransformVisitor;
