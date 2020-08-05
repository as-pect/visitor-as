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
exports.VariableDecorator = exports.FunctionDecorator = exports.ClassDecorator = exports.Decorator = exports.TopLevelDecorator = exports.registerDecorator = void 0;
var transformer_1 = require("./transformer");
var utils_1 = require("./utils");
function registerDecorator(decorator) {
    TopLevelDecorator.registerVisitor(decorator);
    return TopLevelDecorator;
}
exports.registerDecorator = registerDecorator;
var TopLevelDecorator = /** @class */ (function (_super) {
    __extends(TopLevelDecorator, _super);
    function TopLevelDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopLevelDecorator.registerVisitor = function (visitor) {
        TopLevelDecorator._visitor = visitor;
    };
    Object.defineProperty(TopLevelDecorator.prototype, "visitor", {
        get: function () {
            return TopLevelDecorator._visitor;
        },
        enumerable: false,
        configurable: true
    });
    TopLevelDecorator.prototype.visitDecoratorNode = function (node) {
        if (utils_1.decorates(node, this.visitor.name)) {
            this.visitor.currentPath = this.currentParentPath;
            this.visitor.visit(this.currentParent);
        }
    };
    TopLevelDecorator.prototype.afterParse = function (_) {
        transformer_1.mergeTransformer(this, this.visitor);
        this.visit(this.program.sources.filter(this.visitor.sourceFilter));
    };
    return TopLevelDecorator;
}(transformer_1.PathTransformVisitor));
exports.TopLevelDecorator = TopLevelDecorator;
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Decorator.prototype, "sourceFilter", {
        /**
         * Default filter that removes library files
         */
        get: function () {
            return utils_1.not(utils_1.isLibrary);
        },
        enumerable: false,
        configurable: true
    });
    return Decorator;
}(transformer_1.PathTransformVisitor));
exports.Decorator = Decorator;
var ClassDecorator = /** @class */ (function (_super) {
    __extends(ClassDecorator, _super);
    function ClassDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassDecorator;
}(Decorator));
exports.ClassDecorator = ClassDecorator;
var FunctionDecorator = /** @class */ (function (_super) {
    __extends(FunctionDecorator, _super);
    function FunctionDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FunctionDecorator;
}(Decorator));
exports.FunctionDecorator = FunctionDecorator;
var VariableDecorator = /** @class */ (function (_super) {
    __extends(VariableDecorator, _super);
    function VariableDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VariableDecorator;
}(Decorator));
exports.VariableDecorator = VariableDecorator;
