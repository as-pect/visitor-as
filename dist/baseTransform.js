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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxRQUFRLEVBeUVSLFdBQVcsR0FJWixNQUFNLHVDQUF1QyxDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBQThCO0lBQ3RFLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFQSxNQUFNLENBQUMsSUFBVTtRQUN6QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUVELFFBQVE7WUFFUixLQUFLLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDM0M7WUFDRCxLQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsY0FBYztZQUVkLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssUUFB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UyxDQUFjLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBbUI7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWlCO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF5QixDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFpQixDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFtQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBeUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDeEMsSUFBSSxDQUFDLHdCQUF3QixDQUNILENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWEsQ0FBQztRQUM5QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5vZGUsXG4gIE5vZGVLaW5kLFxuICBTb3VyY2UsXG4gIE5hbWVkVHlwZU5vZGUsXG4gIEZ1bmN0aW9uVHlwZU5vZGUsXG4gIFR5cGVOYW1lLFxuICBUeXBlUGFyYW1ldGVyTm9kZSxcbiAgSWRlbnRpZmllckV4cHJlc3Npb24sXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXG4gIEJpbmFyeUV4cHJlc3Npb24sXG4gIENhbGxFeHByZXNzaW9uLFxuICBDbGFzc0V4cHJlc3Npb24sXG4gIENvbW1hRXhwcmVzc2lvbixcbiAgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXG4gIExpdGVyYWxFeHByZXNzaW9uLFxuICBOZXdFeHByZXNzaW9uLFxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxuICBUZXJuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcbiAgVW5hcnlQcmVmaXhFeHByZXNzaW9uLFxuICBCbG9ja1N0YXRlbWVudCxcbiAgQnJlYWtTdGF0ZW1lbnQsXG4gIENvbnRpbnVlU3RhdGVtZW50LFxuICBEb1N0YXRlbWVudCxcbiAgRW1wdHlTdGF0ZW1lbnQsXG4gIEV4cG9ydFN0YXRlbWVudCxcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxuICBGb3JTdGF0ZW1lbnQsXG4gIElmU3RhdGVtZW50LFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIFJldHVyblN0YXRlbWVudCxcbiAgU3dpdGNoU3RhdGVtZW50LFxuICBUaHJvd1N0YXRlbWVudCxcbiAgVHJ5U3RhdGVtZW50LFxuICBWYXJpYWJsZVN0YXRlbWVudCxcbiAgV2hpbGVTdGF0ZW1lbnQsXG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIEVudW1EZWNsYXJhdGlvbixcbiAgRW51bVZhbHVlRGVjbGFyYXRpb24sXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIEltcG9ydERlY2xhcmF0aW9uLFxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICBUeXBlRGVjbGFyYXRpb24sXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXG4gIERlY29yYXRvck5vZGUsXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcbiAgUGFyYW1ldGVyTm9kZSxcbiAgRXhwb3J0TWVtYmVyLFxuICBTd2l0Y2hDYXNlLFxuICBUeXBlTm9kZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBVbmFyeUV4cHJlc3Npb24sXG4gIFN1cGVyRXhwcmVzc2lvbixcbiAgRmFsc2VFeHByZXNzaW9uLFxuICBUcnVlRXhwcmVzc2lvbixcbiAgVGhpc0V4cHJlc3Npb24sXG4gIE51bGxFeHByZXNzaW9uLFxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbiAgVm9pZFN0YXRlbWVudCxcbiAgTGl0ZXJhbEtpbmQsXG4gIENvbW1lbnROb2RlLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcImFzc2VtYmx5c2NyaXB0L2Rpc3QvYXNzZW1ibHlzY3JpcHQuanNcIjtcblxuaW1wb3J0IHsgQWJzdHJhY3RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4vdmlzaXRvci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVRyYW5zZm9ybVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFRyYW5zZm9ybVZpc2l0b3I8Tm9kZT4ge1xuICBkZXB0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIF92aXNpdChub2RlOiBOb2RlKTogTm9kZSB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuU09VUkNFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHR5cGVzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRU5BTUU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXG4gICAgICAgICAgICAgICAgICA8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChcbiAgICAgICAgICAgICAgICAgIDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5USFJPVzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5XSElMRToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTVZBTFVFREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihcbiAgICAgICAgICAgICAgICAgIDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXG4gICAgICAgICAgICAgICAgICA8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICAgICAgICAgICAgICAgIDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJcblxuICAgICAgY2FzZSBOb2RlS2luZC5ERUNPUkFUT1I6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZSg8SW5kZXhTaWduYXR1cmVOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCBcInZpc2l0IHBhbmljXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U291cmNlKG5vZGU6IFNvdXJjZSk6IFNvdXJjZSB7XG4gICAgbGV0IHN0YXRlbWVudHM6IFN0YXRlbWVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnN0YXRlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0bXQgPSBub2RlLnN0YXRlbWVudHNbaV07XG4gICAgICB0aGlzLmRlcHRoKys7XG4gICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5fdmlzaXQoc3RtdCkgYXMgU3RhdGVtZW50KTtcbiAgICAgIHRoaXMuZGVwdGgtLTtcbiAgICAgICAgICBcbiAgICB9XG4gICAgbm9kZS5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiBUeXBlTm9kZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogVHlwZU5hbWUge1xuICAgIG5vZGUuaWRlbnRpZmllciA9IHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmlkZW50aWZpZXIpO1xuICAgIG5vZGUubmV4dCA9IHRoaXMudmlzaXQobm9kZS5uZXh0KSBhcyBUeXBlTmFtZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogTmFtZWRUeXBlTm9kZSB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIFR5cGVOYW1lO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogRnVuY3Rpb25UeXBlTm9kZSB7XG4gICAgbm9kZS5wYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnBhcmFtZXRlcnMpIGFzIFBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLnJldHVyblR5cGUgPSB0aGlzLnZpc2l0KG5vZGUucmV0dXJuVHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgbm9kZS5leHBsaWNpdFRoaXNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4cGxpY2l0VGhpc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogVHlwZVBhcmFtZXRlck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUuZGVmYXVsdFR5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpIGFzIE5hbWVkVHlwZU5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKFxuICAgIG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uXG4gICk6IElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uXG4gICk6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zXG4gICAgKSBhcyBFeHByZXNzaW9uW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uXG4gICk6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICBub2RlLm5hbWVzID0gdGhpcy52aXNpdChub2RlLm5hbWVzKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbltdO1xuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiBBc3NlcnRpb25FeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLnRvVHlwZSA9IHRoaXMudmlzaXQobm9kZS50b1R5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRCaW5hcnlFeHByZXNzaW9uKG5vZGU6IEJpbmFyeUV4cHJlc3Npb24pOiBCaW5hcnlFeHByZXNzaW9uIHtcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KG5vZGUubGVmdCkgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy52aXNpdChub2RlLnJpZ2h0KSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogQ2xhc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBDbGFzc0RlY2xhcmF0aW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogQ29tbWFFeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb25zID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKSBhcyBFeHByZXNzaW9uW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKFxuICAgIG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uXG4gICk6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9uID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25cbiAgICApIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlOiBGdW5jdGlvbkV4cHJlc3Npb24pOiBOb2RlIHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBGdW5jdGlvbkRlY2xhcmF0aW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuT0JKRUNUOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5SRUdFWFA6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuVEVNUExBVEU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBMaXRlcmFsS2luZDogXCIgKyBub2RlLmxpdGVyYWxLaW5kXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb25cbiAgKTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKFxuICAgIG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uXG4gICk6IEluc3RhbmNlT2ZFeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmlzVHlwZSA9IHRoaXMudmlzaXQobm9kZS5pc1R5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgbm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uXG4gICk6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvblxuICApOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgbm9kZS52YWx1ZSA9IHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb25cbiAgKTogVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uXG4gICk6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogTmV3RXhwcmVzc2lvbiB7XG4gICAgbm9kZS50eXBlQXJndW1lbnRzID0gdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpIGFzIFR5cGVOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihcbiAgICBub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICApOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiB7XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcbiAgICBub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb25cbiAgKTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLnByb3BlcnR5ID0gdGhpcy52aXNpdChub2RlLnByb3BlcnR5KSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiBUZXJuYXJ5RXhwcmVzc2lvbiB7XG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUuaWZUaGVuID0gdGhpcy52aXNpdChub2RlLmlmVGhlbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmlmRWxzZSA9IHRoaXMudmlzaXQobm9kZS5pZkVsc2UpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiBVbmFyeUV4cHJlc3Npb24ge1xuICAgIG5vZGUub3BlcmFuZCA9IHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxuICAgIG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb25cbiAgKTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiB7XG4gICAgbm9kZS5vcGVyYW5kID0gdGhpcy52aXNpdChub2RlLm9wZXJhbmQpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcbiAgICBub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb25cbiAgKTogVW5hcnlQcmVmaXhFeHByZXNzaW9uIHtcbiAgICBub2RlLm9wZXJhbmQgPSB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCkgYXMgRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U3VwZXJFeHByZXNzaW9uKG5vZGU6IFN1cGVyRXhwcmVzc2lvbik6IFN1cGVyRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiBGYWxzZUV4cHJlc3Npb24ge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IFRydWVFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiBUaGlzRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE51bGxFeHBlcnNzaW9uKG5vZGU6IE51bGxFeHByZXNzaW9uKTogTnVsbEV4cHJlc3Npb24ge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24oXG4gICAgbm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uXG4gICk6IENvbnN0cnVjdG9yRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUobm9kZTogU3RhdGVtZW50KTogU3RhdGVtZW50IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiBCbG9ja1N0YXRlbWVudCB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogQnJlYWtTdGF0ZW1lbnQge1xuICAgIG5vZGUubGFiZWwgPSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiBDb250aW51ZVN0YXRlbWVudCB7XG4gICAgbm9kZS5sYWJlbCA9IHRoaXMudmlzaXQobm9kZS5sYWJlbCkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKFxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogQ2xhc3NEZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUuaW1wbGVtZW50c1R5cGVzID0gdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcykgYXMgTmFtZWRUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIERlY2xhcmF0aW9uU3RhdGVtZW50W107XG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IERvU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5zdGF0ZW1lbnQgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KSBhcyBTdGF0ZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogRW1wdHlTdGF0ZW1lbnQge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRW51bURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IEVudW1EZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRW51bVZhbHVlRGVjbGFyYXRpb25bXTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb25cbiAgKTogRW51bVZhbHVlRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmluaXRpYWxpemVyID0gdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoXG4gICAgbm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50XG4gICk6IEV4cG9ydEltcG9ydFN0YXRlbWVudCB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZXh0ZXJuYWxOYW1lID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZXh0ZXJuYWxOYW1lXG4gICAgKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IEV4cG9ydE1lbWJlciB7XG4gICAgbm9kZS5sb2NhbE5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4cG9ydGVkTmFtZSA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmV4cG9ydGVkTmFtZVxuICAgICkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiBFeHBvcnRTdGF0ZW1lbnQge1xuICAgIG5vZGUucGF0aCA9IHRoaXMudmlzaXQobm9kZS5wYXRoKSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICBub2RlLm1lbWJlcnMgPSB0aGlzLnZpc2l0KG5vZGUubWVtYmVycykgYXMgRXhwb3J0TWVtYmVyW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXG4gICAgbm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudFxuICApOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50IHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBEZWNsYXJhdGlvblN0YXRlbWVudDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogRXhwcmVzc2lvblN0YXRlbWVudCB7XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IEZpZWxkRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IEZvclN0YXRlbWVudCB7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgU3RhdGVtZW50O1xuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmluY3JlbWVudG9yID0gdGhpcy52aXNpdChub2RlLmluY3JlbWVudG9yKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogRnVuY3Rpb25EZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLnNpZ25hdHVyZSA9IHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpIGFzIEZ1bmN0aW9uVHlwZU5vZGU7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuYm9keSA9IHRoaXMudmlzaXQobm9kZS5ib2R5KSBhcyBTdGF0ZW1lbnQ7XG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IElmU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5pZlRydWUgPSB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKSBhcyBTdGF0ZW1lbnQ7XG4gICAgbm9kZS5pZkZhbHNlID0gdGhpcy52aXNpdChub2RlLmlmRmFsc2UpIGFzIFN0YXRlbWVudCB8IG51bGw7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogSW1wb3J0RGVjbGFyYXRpb24ge1xuICAgIG5vZGUuZm9yZWlnbk5hbWUgPSB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IEltcG9ydFN0YXRlbWVudCB7XG4gICAgbm9kZS5uYW1lc3BhY2VOYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpIGFzIEltcG9ydERlY2xhcmF0aW9uW10gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiBJbmRleFNpZ25hdHVyZU5vZGUge1xuICAgIG5vZGUua2V5VHlwZSA9IHRoaXMudmlzaXQobm9kZS5rZXlUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUudmFsdWVUeXBlID0gdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IEludGVyZmFjZURlY2xhcmF0aW9uIHtcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycykgYXMgVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS5pbXBsZW1lbnRzVHlwZXMgPSB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKSBhcyBOYW1lZFR5cGVOb2RlW10gfCBudWxsO1xuICAgIG5vZGUuZXh0ZW5kc1R5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBub2RlLm1lbWJlcnMgPSB0aGlzLnZpc2l0KG5vZGUubWVtYmVycykgYXMgRGVjbGFyYXRpb25TdGF0ZW1lbnRbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogTWV0aG9kRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKWFzIFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xuICAgIG5vZGUuc2lnbmF0dXJlID0gdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSkgYXMgRnVuY3Rpb25UeXBlTm9kZTtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgbm9kZS5ib2R5ID0gdGhpcy52aXNpdChub2RlLmJvZHkpIGFzIFN0YXRlbWVudHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IE5hbWVzcGFjZURlY2xhcmF0aW9uIHtcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIFN0YXRlbWVudFtdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogUmV0dXJuU3RhdGVtZW50IHtcbiAgICBub2RlLnZhbHVlID0gdGhpcy52aXNpdChub2RlLnZhbHVlKSBhcyBFeHByZXNzaW9uICB8bnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogU3dpdGNoQ2FzZSB7XG4gICAgbm9kZS5sYWJlbCA9IHRoaXMudmlzaXQobm9kZS5sYWJlbCkgYXMgRXhwcmVzc2lvbiAgfG51bGw7XG4gICAgbm9kZS5zdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpIGFzIFN0YXRlbWVudFtdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogU3dpdGNoU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuY2FzZXMgPSB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpIGFzIFN3aXRjaENhc2VbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogVGhyb3dTdGF0ZW1lbnQge1xuICAgIG5vZGUudmFsdWUgPSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiBUcnlTdGF0ZW1lbnQge1xuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICBub2RlLmNhdGNoVmFyaWFibGUgPSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xuICAgIG5vZGUuY2F0Y2hTdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XG4gICAgbm9kZS5maW5hbGx5U3RhdGVtZW50cyA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzXG4gICAgKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IFR5cGVEZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZSA9IHRoaXMudmlzaXQobm9kZS50eXBlKSBhcyBUeXBlTm9kZTtcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUudHlwZVBhcmFtZXRlcnNcbiAgICApIGFzIFR5cGVQYXJhbWV0ZXJOb2RlW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IFZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGUgfCBudWxsO1xuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIEV4cHJlc3Npb24gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZVN0YXRlbWVudChub2RlOiBWYXJpYWJsZVN0YXRlbWVudCk6IFZhcmlhYmxlU3RhdGVtZW50IHtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmRlY2xhcmF0aW9uc1xuICAgICkgYXMgVmFyaWFibGVEZWNsYXJhdGlvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IFdoaWxlU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogVm9pZFN0YXRlbWVudCB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiBDb21tZW50Tm9kZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSk6IERlY29yYXRvck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRQYXJhbWV0ZXIobm9kZTogUGFyYW1ldGVyTm9kZSk6IFBhcmFtZXRlck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbiA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvblxuICAgICkgYXMgRmllbGREZWNsYXJhdGlvbiB8IG51bGw7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbiB8IG51bGw7XG4gICAgbm9kZS50eXBlID0gdGhpcy52aXNpdChub2RlLnR5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXX0=