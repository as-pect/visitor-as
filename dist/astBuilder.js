"use strict";
// tslint:disable: as-internal-case
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTBuilder = void 0;
const as_1 = require("../as");
const base_1 = require("./base");
const utils_1 = require("./utils");
// declare function i64_to_string(i: I64): string;
// import { i64_to_string } from "../../../src/glue/i64"
/** An AST builder. */
class ASTBuilder extends base_1.BaseVisitor {
    _visit(node) {
        this.visitNode(node);
    }
    /** Rebuilds the textual source from the specified AST, as far as possible. */
    static build(node) {
        var builder = new ASTBuilder();
        builder.visitNode(node);
        return builder.finish();
    }
    sb = [];
    indentLevel = 0;
    visitNode(node) {
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
            case as_1.NodeKind.FOROF: {
                this.visitForOfStatement(node);
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
                this.serializeDecorator(node);
                break;
            }
            case as_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case as_1.NodeKind.PARAMETER: {
                this.serializeParameter(node);
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
                assert(false, node.kind.toString());
        }
    }
    visitSource(source) {
        var statements = source.statements;
        for (let i = 0, k = statements.length; i < k; ++i) {
            this.visitNodeAndTerminate(statements[i]);
        }
    }
    // types
    visitTypeNode(node) {
        switch (node.kind) {
            case as_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case as_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            default:
                assert(false);
        }
    }
    visitTypeName(node) {
        this.visitIdentifierExpression(node.identifier);
        var sb = this.sb;
        var current = node.next;
        while (current) {
            sb.push(".");
            this.visitIdentifierExpression(current.identifier);
            current = current.next;
        }
    }
    visitNamedTypeNode(node) {
        this.visitTypeName(node.name);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            let numTypeArguments = typeArguments.length;
            let sb = this.sb;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (let i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">");
            }
            if (node.isNullable)
                sb.push(" | null");
        }
    }
    visitFunctionTypeNode(node) {
        var isNullable = node.isNullable;
        var sb = this.sb;
        sb.push(isNullable ? "((" : "(");
        var explicitThisType = node.explicitThisType;
        if (explicitThisType) {
            sb.push("this: ");
            this.visitTypeNode(explicitThisType);
        }
        var parameters = node.parameters;
        var numParameters = parameters.length;
        if (numParameters) {
            if (explicitThisType)
                sb.push(", ");
            this.serializeParameter(parameters[0]);
            for (let i = 1; i < numParameters; ++i) {
                sb.push(", ");
                this.serializeParameter(parameters[i]);
            }
        }
        var returnType = node.returnType;
        if (returnType) {
            sb.push(") => ");
            this.visitTypeNode(returnType);
        }
        else {
            sb.push(") => void");
        }
        if (isNullable)
            sb.push(") | null");
    }
    visitTypeParameter(node) {
        this.visitIdentifierExpression(node.name);
        var extendsType = node.extendsType;
        if (extendsType) {
            this.sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var defaultType = node.defaultType;
        if (defaultType) {
            this.sb.push("=");
            this.visitTypeNode(defaultType);
        }
    }
    // expressions
    visitIdentifierExpression(node) {
        if (node.isQuoted)
            this.visitStringLiteral(node.text);
        else
            this.sb.push(node.text);
    }
    visitArrayLiteralExpression(node) {
        var sb = this.sb;
        sb.push("[");
        var elements = node.elementExpressions;
        var numElements = elements.length;
        if (numElements) {
            let element = elements[0];
            if (element)
                this.visitNode(element);
            for (let i = 1; i < numElements; ++i) {
                element = elements[i];
                sb.push(", ");
                if (element)
                    this.visitNode(element);
            }
        }
        sb.push("]");
    }
    visitObjectLiteralExpression(node) {
        var sb = this.sb;
        var names = node.names;
        var values = node.values;
        var numElements = names.length;
        assert(numElements == values.length);
        if (numElements) {
            sb.push("{\n");
            utils_1.indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (let i = 1; i < numElements; ++i) {
                sb.push(",\n");
                utils_1.indent(sb, this.indentLevel);
                let name = names[i];
                let value = values[i];
                if (name === value) {
                    this.visitNode(name);
                }
                else {
                    this.visitNode(name);
                    sb.push(": ");
                    this.visitNode(value);
                }
            }
            sb.push("\n");
            utils_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    }
    visitAssertionExpression(node) {
        var sb = this.sb;
        switch (node.assertionKind) {
            case as_1.AssertionKind.PREFIX: {
                sb.push("<");
                this.visitTypeNode(assert(node.toType));
                sb.push(">");
                this.visitNode(node.expression);
                break;
            }
            case as_1.AssertionKind.AS: {
                this.visitNode(node.expression);
                sb.push(" as ");
                this.visitTypeNode(assert(node.toType));
                break;
            }
            case as_1.AssertionKind.NONNULL: {
                this.visitNode(node.expression);
                sb.push("!");
                break;
            }
            case as_1.AssertionKind.CONST: {
                this.visitNode(node.expression);
                sb.push(" as const");
                break;
            }
            default:
                assert(false);
        }
    }
    visitBinaryExpression(node) {
        var sb = this.sb;
        this.visitNode(node.left);
        sb.push(" ");
        sb.push(as_1.operatorTokenToString(node.operator));
        sb.push(" ");
        this.visitNode(node.right);
    }
    visitCallExpression(node) {
        this.visitNode(node.expression);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitArguments(typeArguments, args) {
        var sb = this.sb;
        if (typeArguments) {
            let numTypeArguments = typeArguments.length;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (let i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">(");
            }
        }
        else {
            sb.push("(");
        }
        var numArgs = args.length;
        if (numArgs) {
            this.visitNode(args[0]);
            for (let i = 1; i < numArgs; ++i) {
                sb.push(", ");
                this.visitNode(args[i]);
            }
        }
        sb.push(")");
    }
    visitClassExpression(node) {
        var declaration = node.declaration;
        this.visitClassDeclaration(declaration);
    }
    visitCommaExpression(node) {
        var expressions = node.expressions;
        var numExpressions = assert(expressions.length);
        this.visitNode(expressions[0]);
        var sb = this.sb;
        for (let i = 1; i < numExpressions; ++i) {
            sb.push(",");
            this.visitNode(expressions[i]);
        }
    }
    visitElementAccessExpression(node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        sb.push("[");
        this.visitNode(node.elementExpression);
        sb.push("]");
    }
    visitFunctionExpression(node) {
        var declaration = node.declaration;
        if (!declaration.arrowKind) {
            if (declaration.name.text.length) {
                this.sb.push("function ");
            }
            else {
                this.sb.push("function");
            }
        }
        else {
            assert(declaration.name.text.length == 0);
        }
        this.visitFunctionCommon(declaration);
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
            default: {
                assert(false);
                break;
            }
        }
    }
    visitFloatLiteralExpression(node) {
        this.sb.push(node.value.toString());
    }
    visitInstanceOfExpression(node) {
        this.visitNode(node.expression);
        this.sb.push(" instanceof ");
        this.visitTypeNode(node.isType);
    }
    visitIntegerLiteralExpression(node) {
        this.sb.push(i64_to_string(node.value));
    }
    visitStringLiteral(str) {
        var sb = this.sb;
        sb.push('"');
        this.visitRawString(str, 34 /* DOUBLEQUOTE */);
        sb.push('"');
    }
    visitRawString(str, quote) {
        var sb = this.sb;
        var off = 0;
        var i = 0;
        for (let k = str.length; i < k;) {
            switch (str.charCodeAt(i)) {
                case 0 /* NULL */: {
                    if (i > off)
                        sb.push(str.substring(off, (off = i + 1)));
                    sb.push("\\0");
                    off = ++i;
                    break;
                }
                case 8 /* BACKSPACE */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\b");
                    break;
                }
                case 9 /* TAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\t");
                    break;
                }
                case 10 /* LINEFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\n");
                    break;
                }
                case 11 /* VERTICALTAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\v");
                    break;
                }
                case 12 /* FORMFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\f");
                    break;
                }
                case 13 /* CARRIAGERETURN */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\r");
                    off = ++i;
                    break;
                }
                case 34 /* DOUBLEQUOTE */: {
                    if (quote == 34 /* DOUBLEQUOTE */) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push('\\"');
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 39 /* SINGLEQUOTE */: {
                    if (quote == 39 /* SINGLEQUOTE */) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\'");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 92 /* BACKSLASH */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\\\");
                    off = ++i;
                    break;
                }
                case 96 /* BACKTICK */: {
                    if (quote == 96 /* BACKTICK */) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\`");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                default: {
                    ++i;
                    break;
                }
            }
        }
        if (i > off)
            sb.push(str.substring(off, i));
    }
    visitStringLiteralExpression(node) {
        this.visitStringLiteral(node.value);
    }
    visitTemplateLiteralExpression(node) {
        var sb = this.sb;
        var tag = node.tag;
        var parts = node.parts;
        var expressions = node.expressions;
        if (tag)
            this.visitNode(tag);
        sb.push("`");
        this.visitRawString(parts[0], 96 /* BACKTICK */);
        assert(parts.length == expressions.length + 1);
        for (let i = 0, k = expressions.length; i < k; ++i) {
            sb.push("${");
            this.visitNode(expressions[i]);
            sb.push("}");
            this.visitRawString(parts[i + 1], 96 /* BACKTICK */);
        }
        sb.push("`");
    }
    visitRegexpLiteralExpression(node) {
        var sb = this.sb;
        sb.push("/");
        sb.push(node.pattern);
        sb.push("/");
        sb.push(node.patternFlags);
    }
    visitNewExpression(node) {
        this.sb.push("new ");
        this.visitTypeName(node.typeName);
        this.visitArguments(node.typeArguments, node.args);
    }
    visitParenthesizedExpression(node) {
        var sb = this.sb;
        sb.push("(");
        this.visitNode(node.expression);
        sb.push(")");
    }
    visitPropertyAccessExpression(node) {
        this.visitNode(node.expression);
        this.sb.push(".");
        this.visitIdentifierExpression(node.property);
    }
    visitTernaryExpression(node) {
        var sb = this.sb;
        this.visitNode(node.condition);
        sb.push(" ? ");
        this.visitNode(node.ifThen);
        sb.push(" : ");
        this.visitNode(node.ifElse);
    }
    visitUnaryExpression(node) {
        switch (node.kind) {
            case as_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case as_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            default:
                assert(false);
        }
    }
    visitUnaryPostfixExpression(node) {
        this.visitNode(node.operand);
        this.sb.push(as_1.operatorTokenToString(node.operator));
    }
    visitUnaryPrefixExpression(node) {
        this.sb.push(as_1.operatorTokenToString(node.operator));
        this.visitNode(node.operand);
    }
    // statements
    visitNodeAndTerminate(node) {
        this.visitNode(node);
        var sb = this.sb;
        if (!sb.length || // leading EmptyStatement
            node.kind == as_1.NodeKind.VARIABLE || // potentially assigns a FunctionExpression
            node.kind == as_1.NodeKind.EXPRESSION // potentially assigns a FunctionExpression
        ) {
            sb.push(";\n");
        }
        else {
            let last = sb[sb.length - 1];
            let lastCharPos = last.length - 1;
            if (lastCharPos >= 0 &&
                (last.charCodeAt(lastCharPos) == 125 /* CLOSEBRACE */ ||
                    last.charCodeAt(lastCharPos) == 59 /* SEMICOLON */)) {
                sb.push("\n");
            }
            else {
                sb.push(";\n");
            }
        }
    }
    visitBlockStatement(node) {
        var sb = this.sb;
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            sb.push("{\n");
            let indentLevel = ++this.indentLevel;
            for (let i = 0; i < numStatements; ++i) {
                utils_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            utils_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    }
    visitBreakStatement(node) {
        var label = node.label;
        if (label) {
            this.sb.push("break ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("break");
        }
    }
    visitContinueStatement(node) {
        var label = node.label;
        if (label) {
            this.sb.push("continue ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("continue");
        }
    }
    visitClassDeclaration(node, isDefault = false) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(as_1.CommonFlags.ABSTRACT))
            sb.push("abstract ");
        if (node.name.text.length) {
            sb.push("class ");
            this.visitIdentifierExpression(node.name);
        }
        else {
            sb.push("class");
        }
        var typeParameters = node.typeParameters;
        if (typeParameters != null && typeParameters.length > 0) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (let i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var implementsTypes = node.implementsTypes;
        if (implementsTypes) {
            let numImplementsTypes = implementsTypes.length;
            if (numImplementsTypes) {
                sb.push(" implements ");
                this.visitTypeNode(implementsTypes[0]);
                for (let i = 1; i < numImplementsTypes; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(implementsTypes[i]);
                }
            }
        }
        var indexSignature = node.indexSignature;
        var members = node.members;
        var numMembers = members.length;
        if (indexSignature !== null || numMembers) {
            sb.push(" {\n");
            let indentLevel = ++this.indentLevel;
            if (indexSignature) {
                utils_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(indexSignature);
            }
            for (let i = 0, k = members.length; i < k; ++i) {
                let member = members[i];
                if (member.kind != as_1.NodeKind.FIELDDECLARATION ||
                    member.parameterIndex < 0) {
                    utils_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            utils_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    }
    visitDoStatement(node) {
        var sb = this.sb;
        sb.push("do ");
        this.visitNode(node.statement);
        if (node.statement.kind == as_1.NodeKind.BLOCK) {
            sb.push(" while (");
        }
        else {
            utils_1.indent(sb, this.indentLevel);
            sb.push("while (");
        }
        this.visitNode(node.condition);
        sb.push(")");
    }
    visitEmptyStatement(node) {
        /* nop */
    }
    visitEnumDeclaration(node, isDefault = false) {
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(as_1.CommonFlags.CONST))
            sb.push("const ");
        sb.push("enum ");
        this.visitIdentifierExpression(node.name);
        var values = node.values;
        var numValues = values.length;
        if (numValues) {
            sb.push(" {\n");
            let indentLevel = ++this.indentLevel;
            utils_1.indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (let i = 1; i < numValues; ++i) {
                sb.push(",\n");
                utils_1.indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            utils_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    }
    visitEnumValueDeclaration(node) {
        this.visitIdentifierExpression(node.name);
        var initializer = node.initializer;
        if (initializer) {
            this.sb.push(" = ");
            this.visitNode(initializer);
        }
    }
    visitExportImportStatement(node) {
        var sb = this.sb;
        sb.push("export import ");
        this.visitIdentifierExpression(node.externalName);
        sb.push(" = ");
        this.visitIdentifierExpression(node.name);
    }
    visitExportMember(node) {
        this.visitIdentifierExpression(node.localName);
        if (node.exportedName.text != node.localName.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(node.exportedName);
        }
    }
    visitExportStatement(node) {
        var sb = this.sb;
        if (node.isDeclare) {
            sb.push("declare ");
        }
        var members = node.members;
        if (members != null && members.length > 0) {
            let numMembers = members.length;
            sb.push("export {\n");
            let indentLevel = ++this.indentLevel;
            utils_1.indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (let i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                utils_1.indent(sb, indentLevel);
                this.visitExportMember(members[i]);
            }
            --this.indentLevel;
            sb.push("\n}");
        }
        else {
            sb.push("export {}");
        }
        var path = node.path;
        if (path) {
            sb.push(" from ");
            this.visitStringLiteralExpression(path);
        }
        sb.push(";");
    }
    visitExportDefaultStatement(node) {
        var declaration = node.declaration;
        switch (declaration.kind) {
            case as_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(declaration, true);
                break;
            }
            case as_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(declaration, true);
                break;
            }
            case as_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(declaration, true);
                break;
            }
            case as_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(declaration, true);
                break;
            }
            case as_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(declaration, true);
                break;
            }
            default:
                assert(false);
        }
    }
    visitExpressionStatement(node) {
        this.visitNode(node.expression);
    }
    visitFieldDeclaration(node) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        this.visitIdentifierExpression(node.name);
        var sb = this.sb;
        if (node.flags & as_1.CommonFlags.DEFINITELY_ASSIGNED) {
            sb.push("!");
        }
        var type = node.type;
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    }
    visitForStatement(node) {
        var sb = this.sb;
        sb.push("for (");
        var initializer = node.initializer;
        if (initializer) {
            this.visitNode(initializer);
        }
        var condition = node.condition;
        if (condition) {
            sb.push("; ");
            this.visitNode(condition);
        }
        else {
            sb.push(";");
        }
        var incrementor = node.incrementor;
        if (incrementor) {
            sb.push("; ");
            this.visitNode(incrementor);
        }
        else {
            sb.push(";");
        }
        sb.push(") ");
        this.visitNode(node.statement);
    }
    visitForOfStatement(node) {
        var sb = this.sb;
        sb.push("for (");
        this.visitNode(node.variable);
        sb.push(" of ");
        this.visitNode(node.iterable);
        sb.push(") ");
        this.visitNode(node.statement);
    }
    visitFunctionDeclaration(node, isDefault = false) {
        var sb = this.sb;
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
            this.serializeAccessModifiers(node);
        }
        if (node.name.text.length) {
            sb.push("function ");
        }
        else {
            sb.push("function");
        }
        this.visitFunctionCommon(node);
    }
    visitFunctionCommon(node) {
        var sb = this.sb;
        this.visitIdentifierExpression(node.name);
        var signature = node.signature;
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            let numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                this.visitTypeParameter(typeParameters[0]);
                for (let i = 1; i < numTypeParameters; ++i) {
                    sb.push(", ");
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        if (node.arrowKind == 2 /* ARROW_SINGLE */) {
            let parameters = signature.parameters;
            assert(parameters.length == 1);
            assert(!signature.explicitThisType);
            this.serializeParameter(parameters[0]);
        }
        else {
            sb.push("(");
            let parameters = signature.parameters;
            let numParameters = parameters.length;
            let explicitThisType = signature.explicitThisType;
            if (explicitThisType) {
                sb.push("this: ");
                this.visitTypeNode(explicitThisType);
            }
            if (numParameters) {
                if (explicitThisType)
                    sb.push(", ");
                this.serializeParameter(parameters[0]);
                for (let i = 1; i < numParameters; ++i) {
                    sb.push(", ");
                    this.serializeParameter(parameters[i]);
                }
            }
        }
        var body = node.body;
        var returnType = signature.returnType;
        if (node.arrowKind) {
            if (body) {
                if (node.arrowKind == 2 /* ARROW_SINGLE */) {
                    assert(as_1.isTypeOmitted(returnType));
                }
                else {
                    if (as_1.isTypeOmitted(returnType)) {
                        sb.push(")");
                    }
                    else {
                        sb.push("): ");
                        this.visitTypeNode(returnType);
                    }
                }
                sb.push(" => ");
                this.visitNode(body);
            }
            else {
                assert(!as_1.isTypeOmitted(returnType));
                sb.push(" => ");
                this.visitTypeNode(returnType);
            }
        }
        else {
            if (!as_1.isTypeOmitted(returnType) &&
                !node.isAny(as_1.CommonFlags.CONSTRUCTOR | as_1.CommonFlags.SET)) {
                sb.push("): ");
                this.visitTypeNode(returnType);
            }
            else {
                sb.push(")");
            }
            if (body) {
                sb.push(" ");
                this.visitNode(body);
            }
        }
    }
    visitIfStatement(node) {
        var sb = this.sb;
        sb.push("if (");
        this.visitNode(node.condition);
        sb.push(") ");
        var ifTrue = node.ifTrue;
        this.visitNode(ifTrue);
        if (ifTrue.kind != as_1.NodeKind.BLOCK) {
            sb.push(";\n");
        }
        var ifFalse = node.ifFalse;
        if (ifFalse) {
            if (ifTrue.kind == as_1.NodeKind.BLOCK) {
                sb.push(" else ");
            }
            else {
                sb.push("else ");
            }
            this.visitNode(ifFalse);
        }
    }
    visitImportDeclaration(node) {
        var externalName = node.foreignName;
        var name = node.name;
        this.visitIdentifierExpression(externalName);
        if (externalName.text != name.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(name);
        }
    }
    visitImportStatement(node) {
        var sb = this.sb;
        sb.push("import ");
        var declarations = node.declarations;
        var namespaceName = node.namespaceName;
        if (declarations) {
            let numDeclarations = declarations.length;
            if (numDeclarations) {
                sb.push("{\n");
                let indentLevel = ++this.indentLevel;
                utils_1.indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (let i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    utils_1.indent(sb, indentLevel);
                    this.visitImportDeclaration(declarations[i]);
                }
                --this.indentLevel;
                sb.push("\n} from ");
            }
            else {
                sb.push("{} from ");
            }
        }
        else if (namespaceName) {
            sb.push("* as ");
            this.visitIdentifierExpression(namespaceName);
            sb.push(" from ");
        }
        this.visitStringLiteralExpression(node.path);
    }
    visitIndexSignature(node) {
        var sb = this.sb;
        sb.push("[key: ");
        this.visitTypeNode(node.keyType);
        sb.push("]: ");
        this.visitTypeNode(node.valueType);
    }
    visitInterfaceDeclaration(node, isDefault = false) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("interface ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters != null && typeParameters.length > 0) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (let i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        // must not have implementsTypes
        sb.push(" {\n");
        var indentLevel = ++this.indentLevel;
        var members = node.members;
        for (let i = 0, k = members.length; i < k; ++i) {
            utils_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(members[i]);
        }
        --this.indentLevel;
        sb.push("}");
    }
    visitMethodDeclaration(node) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        if (node.is(as_1.CommonFlags.GET)) {
            this.sb.push("get ");
        }
        else if (node.is(as_1.CommonFlags.SET)) {
            this.sb.push("set ");
        }
        this.visitFunctionCommon(node);
    }
    visitNamespaceDeclaration(node, isDefault = false) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("namespace ");
        this.visitIdentifierExpression(node.name);
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            let indentLevel = ++this.indentLevel;
            for (let i = 0, k = members.length; i < k; ++i) {
                utils_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            utils_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    }
    visitReturnStatement(node) {
        var value = node.value;
        if (value) {
            this.sb.push("return ");
            this.visitNode(value);
        }
        else {
            this.sb.push("return");
        }
    }
    visitSwitchCase(node) {
        var sb = this.sb;
        var label = node.label;
        if (label) {
            sb.push("case ");
            this.visitNode(label);
            sb.push(":\n");
        }
        else {
            sb.push("default:\n");
        }
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            let indentLevel = ++this.indentLevel;
            utils_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (let i = 1; i < numStatements; ++i) {
                utils_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            --this.indentLevel;
        }
    }
    visitSwitchStatement(node) {
        var sb = this.sb;
        sb.push("switch (");
        this.visitNode(node.condition);
        sb.push(") {\n");
        var indentLevel = ++this.indentLevel;
        var cases = node.cases;
        for (let i = 0, k = cases.length; i < k; ++i) {
            utils_1.indent(sb, indentLevel);
            this.visitSwitchCase(cases[i]);
            sb.push("\n");
        }
        --this.indentLevel;
        sb.push("}");
    }
    visitThrowStatement(node) {
        this.sb.push("throw ");
        this.visitNode(node.value);
    }
    visitTryStatement(node) {
        var sb = this.sb;
        sb.push("try {\n");
        var indentLevel = ++this.indentLevel;
        var statements = node.statements;
        for (let i = 0, k = statements.length; i < k; ++i) {
            utils_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            utils_1.indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            let catchStatements = node.catchStatements;
            if (catchStatements) {
                for (let i = 0, k = catchStatements.length; i < k; ++i) {
                    utils_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            utils_1.indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (let i = 0, k = finallyStatements.length; i < k; ++i) {
                utils_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        utils_1.indent(sb, indentLevel - 1);
        sb.push("}");
    }
    visitTypeDeclaration(node) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        this.serializeExternalModifiers(node);
        sb.push("type ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            let numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                for (let i = 0; i < numTypeParameters; ++i) {
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        sb.push(" = ");
        this.visitTypeNode(node.type);
    }
    visitVariableDeclaration(node) {
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var sb = this.sb;
        if (node.flags & as_1.CommonFlags.DEFINITELY_ASSIGNED) {
            sb.push("!");
        }
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    }
    visitVariableStatement(node) {
        var decorators = node.decorators;
        if (decorators) {
            for (let i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        var declarations = node.declarations;
        var numDeclarations = assert(declarations.length);
        var firstDeclaration = declarations[0];
        this.serializeExternalModifiers(firstDeclaration);
        sb.push(firstDeclaration.is(as_1.CommonFlags.CONST)
            ? "const "
            : firstDeclaration.is(as_1.CommonFlags.LET)
                ? "let "
                : "var ");
        this.visitVariableDeclaration(node.declarations[0]);
        for (let i = 1; i < numDeclarations; ++i) {
            sb.push(", ");
            this.visitVariableDeclaration(node.declarations[i]);
        }
    }
    visitWhileStatement(node) {
        var sb = this.sb;
        sb.push("while (");
        this.visitNode(node.condition);
        var statement = node.statement;
        if (statement.kind == as_1.NodeKind.EMPTY) {
            sb.push(")");
        }
        else {
            sb.push(") ");
            this.visitNode(node.statement);
        }
    }
    // other
    serializeDecorator(node) {
        var sb = this.sb;
        sb.push("@");
        this.visitNode(node.name);
        var args = node.args;
        if (args) {
            sb.push("(");
            let numArgs = args.length;
            if (numArgs) {
                this.visitNode(args[0]);
                for (let i = 1; i < numArgs; ++i) {
                    sb.push(", ");
                    this.visitNode(args[i]);
                }
            }
            sb.push(")\n");
        }
        else {
            sb.push("\n");
        }
        utils_1.indent(sb, this.indentLevel);
    }
    serializeParameter(node) {
        var sb = this.sb;
        var kind = node.parameterKind;
        var implicitFieldDeclaration = node.implicitFieldDeclaration;
        if (implicitFieldDeclaration) {
            this.serializeAccessModifiers(implicitFieldDeclaration);
        }
        if (kind == as_1.ParameterKind.REST) {
            sb.push("...");
        }
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var initializer = node.initializer;
        if (type) {
            if (kind == as_1.ParameterKind.OPTIONAL && !initializer)
                sb.push("?");
            if (!as_1.isTypeOmitted(type)) {
                sb.push(": ");
                this.visitTypeNode(type);
            }
        }
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    }
    serializeExternalModifiers(node) {
        var sb = this.sb;
        if (node.is(as_1.CommonFlags.EXPORT)) {
            sb.push("export ");
        }
        else if (node.is(as_1.CommonFlags.IMPORT)) {
            sb.push("import ");
        }
        else if (node.is(as_1.CommonFlags.DECLARE)) {
            sb.push("declare ");
        }
    }
    serializeAccessModifiers(node) {
        var sb = this.sb;
        if (node.is(as_1.CommonFlags.PUBLIC)) {
            sb.push("public ");
        }
        else if (node.is(as_1.CommonFlags.PRIVATE)) {
            sb.push("private ");
        }
        else if (node.is(as_1.CommonFlags.PROTECTED)) {
            sb.push("protected ");
        }
        if (node.is(as_1.CommonFlags.STATIC)) {
            sb.push("static ");
        }
        else if (node.is(as_1.CommonFlags.ABSTRACT)) {
            sb.push("abstract ");
        }
        if (node.is(as_1.CommonFlags.READONLY)) {
            sb.push("readonly ");
        }
    }
    finish() {
        var ret = this.sb.join("");
        this.sb = [];
        return ret;
    }
}
exports.ASTBuilder = ASTBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3RCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7OztBQUVuQyw4QkE4RWU7QUFDZixpQ0FBcUM7QUFDckMsbUNBQWlDO0FBRWpDLGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFFeEQsc0JBQXNCO0FBQ3RCLE1BQWEsVUFBVyxTQUFRLGtCQUFXO0lBQ3pDLE1BQU0sQ0FBQyxJQUFVO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsOEVBQThFO0lBQzlFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBVTtRQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLEVBQUUsR0FBYSxFQUFFLENBQUM7SUFDbEIsV0FBVyxHQUFRLENBQUMsQ0FBQztJQUU3QixTQUFTLENBQUMsSUFBVTtRQUNsQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxhQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssYUFBUSxDQUFDLGFBQWEs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QXRsREQsZ0NBc2xEQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBhcy1pbnRlcm5hbC1jYXNlXG5cbmltcG9ydCB7XG4gIENvbW1vbkZsYWdzLFxuICBUeXBlTm9kZSxcbiAgTm9kZSxcbiAgTm9kZUtpbmQsXG4gIFNvdXJjZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgQ2xhc3NFeHByZXNzaW9uLFxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxuICBJbnN0YW5jZU9mRXhwcmVzc2lvbixcbiAgTGl0ZXJhbEV4cHJlc3Npb24sXG4gIE5ld0V4cHJlc3Npb24sXG4gIFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxuICBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXG4gIFRlcm5hcnlFeHByZXNzaW9uLFxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXG4gIEJsb2NrU3RhdGVtZW50LFxuICBCcmVha1N0YXRlbWVudCxcbiAgQ29udGludWVTdGF0ZW1lbnQsXG4gIERvU3RhdGVtZW50LFxuICBFbXB0eVN0YXRlbWVudCxcbiAgRXhwb3J0U3RhdGVtZW50LFxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXG4gIEV4cHJlc3Npb25TdGF0ZW1lbnQsXG4gIEZvclN0YXRlbWVudCxcbiAgSWZTdGF0ZW1lbnQsXG4gIEltcG9ydFN0YXRlbWVudCxcbiAgUmV0dXJuU3RhdGVtZW50LFxuICBTd2l0Y2hTdGF0ZW1lbnQsXG4gIFRocm93U3RhdGVtZW50LFxuICBUcnlTdGF0ZW1lbnQsXG4gIFZhcmlhYmxlU3RhdGVtZW50LFxuICBXaGlsZVN0YXRlbWVudCxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRW51bURlY2xhcmF0aW9uLFxuICBFbnVtVmFsdWVEZWNsYXJhdGlvbixcbiAgRmllbGREZWNsYXJhdGlvbixcbiAgRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgSW1wb3J0RGVjbGFyYXRpb24sXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxuICBNZXRob2REZWNsYXJhdGlvbixcbiAgTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gIFR5cGVEZWNsYXJhdGlvbixcbiAgVmFyaWFibGVEZWNsYXJhdGlvbixcbiAgRGVjb3JhdG9yTm9kZSxcbiAgRXhwb3J0TWVtYmVyLFxuICBQYXJhbWV0ZXJOb2RlLFxuICBTd2l0Y2hDYXNlLFxuICBUeXBlTmFtZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEFzc2VydGlvbktpbmQsXG4gIExpdGVyYWxLaW5kLFxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxuICBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbiAgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFVuYXJ5RXhwcmVzc2lvbixcbiAgQXJyb3dLaW5kLFxuICBQYXJhbWV0ZXJLaW5kLFxuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcbiAgQmluYXJ5RXhwcmVzc2lvbixcbiAgQ29tbWFFeHByZXNzaW9uLFxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXG4gIGlzVHlwZU9taXR0ZWQsXG4gIG9wZXJhdG9yVG9rZW5Ub1N0cmluZyxcbiAgRm9yT2ZTdGF0ZW1lbnQsXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcbiAgVGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbixcbiAgdXRpbCxcbn0gZnJvbSBcIi4uL2FzXCI7XG5pbXBvcnQgeyBCYXNlVmlzaXRvciB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IGluZGVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbi8vIGRlY2xhcmUgZnVuY3Rpb24gaTY0X3RvX3N0cmluZyhpOiBJNjQpOiBzdHJpbmc7XG4vLyBpbXBvcnQgeyBpNjRfdG9fc3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9nbHVlL2k2NFwiXG5cbi8qKiBBbiBBU1QgYnVpbGRlci4gKi9cbmV4cG9ydCBjbGFzcyBBU1RCdWlsZGVyIGV4dGVuZHMgQmFzZVZpc2l0b3Ige1xuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUpO1xuICB9XG4gIC8qKiBSZWJ1aWxkcyB0aGUgdGV4dHVhbCBzb3VyY2UgZnJvbSB0aGUgc3BlY2lmaWVkIEFTVCwgYXMgZmFyIGFzIHBvc3NpYmxlLiAqL1xuICBzdGF0aWMgYnVpbGQobm9kZTogTm9kZSk6IHN0cmluZyB7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgQVNUQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIudmlzaXROb2RlKG5vZGUpO1xuICAgIHJldHVybiBidWlsZGVyLmZpbmlzaCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbmRlbnRMZXZlbDogaTMyID0gMDtcblxuICB2aXNpdE5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xuICAgICAgICB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0eXBlc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIoPFR5cGVQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbig8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbig8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHRoaXMudmlzaXRMaXRlcmFsRXhwcmVzc2lvbig8TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgdGhpcy52aXNpdE5ld0V4cHJlc3Npb24oPE5ld0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbig8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUk9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JPZlN0YXRlbWVudCg8Rm9yT2ZTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRToge1xuICAgICAgICB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmUoPEluZGV4U2lnbmF0dXJlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnQoZmFsc2UsIG5vZGUua2luZC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IHZvaWQge1xuICAgIHZhciBzdGF0ZW1lbnRzID0gc291cmNlLnN0YXRlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZXNcblxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lZFR5cGVOb2RlKDxOYW1lZFR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvblR5cGVOb2RlKDxGdW5jdGlvblR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUeXBlTmFtZShub2RlOiBUeXBlTmFtZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmlkZW50aWZpZXIpO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGN1cnJlbnQgPSBub2RlLm5leHQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIHNiLnB1c2goXCIuXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGN1cnJlbnQuaWRlbnRpZmllcik7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdFR5cGVOYW1lKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGVBcmd1bWVudHMgPSBub2RlLnR5cGVBcmd1bWVudHM7XG4gICAgaWYgKHR5cGVBcmd1bWVudHMpIHtcbiAgICAgIGxldCBudW1UeXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBsZXQgc2IgPSB0aGlzLnNiO1xuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuaXNOdWxsYWJsZSkgc2IucHVzaChcIiB8IG51bGxcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGdW5jdGlvblR5cGVOb2RlKG5vZGU6IEZ1bmN0aW9uVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB2YXIgaXNOdWxsYWJsZSA9IG5vZGUuaXNOdWxsYWJsZTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goaXNOdWxsYWJsZSA/IFwiKChcIiA6IFwiKFwiKTtcbiAgICB2YXIgZXhwbGljaXRUaGlzVHlwZSA9IG5vZGUuZXhwbGljaXRUaGlzVHlwZTtcbiAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkge1xuICAgICAgc2IucHVzaChcInRoaXM6IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHBsaWNpdFRoaXNUeXBlKTtcbiAgICB9XG4gICAgdmFyIHBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnM7XG4gICAgdmFyIG51bVBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICBpZiAobnVtUGFyYW1ldGVycykge1xuICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1QYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJldHVyblR5cGUgPSBub2RlLnJldHVyblR5cGU7XG4gICAgaWYgKHJldHVyblR5cGUpIHtcbiAgICAgIHNiLnB1c2goXCIpID0+IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIikgPT4gdm9pZFwiKTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbGFibGUpIHNiLnB1c2goXCIpIHwgbnVsbFwiKTtcbiAgfVxuXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCIgZXh0ZW5kcyBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdFR5cGUgPSBub2RlLmRlZmF1bHRUeXBlO1xuICAgIGlmIChkZWZhdWx0VHlwZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiPVwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShkZWZhdWx0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwcmVzc2lvbnNcblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaXNRdW90ZWQpIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudGV4dCk7XG4gICAgZWxzZSB0aGlzLnNiLnB1c2gobm9kZS50ZXh0KTtcbiAgfVxuXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiW1wiKTtcbiAgICB2YXIgZWxlbWVudHMgPSBub2RlLmVsZW1lbnRFeHByZXNzaW9ucztcbiAgICB2YXIgbnVtRWxlbWVudHMgPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgaWYgKG51bUVsZW1lbnRzKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzWzBdO1xuICAgICAgaWYgKGVsZW1lbnQpIHRoaXMudmlzaXROb2RlKGVsZW1lbnQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkgdGhpcy52aXNpdE5vZGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCJdXCIpO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIG5hbWVzID0gbm9kZS5uYW1lcztcbiAgICB2YXIgdmFsdWVzID0gbm9kZS52YWx1ZXM7XG4gICAgdmFyIG51bUVsZW1lbnRzID0gbmFtZXMubGVuZ3RoO1xuICAgIGFzc2VydChudW1FbGVtZW50cyA9PSB2YWx1ZXMubGVuZ3RoKTtcbiAgICBpZiAobnVtRWxlbWVudHMpIHtcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCArK3RoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobmFtZXNbMF0pO1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWVzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRWxlbWVudHM7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcbiAgICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgICAgbGV0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAobmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJ7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc3dpdGNoIChub2RlLmFzc2VydGlvbktpbmQpIHtcbiAgICAgIGNhc2UgQXNzZXJ0aW9uS2luZC5QUkVGSVg6IHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShhc3NlcnQobm9kZS50b1R5cGUpKTtcbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkFTOiB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIHNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoYXNzZXJ0KG5vZGUudG9UeXBlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLk5PTk5VTEw6IHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkNPTlNUOiB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIHNiLnB1c2goXCIgYXMgY29uc3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5sZWZ0KTtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICBzYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gICAgc2IucHVzaChcIiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0QXJndW1lbnRzKG5vZGUudHlwZUFyZ3VtZW50cywgbm9kZS5hcmdzKTtcbiAgfVxuXG4gIHZpc2l0QXJndW1lbnRzKFxuICAgIHR5cGVBcmd1bWVudHM6IFR5cGVOb2RlW10gfCBudWxsLFxuICAgIGFyZ3M6IEV4cHJlc3Npb25bXVxuICApOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmICh0eXBlQXJndW1lbnRzKSB7XG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+KFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgfVxuICAgIHZhciBudW1BcmdzID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKG51bUFyZ3MpIHtcbiAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1BcmdzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWFFeHByZXNzaW9uKG5vZGU6IENvbW1hRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBleHByZXNzaW9ucyA9IG5vZGUuZXhwcmVzc2lvbnM7XG4gICAgdmFyIG51bUV4cHJlc3Npb25zID0gYXNzZXJ0KGV4cHJlc3Npb25zLmxlbmd0aCk7XG4gICAgdGhpcy52aXNpdE5vZGUoZXhwcmVzc2lvbnNbMF0pO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FeHByZXNzaW9uczsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiLFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zW2ldKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHNiLnB1c2goXCJbXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xuICAgIHNiLnB1c2goXCJdXCIpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICBpZiAoIWRlY2xhcmF0aW9uLmFycm93S2luZCkge1xuICAgICAgaWYgKGRlY2xhcmF0aW9uLm5hbWUudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKFwiZnVuY3Rpb24gXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKFwiZnVuY3Rpb25cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChkZWNsYXJhdGlvbi5uYW1lLnRleHQubGVuZ3RoID09IDApO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24oZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5saXRlcmFsS2luZCkge1xuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xuICAgICAgICB0aGlzLnZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbig8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbig8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XG4gICAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbig8U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5URU1QTEFURToge1xuICAgICAgICB0aGlzLnZpc2l0VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbig8VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlJFR0VYUDoge1xuICAgICAgICB0aGlzLnZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5PQkpFQ1Q6IHtcbiAgICAgICAgdGhpcy52aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKG5vZGUudmFsdWUudG9TdHJpbmcoKSk7XG4gIH1cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnNiLnB1c2goXCIgaW5zdGFuY2VvZiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUuaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChpNjRfdG9fc3RyaW5nKG5vZGUudmFsdWUpKTtcbiAgfVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbChzdHI6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaCgnXCInKTtcbiAgICB0aGlzLnZpc2l0UmF3U3RyaW5nKHN0ciwgdXRpbC5DaGFyQ29kZS5ET1VCTEVRVU9URSk7XG4gICAgc2IucHVzaCgnXCInKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaXRSYXdTdHJpbmcoc3RyOiBzdHJpbmcsIHF1b3RlOiB1dGlsLkNoYXJDb2RlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IHN0ci5sZW5ndGg7IGkgPCBrOyApIHtcbiAgICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLk5VTEw6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgKG9mZiA9IGkgKyAxKSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcMFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkJBQ0tTUEFDRToge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcYlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuVEFCOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFx0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5MSU5FRkVFRDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcblwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuVkVSVElDQUxUQUI6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXHZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkZPUk1GRUVEOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxmXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxyXCIpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuRE9VQkxFUVVPVEU6IHtcbiAgICAgICAgICBpZiAocXVvdGUgPT0gdXRpbC5DaGFyQ29kZS5ET1VCTEVRVU9URSkge1xuICAgICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICAgIHNiLnB1c2goJ1xcXFxcIicpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5TSU5HTEVRVU9URToge1xuICAgICAgICAgIGlmIChxdW90ZSA9PSB1dGlsLkNoYXJDb2RlLlNJTkdMRVFVT1RFKSB7XG4gICAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgICAgc2IucHVzaChcIlxcXFwnXCIpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5CQUNLU0xBU0g6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLOiB7XG4gICAgICAgICAgaWYgKHF1b3RlID09IHV0aWwuQ2hhckNvZGUuQkFDS1RJQ0spIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXGBcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciB0YWcgPSBub2RlLnRhZztcbiAgICB2YXIgcGFydHMgPSBub2RlLnBhcnRzO1xuICAgIHZhciBleHByZXNzaW9ucyA9IG5vZGUuZXhwcmVzc2lvbnM7XG4gICAgaWYgKHRhZykgdGhpcy52aXNpdE5vZGUodGFnKTtcbiAgICBzYi5wdXNoKFwiYFwiKTtcbiAgICB0aGlzLnZpc2l0UmF3U3RyaW5nKHBhcnRzWzBdLCB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLKTtcbiAgICBhc3NlcnQocGFydHMubGVuZ3RoID09IGV4cHJlc3Npb25zLmxlbmd0aCArIDEpO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gZXhwcmVzc2lvbnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiJHtcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShleHByZXNzaW9uc1tpXSk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICAgIHRoaXMudmlzaXRSYXdTdHJpbmcocGFydHNbaSArIDFdLCB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLKTtcbiAgICB9XG4gICAgc2IucHVzaChcImBcIik7XG4gIH1cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiL1wiKTtcbiAgICBzYi5wdXNoKG5vZGUucGF0dGVybik7XG4gICAgc2IucHVzaChcIi9cIik7XG4gICAgc2IucHVzaChub2RlLnBhdHRlcm5GbGFncyk7XG4gIH1cblxuICB2aXNpdE5ld0V4cHJlc3Npb24obm9kZTogTmV3RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChcIm5ldyBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOYW1lKG5vZGUudHlwZU5hbWUpO1xuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIihcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiKVwiKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy5zYi5wdXNoKFwiLlwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5wcm9wZXJ0eSk7XG4gIH1cblxuICB2aXNpdFRlcm5hcnlFeHByZXNzaW9uKG5vZGU6IFRlcm5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIiA/IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmlmVGhlbik7XG4gICAgc2IucHVzaChcIiA6IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmlmRWxzZSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUub3BlcmFuZCk7XG4gICAgdGhpcy5zYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgLy8gc3RhdGVtZW50c1xuXG4gIHZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZSk7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoXG4gICAgICAhc2IubGVuZ3RoIHx8IC8vIGxlYWRpbmcgRW1wdHlTdGF0ZW1lbnRcbiAgICAgIG5vZGUua2luZCA9PSBOb2RlS2luZC5WQVJJQUJMRSB8fCAvLyBwb3RlbnRpYWxseSBhc3NpZ25zIGEgRnVuY3Rpb25FeHByZXNzaW9uXG4gICAgICBub2RlLmtpbmQgPT0gTm9kZUtpbmQuRVhQUkVTU0lPTiAvLyBwb3RlbnRpYWxseSBhc3NpZ25zIGEgRnVuY3Rpb25FeHByZXNzaW9uXG4gICAgKSB7XG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxhc3QgPSBzYltzYi5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBsYXN0Q2hhclBvcyA9IGxhc3QubGVuZ3RoIC0gMTtcbiAgICAgIGlmIChcbiAgICAgICAgbGFzdENoYXJQb3MgPj0gMCAmJlxuICAgICAgICAobGFzdC5jaGFyQ29kZUF0KGxhc3RDaGFyUG9zKSA9PSB1dGlsLkNoYXJDb2RlLkNMT1NFQlJBQ0UgfHxcbiAgICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IHV0aWwuQ2hhckNvZGUuU0VNSUNPTE9OKVxuICAgICAgKSB7XG4gICAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICB2YXIgbnVtU3RhdGVtZW50cyA9IHN0YXRlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XG4gICAgICBzYi5wdXNoKFwie1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RhdGVtZW50czsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwie31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJicmVhayBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJicmVha1wiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENvbnRpbnVlU3RhdGVtZW50KG5vZGU6IENvbnRpbnVlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihsYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBpc0RlZmF1bHQgPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkFCU1RSQUNUKSkgc2IucHVzaChcImFic3RyYWN0IFwiKTtcbiAgICBpZiAobm9kZS5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICBzYi5wdXNoKFwiY2xhc3MgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJjbGFzc1wiKTtcbiAgICB9XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMgIT0gbnVsbCAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxLCBrID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgfVxuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgdmFyIGltcGxlbWVudHNUeXBlcyA9IG5vZGUuaW1wbGVtZW50c1R5cGVzO1xuICAgIGlmIChpbXBsZW1lbnRzVHlwZXMpIHtcbiAgICAgIGxldCBudW1JbXBsZW1lbnRzVHlwZXMgPSBpbXBsZW1lbnRzVHlwZXMubGVuZ3RoO1xuICAgICAgaWYgKG51bUltcGxlbWVudHNUeXBlcykge1xuICAgICAgICBzYi5wdXNoKFwiIGltcGxlbWVudHMgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoaW1wbGVtZW50c1R5cGVzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1JbXBsZW1lbnRzVHlwZXM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoaW1wbGVtZW50c1R5cGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW5kZXhTaWduYXR1cmUgPSBub2RlLmluZGV4U2lnbmF0dXJlO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIHZhciBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgaWYgKGluZGV4U2lnbmF0dXJlICE9PSBudWxsIHx8IG51bU1lbWJlcnMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGlmIChpbmRleFNpZ25hdHVyZSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoaW5kZXhTaWduYXR1cmUpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBsZXQgbWVtYmVyID0gbWVtYmVyc1tpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1lbWJlci5raW5kICE9IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT04gfHxcbiAgICAgICAgICAoPEZpZWxkRGVjbGFyYXRpb24+bWVtYmVyKS5wYXJhbWV0ZXJJbmRleCA8IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImRvIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgaWYgKG5vZGUuc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCIgd2hpbGUgKFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ3aGlsZSAoXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7XG4gICAgLyogbm9wICovXG4gIH1cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5DT05TVCkpIHNiLnB1c2goXCJjb25zdCBcIik7XG4gICAgc2IucHVzaChcImVudW0gXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcbiAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWVzLmxlbmd0aDtcbiAgICBpZiAobnVtVmFsdWVzKSB7XG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlLnZhbHVlc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVZhbHVlczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGUudmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIiB7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJleHBvcnQgaW1wb3J0IFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5leHRlcm5hbE5hbWUpO1xuICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydE1lbWJlcihub2RlOiBFeHBvcnRNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5sb2NhbE5hbWUpO1xuICAgIGlmIChub2RlLmV4cG9ydGVkTmFtZS50ZXh0ICE9IG5vZGUubG9jYWxOYW1lLnRleHQpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5leHBvcnRlZE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXNEZWNsYXJlKSB7XG4gICAgICBzYi5wdXNoKFwiZGVjbGFyZSBcIik7XG4gICAgfVxuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIGlmIChtZW1iZXJzICE9IG51bGwgJiYgbWVtYmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbnVtTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoO1xuICAgICAgc2IucHVzaChcImV4cG9ydCB7XFxuXCIpO1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKG1lbWJlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1NZW1iZXJzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIixcXG5cIik7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKG1lbWJlcnNbaV0pO1xuICAgICAgfVxuICAgICAgLS10aGlzLmluZGVudExldmVsO1xuICAgICAgc2IucHVzaChcIlxcbn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQge31cIik7XG4gICAgfVxuICAgIHZhciBwYXRoID0gbm9kZS5wYXRoO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICBzYi5wdXNoKFwiIGZyb20gXCIpO1xuICAgICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKHBhdGgpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwiO1wiKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudChub2RlOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICBzd2l0Y2ggKGRlY2xhcmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKDxGdW5jdGlvbkRlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKDxJbnRlcmZhY2VEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oPE5hbWVzcGFjZURlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwcmVzc2lvblN0YXRlbWVudChub2RlOiBFeHByZXNzaW9uU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGUpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBDb21tb25GbGFncy5ERUZJTklURUxZX0FTU0lHTkVEKSB7XG4gICAgICBzYi5wdXNoKFwiIVwiKTtcbiAgICB9XG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGb3JTdGF0ZW1lbnQobm9kZTogRm9yU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiZm9yIChcIik7XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gICAgdmFyIGNvbmRpdGlvbiA9IG5vZGUuY29uZGl0aW9uO1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHNiLnB1c2goXCI7IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGNvbmRpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCI7XCIpO1xuICAgIH1cbiAgICB2YXIgaW5jcmVtZW50b3IgPSBub2RlLmluY3JlbWVudG9yO1xuICAgIGlmIChpbmNyZW1lbnRvcikge1xuICAgICAgc2IucHVzaChcIjsgXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5jcmVtZW50b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiO1wiKTtcbiAgICB9XG4gICAgc2IucHVzaChcIikgXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuc3RhdGVtZW50KTtcbiAgfVxuXG4gIHZpc2l0Rm9yT2ZTdGF0ZW1lbnQobm9kZTogRm9yT2ZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJmb3IgKFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnZhcmlhYmxlKTtcbiAgICBzYi5wdXNoKFwiIG9mIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLml0ZXJhYmxlKTtcbiAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICBzYi5wdXNoKFwiZnVuY3Rpb24gXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRGdW5jdGlvbkNvbW1vbihub2RlKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25Db21tb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHNpZ25hdHVyZSA9IG5vZGUuc2lnbmF0dXJlO1xuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZGUuYXJyb3dLaW5kID09IEFycm93S2luZC5BUlJPV19TSU5HTEUpIHtcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgICBhc3NlcnQocGFyYW1ldGVycy5sZW5ndGggPT0gMSk7XG4gICAgICBhc3NlcnQoIXNpZ25hdHVyZS5leHBsaWNpdFRoaXNUeXBlKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgICBsZXQgbnVtUGFyYW1ldGVycyA9IHBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgbGV0IGV4cGxpY2l0VGhpc1R5cGUgPSBzaWduYXR1cmUuZXhwbGljaXRUaGlzVHlwZTtcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSB7XG4gICAgICAgIHNiLnB1c2goXCJ0aGlzOiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHBsaWNpdFRoaXNUeXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1QYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYm9keSA9IG5vZGUuYm9keTtcbiAgICB2YXIgcmV0dXJuVHlwZSA9IHNpZ25hdHVyZS5yZXR1cm5UeXBlO1xuICAgIGlmIChub2RlLmFycm93S2luZCkge1xuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgaWYgKG5vZGUuYXJyb3dLaW5kID09IEFycm93S2luZC5BUlJPV19TSU5HTEUpIHtcbiAgICAgICAgICBhc3NlcnQoaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpIHtcbiAgICAgICAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYi5wdXNoKFwiKTogXCIpO1xuICAgICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiID0+IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NlcnQoIWlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpO1xuICAgICAgICBzYi5wdXNoKFwiID0+IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgICFpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpICYmXG4gICAgICAgICFub2RlLmlzQW55KENvbW1vbkZsYWdzLkNPTlNUUlVDVE9SIHwgQ29tbW9uRmxhZ3MuU0VUKVxuICAgICAgKSB7XG4gICAgICAgIHNiLnB1c2goXCIpOiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgc2IucHVzaChcIiBcIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKGJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJpZiAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgdmFyIGlmVHJ1ZSA9IG5vZGUuaWZUcnVlO1xuICAgIHRoaXMudmlzaXROb2RlKGlmVHJ1ZSk7XG4gICAgaWYgKGlmVHJ1ZS5raW5kICE9IE5vZGVLaW5kLkJMT0NLKSB7XG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICB9XG4gICAgdmFyIGlmRmFsc2UgPSBub2RlLmlmRmFsc2U7XG4gICAgaWYgKGlmRmFsc2UpIHtcbiAgICAgIGlmIChpZlRydWUua2luZCA9PSBOb2RlS2luZC5CTE9DSykge1xuICAgICAgICBzYi5wdXNoKFwiIGVsc2UgXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcImVsc2UgXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy52aXNpdE5vZGUoaWZGYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBleHRlcm5hbE5hbWUgPSBub2RlLmZvcmVpZ25OYW1lO1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihleHRlcm5hbE5hbWUpO1xuICAgIGlmIChleHRlcm5hbE5hbWUudGV4dCAhPSBuYW1lLnRleHQpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiaW1wb3J0IFwiKTtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gbm9kZS5kZWNsYXJhdGlvbnM7XG4gICAgdmFyIG5hbWVzcGFjZU5hbWUgPSBub2RlLm5hbWVzcGFjZU5hbWU7XG4gICAgaWYgKGRlY2xhcmF0aW9ucykge1xuICAgICAgbGV0IG51bURlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7XG4gICAgICBpZiAobnVtRGVjbGFyYXRpb25zKSB7XG4gICAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oZGVjbGFyYXRpb25zWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1EZWNsYXJhdGlvbnM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbihkZWNsYXJhdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgICAgc2IucHVzaChcIlxcbn0gZnJvbSBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwie30gZnJvbSBcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2VOYW1lKSB7XG4gICAgICBzYi5wdXNoKFwiKiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obmFtZXNwYWNlTmFtZSk7XG4gICAgICBzYi5wdXNoKFwiIGZyb20gXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZS5wYXRoKTtcbiAgfVxuXG4gIHZpc2l0SW5kZXhTaWduYXR1cmUobm9kZTogSW5kZXhTaWduYXR1cmVOb2RlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiW2tleTogXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLmtleVR5cGUpO1xuICAgIHNiLnB1c2goXCJdOiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUudmFsdWVUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICB9XG4gICAgc2IucHVzaChcImludGVyZmFjZSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMgIT0gbnVsbCAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxLCBrID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgfVxuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgLy8gbXVzdCBub3QgaGF2ZSBpbXBsZW1lbnRzVHlwZXNcbiAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgdmFyIGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gbWVtYmVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyc1tpXSk7XG4gICAgfVxuICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZSk7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuR0VUKSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiZ2V0IFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuU0VUKSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwic2V0IFwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGUpO1xuICB9XG5cbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQgPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwibmFtZXNwYWNlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcbiAgICB2YXIgbnVtTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoO1xuICAgIGlmIChudW1NZW1iZXJzKSB7XG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IG1lbWJlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShtZW1iZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0UmV0dXJuU3RhdGVtZW50KG5vZGU6IFJldHVyblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJyZXR1cm4gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJyZXR1cm5cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBzYi5wdXNoKFwiY2FzZSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShsYWJlbCk7XG4gICAgICBzYi5wdXNoKFwiOlxcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcImRlZmF1bHQ6XFxuXCIpO1xuICAgIH1cbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICB2YXIgbnVtU3RhdGVtZW50cyA9IHN0YXRlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1TdGF0ZW1lbnRzOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgICAgfVxuICAgICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcInN3aXRjaCAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKSB7XFxuXCIpO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB2YXIgY2FzZXMgPSBub2RlLmNhc2VzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gY2FzZXMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKGNhc2VzW2ldKTtcbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgfVxuICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goXCJ0aHJvdyBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJ0cnkge1xcblwiKTtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgdmFyIHN0YXRlbWVudHMgPSBub2RlLnN0YXRlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgdmFyIGNhdGNoVmFyaWFibGUgPSBub2RlLmNhdGNoVmFyaWFibGU7XG4gICAgaWYgKGNhdGNoVmFyaWFibGUpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICAgIHNiLnB1c2goXCJ9IGNhdGNoIChcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oY2F0Y2hWYXJpYWJsZSk7XG4gICAgICBzYi5wdXNoKFwiKSB7XFxuXCIpO1xuICAgICAgbGV0IGNhdGNoU3RhdGVtZW50cyA9IG5vZGUuY2F0Y2hTdGF0ZW1lbnRzO1xuICAgICAgaWYgKGNhdGNoU3RhdGVtZW50cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgayA9IGNhdGNoU3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShjYXRjaFN0YXRlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBmaW5hbGx5U3RhdGVtZW50cyA9IG5vZGUuZmluYWxseVN0YXRlbWVudHM7XG4gICAgaWYgKGZpbmFsbHlTdGF0ZW1lbnRzKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XG4gICAgICBzYi5wdXNoKFwifSBmaW5hbGx5IHtcXG5cIik7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGZpbmFsbHlTdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoZmluYWxseVN0YXRlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XG4gICAgc2IucHVzaChcIn1cIik7XG4gIH1cblxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIHNiLnB1c2goXCJ0eXBlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycykge1xuICAgICAgbGV0IG51bVR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVR5cGVQYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUudHlwZSk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBDb21tb25GbGFncy5ERUZJTklURUxZX0FTU0lHTkVEKSB7XG4gICAgICBzYi5wdXNoKFwiIVwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRWYXJpYWJsZVN0YXRlbWVudChub2RlOiBWYXJpYWJsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBkZWNsYXJhdGlvbnMgPSBub2RlLmRlY2xhcmF0aW9ucztcbiAgICB2YXIgbnVtRGVjbGFyYXRpb25zID0gYXNzZXJ0KGRlY2xhcmF0aW9ucy5sZW5ndGgpO1xuICAgIHZhciBmaXJzdERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zWzBdO1xuICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMoZmlyc3REZWNsYXJhdGlvbik7XG4gICAgc2IucHVzaChcbiAgICAgIGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuQ09OU1QpXG4gICAgICAgID8gXCJjb25zdCBcIlxuICAgICAgICA6IGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuTEVUKVxuICAgICAgICA/IFwibGV0IFwiXG4gICAgICAgIDogXCJ2YXIgXCJcbiAgICApO1xuICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb25zWzBdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRXaGlsZVN0YXRlbWVudChub2RlOiBXaGlsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIndoaWxlIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5jb25kaXRpb24pO1xuICAgIHZhciBzdGF0ZW1lbnQgPSBub2RlLnN0YXRlbWVudDtcbiAgICBpZiAoc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRU1QVFkpIHtcbiAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb3RoZXJcblxuICBzZXJpYWxpemVEZWNvcmF0b3Iobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIkBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5uYW1lKTtcbiAgICB2YXIgYXJncyA9IG5vZGUuYXJncztcbiAgICBpZiAoYXJncykge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgICBsZXQgbnVtQXJncyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgaWYgKG51bUFyZ3MpIHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtQXJnczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiKVxcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICB9XG4gICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIga2luZCA9IG5vZGUucGFyYW1ldGVyS2luZDtcbiAgICB2YXIgaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uID0gbm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb247XG4gICAgaWYgKGltcGxpY2l0RmllbGREZWNsYXJhdGlvbikge1xuICAgICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMoaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT0gUGFyYW1ldGVyS2luZC5SRVNUKSB7XG4gICAgICBzYi5wdXNoKFwiLi4uXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBpZiAoa2luZCA9PSBQYXJhbWV0ZXJLaW5kLk9QVElPTkFMICYmICFpbml0aWFsaXplcikgc2IucHVzaChcIj9cIik7XG4gICAgICBpZiAoIWlzVHlwZU9taXR0ZWQodHlwZSkpIHtcbiAgICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLklNUE9SVCkpIHtcbiAgICAgIHNiLnB1c2goXCJpbXBvcnQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5ERUNMQVJFKSkge1xuICAgICAgc2IucHVzaChcImRlY2xhcmUgXCIpO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUFVCTElDKSkge1xuICAgICAgc2IucHVzaChcInB1YmxpYyBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBSSVZBVEUpKSB7XG4gICAgICBzYi5wdXNoKFwicHJpdmF0ZSBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBST1RFQ1RFRCkpIHtcbiAgICAgIHNiLnB1c2goXCJwcm90ZWN0ZWQgXCIpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TVEFUSUMpKSB7XG4gICAgICBzYi5wdXNoKFwic3RhdGljIFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuQUJTVFJBQ1QpKSB7XG4gICAgICBzYi5wdXNoKFwiYWJzdHJhY3QgXCIpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5SRUFET05MWSkpIHtcbiAgICAgIHNiLnB1c2goXCJyZWFkb25seSBcIik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoKCk6IHN0cmluZyB7XG4gICAgdmFyIHJldCA9IHRoaXMuc2Iuam9pbihcIlwiKTtcbiAgICB0aGlzLnNiID0gW107XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19