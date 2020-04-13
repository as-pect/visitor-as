"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            case as_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
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
        if (node.next) {
            this.visit(node.next);
        }
    }
    visitNamedTypeNode(node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    }
    visitFunctionTypeNode(node) {
        for (let param of node.parameters) {
            this.visitParameter(param);
        }
        this.visit(node.returnType);
    }
    visitTypeParameter(node) {
        this.visit(node.name);
        if (node.extendsType)
            this.visit(node.extendsType);
        if (node.defaultType)
            this.visit(node.defaultType);
    }
    visitIdentifierExpression(node) { }
    visitArrayLiteralExpression(node) {
        node.elementExpressions.map((e) => {
            if (e)
                this.visit(e);
        });
    }
    visitObjectLiteralExpression(node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (let i = 0; i < node.values.length; i++) {
                this.visit(node.names[i]);
                this.visit(node.values[i]);
            }
        }
    }
    visitAssertionExpression(node) {
        if (node.toType)
            this.visit(node.toType);
        this.visit(node.expression);
    }
    visitBinaryExpression(node) {
        this.visit(node.left);
        this.visit(node.right);
    }
    visitCallExpression(node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
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
    }
    visitFloatLiteralExpression(node) { }
    visitInstanceOfExpression(node) {
        this.visit(node.expression);
        this.visit(node.isType);
    }
    visitIntegerLiteralExpression(node) { }
    visitStringLiteral(str, singleQuoted) { }
    visitStringLiteralExpression(node) { }
    visitRegexpLiteralExpression(node) { }
    visitNewExpression(node) {
        this.visit(node.typeArguments);
        this.visit(node.arguments);
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
        if (node.label) {
            this.visit(node.label);
        }
    }
    visitContinueStatement(node) {
        if (node.label) {
            this.visit(node.label);
        }
    }
    visitClassDeclaration(node, isDefault) {
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
    }
    visitDoStatement(node) {
        this.visit(node.condition);
        this.visit(node.statement);
    }
    visitEmptyStatement(node) { }
    visitEnumDeclaration(node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    }
    visitEnumValueDeclaration(node) {
        this.visit(node.name);
        if (node.initializer) {
            this.visit(node.initializer);
        }
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
        if (node.path) {
            this.visit(node.path);
        }
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
        if (node.type) {
            this.visit(node.type);
        }
        if (node.initializer) {
            this.visit(node.initializer);
        }
        this.visit(node.decorators);
    }
    visitForStatement(node) {
        if (node.initializer)
            this.visit(node.initializer);
        if (node.condition)
            this.visit(node.condition);
        if (node.incrementor)
            this.visit(node.incrementor);
        this.visit(node.statement);
    }
    visitFunctionDeclaration(node, isDefault) {
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
    }
    visitFunctionCommon(node) {
        // this.visit(node.name)
    }
    visitIfStatement(node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        if (node.ifFalse)
            this.visit(node.ifFalse);
    }
    visitImportDeclaration(node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    }
    visitImportStatement(node) {
        if (node.namespaceName)
            this.visit(node.namespaceName);
        this.visit(node.declarations);
    }
    visitIndexSignatureDeclaration(node) {
        // this.visit(node.name);
        // this.visit(node.keyType);
        // this.visit(node.valueType);
    }
    visitInterfaceDeclaration(node, isDefault) {
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
    }
    visitMethodDeclaration(node) {
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
    }
    visitNamespaceDeclaration(node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    }
    visitReturnStatement(node) {
        if (node.value)
            this.visit(node.value);
    }
    visitSwitchCase(node) {
        if (node.label)
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
        if (node.catchVariable)
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
        if (node.type)
            this.visit(node.type);
        if (node.initializer)
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
        this.visit(node.arguments);
    }
    visitParameter(node) {
        this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            this.visit(node.initializer);
        this.visit(node.type);
    }
}
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBNkVlO0FBRWYsdUNBQTRDO0FBRTVDLE1BQWEsV0FBWSxTQUFRLHlCQUFxQjtJQUF0RDs7UUFDRSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBaXFCcEIsQ0FBQztJQS9wQkMsTUFBTSxDQUFDLElBQVU7UUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxhQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssYUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFXLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsS0FBSyxhQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBb0IsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE1BQU07YUFDUDtZQUVELGNBQWM7WUFFZCxLQUFLLGFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxhQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssYUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxhQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtB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LElBQW1CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBbHFCRCxrQ0FrcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTm9kZSxcbiAgTm9kZUtpbmQsXG4gIFNvdXJjZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZU5hbWUsXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcbiAgQmluYXJ5RXhwcmVzc2lvbixcbiAgQ2FsbEV4cHJlc3Npb24sXG4gIENsYXNzRXhwcmVzc2lvbixcbiAgQ29tbWFFeHByZXNzaW9uLFxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXG4gIE5ld0V4cHJlc3Npb24sXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXG4gIFRlcm5hcnlFeHByZXNzaW9uLFxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXG4gIEJsb2NrU3RhdGVtZW50LFxuICBCcmVha1N0YXRlbWVudCxcbiAgQ29udGludWVTdGF0ZW1lbnQsXG4gIERvU3RhdGVtZW50LFxuICBFbXB0eVN0YXRlbWVudCxcbiAgRXhwb3J0U3RhdGVtZW50LFxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXG4gIEZvclN0YXRlbWVudCxcbiAgSWZTdGF0ZW1lbnQsXG4gIEltcG9ydFN0YXRlbWVudCxcbiAgUmV0dXJuU3RhdGVtZW50LFxuICBTd2l0Y2hTdGF0ZW1lbnQsXG4gIFRocm93U3RhdGVtZW50LFxuICBUcnlTdGF0ZW1lbnQsXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxuICBXaGlsZVN0YXRlbWVudCxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRW51bURlY2xhcmF0aW9uLFxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgSW1wb3J0RGVjbGFyYXRpb24sXG4gIEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24sXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gIFR5cGVEZWNsYXJhdGlvbixcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcbiAgRGVjb3JhdG9yTm9kZSxcbiAgRXhwb3J0TWVtYmVyLFxuICBQYXJhbWV0ZXJOb2RlLFxuICBTd2l0Y2hDYXNlLFxuICBUeXBlTm9kZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBVbmFyeUV4cHJlc3Npb24sXG4gIFN1cGVyRXhwcmVzc2lvbixcbiAgRmFsc2VFeHByZXNzaW9uLFxuICBUcnVlRXhwcmVzc2lvbixcbiAgVGhpc0V4cHJlc3Npb24sXG4gIE51bGxFeHByZXNzaW9uLFxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbiAgVm9pZFN0YXRlbWVudCxcbiAgTGl0ZXJhbEtpbmQsXG4gIENvbW1lbnROb2RlLFxufSBmcm9tIFwiLi4vYXNcIjtcblxuaW1wb3J0IHsgQWJzdHJhY3RWaXNpdG9yIH0gZnJvbSBcIi4vdmlzaXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFZpc2l0b3I8Tm9kZT4ge1xuICBkZXB0aDogbnVtYmVyID0gMDtcblxuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xuICAgICAgICB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0eXBlc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVOQU1FOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIoPFR5cGVQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbig8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbig8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHRoaXMudmlzaXRMaXRlcmFsRXhwcmVzc2lvbig8TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgdGhpcy52aXNpdE5ld0V4cHJlc3Npb24oPE5ld0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbig8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZlN0YXRlbWVudCg8SWZTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydFN0YXRlbWVudCg8SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZXR1cm5TdGF0ZW1lbnQoPFJldHVyblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoU3RhdGVtZW50KDxTd2l0Y2hTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5USFJPVzoge1xuICAgICAgICB0aGlzLnZpc2l0VGhyb3dTdGF0ZW1lbnQoPFRocm93U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUcnlTdGF0ZW1lbnQoPFRyeVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZVN0YXRlbWVudCg8VmFyaWFibGVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5XSElMRToge1xuICAgICAgICB0aGlzLnZpc2l0V2hpbGVTdGF0ZW1lbnQoPFdoaWxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1EZWNsYXJhdGlvbig8RW51bURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTVZBTFVFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKDxGdW5jdGlvbkRlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKDxJbXBvcnREZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOREVYU0lHTkFUVVJFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24oPEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XG4gICAgICAgIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U291cmNlKG5vZGU6IFNvdXJjZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3RtdCBvZiBub2RlLnN0YXRlbWVudHMpIHtcbiAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgIHRoaXMudmlzaXQoc3RtdCk7XG4gICAgICB0aGlzLmRlcHRoLS07XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUeXBlTm9kZShub2RlOiBUeXBlTm9kZSk6IHZvaWQge31cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmlkZW50aWZpZXIpO1xuICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5uZXh0KTtcbiAgICB9XG4gIH1cblxuICB2aXNpdE5hbWVkVHlwZU5vZGUobm9kZTogTmFtZWRUeXBlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uVHlwZU5vZGUobm9kZTogRnVuY3Rpb25UeXBlTm9kZSk6IHZvaWQge1xuICAgIGZvciAobGV0IHBhcmFtIG9mIG5vZGUucGFyYW1ldGVycykge1xuICAgICAgdGhpcy52aXNpdFBhcmFtZXRlcihwYXJhbSk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5yZXR1cm5UeXBlKTtcbiAgfVxuXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5leHRlbmRzVHlwZSkgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICBpZiAobm9kZS5kZWZhdWx0VHlwZSkgdGhpcy52aXNpdChub2RlLmRlZmF1bHRUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogSWRlbnRpZmllckV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9ucy5tYXAoKGU6IEV4cHJlc3Npb24pID0+IHtcbiAgICAgIGlmIChlKSB0aGlzLnZpc2l0KGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIGlmIChub2RlLnZhbHVlcyAmJiBub2RlLm5hbWVzKSB7XG4gICAgICBhc3NlcnQobm9kZS52YWx1ZXMubGVuZ3RoID09IG5vZGUubmFtZXMubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLm5hbWVzW2ldKTtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLnZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBpZiAobm9kZS50b1R5cGUpIHRoaXMudmlzaXQobm9kZS50b1R5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xuICAgIHRoaXMudmlzaXQobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5lbGVtZW50RXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xuICAgICAgICB0aGlzLnZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbig8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbig8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuT0JKRUNUOiB7XG4gICAgICAgIHRoaXMudmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbig8T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5SRUdFWFA6IHtcbiAgICAgICAgdGhpcy52aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xuICAgICAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgTGl0ZXJhbEtpbmQ6IFwiICsgbm9kZS5saXRlcmFsS2luZCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihub2RlOiBJbnN0YW5jZU9mRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZD86IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5wcm9wZXJ0eSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRoZW4pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZkVsc2UpO1xuICB9XG5cbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFN1cGVyRXhwcmVzc2lvbihub2RlOiBTdXBlckV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRGYWxzZUV4cHJlc3Npb24obm9kZTogRmFsc2VFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0VHJ1ZUV4cHJlc3Npb24obm9kZTogVHJ1ZUV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRUaGlzRXhwcmVzc2lvbihub2RlOiBUaGlzRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE51bGxFeHBlcnNzaW9uKG5vZGU6IE51bGxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0Q29uc3RydWN0b3JFeHByZXNzaW9uKG5vZGU6IENvbnN0cnVjdG9yRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50OiBTdGF0ZW1lbnQpOiB2b2lkIHt9XG5cbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5sYWJlbCkge1xuICAgICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZTogQ2xhc3NEZWNsYXJhdGlvbiwgaXNEZWZhdWx0PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIGFzc2VydChcbiAgICAgIG5vZGUuaXNHZW5lcmljID8gbm9kZS50eXBlUGFyYW1ldGVycyAhPSBudWxsIDogbm9kZS50eXBlUGFyYW1ldGVycyA9PSBudWxsXG4gICAgKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRFbXB0eVN0YXRlbWVudChub2RlOiBFbXB0eVN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZXMpO1xuICB9XG5cbiAgdmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlOiBFbnVtVmFsdWVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikge1xuICAgICAgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVybmFsTmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydE1lbWJlcihub2RlOiBFeHBvcnRNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwb3J0ZWROYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLnBhdGgpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5wYXRoKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KG5vZGU6IEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KG5vZGU6IEV4cHJlc3Npb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS50eXBlKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gIH1cblxuICB2aXNpdEZvclN0YXRlbWVudChub2RlOiBGb3JTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgICBpZiAobm9kZS5jb25kaXRpb24pIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIGlmIChub2RlLmluY3JlbWVudG9yKSB0aGlzLnZpc2l0KG5vZGUuaW5jcmVtZW50b3IpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIGlmIChub2RlLmJvZHkpIHRoaXMudmlzaXQobm9kZS5ib2R5KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUubmFtZSlcbiAgfVxuXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKTtcbiAgICBpZiAobm9kZS5pZkZhbHNlKSB0aGlzLnZpc2l0KG5vZGUuaWZGYWxzZSk7XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmZvcmVpZ25OYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICB9XG5cbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUubmFtZXNwYWNlTmFtZSkgdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKG5vZGU6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLmtleVR5cGUpO1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS52YWx1ZVR5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIGlmIChub2RlLmV4dGVuZHNUeXBlKSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRNZXRob2REZWNsYXJhdGlvbihub2RlOiBNZXRob2REZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS5pc0dlbmVyaWMpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgaWYgKG5vZGUuYm9keSkgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIHZpc2l0UmV0dXJuU3RhdGVtZW50KG5vZGU6IFJldHVyblN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLnZhbHVlKSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5sYWJlbCkgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gIH1cblxuICB2aXNpdFN3aXRjaFN0YXRlbWVudChub2RlOiBTd2l0Y2hTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmNhc2VzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICBpZiAobm9kZS5jYXRjaFZhcmlhYmxlKSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmZpbmFsbHlTdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICBpZiAobm9kZS50eXBlKSB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiB2b2lkIHt9XG5cbiAgdmlzaXREZWNvcmF0b3JOb2RlKG5vZGU6IERlY29yYXRvck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbikge1xuICAgICAgdGhpcy52aXNpdChub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgfVxufVxuIl19