"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTransformVisitor = void 0;
const as_1 = require("../as");
const visitor_1 = require("./visitor");
class BaseTransformVisitor extends visitor_1.AbstractTransformVisitor {
    constructor() {
        super(...arguments);
        this.depth = 0;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhCQStFZTtBQUVmLHVDQUFxRDtBQUVyRCxNQUFhLG9CQUFxQixTQUFRLGtDQUE4QjtJQUF4RTs7UUFDRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBMHdCWixDQUFDO0lBeHdCVyxNQUFNLENBQUMsSUFBVTtRQUN6QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxhQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUVELFFBQVE7WUFFUixLQUFLLGFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQWdCLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsS0FBSyxhQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFtQixJQUFJLENBQUMsQ0FBQzthQUMzRDtZQUNELEtBQUssYUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQVcsSUFBSSxDQUFDLENBQUM7YUFDM0M7WUFDRCxLQUFLLGFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsY0FBYztZQUVkLEtBQUssYUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxhQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEtBQUssYUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLGFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkIs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LE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQW1CO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFpQjtRQUM1QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFtQjtRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBeUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBbUI7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQ3hDLElBQUksQ0FBQyx3QkFBd0IsQ0FDSCxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFzQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFhLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUEzd0JELG9EQTJ3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIE5vZGUsXHJcbiAgTm9kZUtpbmQsXHJcbiAgU291cmNlLFxyXG4gIE5hbWVkVHlwZU5vZGUsXHJcbiAgRnVuY3Rpb25UeXBlTm9kZSxcclxuICBUeXBlTmFtZSxcclxuICBUeXBlUGFyYW1ldGVyTm9kZSxcclxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcclxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxyXG4gIEJpbmFyeUV4cHJlc3Npb24sXHJcbiAgQ2FsbEV4cHJlc3Npb24sXHJcbiAgQ2xhc3NFeHByZXNzaW9uLFxyXG4gIENvbW1hRXhwcmVzc2lvbixcclxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcclxuICBGdW5jdGlvbkV4cHJlc3Npb24sXHJcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXHJcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgTmV3RXhwcmVzc2lvbixcclxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcclxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXHJcbiAgVGVybmFyeUV4cHJlc3Npb24sXHJcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcclxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXHJcbiAgQmxvY2tTdGF0ZW1lbnQsXHJcbiAgQnJlYWtTdGF0ZW1lbnQsXHJcbiAgQ29udGludWVTdGF0ZW1lbnQsXHJcbiAgRG9TdGF0ZW1lbnQsXHJcbiAgRW1wdHlTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0U3RhdGVtZW50LFxyXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXHJcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxyXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXHJcbiAgRm9yU3RhdGVtZW50LFxyXG4gIElmU3RhdGVtZW50LFxyXG4gIEltcG9ydFN0YXRlbWVudCxcclxuICBSZXR1cm5TdGF0ZW1lbnQsXHJcbiAgU3dpdGNoU3RhdGVtZW50LFxyXG4gIFRocm93U3RhdGVtZW50LFxyXG4gIFRyeVN0YXRlbWVudCxcclxuICBWYXJpYWJsZVN0YXRlbWVudCxcclxuICBXaGlsZVN0YXRlbWVudCxcclxuICBDbGFzc0RlY2xhcmF0aW9uLFxyXG4gIEVudW1EZWNsYXJhdGlvbixcclxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcclxuICBGaWVsZERlY2xhcmF0aW9uLFxyXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXHJcbiAgSW1wb3J0RGVjbGFyYXRpb24sXHJcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXHJcbiAgTWV0aG9kRGVjbGFyYXRpb24sXHJcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgVHlwZURlY2xhcmF0aW9uLFxyXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXHJcbiAgRGVjb3JhdG9yTm9kZSxcclxuICBJbmRleFNpZ25hdHVyZU5vZGUsXHJcbiAgUGFyYW1ldGVyTm9kZSxcclxuICBFeHBvcnRNZW1iZXIsXHJcbiAgU3dpdGNoQ2FzZSxcclxuICBUeXBlTm9kZSxcclxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxyXG4gIEV4cHJlc3Npb24sXHJcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcclxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgVW5hcnlFeHByZXNzaW9uLFxyXG4gIFN1cGVyRXhwcmVzc2lvbixcclxuICBGYWxzZUV4cHJlc3Npb24sXHJcbiAgVHJ1ZUV4cHJlc3Npb24sXHJcbiAgVGhpc0V4cHJlc3Npb24sXHJcbiAgTnVsbEV4cHJlc3Npb24sXHJcbiAgQ29uc3RydWN0b3JFeHByZXNzaW9uLFxyXG4gIFN0YXRlbWVudCxcclxuICBWb2lkU3RhdGVtZW50LFxyXG4gIExpdGVyYWxLaW5kLFxyXG4gIENvbW1lbnROb2RlLFxyXG4gIERlY2xhcmF0aW9uU3RhdGVtZW50LFxyXG4gIFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24sXHJcbn0gZnJvbSBcIi4uL2FzXCI7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFRyYW5zZm9ybVZpc2l0b3IgfSBmcm9tIFwiLi92aXNpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZVRyYW5zZm9ybVZpc2l0b3IgZXh0ZW5kcyBBYnN0cmFjdFRyYW5zZm9ybVZpc2l0b3I8Tm9kZT4ge1xyXG4gIGRlcHRoID0gMDtcclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpdChub2RlOiBOb2RlKTogTm9kZSB7XHJcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHR5cGVzXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVOQU1FOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKDxUeXBlUGFyYW1ldGVyTm9kZT5ub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXhwcmVzc2lvbnNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcclxuICAgICAgY2FzZSBOb2RlS2luZC5TVVBFUjpcclxuICAgICAgY2FzZSBOb2RlS2luZC5USElTOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OU1RSVUNUT1I6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSURFTlRJRklFUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxJZGVudGlmaWVyRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkFTU0VSVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbig8QXNzZXJ0aW9uRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJJTkFSWToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QmluYXJ5RXhwcmVzc2lvbig8QmluYXJ5RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNBTEw6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdENhbGxFeHByZXNzaW9uKDxDYWxsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDbGFzc0V4cHJlc3Npb24oPENsYXNzRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTU1BOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDb21tYUV4cHJlc3Npb24oPENvbW1hRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPEluc3RhbmNlT2ZFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXROZXdFeHByZXNzaW9uKDxOZXdFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxVbmFyeVBvc3RmaXhFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVU5BUllQUkVGSVg6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPFVuYXJ5UHJlZml4RXhwcmVzc2lvbj5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc3RhdGVtZW50c1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5CTE9DSzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0QmxvY2tTdGF0ZW1lbnQoPEJsb2NrU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQlJFQUs6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEJyZWFrU3RhdGVtZW50KDxCcmVha1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlRJTlVFOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDb250aW51ZVN0YXRlbWVudCg8Q29udGludWVTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5ETzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RG9TdGF0ZW1lbnQoPERvU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRU1QVFk6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEVtcHR5U3RhdGVtZW50KDxFbXB0eVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwb3J0U3RhdGVtZW50KDxFeHBvcnRTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRERUZBVUxUOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICA8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICA8RXhwb3J0SW1wb3J0U3RhdGVtZW50Pm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQUkVTU0lPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0Rm9yU3RhdGVtZW50KDxGb3JTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgPEVudW1WYWx1ZURlY2xhcmF0aW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRklFTERERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0RmllbGREZWNsYXJhdGlvbig8RmllbGREZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlRERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oPEltcG9ydERlY2xhcmF0aW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICA8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0TWV0aG9kRGVjbGFyYXRpb24oPE1ldGhvZERlY2xhcmF0aW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICA8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gb3RoZXJcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklOREVYU0lHTkFUVVJFOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZSg8SW5kZXhTaWduYXR1cmVOb2RlPm5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCBcInZpc2l0IHBhbmljXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFNvdXJjZShub2RlOiBTb3VyY2UpOiBTb3VyY2Uge1xyXG4gICAgbGV0IHN0YXRlbWVudHM6IFN0YXRlbWVudFtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuc3RhdGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzdG10ID0gbm9kZS5zdGF0ZW1lbnRzW2ldO1xyXG4gICAgICB0aGlzLmRlcHRoKys7XHJcbiAgICAgIHN0YXRlbWVudHMucHVzaCh0aGlzLl92aXNpdChzdG10KSBhcyBTdGF0ZW1lbnQpO1xyXG4gICAgICB0aGlzLmRlcHRoLS07XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIG5vZGUuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiBUeXBlTm9kZSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHlwZU5hbWUobm9kZTogVHlwZU5hbWUpOiBUeXBlTmFtZSB7XHJcbiAgICBub2RlLmlkZW50aWZpZXIgPSB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5pZGVudGlmaWVyKTtcclxuICAgIG5vZGUubmV4dCA9IHRoaXMudmlzaXQobm9kZS5uZXh0KSBhcyBUeXBlTmFtZTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROYW1lZFR5cGVOb2RlKG5vZGU6IE5hbWVkVHlwZU5vZGUpOiBOYW1lZFR5cGVOb2RlIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBUeXBlTmFtZTtcclxuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvblR5cGVOb2RlKG5vZGU6IEZ1bmN0aW9uVHlwZU5vZGUpOiBGdW5jdGlvblR5cGVOb2RlIHtcclxuICAgIG5vZGUucGFyYW1ldGVycyA9IHRoaXMudmlzaXQobm9kZS5wYXJhbWV0ZXJzKSBhcyBQYXJhbWV0ZXJOb2RlW107XHJcbiAgICBub2RlLnJldHVyblR5cGUgPSB0aGlzLnZpc2l0KG5vZGUucmV0dXJuVHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICBub2RlLmV4cGxpY2l0VGhpc1R5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZXhwbGljaXRUaGlzVHlwZSkgYXMgTmFtZWRUeXBlTm9kZSB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IFR5cGVQYXJhbWV0ZXJOb2RlIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZXh0ZW5kc1R5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGU7XHJcbiAgICBub2RlLmRlZmF1bHRUeXBlID0gdGhpcy52aXNpdChub2RlLmRlZmF1bHRUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogSWRlbnRpZmllckV4cHJlc3Npb25cclxuICApOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb25cclxuICApOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb25zID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5lbGVtZW50RXhwcmVzc2lvbnNcclxuICAgICkgYXMgRXhwcmVzc2lvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb25cclxuICApOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLm5hbWVzID0gdGhpcy52aXNpdChub2RlLm5hbWVzKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbltdO1xyXG4gICAgbm9kZS52YWx1ZXMgPSB0aGlzLnZpc2l0KG5vZGUudmFsdWVzKSBhcyBFeHByZXNzaW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogQXNzZXJ0aW9uRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUudG9UeXBlID0gdGhpcy52aXNpdChub2RlLnRvVHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0QmluYXJ5RXhwcmVzc2lvbihub2RlOiBCaW5hcnlFeHByZXNzaW9uKTogQmluYXJ5RXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KG5vZGUubGVmdCkgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnZpc2l0KG5vZGUucmlnaHQpIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZTogQ2FsbEV4cHJlc3Npb24pOiBFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS50eXBlQXJndW1lbnRzID0gdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpIGFzIFR5cGVOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS5hcmdzID0gdGhpcy52aXNpdChub2RlLmFyZ3MpIGFzIEV4cHJlc3Npb25bXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDbGFzc0V4cHJlc3Npb24obm9kZTogQ2xhc3NFeHByZXNzaW9uKTogQ2xhc3NFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuZGVjbGFyYXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pIGFzIENsYXNzRGVjbGFyYXRpb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29tbWFFeHByZXNzaW9uKG5vZGU6IENvbW1hRXhwcmVzc2lvbik6IENvbW1hRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmV4cHJlc3Npb25zID0gdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKSBhcyBFeHByZXNzaW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXHJcbiAgICBub2RlOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvblxyXG4gICk6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuZWxlbWVudEV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLmVsZW1lbnRFeHByZXNzaW9uXHJcbiAgICApIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogTm9kZSB7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBGdW5jdGlvbkRlY2xhcmF0aW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogTGl0ZXJhbEV4cHJlc3Npb24ge1xyXG4gICAgc3dpdGNoIChub2RlLmxpdGVyYWxLaW5kKSB7XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxBcnJheUxpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuRkxPQVQ6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxGbG9hdExpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuSU5URUdFUjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgICA8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuT0JKRUNUOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPE9iamVjdExpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuUkVHRVhQOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgICAgICAgICAgICAgICAgPFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuVEVNUExBVEU6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICAgICAgICAgICAgICAgIDxUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uPm5vZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCJJbnZhbGlkIExpdGVyYWxLaW5kOiBcIiArIG5vZGUubGl0ZXJhbEtpbmRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvblxyXG4gICk6IEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24ge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb25cclxuICApOiBJbnN0YW5jZU9mRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLmV4cHJlc3Npb24gPSB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaXNUeXBlID0gdGhpcy52aXNpdChub2RlLmlzVHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKFxyXG4gICAgbm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uXHJcbiAgKTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQgPSBmYWxzZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uXHJcbiAgKTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS52YWx1ZSA9IHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uXHJcbiAgKTogVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbiB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvblxyXG4gICk6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROZXdFeHByZXNzaW9uKG5vZGU6IE5ld0V4cHJlc3Npb24pOiBOZXdFeHByZXNzaW9uIHtcclxuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUudHlwZUFyZ3VtZW50cyA9IHRoaXMudmlzaXQobm9kZS50eXBlQXJndW1lbnRzKSBhcyBUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuYXJncyA9IHRoaXMudmlzaXQobm9kZS5hcmdzKSBhcyBFeHByZXNzaW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0UGFyZW50aGVzaXplZEV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvblxyXG4gICk6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uIHtcclxuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihcclxuICAgIG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvblxyXG4gICk6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLnByb3BlcnR5ID0gdGhpcy52aXNpdChub2RlLnByb3BlcnR5KSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFRlcm5hcnlFeHByZXNzaW9uKG5vZGU6IFRlcm5hcnlFeHByZXNzaW9uKTogVGVybmFyeUV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5pZlRoZW4gPSB0aGlzLnZpc2l0KG5vZGUuaWZUaGVuKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5pZkVsc2UgPSB0aGlzLnZpc2l0KG5vZGUuaWZFbHNlKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiBVbmFyeUV4cHJlc3Npb24ge1xyXG4gICAgbm9kZS5vcGVyYW5kID0gdGhpcy52aXNpdChub2RlLm9wZXJhbmQpIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbihcclxuICAgIG5vZGU6IFVuYXJ5UG9zdGZpeEV4cHJlc3Npb25cclxuICApOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uIHtcclxuICAgIG5vZGUub3BlcmFuZCA9IHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihcclxuICAgIG5vZGU6IFVuYXJ5UHJlZml4RXhwcmVzc2lvblxyXG4gICk6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbiB7XHJcbiAgICBub2RlLm9wZXJhbmQgPSB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCkgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTdXBlckV4cHJlc3Npb24obm9kZTogU3VwZXJFeHByZXNzaW9uKTogU3VwZXJFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGYWxzZUV4cHJlc3Npb24obm9kZTogRmFsc2VFeHByZXNzaW9uKTogRmFsc2VFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IFRydWVFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUaGlzRXhwcmVzc2lvbihub2RlOiBUaGlzRXhwcmVzc2lvbik6IFRoaXNFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROdWxsRXhwZXJzc2lvbihub2RlOiBOdWxsRXhwcmVzc2lvbik6IE51bGxFeHByZXNzaW9uIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24oXHJcbiAgICBub2RlOiBDb25zdHJ1Y3RvckV4cHJlc3Npb25cclxuICApOiBDb25zdHJ1Y3RvckV4cHJlc3Npb24ge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGVBbmRUZXJtaW5hdGUobm9kZTogU3RhdGVtZW50KTogU3RhdGVtZW50IHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IEJsb2NrU3RhdGVtZW50IHtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IEJyZWFrU3RhdGVtZW50IHtcclxuICAgIG5vZGUubGFiZWwgPSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IENvbnRpbnVlU3RhdGVtZW50IHtcclxuICAgIG5vZGUubGFiZWwgPSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXHJcbiAgKTogQ2xhc3NEZWNsYXJhdGlvbiB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUudHlwZVBhcmFtZXRlcnMgPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLnR5cGVQYXJhbWV0ZXJzXHJcbiAgICApIGFzIFR5cGVQYXJhbWV0ZXJOb2RlW107XHJcbiAgICBub2RlLmV4dGVuZHNUeXBlID0gdGhpcy52aXNpdChub2RlLmV4dGVuZHNUeXBlKSBhcyBOYW1lZFR5cGVOb2RlO1xyXG4gICAgbm9kZS5pbXBsZW1lbnRzVHlwZXMgPSB0aGlzLnZpc2l0KG5vZGUuaW1wbGVtZW50c1R5cGVzKSBhcyBOYW1lZFR5cGVOb2RlW10gfCBudWxsO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIERlY2xhcmF0aW9uU3RhdGVtZW50W107XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0RG9TdGF0ZW1lbnQobm9kZTogRG9TdGF0ZW1lbnQpOiBEb1N0YXRlbWVudCB7XHJcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLnN0YXRlbWVudCA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpIGFzIFN0YXRlbWVudDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFbXB0eVN0YXRlbWVudChub2RlOiBFbXB0eVN0YXRlbWVudCk6IEVtcHR5U3RhdGVtZW50IHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBFbnVtRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IEVudW1EZWNsYXJhdGlvbiB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUudmFsdWVzID0gdGhpcy52aXNpdChub2RlLnZhbHVlcykgYXMgRW51bVZhbHVlRGVjbGFyYXRpb25bXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uXHJcbiAgKTogRW51bVZhbHVlRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoXHJcbiAgICBub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnRcclxuICApOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5leHRlcm5hbE5hbWUgPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLmV4dGVybmFsTmFtZVxyXG4gICAgKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRNZW1iZXIobm9kZTogRXhwb3J0TWVtYmVyKTogRXhwb3J0TWVtYmVyIHtcclxuICAgIG5vZGUubG9jYWxOYW1lID0gdGhpcy52aXNpdChub2RlLmxvY2FsTmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmV4cG9ydGVkTmFtZSA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUuZXhwb3J0ZWROYW1lXHJcbiAgICApIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEV4cG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRTdGF0ZW1lbnQpOiBFeHBvcnRTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5wYXRoID0gdGhpcy52aXNpdChub2RlLnBhdGgpIGFzIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIEV4cG9ydE1lbWJlcltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQoXHJcbiAgICBub2RlOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50XHJcbiAgKTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCB7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9uID0gdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9uKSBhcyBEZWNsYXJhdGlvblN0YXRlbWVudDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KG5vZGU6IEV4cHJlc3Npb25TdGF0ZW1lbnQpOiBFeHByZXNzaW9uU3RhdGVtZW50IHtcclxuICAgIG5vZGUuZXhwcmVzc2lvbiA9IHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IEZpZWxkRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS50eXBlID0gdGhpcy52aXNpdChub2RlLnR5cGUpIGFzIFR5cGVOb2RlO1xyXG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZvclN0YXRlbWVudChub2RlOiBGb3JTdGF0ZW1lbnQpOiBGb3JTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgU3RhdGVtZW50O1xyXG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5pbmNyZW1lbnRvciA9IHRoaXMudmlzaXQobm9kZS5pbmNyZW1lbnRvcikgYXMgRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuc3RhdGVtZW50ID0gdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCkgYXMgU3RhdGVtZW50O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uLFxyXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcclxuICApOiBGdW5jdGlvbkRlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS50eXBlUGFyYW1ldGVycyA9IHRoaXMudmlzaXQoXHJcbiAgICAgIG5vZGUudHlwZVBhcmFtZXRlcnNcclxuICAgICkgYXMgVHlwZVBhcmFtZXRlck5vZGVbXTtcclxuICAgIG5vZGUuc2lnbmF0dXJlID0gdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSkgYXMgRnVuY3Rpb25UeXBlTm9kZTtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUuYm9keSA9IHRoaXMudmlzaXQobm9kZS5ib2R5KSBhcyBTdGF0ZW1lbnQ7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiBJZlN0YXRlbWVudCB7XHJcbiAgICBub2RlLmNvbmRpdGlvbiA9IHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pIGFzIEV4cHJlc3Npb247XHJcbiAgICBub2RlLmlmVHJ1ZSA9IHRoaXMudmlzaXQobm9kZS5pZlRydWUpIGFzIFN0YXRlbWVudDtcclxuICAgIG5vZGUuaWZGYWxzZSA9IHRoaXMudmlzaXQobm9kZS5pZkZhbHNlKSBhcyBTdGF0ZW1lbnQgfCBudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEltcG9ydERlY2xhcmF0aW9uKG5vZGU6IEltcG9ydERlY2xhcmF0aW9uKTogSW1wb3J0RGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5mb3JlaWduTmFtZSA9IHRoaXMudmlzaXQobm9kZS5mb3JlaWduTmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogSW1wb3J0U3RhdGVtZW50IHtcclxuICAgIG5vZGUubmFtZXNwYWNlTmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lc3BhY2VOYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XHJcbiAgICBub2RlLmRlY2xhcmF0aW9ucyA9IHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbnMpIGFzIEltcG9ydERlY2xhcmF0aW9uW10gfCBudWxsO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdEluZGV4U2lnbmF0dXJlKG5vZGU6IEluZGV4U2lnbmF0dXJlTm9kZSk6IEluZGV4U2lnbmF0dXJlTm9kZSB7XHJcbiAgICBub2RlLmtleVR5cGUgPSB0aGlzLnZpc2l0KG5vZGUua2V5VHlwZSkgYXMgTmFtZWRUeXBlTm9kZTtcclxuICAgIG5vZGUudmFsdWVUeXBlID0gdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXHJcbiAgKTogSW50ZXJmYWNlRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKSBhcyBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuaW1wbGVtZW50c1R5cGVzID0gdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcykgYXMgTmFtZWRUeXBlTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuZXh0ZW5kc1R5cGUgPSB0aGlzLnZpc2l0KG5vZGUuZXh0ZW5kc1R5cGUpIGFzIE5hbWVkVHlwZU5vZGUgfCBudWxsO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIERlY2xhcmF0aW9uU3RhdGVtZW50W107XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiBNZXRob2REZWNsYXJhdGlvbiB7XHJcbiAgICBub2RlLm5hbWUgPSB0aGlzLnZpc2l0KG5vZGUubmFtZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb247XHJcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKWFzIFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS5zaWduYXR1cmUgPSB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKSBhcyBGdW5jdGlvblR5cGVOb2RlO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICB0aGlzLmRlcHRoKys7XHJcbiAgICBub2RlLmJvZHkgPSB0aGlzLnZpc2l0KG5vZGUuYm9keSkgYXMgU3RhdGVtZW50fCBudWxsO1xyXG4gICAgdGhpcy5kZXB0aC0tO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxyXG4gICk6IE5hbWVzcGFjZURlY2xhcmF0aW9uIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuZGVjb3JhdG9ycyA9IHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKSBhcyBEZWNvcmF0b3JOb2RlW10gfCBudWxsO1xyXG4gICAgbm9kZS5tZW1iZXJzID0gdGhpcy52aXNpdChub2RlLm1lbWJlcnMpIGFzIFN0YXRlbWVudFtdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFJldHVyblN0YXRlbWVudChub2RlOiBSZXR1cm5TdGF0ZW1lbnQpOiBSZXR1cm5TdGF0ZW1lbnQge1xyXG4gICAgbm9kZS52YWx1ZSA9IHRoaXMudmlzaXQobm9kZS52YWx1ZSkgYXMgRXhwcmVzc2lvbiAgfG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogU3dpdGNoQ2FzZSB7XHJcbiAgICBub2RlLmxhYmVsID0gdGhpcy52aXNpdChub2RlLmxhYmVsKSBhcyBFeHByZXNzaW9uICB8bnVsbDtcclxuICAgIG5vZGUuc3RhdGVtZW50cyA9IHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRTd2l0Y2hTdGF0ZW1lbnQobm9kZTogU3dpdGNoU3RhdGVtZW50KTogU3dpdGNoU3RhdGVtZW50IHtcclxuICAgIG5vZGUuY29uZGl0aW9uID0gdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbikgYXMgRXhwcmVzc2lvbjtcclxuICAgIHRoaXMuZGVwdGgrKztcclxuICAgIG5vZGUuY2FzZXMgPSB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpIGFzIFN3aXRjaENhc2VbXTtcclxuICAgIHRoaXMuZGVwdGgtLTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IFRocm93U3RhdGVtZW50IHtcclxuICAgIG5vZGUudmFsdWUgPSB0aGlzLnZpc2l0KG5vZGUudmFsdWUpIGFzIEV4cHJlc3Npb247XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHJ5U3RhdGVtZW50KG5vZGU6IFRyeVN0YXRlbWVudCk6IFRyeVN0YXRlbWVudCB7XHJcbiAgICBub2RlLnN0YXRlbWVudHMgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50cykgYXMgU3RhdGVtZW50W107XHJcbiAgICBub2RlLmNhdGNoVmFyaWFibGUgPSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hWYXJpYWJsZSkgYXMgSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xyXG4gICAgbm9kZS5jYXRjaFN0YXRlbWVudHMgPSB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hTdGF0ZW1lbnRzKSBhcyBTdGF0ZW1lbnRbXTtcclxuICAgIG5vZGUuZmluYWxseVN0YXRlbWVudHMgPSB0aGlzLnZpc2l0KFxyXG4gICAgICBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzXHJcbiAgICApIGFzIFN0YXRlbWVudFtdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiBUeXBlRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGU7XHJcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVyc1xyXG4gICAgKSBhcyBUeXBlUGFyYW1ldGVyTm9kZVtdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IFZhcmlhYmxlRGVjbGFyYXRpb24ge1xyXG4gICAgbm9kZS5uYW1lID0gdGhpcy52aXNpdChub2RlLm5hbWUpIGFzIElkZW50aWZpZXJFeHByZXNzaW9uO1xyXG4gICAgbm9kZS5kZWNvcmF0b3JzID0gdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpIGFzIERlY29yYXRvck5vZGVbXSB8IG51bGw7XHJcbiAgICBub2RlLnR5cGUgPSB0aGlzLnZpc2l0KG5vZGUudHlwZSkgYXMgVHlwZU5vZGUgfCBudWxsO1xyXG4gICAgbm9kZS5pbml0aWFsaXplciA9IHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcikgYXMgRXhwcmVzc2lvbiB8IG51bGw7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiBWYXJpYWJsZVN0YXRlbWVudCB7XHJcbiAgICBub2RlLmRlY29yYXRvcnMgPSB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycykgYXMgRGVjb3JhdG9yTm9kZVtdIHwgbnVsbDtcclxuICAgIG5vZGUuZGVjbGFyYXRpb25zID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5kZWNsYXJhdGlvbnNcclxuICAgICkgYXMgVmFyaWFibGVEZWNsYXJhdGlvbltdO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICB2aXNpdFdoaWxlU3RhdGVtZW50KG5vZGU6IFdoaWxlU3RhdGVtZW50KTogV2hpbGVTdGF0ZW1lbnQge1xyXG4gICAgbm9kZS5jb25kaXRpb24gPSB0aGlzLnZpc2l0KG5vZGUuY29uZGl0aW9uKSBhcyBFeHByZXNzaW9uO1xyXG4gICAgdGhpcy5kZXB0aCsrO1xyXG4gICAgbm9kZS5zdGF0ZW1lbnQgPSB0aGlzLnZpc2l0KG5vZGUuc3RhdGVtZW50KSBhcyBTdGF0ZW1lbnQ7XHJcbiAgICB0aGlzLmRlcHRoLS07XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogVm9pZFN0YXRlbWVudCB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0Q29tbWVudChub2RlOiBDb21tZW50Tm9kZSk6IENvbW1lbnROb2RlIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXREZWNvcmF0b3JOb2RlKG5vZGU6IERlY29yYXRvck5vZGUpOiBEZWNvcmF0b3JOb2RlIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuYXJncyA9IHRoaXMudmlzaXQobm9kZS5hcmdzKSBhcyBFeHByZXNzaW9uW107XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIHZpc2l0UGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiBQYXJhbWV0ZXJOb2RlIHtcclxuICAgIG5vZGUubmFtZSA9IHRoaXMudmlzaXQobm9kZS5uYW1lKSBhcyBJZGVudGlmaWVyRXhwcmVzc2lvbjtcclxuICAgIG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uID0gdGhpcy52aXNpdChcclxuICAgICAgbm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb25cclxuICAgICkgYXMgRmllbGREZWNsYXJhdGlvbiB8IG51bGw7XHJcbiAgICBub2RlLmluaXRpYWxpemVyID0gdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKSBhcyBFeHByZXNzaW9uIHwgbnVsbDtcclxuICAgIG5vZGUudHlwZSA9IHRoaXMudmlzaXQobm9kZS50eXBlKSBhcyBUeXBlTm9kZTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxufVxyXG4iXX0=