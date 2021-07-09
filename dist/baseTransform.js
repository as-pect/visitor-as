"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTransformVisitor = void 0;
const as_1 = require("../as");
const visitor_1 = require("./visitor");
class BaseTransformVisitor extends visitor_1.AbstractTransformVisitor {
    depth = 0;
    _visit(node) {
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
            case as_1.LiteralKind.ARRAY: {
                return this.visitArrayLiteralExpression(node);
            }
            case as_1.LiteralKind.FLOAT: {
                return this.visitFloatLiteralExpression(node);
            }
            case as_1.LiteralKind.INTEGER: {
                return this.visitIntegerLiteralExpression(node);
            }
            case as_1.LiteralKind.OBJECT: {
                return this.visitObjectLiteralExpression(node);
            }
            case as_1.LiteralKind.REGEXP: {
                return this.visitRegexpLiteralExpression(node);
            }
            case as_1.LiteralKind.STRING: {
                return this.visitStringLiteralExpression(node);
            }
            case as_1.LiteralKind.TEMPLATE: {
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
exports.BaseTransformVisitor = BaseTransformVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQStFZTtBQUVmLHVDQUFxRDtBQUVyRCxNQUFhLG9CQUFxQixTQUFRLGtDQUE4QjtJQUN0RSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRUEsTUFBTSxDQUFDLElBQVU7UUFDekIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssYUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFFRCxRQUFRO1lBRVIsS0FBSyxhQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQzthQUNyRDtZQUNELEtBQUssYUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7YUFDM0Q7WUFDRCxLQUFLLGFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFXLElBQUksQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsS0FBSyxhQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFvQixJQUFJLENBQUMsQ0FBQzthQUN6RDtZQUVELGNBQWM7WUFFZCxLQUFLLGFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxhQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssYUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxhQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssYUFBUSxDQUFDLFdBQVcs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LENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFtQjtRQUNwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBaUI7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBbUI7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWlCLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQW1CO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUF5QixDQUFDO1FBQzFELElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUN4QyxJQUFJLENBQUMsd0JBQXdCLENBQ0gsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBc0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBYSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBM3dCRCxvREEyd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTm9kZSxcbiAgTm9kZUtpbmQsXG4gIFNvdXJjZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZU5hbWUsXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcbiAgQmluYXJ5RXhwcmVzc2lvbixcbiAgQ2FsbEV4cHJlc3Npb24sXG4gIENsYXNzRXhwcmVzc2lvbixcbiAgQ29tbWFFeHByZXNzaW9uLFxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXG4gIE5ld0V4cHJlc3Npb24sXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXG4gIFRlcm5hcnlFeHByZXNzaW9uLFxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXG4gIEJsb2NrU3RhdGVtZW50LFxuICBCcmVha1N0YXRlbWVudCxcbiAgQ29udGludWVTdGF0ZW1lbnQsXG4gIERvU3RhdGVtZW50LFxuICBFbXB0eVN0YXRlbWVudCxcbiAgRXhwb3J0U3RhdGVtZW50LFxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXG4gIEZvclN0YXRlbWVudCxcbiAgSWZTdGF0ZW1lbnQsXG4gIEltcG9ydFN0YXRlbWVudCxcbiAgUmV0dXJuU3RhdGVtZW50LFxuICBTd2l0Y2hTdGF0ZW1lbnQsXG4gIFRocm93U3RhdGVtZW50LFxuICBUcnlTdGF0ZW1lbnQsXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxuICBXaGlsZVN0YXRlbWVudCxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRW51bURlY2xhcmF0aW9uLFxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgSW1wb3J0RGVjbGFyYXRpb24sXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gIFR5cGVEZWNsYXJhdGlvbixcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcbiAgRGVjb3JhdG9yTm9kZSxcbiAgSW5kZXhTaWduYXR1cmVOb2RlLFxuICBQYXJhbWV0ZXJOb2RlLFxuICBFeHBvcnRNZW1iZXIsXG4gIFN3aXRjaENhc2UsXG4gIFR5cGVOb2RlLFxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxuICBFeHByZXNzaW9uLFxuICBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcbiAgSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uLFxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbiAgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFVuYXJ5RXhwcmVzc2lvbixcbiAgU3VwZXJFeHByZXNzaW9uLFxuICBGYWxzZUV4cHJlc3Npb24sXG4gIFRydWVFeHByZXNzaW9uLFxuICBUaGlzRXhwcmVzc2lvbixcbiAgTnVsbEV4cHJlc3Npb24sXG4gIENvbnN0cnVjdG9yRXhwcmVzc2lvbixcbiAgU3RhdGVtZW50LFxuICBWb2lkU3RhdGVtZW50LFxuICBMaXRlcmFsS2luZCxcbiAgQ29tbWVudE5vZGUsXG4gIERlY2xhcmF0aW9uU3RhdGVtZW50LFxuICBUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiLi4vYXNcIjtcblxuaW1wb3J0IHsgQWJzdHJhY3RUcmFuc2Zvcm1WaXNpdG9yIH0gZnJvbSBcIi4vdmlzaXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVRyYW5zZm9ybVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFRyYW5zZm9ybVZpc2l0b3I8Tm9kZT4ge1xuICBkZXB0aCA9IDA7XG5cbiAgcHJvdGVjdGVkIF92aXNpdChub2RlOiBOb2RlKTogTm9kZSB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuU09VUkNFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHR5cGVzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRU5BTUU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKDxBc3NlcnRpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRCaW5hcnlFeHByZXNzaW9uKDxCaW5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENsYXNzRXhwcmVzc2lvbig8Q2xhc3NFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENvbW1hRXhwcmVzc2lvbig8Q29tbWFFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbig8RnVuY3Rpb25FeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VGVybmFyeUV4cHJlc3Npb24oPFRlcm5hcnlFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRCbG9ja1N0YXRlbWVudCg8QmxvY2tTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QnJlYWtTdGF0ZW1lbnQoPEJyZWFrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXREb1N0YXRlbWVudCg8RG9TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RW1wdHlTdGF0ZW1lbnQoPEVtcHR5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXG4gICAgICAgICAgICAgICAgICA8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChcbiAgICAgICAgICAgICAgICAgIDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlQ6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5USFJPVzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5XSElMRToge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTVZBTFVFREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihcbiAgICAgICAgICAgICAgICAgIDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXG4gICAgICAgICAgICAgICAgICA8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICAgICAgICAgICAgICAgIDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJcblxuICAgICAgY2FzZSBOb2RlS2luZC5ERUNPUkFUT1I6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZSg8SW5kZXhTaWduYXR1cmVOb2RlPm5vZGUpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCBcInZpc2l0IHBhbmljXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U291cmNlKG5vZGU6IFNvdXJjZSk6IFNvdXJjZSB7XG4gICAgbGV0IHN0YXRlbWVudHM6IFN0YXRlbWVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnN0YXRlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0bXQgPSBub2RlLnN0YXRlbWVudHNbaV07XG4gICAgICB0aGlzLmRlcHRoKys7XG4gICAgICBzdGF0ZW1lbnRzLnB1c2godGhpcy5fdmlzaXQoc3RtdCkgYXMgU3RhdGVtZW50KTtcbiAgICAgIHRoaXMuZGVwdGgtLTtcbiAgICAgICAgICBcbiAgICB9XG4gICAgbm9kZS5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiBUeXBlTm9kZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogVHlwZU5hbWUge1xuICAgIG5vZGUuaWRlbnRpZmllciA9IHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmlkZW50aWZpZXIpO1xuICAgIG5vZGUubmV4dCA9IHRoaXMudmlzaXQobm9kZS5uZXh0KSBhcyBUeXBlTmFtZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogTmFtZWRUeXBlTm9kZSB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIFR5cGVOYW1lO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25UeXBlTm9kZShub2RlOiBGdW5jdGlvblR5cGVOb2RlKTogRnVuY3Rpb25UeXBlTm9kZSB7XG4gICAgbm9kZS5wYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnBhcmFtZXRlcnMpIGFzIFBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLnJldHVyblR5cGUgPSB0aGlzLnZpc2l0KG5vZGUucmV0dXJuVHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgbm9kZS5leHBsaWNpdFRoaXNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4cGxpY2l0VGhpc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogVHlwZVBhcmFtZXRlck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUuZGVmYXVsdFR5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZGVmYXVsdFR5cGUpIGFzIE5hbWVkVHlwZU5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKFxuICAgIG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uXG4gICk6IElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uXG4gICk6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zXG4gICAgKSBhcyBFeHByZXNzaW9uW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uXG4gICk6IE9iamVjdExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICBub2RlLm5hbWVzID0gdGhpcy52aXNpdChub2RlLm5hbWVzKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbltdO1xuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiBBc3NlcnRpb25FeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLnRvVHlwZSA9IHRoaXMudmlzaXQobm9kZS50b1R5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRCaW5hcnlFeHByZXNzaW9uKG5vZGU6IEJpbmFyeUV4cHJlc3Npb24pOiBCaW5hcnlFeHByZXNzaW9uIHtcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KG5vZGUubGVmdCkgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy52aXNpdChub2RlLnJpZ2h0KSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IEV4cHJlc3Npb24ge1xuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogQ2xhc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBDbGFzc0RlY2xhcmF0aW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogQ29tbWFFeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb25zID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKSBhcyBFeHByZXNzaW9uW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKFxuICAgIG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uXG4gICk6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9uID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25cbiAgICApIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlOiBGdW5jdGlvbkV4cHJlc3Npb24pOiBOb2RlIHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBGdW5jdGlvbkRlY2xhcmF0aW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICBzd2l0Y2ggKG5vZGUubGl0ZXJhbEtpbmQpIHtcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuT0JKRUNUOiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICA8T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5SRUdFWFA6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgIDxSZWdleHBMaXRlcmFsRXhwcmVzc2lvbj5ub2RlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlNUUklORzoge1xuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuVEVNUExBVEU6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgPFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24+bm9kZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBMaXRlcmFsS2luZDogXCIgKyBub2RlLmxpdGVyYWxLaW5kXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb25cbiAgKTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKFxuICAgIG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uXG4gICk6IEluc3RhbmNlT2ZFeHByZXNzaW9uIHtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmlzVHlwZSA9IHRoaXMudmlzaXQobm9kZS5pc1R5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgbm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uXG4gICk6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcsIHNpbmdsZVF1b3RlZCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvblxuICApOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgbm9kZS52YWx1ZSA9IHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb25cbiAgKTogVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxuICAgIG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uXG4gICk6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogTmV3RXhwcmVzc2lvbiB7XG4gICAgbm9kZS50eXBlQXJndW1lbnRzID0gdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpIGFzIFR5cGVOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihcbiAgICBub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICApOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiB7XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcbiAgICBub2RlOiBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb25cbiAgKTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uIHtcbiAgICBub2RlLnByb3BlcnR5ID0gdGhpcy52aXNpdChub2RlLnByb3BlcnR5KSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiBUZXJuYXJ5RXhwcmVzc2lvbiB7XG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUuaWZUaGVuID0gdGhpcy52aXNpdChub2RlLmlmVGhlbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmlmRWxzZSA9IHRoaXMudmlzaXQobm9kZS5pZkVsc2UpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiBVbmFyeUV4cHJlc3Npb24ge1xuICAgIG5vZGUub3BlcmFuZCA9IHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxuICAgIG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb25cbiAgKTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbiB7XG4gICAgbm9kZS5vcGVyYW5kID0gdGhpcy52aXNpdChub2RlLm9wZXJhbmQpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcbiAgICBub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb25cbiAgKTogVW5hcnlQcmVmaXhFeHByZXNzaW9uIHtcbiAgICBub2RlLm9wZXJhbmQgPSB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCkgYXMgRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U3VwZXJFeHByZXNzaW9uKG5vZGU6IFN1cGVyRXhwcmVzc2lvbik6IFN1cGVyRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiBGYWxzZUV4cHJlc3Npb24ge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IFRydWVFeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGhpc0V4cHJlc3Npb24obm9kZTogVGhpc0V4cHJlc3Npb24pOiBUaGlzRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE51bGxFeHBlcnNzaW9uKG5vZGU6IE51bGxFeHByZXNzaW9uKTogTnVsbEV4cHJlc3Npb24ge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24oXG4gICAgbm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uXG4gICk6IENvbnN0cnVjdG9yRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUobm9kZTogU3RhdGVtZW50KTogU3RhdGVtZW50IHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiBCbG9ja1N0YXRlbWVudCB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogQnJlYWtTdGF0ZW1lbnQge1xuICAgIG5vZGUubGFiZWwgPSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiBDb250aW51ZVN0YXRlbWVudCB7XG4gICAgbm9kZS5sYWJlbCA9IHRoaXMudmlzaXQobm9kZS5sYWJlbCkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKFxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogQ2xhc3NEZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUuaW1wbGVtZW50c1R5cGVzID0gdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcykgYXMgTmFtZWRUeXBlTm9kZVtdIHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIERlY2xhcmF0aW9uU3RhdGVtZW50W107XG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IERvU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5zdGF0ZW1lbnQgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KSBhcyBTdGF0ZW1lbnQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogRW1wdHlTdGF0ZW1lbnQge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRW51bURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IEVudW1EZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRW51bVZhbHVlRGVjbGFyYXRpb25bXTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRW51bVZhbHVlRGVjbGFyYXRpb25cbiAgKTogRW51bVZhbHVlRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmluaXRpYWxpemVyID0gdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKSBhcyBFeHByZXNzaW9uO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoXG4gICAgbm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50XG4gICk6IEV4cG9ydEltcG9ydFN0YXRlbWVudCB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZXh0ZXJuYWxOYW1lID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUuZXh0ZXJuYWxOYW1lXG4gICAgKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IEV4cG9ydE1lbWJlciB7XG4gICAgbm9kZS5sb2NhbE5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubG9jYWxOYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmV4cG9ydGVkTmFtZSA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmV4cG9ydGVkTmFtZVxuICAgICkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiBFeHBvcnRTdGF0ZW1lbnQge1xuICAgIG5vZGUucGF0aCA9IHRoaXMudmlzaXQobm9kZS5wYXRoKSBhcyBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbjtcbiAgICBub2RlLm1lbWJlcnMgPSB0aGlzLnZpc2l0KG5vZGUubWVtYmVycykgYXMgRXhwb3J0TWVtYmVyW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXG4gICAgbm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudFxuICApOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50IHtcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBEZWNsYXJhdGlvblN0YXRlbWVudDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogRXhwcmVzc2lvblN0YXRlbWVudCB7XG4gICAgbm9kZS5leHByZXNzaW9uID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IEZpZWxkRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IEZvclN0YXRlbWVudCB7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgU3RhdGVtZW50O1xuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcbiAgICBub2RlLmluY3JlbWVudG9yID0gdGhpcy52aXNpdChub2RlLmluY3JlbWVudG9yKSBhcyBFeHByZXNzaW9uO1xuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogRnVuY3Rpb25EZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcbiAgICBub2RlLnNpZ25hdHVyZSA9IHRoaXMudmlzaXQobm9kZS5zaWduYXR1cmUpIGFzIEZ1bmN0aW9uVHlwZU5vZGU7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuYm9keSA9IHRoaXMudmlzaXQobm9kZS5ib2R5KSBhcyBTdGF0ZW1lbnQ7XG4gICAgdGhpcy5kZXB0aC0tO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IElmU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgbm9kZS5pZlRydWUgPSB0aGlzLnZpc2l0KG5vZGUuaWZUcnVlKSBhcyBTdGF0ZW1lbnQ7XG4gICAgbm9kZS5pZkZhbHNlID0gdGhpcy52aXNpdChub2RlLmlmRmFsc2UpIGFzIFN0YXRlbWVudCB8IG51bGw7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogSW1wb3J0RGVjbGFyYXRpb24ge1xuICAgIG5vZGUuZm9yZWlnbk5hbWUgPSB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IEltcG9ydFN0YXRlbWVudCB7XG4gICAgbm9kZS5uYW1lc3BhY2VOYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWVzcGFjZU5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpIGFzIEltcG9ydERlY2xhcmF0aW9uW10gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiBJbmRleFNpZ25hdHVyZU5vZGUge1xuICAgIG5vZGUua2V5VHlwZSA9IHRoaXMudmlzaXQobm9kZS5rZXlUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xuICAgIG5vZGUudmFsdWVUeXBlID0gdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSkgYXMgVHlwZU5vZGU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IEludGVyZmFjZURlY2xhcmF0aW9uIHtcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQobm9kZS50eXBlUGFyYW1ldGVycykgYXMgVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS5pbXBsZW1lbnRzVHlwZXMgPSB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKSBhcyBOYW1lZFR5cGVOb2RlW10gfCBudWxsO1xuICAgIG5vZGUuZXh0ZW5kc1R5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBub2RlLm1lbWJlcnMgPSB0aGlzLnZpc2l0KG5vZGUubWVtYmVycykgYXMgRGVjbGFyYXRpb25TdGF0ZW1lbnRbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogTWV0aG9kRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKWFzIFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xuICAgIG5vZGUuc2lnbmF0dXJlID0gdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSkgYXMgRnVuY3Rpb25UeXBlTm9kZTtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgbm9kZS5ib2R5ID0gdGhpcy52aXNpdChub2RlLmJvZHkpIGFzIFN0YXRlbWVudHwgbnVsbDtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IE5hbWVzcGFjZURlY2xhcmF0aW9uIHtcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIFN0YXRlbWVudFtdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogUmV0dXJuU3RhdGVtZW50IHtcbiAgICBub2RlLnZhbHVlID0gdGhpcy52aXNpdChub2RlLnZhbHVlKSBhcyBFeHByZXNzaW9uICB8bnVsbDtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogU3dpdGNoQ2FzZSB7XG4gICAgbm9kZS5sYWJlbCA9IHRoaXMudmlzaXQobm9kZS5sYWJlbCkgYXMgRXhwcmVzc2lvbiAgfG51bGw7XG4gICAgbm9kZS5zdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpIGFzIFN0YXRlbWVudFtdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogU3dpdGNoU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuY2FzZXMgPSB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpIGFzIFN3aXRjaENhc2VbXTtcbiAgICB0aGlzLmRlcHRoLS07XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogVGhyb3dTdGF0ZW1lbnQge1xuICAgIG5vZGUudmFsdWUgPSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpIGFzIEV4cHJlc3Npb247XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiBUcnlTdGF0ZW1lbnQge1xuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICBub2RlLmNhdGNoVmFyaWFibGUgPSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xuICAgIG5vZGUuY2F0Y2hTdGF0ZW1lbnRzID0gdGhpcy52aXNpdChub2RlLmNhdGNoU3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XG4gICAgbm9kZS5maW5hbGx5U3RhdGVtZW50cyA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzXG4gICAgKSBhcyBTdGF0ZW1lbnRbXTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VHlwZURlY2xhcmF0aW9uKG5vZGU6IFR5cGVEZWNsYXJhdGlvbik6IFR5cGVEZWNsYXJhdGlvbiB7XG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xuICAgIG5vZGUudHlwZSA9IHRoaXMudmlzaXQobm9kZS50eXBlKSBhcyBUeXBlTm9kZTtcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChcbiAgICAgIG5vZGUudHlwZVBhcmFtZXRlcnNcbiAgICApIGFzIFR5cGVQYXJhbWV0ZXJOb2RlW107XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IFZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGUgfCBudWxsO1xuICAgIG5vZGUuaW5pdGlhbGl6ZXIgPSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpIGFzIEV4cHJlc3Npb24gfCBudWxsO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZVN0YXRlbWVudChub2RlOiBWYXJpYWJsZVN0YXRlbWVudCk6IFZhcmlhYmxlU3RhdGVtZW50IHtcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmRlY2xhcmF0aW9uc1xuICAgICkgYXMgVmFyaWFibGVEZWNsYXJhdGlvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IFdoaWxlU3RhdGVtZW50IHtcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogVm9pZFN0YXRlbWVudCB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdENvbW1lbnQobm9kZTogQ29tbWVudE5vZGUpOiBDb21tZW50Tm9kZSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSk6IERlY29yYXRvck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmFyZ3MgPSB0aGlzLnZpc2l0KG5vZGUuYXJncykgYXMgRXhwcmVzc2lvbltdO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdmlzaXRQYXJhbWV0ZXIobm9kZTogUGFyYW1ldGVyTm9kZSk6IFBhcmFtZXRlck5vZGUge1xuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbiAgICBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvbiA9IHRoaXMudmlzaXQoXG4gICAgICBub2RlLmltcGxpY2l0RmllbGREZWNsYXJhdGlvblxuICAgICkgYXMgRmllbGREZWNsYXJhdGlvbiB8IG51bGw7XG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbiB8IG51bGw7XG4gICAgbm9kZS50eXBlID0gdGhpcy52aXNpdChub2RlLnR5cGUpIGFzIFR5cGVOb2RlO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXX0=