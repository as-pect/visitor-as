/* eslint-disable @typescript-eslint/no-empty-function */
import { NodeKind, LiteralKind, } from "assemblyscript/dist/assemblyscript.js";
import { AbstractVisitor } from "./visitor.js";
export class BaseVisitor extends AbstractVisitor {
    depth = 0;
    _visit(node) {
        switch (node.kind) {
            case NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case NodeKind.TYPENAME: {
                this.visitTypeName(node);
            }
            case NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case NodeKind.FALSE:
            case NodeKind.NULL:
            case NodeKind.SUPER:
            case NodeKind.THIS:
            case NodeKind.TRUE:
            case NodeKind.CONSTRUCTOR:
            case NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            case NodeKind.INDEXSIGNATURE: {
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
            case LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case LiteralKind.TEMPLATE: {
                this.visitTemplateLiteralExpression(node);
                break;
            }
            case LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case LiteralKind.OBJECT: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDtBQUN6RCxPQUFPLEVBRUwsUUFBUSxFQXlFUixXQUFXLEdBR1osTUFBTSx1Q0FBdUMsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE1BQU0sT0FBTyxXQUFZLFNBQVEsZUFBcUI7SUFDcEQsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVBLE1BQU0sQ0FBQyxJQUFVO1FBQ3pCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTthQUNQO1lBRUQsUUFBUTtZQUVSLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO2FBQ1A7WUFDRCxLQUFLLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQztnQkFDbkQsTUFBTTthQUNQO1lBQ0QsS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDcEM7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFvQixJQUFJLENBQUMsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBRUQsY0FBYztZQUVkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BC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QUFDLElBQW1CLElBQVUsQ0FBQztJQUVqRCxZQUFZLENBQUMsSUFBaUIsSUFBVSxDQUFDO0lBRXpDLGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBbUI7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb24gKi9cbmltcG9ydCB7XG4gIE5vZGUsXG4gIE5vZGVLaW5kLFxuICBTb3VyY2UsXG4gIE5hbWVkVHlwZU5vZGUsXG4gIEZ1bmN0aW9uVHlwZU5vZGUsXG4gIFR5cGVOYW1lLFxuICBUeXBlUGFyYW1ldGVyTm9kZSxcbiAgSWRlbnRpZmllckV4cHJlc3Npb24sXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXG4gIEJpbmFyeUV4cHJlc3Npb24sXG4gIENhbGxFeHByZXNzaW9uLFxuICBDbGFzc0V4cHJlc3Npb24sXG4gIENvbW1hRXhwcmVzc2lvbixcbiAgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXG4gIExpdGVyYWxFeHByZXNzaW9uLFxuICBOZXdFeHByZXNzaW9uLFxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxuICBUZXJuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcbiAgVW5hcnlQcmVmaXhFeHByZXNzaW9uLFxuICBCbG9ja1N0YXRlbWVudCxcbiAgQnJlYWtTdGF0ZW1lbnQsXG4gIENvbnRpbnVlU3RhdGVtZW50LFxuICBEb1N0YXRlbWVudCxcbiAgRW1wdHlTdGF0ZW1lbnQsXG4gIEV4cG9ydFN0YXRlbWVudCxcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxuICBGb3JTdGF0ZW1lbnQsXG4gIElmU3RhdGVtZW50LFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIFJldHVyblN0YXRlbWVudCxcbiAgU3dpdGNoU3RhdGVtZW50LFxuICBUaHJvd1N0YXRlbWVudCxcbiAgVHJ5U3RhdGVtZW50LFxuICBWYXJpYWJsZVN0YXRlbWVudCxcbiAgV2hpbGVTdGF0ZW1lbnQsXG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIEVudW1EZWNsYXJhdGlvbixcbiAgRW51bVZhbHVlRGVjbGFyYXRpb24sXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIEltcG9ydERlY2xhcmF0aW9uLFxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICBUeXBlRGVjbGFyYXRpb24sXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXG4gIERlY29yYXRvck5vZGUsXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcbiAgUGFyYW1ldGVyTm9kZSxcbiAgRXhwb3J0TWVtYmVyLFxuICBTd2l0Y2hDYXNlLFxuICBUeXBlTm9kZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBVbmFyeUV4cHJlc3Npb24sXG4gIFN1cGVyRXhwcmVzc2lvbixcbiAgRmFsc2VFeHByZXNzaW9uLFxuICBUcnVlRXhwcmVzc2lvbixcbiAgVGhpc0V4cHJlc3Npb24sXG4gIE51bGxFeHByZXNzaW9uLFxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbiAgVm9pZFN0YXRlbWVudCxcbiAgTGl0ZXJhbEtpbmQsXG4gIENvbW1lbnROb2RlLFxuICBUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQvZGlzdC9hc3NlbWJseXNjcmlwdC5qc1wiO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFZpc2l0b3IgfSBmcm9tIFwiLi92aXNpdG9yLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVmlzaXRvciBleHRlbmRzIEFic3RyYWN0VmlzaXRvcjxOb2RlPiB7XG4gIGRlcHRoID0gMDtcblxuICBwcm90ZWN0ZWQgX3Zpc2l0KG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gdHlwZXNcblxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFTkFNRToge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5hbWUoPFR5cGVOYW1lPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGV4cHJlc3Npb25zXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgICBjYXNlIE5vZGVLaW5kLlNVUEVSOlxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgICAgY2FzZSBOb2RlS2luZC5DT05TVFJVQ1RPUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQklOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0FMTDoge1xuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09NTUE6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRUxFTUVOVEFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXG4gICAgICAgICAgPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkV4cHJlc3Npb24oPEZ1bmN0aW9uRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOU1RBTkNFT0Y6IHtcbiAgICAgICAgdGhpcy52aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKDxJbnN0YW5jZU9mRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6IHtcbiAgICAgICAgdGhpcy52aXNpdExpdGVyYWxFeHByZXNzaW9uKDxMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5FVzoge1xuICAgICAgICB0aGlzLnZpc2l0TmV3RXhwcmVzc2lvbig8TmV3RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6IHtcbiAgICAgICAgdGhpcy52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKFxuICAgICAgICAgIDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKFxuICAgICAgICAgIDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CUkVBSzoge1xuICAgICAgICB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OVElOVUU6IHtcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XG4gICAgICAgIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTVBUWToge1xuICAgICAgICB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudCg8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xuICAgICAgICB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XG4gICAgICAgIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOREVYU0lHTkFUVVJFOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZSg8SW5kZXhTaWduYXR1cmVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTb3VyY2Uobm9kZTogU291cmNlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzdG10IG9mIG5vZGUuc3RhdGVtZW50cykge1xuICAgICAgdGhpcy5kZXB0aCsrO1xuICAgICAgdGhpcy52aXNpdChzdG10KTtcbiAgICAgIHRoaXMuZGVwdGgtLTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogdm9pZCB7IH1cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmlkZW50aWZpZXIpO1xuICAgIHRoaXMudmlzaXQobm9kZS5uZXh0KTtcbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnBhcmFtZXRlcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5yZXR1cm5UeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwbGljaXRUaGlzVHlwZSk7XG4gIH1cblxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpO1xuICB9XG5cbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlOiBJZGVudGlmaWVyRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZXMpO1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZXMpO1xuICB9XG5cbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUudG9UeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sZWZ0KTtcbiAgICB0aGlzLnZpc2l0KG5vZGUucmlnaHQpO1xuICB9XG5cbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0QXJndW1lbnRzKG5vZGUudHlwZUFyZ3VtZW50cywgbm9kZS5hcmdzKTtcbiAgfVxuXG4gIHZpc2l0QXJndW1lbnRzKHR5cGVBcmd1bWVudHM6IFR5cGVOb2RlW10gfCBudWxsLCBhcmdzOiBFeHByZXNzaW9uW10pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KHR5cGVBcmd1bWVudHMpO1xuICAgIHRoaXMudmlzaXQoYXJncyk7XG4gIH1cblxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmxpdGVyYWxLaW5kKSB7XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkZMT0FUOiB7XG4gICAgICAgIHRoaXMudmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKDxGbG9hdExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuSU5URUdFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgIDxJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XG4gICAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcbiAgICAgICAgICA8U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuVEVNUExBVEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgPFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuUkVHRVhQOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcbiAgICAgICAgICA8UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5PQkpFQ1Q6IHtcbiAgICAgICAgdGhpcy52aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgIDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBMaXRlcmFsS2luZDogXCIgKyBub2RlLmxpdGVyYWxLaW5kKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihub2RlOiBJbnN0YW5jZU9mRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQgeyB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xuICAgIHRoaXMudmlzaXQobm9kZS5hcmdzKTtcbiAgfVxuXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24obm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUucHJvcGVydHkpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUaGVuKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZFbHNlKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlFeHByZXNzaW9uKG5vZGU6IFVuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQcmVmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgdmlzaXRTdXBlckV4cHJlc3Npb24obm9kZTogU3VwZXJFeHByZXNzaW9uKTogdm9pZCB7IH1cblxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0VHJ1ZUV4cHJlc3Npb24obm9kZTogVHJ1ZUV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0TnVsbEV4cGVyc3Npb24obm9kZTogTnVsbEV4cHJlc3Npb24pOiB2b2lkIHsgfVxuXG4gIHZpc2l0Q29uc3RydWN0b3JFeHByZXNzaW9uKG5vZGU6IENvbnN0cnVjdG9yRXhwcmVzc2lvbik6IHZvaWQgeyB9XG5cbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudDogU3RhdGVtZW50KTogdm9pZCB7IH1cblxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmxhYmVsKTtcbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGlzRGVmYXVsdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgYXNzZXJ0KFxuICAgICAgbm9kZS5pc0dlbmVyaWNcbiAgICAgICAgPyBub2RlLnR5cGVQYXJhbWV0ZXJzICE9IG51bGxcbiAgICAgICAgOiBub2RlLnR5cGVQYXJhbWV0ZXJzID09IG51bGxcbiAgICApO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRFbXB0eVN0YXRlbWVudChub2RlOiBFbXB0eVN0YXRlbWVudCk6IHZvaWQgeyB9XG5cbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24obm9kZTogRW51bURlY2xhcmF0aW9uLCBpc0RlZmF1bHQgPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gIH1cblxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmV4dGVybmFsTmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydE1lbWJlcihub2RlOiBFeHBvcnRNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwb3J0ZWROYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5wYXRoKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmluY3JlbWVudG9yKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihcbiAgICBub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuaWZGYWxzZSk7XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmZvcmVpZ25OYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICB9XG5cbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUua2V5VHlwZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgfVxuXG4gIHZpc2l0UmV0dXJuU3RhdGVtZW50KG5vZGU6IFJldHVyblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5jYXNlcyk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmNhdGNoVmFyaWFibGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5jYXRjaFN0YXRlbWVudHMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5maW5hbGx5U3RhdGVtZW50cyk7XG4gIH1cblxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IHZvaWQgeyB9XG5cbiAgdmlzaXRDb21tZW50KG5vZGU6IENvbW1lbnROb2RlKTogdm9pZCB7IH1cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJncyk7XG4gIH1cblxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICB9XG59XG4iXX0=