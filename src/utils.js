"use strict";
exports.__esModule = true;
exports.cloneNode = exports.toString = exports.not = exports.isLibrary = exports.hasDecorator = exports.isDecorator = exports.decorates = void 0;
var astBuilder_1 = require("./astBuilder");
var cloneDeep = require("lodash.clonedeep");
function decorates(node, name) {
    return node.name.text === name;
}
exports.decorates = decorates;
function isDecorator(name) {
    return function (node) { return decorates(node, name); };
}
exports.isDecorator = isDecorator;
function hasDecorator(node, name) {
    var _a;
    // because it could be undefined
    return ((_a = node.decorators) === null || _a === void 0 ? void 0 : _a.some(isDecorator(name))) == true;
}
exports.hasDecorator = hasDecorator;
function isLibrary(node) {
    return node.isLibrary || node.internalPath.startsWith("~lib/rt/");
}
exports.isLibrary = isLibrary;
function not(fn) {
    return function (t) { return !fn(t); };
}
exports.not = not;
function toString(node) {
    return astBuilder_1.ASTBuilder.build(node);
}
exports.toString = toString;
function cloneNode(node) {
    return cloneDeep(node);
}
exports.cloneNode = cloneNode;
