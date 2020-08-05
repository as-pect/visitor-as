"use strict";
exports.__esModule = true;
exports.SimpleParser = void 0;
var as_1 = require("../as");
var SimpleParser = /** @class */ (function () {
    function SimpleParser() {
    }
    SimpleParser.getTokenizer = function (s) {
        return new as_1.Tokenizer(new as_1.Source(as_1.SourceKind.USER, "index.ts", s));
    };
    SimpleParser.parseExpression = function (s) {
        var res = this.parser.parseExpression(this.getTokenizer(s));
        if (res == null) {
            throw new Error("Failed to parse the expression: '" + s + "'");
        }
        return res;
    };
    SimpleParser.parseStatement = function (s, topLevel) {
        if (topLevel === void 0) { topLevel = false; }
        var res = this.parser.parseStatement(this.getTokenizer(s), topLevel);
        if (res == null) {
            throw new Error("Failed to parse the statement: '" + s + "'");
        }
        return res;
    };
    SimpleParser.parser = new as_1.Parser();
    return SimpleParser;
}());
exports.SimpleParser = SimpleParser;
