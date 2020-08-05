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
exports.BaseTransformVisitor = void 0;
var as_1 = require("../as");
var visitor_1 = require("./visitor");
var BaseTransformVisitor = /** @class */ (function (_super) {
    __extends(BaseTransformVisitor, _super);
    function BaseTransformVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.depth = 0;
        return _this;
    }
    BaseTransformVisitor.prototype._visit = function (node) {
        switch (node.kind) {
            case as_1.NodeKind.SOURCE: {
                return this.visitSource(node);
            }
            // types
            case as_1.NodeKind.NAMEDTYPE: {
                return this.visitNamedTypeNode(node);
            }
            case as_1.NodeKind.FUNCTIONTYPE: {
                return this.visitFunctionTypeNode(node);
            }
            case as_1.NodeKind.TYPENAME: {
                return this.visitTypeName(node);
            }
            case as_1.NodeKind.TYPEPARAMETER: {
                return this.visitTypeParameter(node);
            }
            // expressions
            case as_1.NodeKind.FALSE:
            case as_1.NodeKind.NULL:
            case as_1.NodeKind.SUPER:
            case as_1.NodeKind.THIS:
            case as_1.NodeKind.TRUE:
            case as_1.NodeKind.CONSTRUCTOR:
            case as_1.NodeKind.IDENTIFIER: {
                return this.visitIdentifierExpression(node);
            }
            case as_1.NodeKind.ASSERTION: {
                return this.visitAssertionExpression(node);
            }
            case as_1.NodeKind.BINARY: {
                return this.visitBinaryExpression(node);
            }
            case as_1.NodeKind.CALL: {
                return this.visitCallExpression(node);
            }
            case as_1.NodeKind.CLASS: {
                return this.visitClassExpression(node);
            }
            case as_1.NodeKind.COMMA: {
                return this.visitCommaExpression(node);
            }
            case as_1.NodeKind.ELEMENTACCESS: {
                return this.visitElementAccessExpression(node);
            }
            case as_1.NodeKind.FUNCTION: {
                return this.visitFunctionExpression(node);
            }
            case as_1.NodeKind.INSTANCEOF: {
                return this.visitInstanceOfExpression(node);
            }
            case as_1.NodeKind.LITERAL: {
                return this.visitLiteralExpression(node);
            }
            case as_1.NodeKind.NEW: {
                return this.visitNewExpression(node);
            }
            case as_1.NodeKind.PARENTHESIZED: {
                return this.visitParenthesizedExpression(node);
            }
            case as_1.NodeKind.PROPERTYACCESS: {
                return this.visitPropertyAccessExpression(node);
            }
            case as_1.NodeKind.TERNARY: {
                return this.visitTernaryExpression(node);
            }
            case as_1.NodeKind.UNARYPOSTFIX: {
                return this.visitUnaryPostfixExpression(node);
            }
            case as_1.NodeKind.UNARYPREFIX: {
                return this.visitUnaryPrefixExpression(node);
            }
            // statements
            case as_1.NodeKind.BLOCK: {
                return this.visitBlockStatement(node);
            }
            case as_1.NodeKind.BREAK: {
                return this.visitBreakStatement(node);
            }
            case as_1.NodeKind.CONTINUE: {
                return this.visitContinueStatement(node);
            }
            case as_1.NodeKind.DO: {
                return this.visitDoStatement(node);
            }
            case as_1.NodeKind.EMPTY: {
                return this.visitEmptyStatement(node);
            }
            case as_1.NodeKind.EXPORT: {
                return this.visitExportStatement(node);
            }
            case as_1.NodeKind.EXPORTDEFAULT: {
                return this.visitExportDefaultStatement(node);
            }
            case as_1.NodeKind.EXPORTIMPORT: {
                return this.visitExportImportStatement(node);
            }
            case as_1.NodeKind.EXPRESSION: {
                return this.visitExpressionStatement(node);
            }
            case as_1.NodeKind.FOR: {
                return this.visitForStatement(node);
            }
            case as_1.NodeKind.IF: {
                return this.visitIfStatement(node);
            }
            case as_1.NodeKind.IMPORT: {
                return this.visitImportStatement(node);
            }
            case as_1.NodeKind.RETURN: {
                return this.visitReturnStatement(node);
            }
            case as_1.NodeKind.SWITCH: {
                return this.visitSwitchStatement(node);
            }
            case as_1.NodeKind.THROW: {
                return this.visitThrowStatement(node);
            }
            case as_1.NodeKind.TRY: {
                return this.visitTryStatement(node);
            }
            case as_1.NodeKind.VARIABLE: {
                return this.visitVariableStatement(node);
            }
            case as_1.NodeKind.WHILE: {
                return this.visitWhileStatement(node);
            }
            // declaration statements
            case as_1.NodeKind.CLASSDECLARATION: {
                return this.visitClassDeclaration(node);
            }
            case as_1.NodeKind.ENUMDECLARATION: {
                return this.visitEnumDeclaration(node);
            }
            case as_1.NodeKind.ENUMVALUEDECLARATION: {
                return this.visitEnumValueDeclaration(node);
            }
            case as_1.NodeKind.FIELDDECLARATION: {
                return this.visitFieldDeclaration(node);
            }
            case as_1.NodeKind.FUNCTIONDECLARATION: {
                return this.visitFunctionDeclaration(node);
            }
            case as_1.NodeKind.IMPORTDECLARATION: {
                return this.visitImportDeclaration(node);
            }
            case as_1.NodeKind.INTERFACEDECLARATION: {
                return this.visitInterfaceDeclaration(node);
            }
            case as_1.NodeKind.METHODDECLARATION: {
                return this.visitMethodDeclaration(node);
            }
            case as_1.NodeKind.NAMESPACEDECLARATION: {
                return this.visitNamespaceDeclaration(node);
            }
            case as_1.NodeKind.TYPEDECLARATION: {
                return this.visitTypeDeclaration(node);
            }
            case as_1.NodeKind.VARIABLEDECLARATION: {
                return this.visitVariableDeclaration(node);
            }
            // other
            case as_1.NodeKind.DECORATOR: {
                return this.visitDecoratorNode(node);
            }
            case as_1.NodeKind.EXPORTMEMBER: {
                return this.visitExportMember(node);
            }
            case as_1.NodeKind.PARAMETER: {
                return this.visitParameter(node);
            }
            case as_1.NodeKind.SWITCHCASE: {
                return this.visitSwitchCase(node);
            }
            case as_1.NodeKind.INDEXSIGNATURE: {
                return this.visitIndexSignature(node);
            }
            default:
                assert(false);
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitStatement = function (node) {
        return node = this.visit(node);
    };
    BaseTransformVisitor.prototype.visitSource = function (node) {
        var statements = [];
        for (var _i = 0, _a = node.statements; _i < _a.length; _i++) {
            var stmt = _a[_i];
            this.depth++;
            statements.push(this.visitStatement(stmt));
            this.depth--;
        }
        node.statements = statements;
        return node;
    };
    BaseTransformVisitor.prototype.visitTypeNode = function (node) {
        return node;
    };
    BaseTransformVisitor.prototype.visitTypeName = function (node) {
        node.identifier = this.visitIdentifierExpression(node.identifier);
        if (node.next) {
            node.next = this.visit(node.next);
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitNamedTypeNode = function (node) {
        node.name = this.visit(node.name);
        node.typeArguments = this.visit(node.typeArguments);
        return node;
    };
    BaseTransformVisitor.prototype.visitFunctionTypeNode = function (node) {
        var params = [];
        for (var _i = 0, _a = node.parameters; _i < _a.length; _i++) {
            var param = _a[_i];
            params.push(this.visitParameter(param));
        }
        node.parameters = params;
        node.returnType = this.visit(node.returnType);
        return node;
    };
    BaseTransformVisitor.prototype.visitTypeParameter = function (node) {
        node.name = this.visit(node.name);
        if (node.extendsType)
            node.extendsType = this.visit(node.extendsType);
        if (node.defaultType)
            node.defaultType = this.visit(node.defaultType);
        return node;
    };
    BaseTransformVisitor.prototype.visitIdentifierExpression = function (node) {
        return node;
    };
    BaseTransformVisitor.prototype.visitArrayLiteralExpression = function (node) {
        var _this = this;
        node.elementExpressions = node.elementExpressions.map(function (e) { return _this.visit(e); });
        return node;
    };
    BaseTransformVisitor.prototype.visitObjectLiteralExpression = function (node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (var i = 0; i < node.values.length; i++) {
                node.names[i] = this.visit(node.names[i]);
                node.values[i] = this.visit(node.values[i]);
            }
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitAssertionExpression = function (node) {
        if (node.toType)
            node.toType = this.visit(node.toType);
        node.expression = this.visit(node.expression);
        return node;
    };
    BaseTransformVisitor.prototype.visitBinaryExpression = function (node) {
        node.left = this.visit(node.left);
        node.right = this.visit(node.right);
        return node;
    };
    BaseTransformVisitor.prototype.visitCallExpression = function (node) {
        node.expression = this.visit(node.expression);
        node.typeArguments = this.visit(node.typeArguments);
        node.args = this.visit(node.args);
        this.visitArguments(node.typeArguments, node.args);
        return node;
    };
    BaseTransformVisitor.prototype.visitArguments = function (typeArguments, args) {
    };
    BaseTransformVisitor.prototype.visitClassExpression = function (node) {
        node.declaration = this.visit(node.declaration);
        return node;
    };
    BaseTransformVisitor.prototype.visitCommaExpression = function (node) {
        node.expressions = this.visit(node.expressions);
        return node;
    };
    BaseTransformVisitor.prototype.visitElementAccessExpression = function (node) {
        node.elementExpression = this.visit(node.elementExpression);
        node.expression = this.visit(node.expression);
        return node;
    };
    BaseTransformVisitor.prototype.visitFunctionExpression = function (node) {
        node.declaration = this.visit(node.declaration);
        return node;
    };
    BaseTransformVisitor.prototype.visitLiteralExpression = function (node) {
        switch (node.literalKind) {
            case as_1.LiteralKind.ARRAY: {
                return this.visitArrayLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.FLOAT: {
                return this.visitFloatLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.INTEGER: {
                return this.visitIntegerLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.OBJECT: {
                return this.visitObjectLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.REGEXP: {
                return this.visitRegexpLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.STRING: {
                return this.visitStringLiteralExpression(node);
                break;
            }
            default:
                throw new Error("Invalid LiteralKind: " + node.literalKind);
        }
    };
    BaseTransformVisitor.prototype.visitFloatLiteralExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitInstanceOfExpression = function (node) {
        node.expression = this.visit(node.expression);
        node.isType = this.visit(node.isType);
        return node;
    };
    BaseTransformVisitor.prototype.visitIntegerLiteralExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitStringLiteral = function (str, singleQuoted) { return str; };
    BaseTransformVisitor.prototype.visitStringLiteralExpression = function (node) {
        node.value = this.visitStringLiteral(node.value);
        return node;
    };
    BaseTransformVisitor.prototype.visitRegexpLiteralExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitNewExpression = function (node) {
        node.typeArguments = this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
        return node;
    };
    BaseTransformVisitor.prototype.visitParenthesizedExpression = function (node) {
        node.expression = this.visit(node.expression);
        return node;
    };
    BaseTransformVisitor.prototype.visitPropertyAccessExpression = function (node) {
        node.property = this.visit(node.property);
        node.expression = this.visit(node.expression);
        return node;
    };
    BaseTransformVisitor.prototype.visitTernaryExpression = function (node) {
        node.condition = this.visit(node.condition);
        node.ifThen = this.visit(node.ifThen);
        node.ifElse = this.visit(node.ifElse);
        return node;
    };
    BaseTransformVisitor.prototype.visitUnaryExpression = function (node) {
        node.operand = this.visit(node.operand);
        return node;
    };
    BaseTransformVisitor.prototype.visitUnaryPostfixExpression = function (node) {
        node.operand = this.visit(node.operand);
        return node;
    };
    BaseTransformVisitor.prototype.visitUnaryPrefixExpression = function (node) {
        node.operand = this.visit(node.operand);
        return node;
    };
    BaseTransformVisitor.prototype.visitSuperExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitFalseExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitTrueExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitThisExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitNullExperssion = function (node) { return node; };
    BaseTransformVisitor.prototype.visitConstructorExpression = function (node) { return node; };
    BaseTransformVisitor.prototype.visitNodeAndTerminate = function (node) { return node; };
    BaseTransformVisitor.prototype.visitBlockStatement = function (node) {
        this.depth++;
        node.statements = this.visit(node.statements);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitBreakStatement = function (node) {
        if (node.label) {
            node.label = this.visit(node.label);
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitContinueStatement = function (node) {
        if (node.label) {
            node.label = this.visit(node.label);
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitClassDeclaration = function (node, isDefault) {
        node.name = this.visit(node.name);
        this.depth++;
        node.decorators = this.visit(node.decorators);
        assert(node.isGeneric ? node.typeParameters != null : node.typeParameters == null);
        if (node.isGeneric) {
            node.typeParameters = this.visit(node.typeParameters);
        }
        if (node.extendsType) {
            node.extendsType = this.visit(node.extendsType);
        }
        node.implementsTypes = this.visit(node.implementsTypes);
        node.members = this.visit(node.members);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitDoStatement = function (node) {
        node.condition = this.visit(node.condition);
        node.statement = this.visit(node.statement);
        return node;
    };
    BaseTransformVisitor.prototype.visitEmptyStatement = function (node) { return node; };
    BaseTransformVisitor.prototype.visitEnumDeclaration = function (node, isDefault) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.values = this.visit(node.values);
        return node;
    };
    BaseTransformVisitor.prototype.visitEnumValueDeclaration = function (node) {
        node.name = this.visit(node.name);
        if (node.initializer) {
            node.initializer = this.visit(node.initializer);
        }
        return node;
    };
    BaseTransformVisitor.prototype.visitExportImportStatement = function (node) {
        node.name = this.visit(node.name);
        node.externalName = this.visit(node.externalName);
        return node;
    };
    BaseTransformVisitor.prototype.visitExportMember = function (node) {
        node.localName = this.visit(node.localName);
        node.exportedName = this.visit(node.exportedName);
        return node;
    };
    BaseTransformVisitor.prototype.visitExportStatement = function (node) {
        if (node.path) {
            node.path = this.visit(node.path);
        }
        node.members = this.visit(node.members);
        return node;
    };
    BaseTransformVisitor.prototype.visitExportDefaultStatement = function (node) {
        node.declaration = this.visit(node.declaration);
        return node;
    };
    BaseTransformVisitor.prototype.visitExpressionStatement = function (node) {
        node.expression = this.visit(node.expression);
        return node;
    };
    BaseTransformVisitor.prototype.visitFieldDeclaration = function (node) {
        node.name = this.visit(node.name);
        if (node.type) {
            node.type = this.visit(node.type);
        }
        if (node.initializer) {
            node.initializer = this.visit(node.initializer);
        }
        node.decorators = this.visit(node.decorators);
        return node;
    };
    BaseTransformVisitor.prototype.visitForStatement = function (node) {
        if (node.initializer)
            node.initializer = this.visit(node.initializer);
        if (node.condition)
            node.condition = this.visit(node.condition);
        if (node.incrementor)
            node.incrementor = this.visit(node.incrementor);
        node.statement = this.visit(node.statement);
        return node;
    };
    BaseTransformVisitor.prototype.visitFunctionDeclaration = function (node, isDefault) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        if (node.isGeneric) {
            node.typeParameters = this.visit(node.typeParameters);
        }
        node.signature = this.visit(node.signature);
        this.depth++;
        if (node.body)
            node.body = this.visit(node.body);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitFunctionCommon = function (node) {
        return node;
    };
    BaseTransformVisitor.prototype.visitIfStatement = function (node) {
        node.condition = this.visit(node.condition);
        node.ifTrue = this.visit(node.ifTrue);
        if (node.ifFalse)
            node.ifFalse = this.visit(node.ifFalse);
        return node;
    };
    BaseTransformVisitor.prototype.visitImportDeclaration = function (node) {
        node.foreignName = this.visit(node.foreignName);
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        return node;
    };
    BaseTransformVisitor.prototype.visitImportStatement = function (node) {
        if (node.namespaceName)
            node.namespaceName = this.visit(node.namespaceName);
        node.declarations = this.visit(node.declarations);
        return node;
    };
    BaseTransformVisitor.prototype.visitIndexSignature = function (node) {
        return node;
    };
    BaseTransformVisitor.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        node.name = this.visit(node.name);
        if (node.isGeneric) {
            node.typeParameters = this.visit(node.typeParameters);
        }
        node.implementsTypes = this.visit(node.implementsTypes);
        if (node.extendsType)
            node.extendsType = this.visit(node.extendsType);
        this.depth++;
        node.members = this.visit(node.members);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitMethodDeclaration = function (node) {
        node.name = this.visit(node.name);
        if (node.isGeneric) {
            node.typeParameters = this.visit(node.typeParameters);
        }
        node.signature = this.visit(node.signature);
        node.decorators = this.visit(node.decorators);
        this.depth++;
        if (node.body)
            node.body = this.visit(node.body);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.members = this.visit(node.members);
        return node;
    };
    BaseTransformVisitor.prototype.visitReturnStatement = function (node) {
        if (node.value)
            node.value = this.visit(node.value);
        return node;
    };
    BaseTransformVisitor.prototype.visitSwitchCase = function (node) {
        if (node.label)
            node.label = this.visit(node.label);
        node.statements = this.visit(node.statements);
        return node;
    };
    BaseTransformVisitor.prototype.visitSwitchStatement = function (node) {
        node.condition = this.visit(node.condition);
        this.depth++;
        node.cases = this.visit(node.cases);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitThrowStatement = function (node) {
        node.value = this.visit(node.value);
        return node;
    };
    BaseTransformVisitor.prototype.visitTryStatement = function (node) {
        node.statements = this.visit(node.statements);
        if (node.catchVariable)
            node.catchVariable = this.visit(node.catchVariable);
        node.catchStatements = this.visit(node.catchStatements);
        node.finallyStatements = this.visit(node.finallyStatements);
        return node;
    };
    BaseTransformVisitor.prototype.visitTypeDeclaration = function (node) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.type = this.visit(node.type);
        node.typeParameters = this.visit(node.typeParameters);
        return node;
    };
    BaseTransformVisitor.prototype.visitVariableDeclaration = function (node) {
        node.name = this.visit(node.name);
        if (node.type)
            node.type = this.visit(node.type);
        if (node.initializer)
            node.initializer = this.visit(node.initializer);
        return node;
    };
    BaseTransformVisitor.prototype.visitVariableStatement = function (node) {
        node.decorators = this.visit(node.decorators);
        node.declarations = this.visit(node.declarations);
        return node;
    };
    BaseTransformVisitor.prototype.visitWhileStatement = function (node) {
        node.condition = this.visit(node.condition);
        this.depth++;
        node.statement = this.visit(node.statement);
        this.depth--;
        return node;
    };
    BaseTransformVisitor.prototype.visitVoidStatement = function (node) { return node; };
    BaseTransformVisitor.prototype.visitComment = function (node) { return node; };
    BaseTransformVisitor.prototype.visitDecoratorNode = function (node) {
        node.name = this.visit(node.name);
        node.args = this.visit(node.args);
        return node;
    };
    BaseTransformVisitor.prototype.visitParameter = function (node) {
        node.name = this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            node.implicitFieldDeclaration = this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            node.initializer = this.visit(node.initializer);
        node.type = this.visit(node.type);
        return node;
    };
    return BaseTransformVisitor;
}(visitor_1.AbstractTransformVisitor));
exports.BaseTransformVisitor = BaseTransformVisitor;
