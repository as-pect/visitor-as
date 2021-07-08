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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUF5RDtBQUN6RCw4QkE4RWU7QUFFZix1Q0FBNEM7QUFFNUMsTUFBYSxXQUFZLFNBQVEseUJBQXFCO0lBQXREOztRQUNFLFVBQUssR0FBRyxDQUFDLENBQUM7SUF5cEJaLENBQUM7SUF2cEJXLE1BQU0sQ0FBQyxJQUFVO1FBQ3pCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLGFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTthQUNQO1lBRUQsUUFBUTtZQUVSLEtBQUssYUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLGFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDcEM7WUFDRCxLQUFLLGFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFvQixJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBRUQsY0FBYztZQUVkLEtBQUssYUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxhQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssYUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLGFBQVEsQ0FBQyxJQUFJ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QVUsQ0FBQztJQUV6QyxrQkFBa0IsQ0FBQyxJQUFtQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW1CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBMXBCRCxrQ0EwcEJDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uICovXG5pbXBvcnQge1xuICBOb2RlLFxuICBOb2RlS2luZCxcbiAgU291cmNlLFxuICBOYW1lZFR5cGVOb2RlLFxuICBGdW5jdGlvblR5cGVOb2RlLFxuICBUeXBlTmFtZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxuICBCaW5hcnlFeHByZXNzaW9uLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgQ2xhc3NFeHByZXNzaW9uLFxuICBDb21tYUV4cHJlc3Npb24sXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxuICBGdW5jdGlvbkV4cHJlc3Npb24sXG4gIEluc3RhbmNlT2ZFeHByZXNzaW9uLFxuICBMaXRlcmFsRXhwcmVzc2lvbixcbiAgTmV3RXhwcmVzc2lvbixcbiAgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcbiAgVGVybmFyeUV4cHJlc3Npb24sXG4gIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24sXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcbiAgQmxvY2tTdGF0ZW1lbnQsXG4gIEJyZWFrU3RhdGVtZW50LFxuICBDb250aW51ZVN0YXRlbWVudCxcbiAgRG9TdGF0ZW1lbnQsXG4gIEVtcHR5U3RhdGVtZW50LFxuICBFeHBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXG4gIEV4cG9ydEltcG9ydFN0YXRlbWVudCxcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcbiAgRm9yU3RhdGVtZW50LFxuICBJZlN0YXRlbWVudCxcbiAgSW1wb3J0U3RhdGVtZW50LFxuICBSZXR1cm5TdGF0ZW1lbnQsXG4gIFN3aXRjaFN0YXRlbWVudCxcbiAgVGhyb3dTdGF0ZW1lbnQsXG4gIFRyeVN0YXRlbWVudCxcbiAgVmFyaWFibGVTdGF0ZW1lbnQsXG4gIFdoaWxlU3RhdGVtZW50LFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBFbnVtRGVjbGFyYXRpb24sXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBJbXBvcnREZWNsYXJhdGlvbixcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgVHlwZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBEZWNvcmF0b3JOb2RlLFxuICBJbmRleFNpZ25hdHVyZU5vZGUsXG4gIFBhcmFtZXRlck5vZGUsXG4gIEV4cG9ydE1lbWJlcixcbiAgU3dpdGNoQ2FzZSxcbiAgVHlwZU5vZGUsXG4gIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEV4cHJlc3Npb24sXG4gIE9iamVjdExpdGVyYWxFeHByZXNzaW9uLFxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcbiAgVW5hcnlFeHByZXNzaW9uLFxuICBTdXBlckV4cHJlc3Npb24sXG4gIEZhbHNlRXhwcmVzc2lvbixcbiAgVHJ1ZUV4cHJlc3Npb24sXG4gIFRoaXNFeHByZXNzaW9uLFxuICBOdWxsRXhwcmVzc2lvbixcbiAgQ29uc3RydWN0b3JFeHByZXNzaW9uLFxuICBTdGF0ZW1lbnQsXG4gIFZvaWRTdGF0ZW1lbnQsXG4gIExpdGVyYWxLaW5kLFxuICBDb21tZW50Tm9kZSxcbiAgVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcIi4uL2FzXCI7XG5cbmltcG9ydCB7IEFic3RyYWN0VmlzaXRvciB9IGZyb20gXCIuL3Zpc2l0b3JcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VWaXNpdG9yIGV4dGVuZHMgQWJzdHJhY3RWaXNpdG9yPE5vZGU+IHtcbiAgZGVwdGggPSAwO1xuXG4gIHByb3RlY3RlZCBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xuICAgICAgICB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0eXBlc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVOQU1FOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIoPFR5cGVQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihcbiAgICAgICAgICA8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XG4gICAgICAgIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXG4gICAgICAgICAgPFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oXG4gICAgICAgICAgPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZlN0YXRlbWVudCg8SWZTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydFN0YXRlbWVudCg8SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZXR1cm5TdGF0ZW1lbnQoPFJldHVyblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoU3RhdGVtZW50KDxTd2l0Y2hTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5USFJPVzoge1xuICAgICAgICB0aGlzLnZpc2l0VGhyb3dTdGF0ZW1lbnQoPFRocm93U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUcnlTdGF0ZW1lbnQoPFRyeVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZVN0YXRlbWVudCg8VmFyaWFibGVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5XSElMRToge1xuICAgICAgICB0aGlzLnZpc2l0V2hpbGVTdGF0ZW1lbnQoPFdoaWxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1EZWNsYXJhdGlvbig8RW51bURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTVZBTFVFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKDxGdW5jdGlvbkRlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKDxJbXBvcnREZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TWV0aG9kRGVjbGFyYXRpb24oPE1ldGhvZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZURlY2xhcmF0aW9uKDxUeXBlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKDxWYXJpYWJsZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJcblxuICAgICAgY2FzZSBOb2RlS2luZC5ERUNPUkFUT1I6IHtcbiAgICAgICAgdGhpcy52aXNpdERlY29yYXRvck5vZGUoPERlY29yYXRvck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcig8RXhwb3J0TWVtYmVyPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJhbWV0ZXIoPFBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKDxTd2l0Y2hDYXNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkU6IHtcbiAgICAgICAgdGhpcy52aXNpdEluZGV4U2lnbmF0dXJlKDxJbmRleFNpZ25hdHVyZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFNvdXJjZShub2RlOiBTb3VyY2UpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0bXQgb2Ygbm9kZS5zdGF0ZW1lbnRzKSB7XG4gICAgICB0aGlzLmRlcHRoKys7XG4gICAgICB0aGlzLnZpc2l0KHN0bXQpO1xuICAgICAgdGhpcy5kZXB0aC0tO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiB2b2lkIHsgfVxuXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWRlbnRpZmllcik7XG4gICAgdGhpcy52aXNpdChub2RlLm5leHQpO1xuICB9XG5cbiAgdmlzaXROYW1lZFR5cGVOb2RlKG5vZGU6IE5hbWVkVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvblR5cGVOb2RlKG5vZGU6IEZ1bmN0aW9uVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUucGFyYW1ldGVycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnJldHVyblR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHBsaWNpdFRoaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWZhdWx0VHlwZSk7XG4gIH1cblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uKTogdm9pZCB7IH1cblxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5lbGVtZW50RXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lcyk7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS50b1R5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xuICAgIHRoaXMudmlzaXQobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xuICB9XG5cbiAgdmlzaXRBcmd1bWVudHModHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGwsIGFyZ3M6IEV4cHJlc3Npb25bXSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQodHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdChhcmdzKTtcbiAgfVxuXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5lbGVtZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuRkxPQVQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oPEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5JTlRFR0VSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgPEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5TVFJJTkc6IHtcbiAgICAgICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgIDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5URU1QTEFURToge1xuICAgICAgICB0aGlzLnZpc2l0VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbihcbiAgICAgICAgICA8VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5SRUdFWFA6IHtcbiAgICAgICAgdGhpcy52aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgIDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5BUlJBWToge1xuICAgICAgICB0aGlzLnZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbig8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xuICAgICAgICB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgPE9iamVjdExpdGVyYWxFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIExpdGVyYWxLaW5kOiBcIiArIG5vZGUubGl0ZXJhbEtpbmQpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7IH1cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pc1R5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7IH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZDogYm9vbCA9IGZhbHNlKTogdm9pZCB7IH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWwobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdEFyZ3VtZW50cyhub2RlLnR5cGVBcmd1bWVudHMsIG5vZGUuYXJncyk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3MpO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5wcm9wZXJ0eSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRoZW4pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZkVsc2UpO1xuICB9XG5cbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFN1cGVyRXhwcmVzc2lvbihub2RlOiBTdXBlckV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0RmFsc2VFeHByZXNzaW9uKG5vZGU6IEZhbHNlRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRUaGlzRXhwcmVzc2lvbihub2RlOiBUaGlzRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXROdWxsRXhwZXJzc2lvbihub2RlOiBOdWxsRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24obm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uKTogdm9pZCB7IH1cblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHsgfVxuXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICB9XG5cbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0ID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICBhc3NlcnQoXG4gICAgICBub2RlLmlzR2VuZXJpY1xuICAgICAgICA/IG5vZGUudHlwZVBhcmFtZXRlcnMgIT0gbnVsbFxuICAgICAgICA6IG5vZGUudHlwZVBhcmFtZXRlcnMgPT0gbnVsbFxuICAgICk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdERvU3RhdGVtZW50KG5vZGU6IERvU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7IH1cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVzKTtcbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZXJuYWxOYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sb2NhbE5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHBvcnRlZE5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnBhdGgpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudChub2RlOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICB9XG5cbiAgdmlzaXRGb3JTdGF0ZW1lbnQobm9kZTogRm9yU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW5jcmVtZW50b3IpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRydWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZkZhbHNlKTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0RGVjbGFyYXRpb24obm9kZTogSW1wb3J0RGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gIH1cblxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZXNwYWNlTmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdEluZGV4U2lnbmF0dXJlKG5vZGU6IEluZGV4U2lnbmF0dXJlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5rZXlUeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWVUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcyk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gIH1cblxuICB2aXNpdFN3aXRjaFN0YXRlbWVudChub2RlOiBTd2l0Y2hTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmNhc2VzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmZpbmFsbHlTdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdFdoaWxlU3RhdGVtZW50KG5vZGU6IFdoaWxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogdm9pZCB7IH1cblxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiB2b2lkIHsgfVxuXG4gIHZpc2l0RGVjb3JhdG9yTm9kZShub2RlOiBEZWNvcmF0b3JOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmdzKTtcbiAgfVxuXG4gIHZpc2l0UGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gIH1cbn1cbiJdfQ==