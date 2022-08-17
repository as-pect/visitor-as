import { NodeKind, LiteralKind, } from "assemblyscript/dist/assemblyscript.js";
import { AbstractTransformVisitor } from "./visitor.js";
export class BaseTransformVisitor extends AbstractTransformVisitor {
    depth = 0;
    _visit(node) {
        switch (node.kind) {
            case NodeKind.SOURCE: {
                return this.visitSource(node);
            }
            // types
            case NodeKind.NAMEDTYPE: {
                return this.visitNamedTypeNode(node);
            }
            case NodeKind.FUNCTIONTYPE: {
                return this.visitFunctionTypeNode(node);
            }
            case NodeKind.TYPENAME: {
                return this.visitTypeName(node);
            }
            case NodeKind.TYPEPARAMETER: {
                return this.visitTypeParameter(node);
            }
            // expressions
            case NodeKind.FALSE:
            case NodeKind.NULL:
            case NodeKind.SUPER:
            case NodeKind.THIS:
            case NodeKind.TRUE:
            case NodeKind.CONSTRUCTOR:
            case NodeKind.IDENTIFIER: {
                return this.visitIdentifierExpression(node);
            }
            case NodeKind.ASSERTION: {
                return this.visitAssertionExpression(node);
            }
            case NodeKind.BINARY: {
                return this.visitBinaryExpression(node);
            }
            case NodeKind.CALL: {
                return this.visitCallExpression(node);
            }
            case NodeKind.CLASS: {
                return this.visitClassExpression(node);
            }
            case NodeKind.COMMA: {
                return this.visitCommaExpression(node);
            }
            case NodeKind.ELEMENTACCESS: {
                return this.visitElementAccessExpression(node);
            }
            case NodeKind.FUNCTION: {
                return this.visitFunctionExpression(node);
            }
            case NodeKind.INSTANCEOF: {
                return this.visitInstanceOfExpression(node);
            }
            case NodeKind.LITERAL: {
                return this.visitLiteralExpression(node);
            }
            case NodeKind.NEW: {
                return this.visitNewExpression(node);
            }
            case NodeKind.PARENTHESIZED: {
                return this.visitParenthesizedExpression(node);
            }
            case NodeKind.PROPERTYACCESS: {
                return this.visitPropertyAccessExpression(node);
            }
            case NodeKind.TERNARY: {
                return this.visitTernaryExpression(node);
            }
            case NodeKind.UNARYPOSTFIX: {
                return this.visitUnaryPostfixExpression(node);
            }
            case NodeKind.UNARYPREFIX: {
                return this.visitUnaryPrefixExpression(node);
            }
            // statements
            case NodeKind.BLOCK: {
                return this.visitBlockStatement(node);
            }
            case NodeKind.BREAK: {
                return this.visitBreakStatement(node);
            }
            case NodeKind.CONTINUE: {
                return this.visitContinueStatement(node);
            }
            case NodeKind.DO: {
                return this.visitDoStatement(node);
            }
            case NodeKind.EMPTY: {
                return this.visitEmptyStatement(node);
            }
            case NodeKind.EXPORT: {
                return this.visitExportStatement(node);
            }
            case NodeKind.EXPORTDEFAULT: {
                return this.visitExportDefaultStatement(node);
            }
            case NodeKind.EXPORTIMPORT: {
                return this.visitExportImportStatement(node);
            }
            case NodeKind.EXPRESSION: {
                return this.visitExpressionStatement(node);
            }
            case NodeKind.FOR: {
                return this.visitForStatement(node);
            }
            case NodeKind.IF: {
                return this.visitIfStatement(node);
            }
            case NodeKind.IMPORT: {
                return this.visitImportStatement(node);
            }
            case NodeKind.RETURN: {
                return this.visitReturnStatement(node);
            }
            case NodeKind.SWITCH: {
                return this.visitSwitchStatement(node);
            }
            case NodeKind.THROW: {
                return this.visitThrowStatement(node);
            }
            case NodeKind.TRY: {
                return this.visitTryStatement(node);
            }
            case NodeKind.VARIABLE: {
                return this.visitVariableStatement(node);
            }
            case NodeKind.WHILE: {
                return this.visitWhileStatement(node);
            }
            // declaration statements
            case NodeKind.CLASSDECLARATION: {
                return this.visitClassDeclaration(node);
            }
            case NodeKind.ENUMDECLARATION: {
                return this.visitEnumDeclaration(node);
            }
            case NodeKind.ENUMVALUEDECLARATION: {
                return this.visitEnumValueDeclaration(node);
            }
            case NodeKind.FIELDDECLARATION: {
                return this.visitFieldDeclaration(node);
            }
            case NodeKind.FUNCTIONDECLARATION: {
                return this.visitFunctionDeclaration(node);
            }
            case NodeKind.IMPORTDECLARATION: {
                return this.visitImportDeclaration(node);
            }
            case NodeKind.INTERFACEDECLARATION: {
                return this.visitInterfaceDeclaration(node);
            }
            case NodeKind.METHODDECLARATION: {
                return this.visitMethodDeclaration(node);
            }
            case NodeKind.NAMESPACEDECLARATION: {
                return this.visitNamespaceDeclaration(node);
            }
            case NodeKind.TYPEDECLARATION: {
                return this.visitTypeDeclaration(node);
            }
            case NodeKind.VARIABLEDECLARATION: {
                return this.visitVariableDeclaration(node);
            }
            // other
            case NodeKind.DECORATOR: {
                return this.visitDecoratorNode(node);
            }
            case NodeKind.EXPORTMEMBER: {
                return this.visitExportMember(node);
            }
            case NodeKind.PARAMETER: {
                return this.visitParameter(node);
            }
            case NodeKind.SWITCHCASE: {
                return this.visitSwitchCase(node);
            }
            case NodeKind.INDEXSIGNATURE: {
                return this.visitIndexSignature(node);
            }
            default:
                assert(false, "visit panic");
        }
        return node;
    }
    visitSource(node) {
        let statements = [];
        for (let i = 0; i < node.statements.length; i++) {
            const stmt = node.statements[i];
            this.depth++;
            statements.push(this._visit(stmt));
            this.depth--;
        }
        node.statements = statements;
        return node;
    }
    visitTypeNode(node) {
        return node;
    }
    visitTypeName(node) {
        node.identifier = this.visitIdentifierExpression(node.identifier);
        node.next = this.visit(node.next);
        return node;
    }
    visitNamedTypeNode(node) {
        node.name = this.visit(node.name);
        node.typeArguments = this.visit(node.typeArguments);
        return node;
    }
    visitFunctionTypeNode(node) {
        node.parameters = this.visit(node.parameters);
        node.returnType = this.visit(node.returnType);
        node.explicitThisType = this.visit(node.explicitThisType);
        return node;
    }
    visitTypeParameter(node) {
        node.name = this.visit(node.name);
        node.extendsType = this.visit(node.extendsType);
        node.defaultType = this.visit(node.defaultType);
        return node;
    }
    visitIdentifierExpression(node) {
        return node;
    }
    visitArrayLiteralExpression(node) {
        node.elementExpressions = this.visit(node.elementExpressions);
        return node;
    }
    visitObjectLiteralExpression(node) {
        node.names = this.visit(node.names);
        node.values = this.visit(node.values);
        return node;
    }
    visitAssertionExpression(node) {
        node.expression = this.visit(node.expression);
        node.toType = this.visit(node.toType);
        return node;
    }
    visitBinaryExpression(node) {
        node.left = this.visit(node.left);
        node.right = this.visit(node.right);
        return node;
    }
    visitCallExpression(node) {
        node.expression = this.visit(node.expression);
        node.typeArguments = this.visit(node.typeArguments);
        node.args = this.visit(node.args);
        return node;
    }
    visitClassExpression(node) {
        node.declaration = this.visit(node.declaration);
        return node;
    }
    visitCommaExpression(node) {
        node.expressions = this.visit(node.expressions);
        return node;
    }
    visitElementAccessExpression(node) {
        node.elementExpression = this.visit(node.elementExpression);
        node.expression = this.visit(node.expression);
        return node;
    }
    visitFunctionExpression(node) {
        node.declaration = this.visit(node.declaration);
        return node;
    }
    visitLiteralExpression(node) {
        switch (node.literalKind) {
            case LiteralKind.ARRAY: {
                return this.visitArrayLiteralExpression(node);
            }
            case LiteralKind.FLOAT: {
                return this.visitFloatLiteralExpression(node);
            }
            case LiteralKind.INTEGER: {
                return this.visitIntegerLiteralExpression(node);
            }
            case LiteralKind.OBJECT: {
                return this.visitObjectLiteralExpression(node);
            }
            case LiteralKind.REGEXP: {
                return this.visitRegexpLiteralExpression(node);
            }
            case LiteralKind.STRING: {
                return this.visitStringLiteralExpression(node);
            }
            case LiteralKind.TEMPLATE: {
                return this.visitTemplateLiteralExpression(node);
            }
            default:
                throw new Error("Invalid LiteralKind: " + node.literalKind);
        }
    }
    visitFloatLiteralExpression(node) {
        return node;
    }
    visitInstanceOfExpression(node) {
        node.expression = this.visit(node.expression);
        node.isType = this.visit(node.isType);
        return node;
    }
    visitIntegerLiteralExpression(node) {
        return node;
    }
    visitStringLiteral(str, singleQuoted = false) {
        return str;
    }
    visitStringLiteralExpression(node) {
        node.value = this.visitStringLiteral(node.value);
        return node;
    }
    visitTemplateLiteralExpression(node) {
        return node;
    }
    visitRegexpLiteralExpression(node) {
        return node;
    }
    visitNewExpression(node) {
        node.typeArguments = this.visit(node.typeArguments);
        node.typeArguments = this.visit(node.typeArguments);
        node.args = this.visit(node.args);
        return node;
    }
    visitParenthesizedExpression(node) {
        node.expression = this.visit(node.expression);
        return node;
    }
    visitPropertyAccessExpression(node) {
        node.property = this.visit(node.property);
        node.expression = this.visit(node.expression);
        return node;
    }
    visitTernaryExpression(node) {
        node.condition = this.visit(node.condition);
        node.ifThen = this.visit(node.ifThen);
        node.ifElse = this.visit(node.ifElse);
        return node;
    }
    visitUnaryExpression(node) {
        node.operand = this.visit(node.operand);
        return node;
    }
    visitUnaryPostfixExpression(node) {
        node.operand = this.visit(node.operand);
        return node;
    }
    visitUnaryPrefixExpression(node) {
        node.operand = this.visit(node.operand);
        return node;
    }
    visitSuperExpression(node) {
        return node;
    }
    visitFalseExpression(node) {
        return node;
    }
    visitTrueExpression(node) {
        return node;
    }
    visitThisExpression(node) {
        return node;
    }
    visitNullExperssion(node) {
        return node;
    }
    visitConstructorExpression(node) {
        return node;
    }
    visitNodeAndTerminate(node) {
        return node;
    }
    visitBlockStatement(node) {
        this.depth++;
        node.statements = this.visit(node.statements);
        this.depth--;
        return node;
    }
    visitBreakStatement(node) {
        node.label = this.visit(node.label);
        return node;
    }
    visitContinueStatement(node) {
        node.label = this.visit(node.label);
        return node;
    }
    visitClassDeclaration(node, isDefault = false) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.typeParameters = this.visit(node.typeParameters);
        node.extendsType = this.visit(node.extendsType);
        node.implementsTypes = this.visit(node.implementsTypes);
        this.depth++;
        node.members = this.visit(node.members);
        this.depth--;
        return node;
    }
    visitDoStatement(node) {
        node.condition = this.visit(node.condition);
        node.statement = this.visit(node.statement);
        return node;
    }
    visitEmptyStatement(node) {
        return node;
    }
    visitEnumDeclaration(node, isDefault = false) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.values = this.visit(node.values);
        return node;
    }
    visitEnumValueDeclaration(node) {
        node.name = this.visit(node.name);
        node.initializer = this.visit(node.initializer);
        return node;
    }
    visitExportImportStatement(node) {
        node.name = this.visit(node.name);
        node.externalName = this.visit(node.externalName);
        return node;
    }
    visitExportMember(node) {
        node.localName = this.visit(node.localName);
        node.exportedName = this.visit(node.exportedName);
        return node;
    }
    visitExportStatement(node) {
        node.path = this.visit(node.path);
        node.members = this.visit(node.members);
        return node;
    }
    visitExportDefaultStatement(node) {
        node.declaration = this.visit(node.declaration);
        return node;
    }
    visitExpressionStatement(node) {
        node.expression = this.visit(node.expression);
        return node;
    }
    visitFieldDeclaration(node) {
        node.name = this.visit(node.name);
        node.type = this.visit(node.type);
        node.initializer = this.visit(node.initializer);
        node.decorators = this.visit(node.decorators);
        return node;
    }
    visitForStatement(node) {
        node.initializer = this.visit(node.initializer);
        node.condition = this.visit(node.condition);
        node.incrementor = this.visit(node.incrementor);
        node.statement = this.visit(node.statement);
        return node;
    }
    visitFunctionDeclaration(node, isDefault = false) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.typeParameters = this.visit(node.typeParameters);
        node.signature = this.visit(node.signature);
        this.depth++;
        node.body = this.visit(node.body);
        this.depth--;
        return node;
    }
    visitIfStatement(node) {
        node.condition = this.visit(node.condition);
        node.ifTrue = this.visit(node.ifTrue);
        node.ifFalse = this.visit(node.ifFalse);
        return node;
    }
    visitImportDeclaration(node) {
        node.foreignName = this.visit(node.foreignName);
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        return node;
    }
    visitImportStatement(node) {
        node.namespaceName = this.visit(node.namespaceName);
        node.declarations = this.visit(node.declarations);
        return node;
    }
    visitIndexSignature(node) {
        node.keyType = this.visit(node.keyType);
        node.valueType = this.visit(node.valueType);
        return node;
    }
    visitInterfaceDeclaration(node, isDefault = false) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.typeParameters = this.visit(node.typeParameters);
        node.implementsTypes = this.visit(node.implementsTypes);
        node.extendsType = this.visit(node.extendsType);
        this.depth++;
        node.members = this.visit(node.members);
        this.depth--;
        return node;
    }
    visitMethodDeclaration(node) {
        node.name = this.visit(node.name);
        node.typeParameters = this.visit(node.typeParameters);
        node.signature = this.visit(node.signature);
        node.decorators = this.visit(node.decorators);
        this.depth++;
        node.body = this.visit(node.body);
        this.depth--;
        return node;
    }
    visitNamespaceDeclaration(node, isDefault = false) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.members = this.visit(node.members);
        return node;
    }
    visitReturnStatement(node) {
        node.value = this.visit(node.value);
        return node;
    }
    visitSwitchCase(node) {
        node.label = this.visit(node.label);
        node.statements = this.visit(node.statements);
        return node;
    }
    visitSwitchStatement(node) {
        node.condition = this.visit(node.condition);
        this.depth++;
        node.cases = this.visit(node.cases);
        this.depth--;
        return node;
    }
    visitThrowStatement(node) {
        node.value = this.visit(node.value);
        return node;
    }
    visitTryStatement(node) {
        node.statements = this.visit(node.statements);
        node.catchVariable = this.visit(node.catchVariable);
        node.catchStatements = this.visit(node.catchStatements);
        node.finallyStatements = this.visit(node.finallyStatements);
        return node;
    }
    visitTypeDeclaration(node) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.type = this.visit(node.type);
        node.typeParameters = this.visit(node.typeParameters);
        return node;
    }
    visitVariableDeclaration(node) {
        node.name = this.visit(node.name);
        node.decorators = this.visit(node.decorators);
        node.type = this.visit(node.type);
        node.initializer = this.visit(node.initializer);
        return node;
    }
    visitVariableStatement(node) {
        node.decorators = this.visit(node.decorators);
        node.declarations = this.visit(node.declarations);
        return node;
    }
    visitWhileStatement(node) {
        node.condition = this.visit(node.condition);
        this.depth++;
        node.statement = this.visit(node.statement);
        this.depth--;
        return node;
    }
    visitVoidStatement(node) {
        return node;
    }
    visitComment(node) {
        return node;
    }
    visitDecoratorNode(node) {
        node.name = this.visit(node.name);
        node.args = this.visit(node.args);
        return node;
    }
    visitParameter(node) {
        node.name = this.visit(node.name);
        node.implicitFieldDeclaration = this.visit(node.implicitFieldDeclaration);
        node.initializer = this.visit(node.initializer);
        node.type = this.visit(node.type);
        return node;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxRQUFRLEVBeUVSLFdBQVcsR0FJWixNQUFNLHVDQUF1QyxDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQThCO0lBQ3RFLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFQSxNQUFNLENBQUMsSUFBVTtRQUN6QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUVELFFBQVE7WUFFUixLQUFLLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDM0M7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsY0FBYztZQUVkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssUUFB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UyxDQUFjLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBbUI7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF5QixDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFpQixDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFtQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBeUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUNILENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWEsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTm9kZSxcclxuICBOb2RlS2luZCxcclxuICBTb3VyY2UsXHJcbiAgTmFtZWRUeXBlTm9kZSxcclxuICBGdW5jdGlvblR5cGVOb2RlLFxyXG4gIFR5cGVOYW1lLFxyXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxyXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxyXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXHJcbiAgQmluYXJ5RXhwcmVzc2lvbixcclxuICBDYWxsRXhwcmVzc2lvbixcclxuICBDbGFzc0V4cHJlc3Npb24sXHJcbiAgQ29tbWFFeHByZXNzaW9uLFxyXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxyXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcclxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcclxuICBMaXRlcmFsRXhwcmVzc2lvbixcclxuICBOZXdFeHByZXNzaW9uLFxyXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxyXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcclxuICBUZXJuYXJ5RXhwcmVzc2lvbixcclxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxyXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcclxuICBCbG9ja1N0YXRlbWVudCxcclxuICBCcmVha1N0YXRlbWVudCxcclxuICBDb250aW51ZVN0YXRlbWVudCxcclxuICBEb1N0YXRlbWVudCxcclxuICBFbXB0eVN0YXRlbWVudCxcclxuICBFeHBvcnRTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcclxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXHJcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcclxuICBGb3JTdGF0ZW1lbnQsXHJcbiAgSWZTdGF0ZW1lbnQsXHJcbiAgSW1wb3J0U3RhdGVtZW50LFxyXG4gIFJldHVyblN0YXRlbWVudCxcclxuICBTd2l0Y2hTdGF0ZW1lbnQsXHJcbiAgVGhyb3dTdGF0ZW1lbnQsXHJcbiAgVHJ5U3RhdGVtZW50LFxyXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxyXG4gIFdoaWxlU3RhdGVtZW50LFxyXG4gIENsYXNzRGVjbGFyYXRpb24sXHJcbiAgRW51bURlY2xhcmF0aW9uLFxyXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxyXG4gIEZpZWxkRGVjbGFyYXRpb24sXHJcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcclxuICBJbXBvcnREZWNsYXJhdGlvbixcclxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcclxuICBNZXRob2REZWNsYXJhdGlvbixcclxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcclxuICBUeXBlRGVjbGFyYXRpb24sXHJcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcclxuICBEZWNvcmF0b3JOb2RlLFxyXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcclxuICBQYXJhbWV0ZXJOb2RlLFxyXG4gIEV4cG9ydE1lbWJlcixcclxuICBTd2l0Y2hDYXNlLFxyXG4gIFR5cGVOb2RlLFxyXG4gIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgRXhwcmVzc2lvbixcclxuICBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcclxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxyXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcclxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcclxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcclxuICBVbmFyeUV4cHJlc3Npb24sXHJcbiAgU3VwZXJFeHByZXNzaW9uLFxyXG4gIEZhbHNlRXhwcmVzc2lvbixcclxuICBUcnVlRXhwcmVzc2lvbixcclxuICBUaGlzRXhwcmVzc2lvbixcclxuICBOdWxsRXhwcmVzc2lvbixcclxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXHJcbiAgU3RhdGVtZW50LFxyXG4gIFZvaWRTdGF0ZW1lbnQsXHJcbiAgTGl0ZXJhbEtpbmQsXHJcbiAgQ29tbWVudE5vZGUsXHJcbiAgRGVjbGFyYXRpb25TdGF0ZW1lbnQsXHJcbiAgVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbixcclxufSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQvZGlzdC9hc3NlbWJseXNjcmlwdC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4vdmlzaXRvci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VUcmFuc2Zvcm1WaXNpdG9yIGV4dGVuZHMgQWJzdHJhY3RUcmFuc2Zvcm1WaXNpdG9yPE5vZGU+IHtcclxuICBkZXB0aCA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlzaXQobm9kZTogTm9kZSk6IE5vZGUge1xyXG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcclxuICAgICAgY2FzZSBOb2RlS2luZC5TT1VSQ0U6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFNvdXJjZSg8U291cmNlPm5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB0eXBlc1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFTkFNRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VHlwZU5hbWUoPFR5cGVOYW1lPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRVBBUkFNRVRFUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcig8VHlwZVBhcmFtZXRlck5vZGU+bm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGV4cHJlc3Npb25zXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhJUzpcclxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklERU5USUZJRVI6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5TVEFOQ0VPRjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxJbnN0YW5jZU9mRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdExpdGVyYWxFeHByZXNzaW9uKDxMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5FVzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TmV3RXhwcmVzc2lvbig8TmV3RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQT1NURklYOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHN0YXRlbWVudHNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudChcclxuICAgICAgICAgICAgICAgICAgPEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQ+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRJTVBPUlQ6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChcclxuICAgICAgICAgICAgICAgICAgPEV4cG9ydEltcG9ydFN0YXRlbWVudD5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUFJFU1NJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQoPEV4cHJlc3Npb25TdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GT1I6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZvclN0YXRlbWVudCg8Rm9yU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSUY6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdElmU3RhdGVtZW50KDxJZlN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW1wb3J0U3RhdGVtZW50KDxJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5SRVRVUk46IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFJldHVyblN0YXRlbWVudCg8UmV0dXJuU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRTd2l0Y2hTdGF0ZW1lbnQoPFN3aXRjaFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRIUk9XOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUaHJvd1N0YXRlbWVudCg8VGhyb3dTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UUlk6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRyeVN0YXRlbWVudCg8VHJ5U3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEU6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFZhcmlhYmxlU3RhdGVtZW50KDxWYXJpYWJsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLldISUxFOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRXaGlsZVN0YXRlbWVudCg8V2hpbGVTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbig8Q2xhc3NEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgIDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKDxGdW5jdGlvbkRlY2xhcmF0aW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKDxJbXBvcnREZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgPE5hbWVzcGFjZURlY2xhcmF0aW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlRGVjbGFyYXRpb24oPFR5cGVEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG90aGVyXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RGVjb3JhdG9yTm9kZSg8RGVjb3JhdG9yTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVE1FTUJFUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKDxFeHBvcnRNZW1iZXI+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJBTUVURVI6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmUoPEluZGV4U2lnbmF0dXJlTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFzc2VydChmYWxzZSwgXCJ2aXNpdCBwYW5pY1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTb3VyY2Uobm9kZTogU291cmNlKTogU291cmNlIHtcclxuICAgIGxldCBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnN0YXRlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc3RtdCA9IG5vZGUuc3RhdGVtZW50c1tpXTtcclxuICAgICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5fdmlzaXQoc3RtdCkgYXMgU3RhdGVtZW50KTtcclxuICAgICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBub2RlLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogVHlwZU5vZGUge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogVHlwZU5hbWUge1xyXG4gICAgbm9kZS5pZGVudGlmaWVyID0gdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuaWRlbnRpZmllcik7XHJcbiAgICBub2RlLm5leHQgPSB0aGlzLnZpc2l0KG5vZGUubmV4dCkgYXMgVHlwZU5hbWU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogTmFtZWRUeXBlTm9kZSB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgVHlwZU5hbWU7XHJcbiAgICBub2RlLnR5cGVBcmd1bWVudHMgPSB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cykgYXMgVHlwZU5vZGVbXSB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogRnVuY3Rpb25UeXBlTm9kZSB7XHJcbiAgICBub2RlLnBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KG5vZGUucGFyYW1ldGVycykgYXMgUGFyYW1ldGVyTm9kZVtdO1xyXG4gICAgbm9kZS5yZXR1cm5UeXBlID0gdGhpcy52aXNpdChub2RlLnJldHVyblR5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgbm9kZS5leHBsaWNpdFRoaXNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4cGxpY2l0VGhpc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiBUeXBlUGFyYW1ldGVyTm9kZSB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xyXG4gICAgbm9kZS5kZWZhdWx0VHlwZSA9IHRoaXMudmlzaXQobm9kZS5kZWZhdWx0VHlwZSkgYXMgTmFtZWRUeXBlTm9kZTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uXHJcbiAgKTogSWRlbnRpZmllckV4cHJlc3Npb24ge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uXHJcbiAgKTogQXJyYXlMaXRlcmFsRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9ucyA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zXHJcbiAgICApIGFzIEV4cHJlc3Npb25bXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uXHJcbiAgKTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5uYW1lcyA9IHRoaXMudmlzaXQobm9kZS5uYW1lcykgYXMgSWRlbnRpZmllckV4cHJlc3Npb25bXTtcclxuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRXhwcmVzc2lvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IEFzc2VydGlvbkV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLnRvVHlwZSA9IHRoaXMudmlzaXQobm9kZS50b1R5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IEJpbmFyeUV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5sZWZ0ID0gdGhpcy52aXNpdChub2RlLmxlZnQpIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy52aXNpdChub2RlLnJpZ2h0KSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuYXJncyA9IHRoaXMudmlzaXQobm9kZS5hcmdzKSBhcyBFeHByZXNzaW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IENsYXNzRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBDbGFzc0RlY2xhcmF0aW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiBDb21tYUV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5leHByZXNzaW9ucyA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9ucykgYXMgRXhwcmVzc2lvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb25cclxuICApOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9uID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5lbGVtZW50RXhwcmVzc2lvblxyXG4gICAgKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IE5vZGUge1xyXG4gICAgbm9kZS5kZWNsYXJhdGlvbiA9IHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbikgYXMgRnVuY3Rpb25EZWNsYXJhdGlvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IExpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIHN3aXRjaCAobm9kZS5saXRlcmFsS2luZCkge1xyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkFSUkFZOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkZMT0FUOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlJFR0VYUDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlRFTVBMQVRFOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIFwiSW52YWxpZCBMaXRlcmFsS2luZDogXCIgKyBub2RlLmxpdGVyYWxLaW5kXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb25cclxuICApOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uXHJcbiAgKTogSW5zdGFuY2VPZkV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLmlzVHlwZSA9IHRoaXMudmlzaXQobm9kZS5pc1R5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvblxyXG4gICk6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbChzdHI6IHN0cmluZywgc2luZ2xlUXVvdGVkID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvblxyXG4gICk6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIG5vZGUudmFsdWUgPSB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnZhbHVlKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvblxyXG4gICk6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24ge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb25cclxuICApOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogTmV3RXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLnR5cGVBcmd1bWVudHMgPSB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cykgYXMgVHlwZU5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnR5cGVBcmd1bWVudHMgPSB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cykgYXMgVHlwZU5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogUGFyZW50aGVzaXplZEV4cHJlc3Npb25cclxuICApOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oXHJcbiAgICBub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb25cclxuICApOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5wcm9wZXJ0eSA9IHRoaXMudmlzaXQobm9kZS5wcm9wZXJ0eSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUZXJuYXJ5RXhwcmVzc2lvbihub2RlOiBUZXJuYXJ5RXhwcmVzc2lvbik6IFRlcm5hcnlFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaWZUaGVuID0gdGhpcy52aXNpdChub2RlLmlmVGhlbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaWZFbHNlID0gdGhpcy52aXNpdChub2RlLmlmRWxzZSkgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRVbmFyeUV4cHJlc3Npb24obm9kZTogVW5hcnlFeHByZXNzaW9uKTogVW5hcnlFeHByZXNzaW9uIHtcclxuICAgIG5vZGUub3BlcmFuZCA9IHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uXHJcbiAgKTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLm9wZXJhbmQgPSB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCkgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb25cclxuICApOiBVbmFyeVByZWZpeEV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5vcGVyYW5kID0gdGhpcy52aXNpdChub2RlLm9wZXJhbmQpIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3VwZXJFeHByZXNzaW9uKG5vZGU6IFN1cGVyRXhwcmVzc2lvbik6IFN1cGVyRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RmFsc2VFeHByZXNzaW9uKG5vZGU6IEZhbHNlRXhwcmVzc2lvbik6IEZhbHNlRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHJ1ZUV4cHJlc3Npb24obm9kZTogVHJ1ZUV4cHJlc3Npb24pOiBUcnVlRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiBUaGlzRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0TnVsbEV4cGVyc3Npb24obm9kZTogTnVsbEV4cHJlc3Npb24pOiBOdWxsRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29uc3RydWN0b3JFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uXHJcbiAgKTogQ29uc3RydWN0b3JFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKG5vZGU6IFN0YXRlbWVudCk6IFN0YXRlbWVudCB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiBCbG9ja1N0YXRlbWVudCB7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICBub2RlLnN0YXRlbWVudHMgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiBCcmVha1N0YXRlbWVudCB7XHJcbiAgICBub2RlLmxhYmVsID0gdGhpcy52aXNpdChub2RlLmxhYmVsKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiBDb250aW51ZVN0YXRlbWVudCB7XHJcbiAgICBub2RlLmxhYmVsID0gdGhpcy52aXNpdChub2RlLmxhYmVsKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IENsYXNzRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xyXG4gICAgKSBhcyBUeXBlUGFyYW1ldGVyTm9kZVtdO1xyXG4gICAgbm9kZS5leHRlbmRzVHlwZSA9IHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSkgYXMgTmFtZWRUeXBlTm9kZTtcclxuICAgIG5vZGUuaW1wbGVtZW50c1R5cGVzID0gdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcykgYXMgTmFtZWRUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUubWVtYmVycyA9IHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKSBhcyBEZWNsYXJhdGlvblN0YXRlbWVudFtdO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdERvU3RhdGVtZW50KG5vZGU6IERvU3RhdGVtZW50KTogRG9TdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5zdGF0ZW1lbnQgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KSBhcyBTdGF0ZW1lbnQ7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiBFbXB0eVN0YXRlbWVudCB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW51bURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogRW51bURlY2xhcmF0aW9uLFxyXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcclxuICApOiBFbnVtRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnZhbHVlcyA9IHRoaXMudmlzaXQobm9kZS52YWx1ZXMpIGFzIEVudW1WYWx1ZURlY2xhcmF0aW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBFbnVtVmFsdWVEZWNsYXJhdGlvblxyXG4gICk6IEVudW1WYWx1ZURlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KFxyXG4gICAgbm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50XHJcbiAgKTogRXhwb3J0SW1wb3J0U3RhdGVtZW50IHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZXh0ZXJuYWxOYW1lID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5leHRlcm5hbE5hbWVcclxuICAgICkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IEV4cG9ydE1lbWJlciB7XHJcbiAgICBub2RlLmxvY2FsTmFtZSA9IHRoaXMudmlzaXQobm9kZS5sb2NhbE5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5leHBvcnRlZE5hbWUgPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLmV4cG9ydGVkTmFtZVxyXG4gICAgKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogRXhwb3J0U3RhdGVtZW50IHtcclxuICAgIG5vZGUucGF0aCA9IHRoaXMudmlzaXQobm9kZS5wYXRoKSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcclxuICAgIG5vZGUubWVtYmVycyA9IHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKSBhcyBFeHBvcnRNZW1iZXJbXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KFxyXG4gICAgbm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudFxyXG4gICk6IEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5kZWNsYXJhdGlvbiA9IHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbikgYXMgRGVjbGFyYXRpb25TdGF0ZW1lbnQ7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogRXhwcmVzc2lvblN0YXRlbWVudCB7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiBGaWVsZERlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUudHlwZSA9IHRoaXMudmlzaXQobm9kZS50eXBlKSBhcyBUeXBlTm9kZTtcclxuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGb3JTdGF0ZW1lbnQobm9kZTogRm9yU3RhdGVtZW50KTogRm9yU3RhdGVtZW50IHtcclxuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIFN0YXRlbWVudDtcclxuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaW5jcmVtZW50b3IgPSB0aGlzLnZpc2l0KG5vZGUuaW5jcmVtZW50b3IpIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLnN0YXRlbWVudCA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpIGFzIFN0YXRlbWVudDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXHJcbiAgKTogRnVuY3Rpb25EZWNsYXJhdGlvbiB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLnR5cGVQYXJhbWV0ZXJzXHJcbiAgICApIGFzIFR5cGVQYXJhbWV0ZXJOb2RlW107XHJcbiAgICBub2RlLnNpZ25hdHVyZSA9IHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpIGFzIEZ1bmN0aW9uVHlwZU5vZGU7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICBub2RlLmJvZHkgPSB0aGlzLnZpc2l0KG5vZGUuYm9keSkgYXMgU3RhdGVtZW50O1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdElmU3RhdGVtZW50KG5vZGU6IElmU3RhdGVtZW50KTogSWZTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5pZlRydWUgPSB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKSBhcyBTdGF0ZW1lbnQ7XHJcbiAgICBub2RlLmlmRmFsc2UgPSB0aGlzLnZpc2l0KG5vZGUuaWZGYWxzZSkgYXMgU3RhdGVtZW50IHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IEltcG9ydERlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUuZm9yZWlnbk5hbWUgPSB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IEltcG9ydFN0YXRlbWVudCB7XHJcbiAgICBub2RlLm5hbWVzcGFjZU5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZXNwYWNlTmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xyXG4gICAgbm9kZS5kZWNsYXJhdGlvbnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb25zKSBhcyBJbXBvcnREZWNsYXJhdGlvbltdIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiBJbmRleFNpZ25hdHVyZU5vZGUge1xyXG4gICAgbm9kZS5rZXlUeXBlID0gdGhpcy52aXNpdChub2RlLmtleVR5cGUpIGFzIE5hbWVkVHlwZU5vZGU7XHJcbiAgICBub2RlLnZhbHVlVHlwZSA9IHRoaXMudmlzaXQobm9kZS52YWx1ZVR5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IEludGVyZmFjZURlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycykgYXMgVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLmltcGxlbWVudHNUeXBlcyA9IHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpIGFzIE5hbWVkVHlwZU5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlIHwgbnVsbDtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUubWVtYmVycyA9IHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKSBhcyBEZWNsYXJhdGlvblN0YXRlbWVudFtdO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogTWV0aG9kRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycylhcyBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuc2lnbmF0dXJlID0gdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSkgYXMgRnVuY3Rpb25UeXBlTm9kZTtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgbm9kZS5ib2R5ID0gdGhpcy52aXNpdChub2RlLmJvZHkpIGFzIFN0YXRlbWVudHwgbnVsbDtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLFxyXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcclxuICApOiBOYW1lc3BhY2VEZWNsYXJhdGlvbiB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUubWVtYmVycyA9IHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKSBhcyBTdGF0ZW1lbnRbXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogUmV0dXJuU3RhdGVtZW50IHtcclxuICAgIG5vZGUudmFsdWUgPSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpIGFzIEV4cHJlc3Npb24gIHxudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IFN3aXRjaENhc2Uge1xyXG4gICAgbm9kZS5sYWJlbCA9IHRoaXMudmlzaXQobm9kZS5sYWJlbCkgYXMgRXhwcmVzc2lvbiAgfG51bGw7XHJcbiAgICBub2RlLnN0YXRlbWVudHMgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IFN3aXRjaFN0YXRlbWVudCB7XHJcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICBub2RlLmNhc2VzID0gdGhpcy52aXNpdChub2RlLmNhc2VzKSBhcyBTd2l0Y2hDYXNlW107XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiBUaHJvd1N0YXRlbWVudCB7XHJcbiAgICBub2RlLnZhbHVlID0gdGhpcy52aXNpdChub2RlLnZhbHVlKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiBUcnlTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5zdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpIGFzIFN0YXRlbWVudFtdO1xyXG4gICAgbm9kZS5jYXRjaFZhcmlhYmxlID0gdGhpcy52aXNpdChub2RlLmNhdGNoVmFyaWFibGUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcclxuICAgIG5vZGUuY2F0Y2hTdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XHJcbiAgICBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5maW5hbGx5U3RhdGVtZW50c1xyXG4gICAgKSBhcyBTdGF0ZW1lbnRbXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUeXBlRGVjbGFyYXRpb24obm9kZTogVHlwZURlY2xhcmF0aW9uKTogVHlwZURlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS50eXBlID0gdGhpcy52aXNpdChub2RlLnR5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUudHlwZVBhcmFtZXRlcnNcclxuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiBWYXJpYWJsZURlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS50eXBlID0gdGhpcy52aXNpdChub2RlLnR5cGUpIGFzIFR5cGVOb2RlIHwgbnVsbDtcclxuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIEV4cHJlc3Npb24gfCBudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFZhcmlhYmxlU3RhdGVtZW50KG5vZGU6IFZhcmlhYmxlU3RhdGVtZW50KTogVmFyaWFibGVTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUuZGVjbGFyYXRpb25zXHJcbiAgICApIGFzIFZhcmlhYmxlRGVjbGFyYXRpb25bXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IFdoaWxlU3RhdGVtZW50IHtcclxuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFZvaWRTdGF0ZW1lbnQobm9kZTogVm9pZFN0YXRlbWVudCk6IFZvaWRTdGF0ZW1lbnQge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiBDb21tZW50Tm9kZSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RGVjb3JhdG9yTm9kZShub2RlOiBEZWNvcmF0b3JOb2RlKTogRGVjb3JhdG9yTm9kZSB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogUGFyYW1ldGVyTm9kZSB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbiA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uXHJcbiAgICApIGFzIEZpZWxkRGVjbGFyYXRpb24gfCBudWxsO1xyXG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbiB8IG51bGw7XHJcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcbn1cclxuIl19