"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVisitor = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
const as_1 = require("../as");
const visitor_1 = require("./visitor");
class BaseVisitor extends visitor_1.AbstractVisitor {
    constructor() {
        super(...arguments);
        this.depth = 0;
    }
    _visit(node) {
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
    }
    visitSource(node) {
        for (const stmt of node.statements) {
            this.depth++;
            this.visit(stmt);
            this.depth--;
        }
    }
    visitTypeNode(node) { }
    visitTypeName(node) {
        this.visit(node.identifier);
        this.visit(node.next);
    }
    visitNamedTypeNode(node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    }
    visitFunctionTypeNode(node) {
        this.visit(node.parameters);
        this.visit(node.returnType);
        this.visit(node.explicitThisType);
    }
    visitTypeParameter(node) {
        this.visit(node.name);
        this.visit(node.extendsType);
        this.visit(node.defaultType);
    }
    visitIdentifierExpression(node) { }
    visitArrayLiteralExpression(node) {
        this.visit(node.elementExpressions);
    }
    visitObjectLiteralExpression(node) {
        this.visit(node.names);
        this.visit(node.values);
    }
    visitAssertionExpression(node) {
        this.visit(node.toType);
        this.visit(node.expression);
    }
    visitBinaryExpression(node) {
        this.visit(node.left);
        this.visit(node.right);
    }
    visitCallExpression(node) {
        this.visit(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitArguments(typeArguments, args) {
        this.visit(typeArguments);
        this.visit(args);
    }
    visitClassExpression(node) {
        this.visit(node.declaration);
    }
    visitCommaExpression(node) {
        this.visit(node.expressions);
    }
    visitElementAccessExpression(node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    }
    visitFunctionExpression(node) {
        this.visit(node.declaration);
    }
    visitLiteralExpression(node) {
        switch (node.literalKind) {
            case as_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.TEMPLATE: {
                this.visitTemplateLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case as_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            default:
                throw new Error("Invalid LiteralKind: " + node.literalKind);
        }
    }
    visitFloatLiteralExpression(node) { }
    visitInstanceOfExpression(node) {
        this.visit(node.expression);
        this.visit(node.isType);
    }
    visitIntegerLiteralExpression(node) { }
    visitStringLiteral(str, singleQuoted = false) { }
    visitStringLiteralExpression(node) {
        this.visitStringLiteral(node.value);
    }
    visitTemplateLiteralExpression(node) { }
    visitRegexpLiteralExpression(node) { }
    visitNewExpression(node) {
        this.visit(node.typeArguments);
        this.visitArguments(node.typeArguments, node.args);
        this.visit(node.args);
    }
    visitParenthesizedExpression(node) {
        this.visit(node.expression);
    }
    visitPropertyAccessExpression(node) {
        this.visit(node.property);
        this.visit(node.expression);
    }
    visitTernaryExpression(node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    }
    visitUnaryExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPostfixExpression(node) {
        this.visit(node.operand);
    }
    visitUnaryPrefixExpression(node) {
        this.visit(node.operand);
    }
    visitSuperExpression(node) { }
    visitFalseExpression(node) { }
    visitTrueExpression(node) { }
    visitThisExpression(node) { }
    visitNullExperssion(node) { }
    visitConstructorExpression(node) { }
    visitNodeAndTerminate(statement) { }
    visitBlockStatement(node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    }
    visitBreakStatement(node) {
        this.visit(node.label);
    }
    visitContinueStatement(node) {
        this.visit(node.label);
    }
    visitClassDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric
            ? node.typeParameters != null
            : node.typeParameters == null);
        this.visit(node.typeParameters);
        this.visit(node.extendsType);
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
    }
    visitDoStatement(node) {
        this.visit(node.condition);
        this.visit(node.statement);
    }
    visitEmptyStatement(node) { }
    visitEnumDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    }
    visitEnumValueDeclaration(node) {
        this.visit(node.name);
        this.visit(node.initializer);
    }
    visitExportImportStatement(node) {
        this.visit(node.name);
        this.visit(node.externalName);
    }
    visitExportMember(node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    }
    visitExportStatement(node) {
        this.visit(node.path);
        this.visit(node.members);
    }
    visitExportDefaultStatement(node) {
        this.visit(node.declaration);
    }
    visitExpressionStatement(node) {
        this.visit(node.expression);
    }
    visitFieldDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
        this.visit(node.decorators);
    }
    visitForStatement(node) {
        this.visit(node.initializer);
        this.visit(node.condition);
        this.visit(node.incrementor);
        this.visit(node.statement);
    }
    visitFunctionDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.depth++;
        this.visit(node.body);
        this.depth--;
    }
    visitIfStatement(node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        this.visit(node.ifFalse);
    }
    visitImportDeclaration(node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    }
    visitImportStatement(node) {
        this.visit(node.namespaceName);
        this.visit(node.declarations);
    }
    visitIndexSignature(node) {
        this.visit(node.keyType);
        this.visit(node.valueType);
    }
    visitInterfaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.implementsTypes);
        this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    }
    visitMethodDeclaration(node) {
        this.visit(node.name);
        this.visit(node.typeParameters);
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        this.visit(node.body);
        this.depth--;
    }
    visitNamespaceDeclaration(node, isDefault = false) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    }
    visitReturnStatement(node) {
        this.visit(node.value);
    }
    visitSwitchCase(node) {
        this.visit(node.label);
        this.visit(node.statements);
    }
    visitSwitchStatement(node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    }
    visitThrowStatement(node) {
        this.visit(node.value);
    }
    visitTryStatement(node) {
        this.visit(node.statements);
        this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    }
    visitTypeDeclaration(node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    }
    visitVariableDeclaration(node) {
        this.visit(node.name);
        this.visit(node.type);
        this.visit(node.initializer);
    }
    visitVariableStatement(node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    }
    visitWhileStatement(node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    }
    visitVoidStatement(node) { }
    visitComment(node) { }
    visitDecoratorNode(node) {
        this.visit(node.name);
        this.visit(node.args);
    }
    visitParameter(node) {
        this.visit(node.name);
        this.visit(node.implicitFieldDeclaration);
        this.visit(node.initializer);
        this.visit(node.type);
    }
}
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUF5RDtBQUN6RCw4QkE4RWU7QUFFZix1Q0FBNEM7QUFFNUMsTUFBYSxXQUFZLFNBQVEseUJBQXFCO0lBQXREOztRQUNFLFVBQUssR0FBRyxDQUFDLENBQUM7SUF5cEJaLENBQUM7SUF2cEJXLE1BQU0sQ0FBQyxJQUFVO1FBQ3pCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLGFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTthQUNQO1lBRUQsUUFBUTtZQUVSLEtBQUssYUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLGFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDcEM7WUFDRCxLQUFLLGFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFvQixJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBRUQsY0FBYztZQUVkLEtBQUssYUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxhQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssYUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLGFBQVEsQ0FBQyxJQUFJ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QVUsQ0FBQztJQUV6QyxrQkFBa0IsQ0FBQyxJQUFtQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW1CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBMXBCRCxrQ0EwcEJDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXHJcbmltcG9ydCB7XHJcbiAgTm9kZSxcclxuICBOb2RlS2luZCxcclxuICBTb3VyY2UsXHJcbiAgTmFtZWRUeXBlTm9kZSxcclxuICBGdW5jdGlvblR5cGVOb2RlLFxyXG4gIFR5cGVOYW1lLFxyXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxyXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxyXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXHJcbiAgQmluYXJ5RXhwcmVzc2lvbixcclxuICBDYWxsRXhwcmVzc2lvbixcclxuICBDbGFzc0V4cHJlc3Npb24sXHJcbiAgQ29tbWFFeHByZXNzaW9uLFxyXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxyXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcclxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcclxuICBMaXRlcmFsRXhwcmVzc2lvbixcclxuICBOZXdFeHByZXNzaW9uLFxyXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxyXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcclxuICBUZXJuYXJ5RXhwcmVzc2lvbixcclxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxyXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcclxuICBCbG9ja1N0YXRlbWVudCxcclxuICBCcmVha1N0YXRlbWVudCxcclxuICBDb250aW51ZVN0YXRlbWVudCxcclxuICBEb1N0YXRlbWVudCxcclxuICBFbXB0eVN0YXRlbWVudCxcclxuICBFeHBvcnRTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcclxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXHJcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcclxuICBGb3JTdGF0ZW1lbnQsXHJcbiAgSWZTdGF0ZW1lbnQsXHJcbiAgSW1wb3J0U3RhdGVtZW50LFxyXG4gIFJldHVyblN0YXRlbWVudCxcclxuICBTd2l0Y2hTdGF0ZW1lbnQsXHJcbiAgVGhyb3dTdGF0ZW1lbnQsXHJcbiAgVHJ5U3RhdGVtZW50LFxyXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxyXG4gIFdoaWxlU3RhdGVtZW50LFxyXG4gIENsYXNzRGVjbGFyYXRpb24sXHJcbiAgRW51bURlY2xhcmF0aW9uLFxyXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxyXG4gIEZpZWxkRGVjbGFyYXRpb24sXHJcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcclxuICBJbXBvcnREZWNsYXJhdGlvbixcclxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcclxuICBNZXRob2REZWNsYXJhdGlvbixcclxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcclxuICBUeXBlRGVjbGFyYXRpb24sXHJcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcclxuICBEZWNvcmF0b3JOb2RlLFxyXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcclxuICBQYXJhbWV0ZXJOb2RlLFxyXG4gIEV4cG9ydE1lbWJlcixcclxuICBTd2l0Y2hDYXNlLFxyXG4gIFR5cGVOb2RlLFxyXG4gIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgRXhwcmVzc2lvbixcclxuICBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcclxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxyXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcclxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcclxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcclxuICBVbmFyeUV4cHJlc3Npb24sXHJcbiAgU3VwZXJFeHByZXNzaW9uLFxyXG4gIEZhbHNlRXhwcmVzc2lvbixcclxuICBUcnVlRXhwcmVzc2lvbixcclxuICBUaGlzRXhwcmVzc2lvbixcclxuICBOdWxsRXhwcmVzc2lvbixcclxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXHJcbiAgU3RhdGVtZW50LFxyXG4gIFZvaWRTdGF0ZW1lbnQsXHJcbiAgTGl0ZXJhbEtpbmQsXHJcbiAgQ29tbWVudE5vZGUsXHJcbiAgVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbixcclxufSBmcm9tIFwiLi4vYXNcIjtcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0VmlzaXRvciB9IGZyb20gXCIuL3Zpc2l0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlzaXRvciBleHRlbmRzIEFic3RyYWN0VmlzaXRvcjxOb2RlPiB7XHJcbiAgZGVwdGggPSAwO1xyXG5cclxuICBwcm90ZWN0ZWQgX3Zpc2l0KG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU09VUkNFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB0eXBlc1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xyXG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvblR5cGVOb2RlKDxGdW5jdGlvblR5cGVOb2RlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRU5BTUU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZU5hbWUoPFR5cGVOYW1lPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRVBBUkFNRVRFUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXhwcmVzc2lvbnNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcclxuICAgICAgY2FzZSBOb2RlS2luZC5TVVBFUjpcclxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OU1RSVUNUT1I6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbig8QXNzZXJ0aW9uRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJJTkFSWToge1xyXG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xyXG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0V4cHJlc3Npb24oPENsYXNzRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTU1BOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxFbGVtZW50QWNjZXNzRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbig8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdExpdGVyYWxFeHByZXNzaW9uKDxMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5FVzoge1xyXG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRlcm5hcnlFeHByZXNzaW9uKDxUZXJuYXJ5RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUE9TVEZJWDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHN0YXRlbWVudHNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QmxvY2tTdGF0ZW1lbnQoPEJsb2NrU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQlJFQUs6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcclxuICAgICAgICB0aGlzLnZpc2l0RG9TdGF0ZW1lbnQoPERvU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRU1QVFk6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KDxFeHBvcnREZWZhdWx0U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUSU1QT1JUOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZvclN0YXRlbWVudCg8Rm9yU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSUY6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydFN0YXRlbWVudCg8SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFJldHVyblN0YXRlbWVudCg8UmV0dXJuU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VGhyb3dTdGF0ZW1lbnQoPFRocm93U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRyeVN0YXRlbWVudCg8VHJ5U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0V2hpbGVTdGF0ZW1lbnQoPFdoaWxlU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbig8Q2xhc3NEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RmllbGREZWNsYXJhdGlvbig8RmllbGREZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKDxJbXBvcnREZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk1FVEhPRERFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gb3RoZXJcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdERlY29yYXRvck5vZGUoPERlY29yYXRvck5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xyXG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKDxTd2l0Y2hDYXNlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmUoPEluZGV4U2lnbmF0dXJlTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFzc2VydChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdFNvdXJjZShub2RlOiBTb3VyY2UpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3RtdCBvZiBub2RlLnN0YXRlbWVudHMpIHtcclxuICAgICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgICB0aGlzLnZpc2l0KHN0bXQpO1xyXG4gICAgICB0aGlzLmRlcHRoLS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRUeXBlTmFtZShub2RlOiBUeXBlTmFtZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmlkZW50aWZpZXIpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5leHQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROYW1lZFR5cGVOb2RlKG5vZGU6IE5hbWVkVHlwZU5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUucGFyYW1ldGVycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUucmV0dXJuVHlwZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwbGljaXRUaGlzVHlwZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb25zKTtcclxuICB9XHJcblxyXG4gIHZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lcyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudG9UeXBlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubGVmdCk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUucmlnaHQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy52aXNpdEFyZ3VtZW50cyhub2RlLnR5cGVBcmd1bWVudHMsIG5vZGUuYXJncyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEFyZ3VtZW50cyh0eXBlQXJndW1lbnRzOiBUeXBlTm9kZVtdIHwgbnVsbCwgYXJnczogRXhwcmVzc2lvbltdKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KHR5cGVBcmd1bWVudHMpO1xyXG4gICAgdGhpcy52aXNpdChhcmdzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29tbWFFeHByZXNzaW9uKG5vZGU6IENvbW1hRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5lbGVtZW50RXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlOiBGdW5jdGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcclxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKDxGbG9hdExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuSU5URUdFUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICA8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuVEVNUExBVEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuUkVHRVhQOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbig8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgIDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgTGl0ZXJhbEtpbmQ6IFwiICsgbm9kZS5saXRlcmFsS2luZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24obm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pc1R5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcclxuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUucHJvcGVydHkpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUaGVuKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pZkVsc2UpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQcmVmaXhFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFN1cGVyRXhwcmVzc2lvbihub2RlOiBTdXBlckV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdFRydWVFeHByZXNzaW9uKG5vZGU6IFRydWVFeHByZXNzaW9uKTogdm9pZCB7IH1cclxuXHJcbiAgdmlzaXRUaGlzRXhwcmVzc2lvbihub2RlOiBUaGlzRXhwcmVzc2lvbik6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0TnVsbEV4cGVyc3Npb24obm9kZTogTnVsbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdENvbnN0cnVjdG9yRXhwcmVzc2lvbihub2RlOiBDb25zdHJ1Y3RvckV4cHJlc3Npb24pOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBpc0RlZmF1bHQgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xyXG4gICAgYXNzZXJ0KFxyXG4gICAgICBub2RlLmlzR2VuZXJpY1xyXG4gICAgICAgID8gbm9kZS50eXBlUGFyYW1ldGVycyAhPSBudWxsXHJcbiAgICAgICAgOiBub2RlLnR5cGVQYXJhbWV0ZXJzID09IG51bGxcclxuICAgICk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gIH1cclxuXHJcbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiB2b2lkIHsgfVxyXG5cclxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHRlcm5hbE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRNZW1iZXIobm9kZTogRXhwb3J0TWVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5leHBvcnRlZE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUucGF0aCk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmluY3JlbWVudG9yKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdElmU3RhdGVtZW50KG5vZGU6IElmU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pZlRydWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmlmRmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmZvcmVpZ25OYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEluZGV4U2lnbmF0dXJlKG5vZGU6IEluZGV4U2lnbmF0dXJlTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmtleVR5cGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICB9XHJcblxyXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICB9XHJcblxyXG4gIHZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFJldHVyblN0YXRlbWVudChub2RlOiBSZXR1cm5TdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoVmFyaWFibGUpO1xyXG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZmluYWxseVN0YXRlbWVudHMpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUeXBlRGVjbGFyYXRpb24obm9kZTogVHlwZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgfVxyXG5cclxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKTtcclxuICB9XHJcblxyXG4gIHZpc2l0V2hpbGVTdGF0ZW1lbnQobm9kZTogV2hpbGVTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgfVxyXG5cclxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0Q29tbWVudChub2RlOiBDb21tZW50Tm9kZSk6IHZvaWQgeyB9XHJcblxyXG4gIHZpc2l0RGVjb3JhdG9yTm9kZShub2RlOiBEZWNvcmF0b3JOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJncyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcclxuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XHJcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==