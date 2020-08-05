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
exports.BaseVisitor = void 0;
var as_1 = require("../as");
var visitor_1 = require("./visitor");
var BaseVisitor = /** @class */ (function (_super) {
    __extends(BaseVisitor, _super);
    function BaseVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.depth = 0;
        return _this;
    }
    BaseVisitor.prototype._visit = function (node) {
        switch (node.kind) {
            case as_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case as_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case as_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case as_1.NodeKind.TYPENAME: {
                this.visitTypeName(node);
            }
            case as_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case as_1.NodeKind.FALSE:
            case as_1.NodeKind.NULL:
            case as_1.NodeKind.SUPER:
            case as_1.NodeKind.THIS:
            case as_1.NodeKind.TRUE:
            case as_1.NodeKind.CONSTRUCTOR:
            case as_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case as_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case as_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case as_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case as_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case as_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case as_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case as_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case as_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case as_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case as_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case as_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case as_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case as_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case as_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case as_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case as_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case as_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case as_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case as_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case as_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case as_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case as_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case as_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case as_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case as_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case as_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case as_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case as_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case as_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case as_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case as_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case as_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case as_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case as_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case as_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case as_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case as_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case as_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case as_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case as_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case as_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case as_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case as_1.NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case as_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case as_1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case as_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            case as_1.NodeKind.INDEXSIGNATURE: {
                this.visitIndexSignature(node);
                break;
            }
            default:
                assert(false);
        }
    };
    BaseVisitor.prototype.visitSource = function (node) {
        for (var _i = 0, _a = node.statements; _i < _a.length; _i++) {
            var stmt = _a[_i];
            this.depth++;
            this.visit(stmt);
            this.depth--;
        }
    };
    BaseVisitor.prototype.visitTypeNode = function (node) { };
    BaseVisitor.prototype.visitTypeName = function (node) {
        this.visit(node.identifier);
        if (node.next) {
            this.visit(node.next);
        }
    };
    BaseVisitor.prototype.visitNamedTypeNode = function (node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    };
    BaseVisitor.prototype.visitFunctionTypeNode = function (node) {
        for (var _i = 0, _a = node.parameters; _i < _a.length; _i++) {
            var param = _a[_i];
            this.visitParameter(param);
        }
        this.visit(node.returnType);
    };
    BaseVisitor.prototype.visitTypeParameter = function (node) {
        this.visit(node.name);
        if (node.extendsType)
            this.visit(node.extendsType);
        if (node.defaultType)
            this.visit(node.defaultType);
    };
    BaseVisitor.prototype.visitIdentifierExpression = function (node) { };
    BaseVisitor.prototype.visitArrayLiteralExpression = function (node) {
        var _this = this;
        node.elementExpressions.map(function (e) {
            if (e)
                _this.visit(e);
        });
    };
    BaseVisitor.prototype.visitObjectLiteralExpression = function (node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (var i = 0; i < node.values.length; i++) {
                this.visit(node.names[i]);
                this.visit(node.values[i]);
            }
        }
    };
    BaseVisitor.prototype.visitAssertionExpression = function (node) {
        if (node.toType)
            this.visit(node.toType);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitBinaryExpression = function (node) {
        this.visit(node.left);
        this.visit(node.right);
    };
    BaseVisitor.prototype.visitCallExpression = function (node) {
        this.visit(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    };
    BaseVisitor.prototype.visitArguments = function (typeArguments, args) {
    };
    BaseVisitor.prototype.visitClassExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitCommaExpression = function (node) {
        this.visit(node.expressions);
    };
    BaseVisitor.prototype.visitElementAccessExpression = function (node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFunctionExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitLiteralExpression = function (node) {
        switch (node.literalKind) {
            case as_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            default:
                throw new Error("Invalid LiteralKind: " + node.literalKind);
        }
    };
    BaseVisitor.prototype.visitFloatLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitInstanceOfExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.isType);
    };
    BaseVisitor.prototype.visitIntegerLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitStringLiteral = function (str, singleQuoted) { };
    BaseVisitor.prototype.visitStringLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitRegexpLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitNewExpression = function (node) {
        this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
    };
    BaseVisitor.prototype.visitParenthesizedExpression = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitPropertyAccessExpression = function (node) {
        this.visit(node.property);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitTernaryExpression = function (node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    };
    BaseVisitor.prototype.visitUnaryExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPostfixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPrefixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitSuperExpression = function (node) { };
    BaseVisitor.prototype.visitFalseExpression = function (node) { };
    BaseVisitor.prototype.visitTrueExpression = function (node) { };
    BaseVisitor.prototype.visitThisExpression = function (node) { };
    BaseVisitor.prototype.visitNullExperssion = function (node) { };
    BaseVisitor.prototype.visitConstructorExpression = function (node) { };
    BaseVisitor.prototype.visitNodeAndTerminate = function (statement) { };
    BaseVisitor.prototype.visitBlockStatement = function (node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    };
    BaseVisitor.prototype.visitBreakStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitContinueStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitClassDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric ? node.typeParameters != null : node.typeParameters == null);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        if (node.extendsType) {
            this.visit(node.extendsType);
        }
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitDoStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitEmptyStatement = function (node) { };
    BaseVisitor.prototype.visitEnumDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    };
    BaseVisitor.prototype.visitEnumValueDeclaration = function (node) {
        this.visit(node.name);
        if (node.initializer) {
            this.visit(node.initializer);
        }
    };
    BaseVisitor.prototype.visitExportImportStatement = function (node) {
        this.visit(node.name);
        this.visit(node.externalName);
    };
    BaseVisitor.prototype.visitExportMember = function (node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    };
    BaseVisitor.prototype.visitExportStatement = function (node) {
        if (node.path) {
            this.visit(node.path);
        }
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitExportDefaultStatement = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitExpressionStatement = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFieldDeclaration = function (node) {
        this.visit(node.name);
        if (node.type) {
            this.visit(node.type);
        }
        if (node.initializer) {
            this.visit(node.initializer);
        }
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitForStatement = function (node) {
        if (node.initializer)
            this.visit(node.initializer);
        if (node.condition)
            this.visit(node.condition);
        if (node.incrementor)
            this.visit(node.incrementor);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitFunctionDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitFunctionCommon = function (node) {
        // this.visit(node.name)
    };
    BaseVisitor.prototype.visitIfStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        if (node.ifFalse)
            this.visit(node.ifFalse);
    };
    BaseVisitor.prototype.visitImportDeclaration = function (node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitImportStatement = function (node) {
        if (node.namespaceName)
            this.visit(node.namespaceName);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitIndexSignature = function (node) {
        // this.visit(node.name);
        // this.visit(node.keyType);
        // this.visit(node.valueType);
    };
    BaseVisitor.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.implementsTypes);
        if (node.extendsType)
            this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitMethodDeclaration = function (node) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitReturnStatement = function (node) {
        if (node.value)
            this.visit(node.value);
    };
    BaseVisitor.prototype.visitSwitchCase = function (node) {
        if (node.label)
            this.visit(node.label);
        this.visit(node.statements);
    };
    BaseVisitor.prototype.visitSwitchStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    };
    BaseVisitor.prototype.visitThrowStatement = function (node) {
        this.visit(node.value);
    };
    BaseVisitor.prototype.visitTryStatement = function (node) {
        this.visit(node.statements);
        if (node.catchVariable)
            this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    };
    BaseVisitor.prototype.visitTypeDeclaration = function (node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    };
    BaseVisitor.prototype.visitVariableDeclaration = function (node) {
        this.visit(node.name);
        if (node.type)
            this.visit(node.type);
        if (node.initializer)
            this.visit(node.initializer);
    };
    BaseVisitor.prototype.visitVariableStatement = function (node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitWhileStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    };
    BaseVisitor.prototype.visitVoidStatement = function (node) { };
    BaseVisitor.prototype.visitComment = function (node) { };
    BaseVisitor.prototype.visitDecoratorNode = function (node) {
        this.visit(node.name);
        this.visit(node.args);
    };
    BaseVisitor.prototype.visitParameter = function (node) {
        this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            this.visit(node.initializer);
        this.visit(node.type);
    };
    return BaseVisitor;
}(visitor_1.AbstractVisitor));
exports.BaseVisitor = BaseVisitor;
