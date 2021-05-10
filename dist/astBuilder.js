"use strict";
// tslint:disable: as-internal-case
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTBuilder = void 0;
const as_1 = require("../as");
const visitor_1 = require("./visitor");
// declare function i64_to_string(i: I64): string;
// import { i64_to_string } from "../../../src/glue/i64"
/** An AST builder. */
class ASTBuilder extends visitor_1.AbstractVisitor {
    constructor() {
        super(...arguments);
        this.sb = [];
        this.indentLevel = 0;
    }
    _visit(node) {
        this.visitNode(node);
    }
    /** Rebuilds the textual source from the specified AST, as far as possible. */
    static build(node) {
        var builder = new ASTBuilder();
        builder.visitNode(node);
        return builder.finish();
    }
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
                assert(false);
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
            as_1.indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (let i = 1; i < numElements; ++i) {
                sb.push(",\n");
                as_1.indent(sb, this.indentLevel);
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
            as_1.indent(sb, --this.indentLevel);
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
                as_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            as_1.indent(sb, --this.indentLevel);
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
                as_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(indexSignature);
            }
            for (let i = 0, k = members.length; i < k; ++i) {
                let member = members[i];
                if (member.kind != as_1.NodeKind.FIELDDECLARATION ||
                    member.parameterIndex < 0) {
                    as_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            as_1.indent(sb, --this.indentLevel);
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
            sb.push(";\n");
            as_1.indent(sb, this.indentLevel);
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
            as_1.indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (let i = 1; i < numValues; ++i) {
                sb.push(",\n");
                as_1.indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            as_1.indent(sb, --this.indentLevel);
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
            as_1.indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (let i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                as_1.indent(sb, indentLevel);
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
                as_1.indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (let i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    as_1.indent(sb, indentLevel);
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
            as_1.indent(sb, indentLevel);
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
                as_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            as_1.indent(sb, --this.indentLevel);
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
            as_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (let i = 1; i < numStatements; ++i) {
                as_1.indent(sb, indentLevel);
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
            as_1.indent(sb, indentLevel);
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
            as_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            as_1.indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            let catchStatements = node.catchStatements;
            if (catchStatements) {
                for (let i = 0, k = catchStatements.length; i < k; ++i) {
                    as_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            as_1.indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (let i = 0, k = finallyStatements.length; i < k; ++i) {
                as_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        as_1.indent(sb, indentLevel - 1);
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
        as_1.indent(sb, this.indentLevel);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3RCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7OztBQUVuQyw4QkFnRmU7QUFDZix1Q0FBNEM7QUFFNUMsa0RBQWtEO0FBQ2xELHdEQUF3RDtBQUV4RCxzQkFBc0I7QUFDdEIsTUFBYSxVQUFXLFNBQVEseUJBQXFCO0lBQXJEOztRQVdVLE9BQUUsR0FBYSxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUEya0QvQixDQUFDO0lBdGxEQyxNQUFNLENBQUMsSUFBVTtRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELDhFQUE4RTtJQUM5RSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQVU7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFLRCxTQUFTLENBQUMsSUFBVTtRQUNsQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxhQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxhQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssYUFBUSxD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Z0NBdWxEQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBhcy1pbnRlcm5hbC1jYXNlXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYXJDb2RlLFxyXG4gIENvbW1vbkZsYWdzLFxyXG4gIFR5cGVOb2RlLFxyXG4gIE5vZGUsXHJcbiAgTm9kZUtpbmQsXHJcbiAgU291cmNlLFxyXG4gIE5hbWVkVHlwZU5vZGUsXHJcbiAgRnVuY3Rpb25UeXBlTm9kZSxcclxuICBUeXBlUGFyYW1ldGVyTm9kZSxcclxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcclxuICBDYWxsRXhwcmVzc2lvbixcclxuICBDbGFzc0V4cHJlc3Npb24sXHJcbiAgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sXHJcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxyXG4gIEluc3RhbmNlT2ZFeHByZXNzaW9uLFxyXG4gIExpdGVyYWxFeHByZXNzaW9uLFxyXG4gIE5ld0V4cHJlc3Npb24sXHJcbiAgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sXHJcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxyXG4gIFRlcm5hcnlFeHByZXNzaW9uLFxyXG4gIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24sXHJcbiAgVW5hcnlQcmVmaXhFeHByZXNzaW9uLFxyXG4gIEJsb2NrU3RhdGVtZW50LFxyXG4gIEJyZWFrU3RhdGVtZW50LFxyXG4gIENvbnRpbnVlU3RhdGVtZW50LFxyXG4gIERvU3RhdGVtZW50LFxyXG4gIEVtcHR5U3RhdGVtZW50LFxyXG4gIEV4cG9ydFN0YXRlbWVudCxcclxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxyXG4gIEV4cG9ydEltcG9ydFN0YXRlbWVudCxcclxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxyXG4gIEZvclN0YXRlbWVudCxcclxuICBJZlN0YXRlbWVudCxcclxuICBJbXBvcnRTdGF0ZW1lbnQsXHJcbiAgUmV0dXJuU3RhdGVtZW50LFxyXG4gIFN3aXRjaFN0YXRlbWVudCxcclxuICBUaHJvd1N0YXRlbWVudCxcclxuICBUcnlTdGF0ZW1lbnQsXHJcbiAgVmFyaWFibGVTdGF0ZW1lbnQsXHJcbiAgV2hpbGVTdGF0ZW1lbnQsXHJcbiAgQ2xhc3NEZWNsYXJhdGlvbixcclxuICBFbnVtRGVjbGFyYXRpb24sXHJcbiAgRW51bVZhbHVlRGVjbGFyYXRpb24sXHJcbiAgRmllbGREZWNsYXJhdGlvbixcclxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxyXG4gIEltcG9ydERlY2xhcmF0aW9uLFxyXG4gIEludGVyZmFjZURlY2xhcmF0aW9uLFxyXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxyXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxyXG4gIFR5cGVEZWNsYXJhdGlvbixcclxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxyXG4gIERlY29yYXRvck5vZGUsXHJcbiAgRXhwb3J0TWVtYmVyLFxyXG4gIFBhcmFtZXRlck5vZGUsXHJcbiAgU3dpdGNoQ2FzZSxcclxuICBUeXBlTmFtZSxcclxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxyXG4gIEV4cHJlc3Npb24sXHJcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgQXNzZXJ0aW9uS2luZCxcclxuICBMaXRlcmFsS2luZCxcclxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxyXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxyXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxyXG4gIFVuYXJ5RXhwcmVzc2lvbixcclxuICBTdGF0ZW1lbnQsXHJcbiAgQXJyb3dLaW5kLFxyXG4gIFBhcmFtZXRlcktpbmQsXHJcbiAgRGVjbGFyYXRpb25TdGF0ZW1lbnQsXHJcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcclxuICBCaW5hcnlFeHByZXNzaW9uLFxyXG4gIENvbW1hRXhwcmVzc2lvbixcclxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXHJcbiAgaXNUeXBlT21pdHRlZCxcclxuICBvcGVyYXRvclRva2VuVG9TdHJpbmcsXHJcbiAgaW5kZW50LFxyXG4gIEZvck9mU3RhdGVtZW50LFxyXG4gIEluZGV4U2lnbmF0dXJlTm9kZSxcclxuICBUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uLFxyXG59IGZyb20gXCIuLi9hc1wiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFZpc2l0b3IgfSBmcm9tIFwiLi92aXNpdG9yXCI7XHJcblxyXG4vLyBkZWNsYXJlIGZ1bmN0aW9uIGk2NF90b19zdHJpbmcoaTogSTY0KTogc3RyaW5nO1xyXG4vLyBpbXBvcnQgeyBpNjRfdG9fc3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9nbHVlL2k2NFwiXHJcblxyXG4vKiogQW4gQVNUIGJ1aWxkZXIuICovXHJcbmV4cG9ydCBjbGFzcyBBU1RCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RWaXNpdG9yPE5vZGU+IHtcclxuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZSk7XHJcbiAgfVxyXG4gIC8qKiBSZWJ1aWxkcyB0aGUgdGV4dHVhbCBzb3VyY2UgZnJvbSB0aGUgc3BlY2lmaWVkIEFTVCwgYXMgZmFyIGFzIHBvc3NpYmxlLiAqL1xyXG4gIHN0YXRpYyBidWlsZChub2RlOiBOb2RlKTogc3RyaW5nIHtcclxuICAgIHZhciBidWlsZGVyID0gbmV3IEFTVEJ1aWxkZXIoKTtcclxuICAgIGJ1aWxkZXIudmlzaXROb2RlKG5vZGUpO1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIuZmluaXNoKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNiOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgaW5kZW50TGV2ZWw6IGkzMiA9IDA7XHJcblxyXG4gIHZpc2l0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xyXG4gICAgICAgIHRoaXMudmlzaXRTb3VyY2UoPFNvdXJjZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdHlwZXNcclxuXHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcig8VHlwZVBhcmFtZXRlck5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGV4cHJlc3Npb25zXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhJUzpcclxuICAgICAgY2FzZSBOb2RlS2luZC5UUlVFOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklERU5USUZJRVI6IHtcclxuICAgICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oPElkZW50aWZpZXJFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QmluYXJ5RXhwcmVzc2lvbig8QmluYXJ5RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNBTEw6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24oPENhbGxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1M6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xyXG4gICAgICAgIHRoaXMudmlzaXRDb21tYUV4cHJlc3Npb24oPENvbW1hRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oPEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKDxJbnN0YW5jZU9mRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6IHtcclxuICAgICAgICB0aGlzLnZpc2l0TGl0ZXJhbEV4cHJlc3Npb24oPExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkVXOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5ld0V4cHJlc3Npb24oPE5ld0V4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbig8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEVSTkFSWToge1xyXG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzdGF0ZW1lbnRzXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJMT0NLOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEJyZWFrU3RhdGVtZW50KDxCcmVha1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlRJTlVFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENvbnRpbnVlU3RhdGVtZW50KDxDb250aW51ZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkRPOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEVtcHR5U3RhdGVtZW50KDxFbXB0eVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRTdGF0ZW1lbnQoPEV4cG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoPEV4cG9ydEltcG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUFJFU1NJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwcmVzc2lvblN0YXRlbWVudCg8RXhwcmVzc2lvblN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUk9GOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZvck9mU3RhdGVtZW50KDxGb3JPZlN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdElmU3RhdGVtZW50KDxJZlN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRSZXR1cm5TdGF0ZW1lbnQoPFJldHVyblN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hTdGF0ZW1lbnQoPFN3aXRjaFN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRIUk9XOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xyXG4gICAgICAgIHRoaXMudmlzaXRUcnlTdGF0ZW1lbnQoPFRyeVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlU3RhdGVtZW50KDxWYXJpYWJsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLldISUxFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xyXG5cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlRERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXRNZXRob2REZWNsYXJhdGlvbig8TWV0aG9kRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjoge1xyXG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZURlY2xhcmF0aW9uKDxUeXBlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24oPFZhcmlhYmxlRGVjbGFyYXRpb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG90aGVyXHJcblxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkRFQ09SQVRPUjoge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcig8RXhwb3J0TWVtYmVyPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIoPFBhcmFtZXRlck5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0hDQVNFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRToge1xyXG4gICAgICAgIHRoaXMudmlzaXRJbmRleFNpZ25hdHVyZSg8SW5kZXhTaWduYXR1cmVOb2RlPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0U291cmNlKHNvdXJjZTogU291cmNlKTogdm9pZCB7XHJcbiAgICB2YXIgc3RhdGVtZW50cyA9IHNvdXJjZS5zdGF0ZW1lbnRzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHR5cGVzXHJcblxyXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFzc2VydChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5pZGVudGlmaWVyKTtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB2YXIgY3VycmVudCA9IG5vZGUubmV4dDtcclxuICAgIHdoaWxlIChjdXJyZW50KSB7XHJcbiAgICAgIHNiLnB1c2goXCIuXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oY3VycmVudC5pZGVudGlmaWVyKTtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0VHlwZU5hbWUobm9kZS5uYW1lKTtcclxuICAgIHZhciB0eXBlQXJndW1lbnRzID0gbm9kZS50eXBlQXJndW1lbnRzO1xyXG4gICAgaWYgKHR5cGVBcmd1bWVudHMpIHtcclxuICAgICAgbGV0IG51bVR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgbGV0IHNiID0gdGhpcy5zYjtcclxuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcclxuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcclxuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcclxuICAgICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2IucHVzaChcIj5cIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUuaXNOdWxsYWJsZSkgc2IucHVzaChcIiB8IG51bGxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdEZ1bmN0aW9uVHlwZU5vZGUobm9kZTogRnVuY3Rpb25UeXBlTm9kZSk6IHZvaWQge1xyXG4gICAgdmFyIGlzTnVsbGFibGUgPSBub2RlLmlzTnVsbGFibGU7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChpc051bGxhYmxlID8gXCIoKFwiIDogXCIoXCIpO1xyXG4gICAgdmFyIGV4cGxpY2l0VGhpc1R5cGUgPSBub2RlLmV4cGxpY2l0VGhpc1R5cGU7XHJcbiAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkge1xyXG4gICAgICBzYi5wdXNoKFwidGhpczogXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXhwbGljaXRUaGlzVHlwZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycztcclxuICAgIHZhciBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICBpZiAobnVtUGFyYW1ldGVycykge1xyXG4gICAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzWzBdKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1QYXJhbWV0ZXJzOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciByZXR1cm5UeXBlID0gbm9kZS5yZXR1cm5UeXBlO1xyXG4gICAgaWYgKHJldHVyblR5cGUpIHtcclxuICAgICAgc2IucHVzaChcIikgPT4gXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiKSA9PiB2b2lkXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTnVsbGFibGUpIHNiLnB1c2goXCIpIHwgbnVsbFwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XHJcbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xyXG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XHJcbiAgICAgIHRoaXMuc2IucHVzaChcIiBleHRlbmRzIFwiKTtcclxuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcclxuICAgIH1cclxuICAgIHZhciBkZWZhdWx0VHlwZSA9IG5vZGUuZGVmYXVsdFR5cGU7XHJcbiAgICBpZiAoZGVmYXVsdFR5cGUpIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwiPVwiKTtcclxuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGRlZmF1bHRUeXBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGV4cHJlc3Npb25zXHJcblxyXG4gIHZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogSWRlbnRpZmllckV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIGlmIChub2RlLmlzUXVvdGVkKSB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnRleHQpO1xyXG4gICAgZWxzZSB0aGlzLnNiLnB1c2gobm9kZS50ZXh0KTtcclxuICB9XHJcblxyXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChcIltcIik7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBub2RlLmVsZW1lbnRFeHByZXNzaW9ucztcclxuICAgIHZhciBudW1FbGVtZW50cyA9IGVsZW1lbnRzLmxlbmd0aDtcclxuICAgIGlmIChudW1FbGVtZW50cykge1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzWzBdO1xyXG4gICAgICBpZiAoZWxlbWVudCkgdGhpcy52aXNpdE5vZGUoZWxlbWVudCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRWxlbWVudHM7ICsraSkge1xyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHRoaXMudmlzaXROb2RlKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzYi5wdXNoKFwiXVwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB2YXIgbmFtZXMgPSBub2RlLm5hbWVzO1xyXG4gICAgdmFyIHZhbHVlcyA9IG5vZGUudmFsdWVzO1xyXG4gICAgdmFyIG51bUVsZW1lbnRzID0gbmFtZXMubGVuZ3RoO1xyXG4gICAgYXNzZXJ0KG51bUVsZW1lbnRzID09IHZhbHVlcy5sZW5ndGgpO1xyXG4gICAgaWYgKG51bUVsZW1lbnRzKSB7XHJcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xyXG4gICAgICBpbmRlbnQoc2IsICsrdGhpcy5pbmRlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5hbWVzWzBdKTtcclxuICAgICAgc2IucHVzaChcIjogXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZSh2YWx1ZXNbMF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUVsZW1lbnRzOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcclxuICAgICAgICBpbmRlbnQoc2IsIHRoaXMuaW5kZW50TGV2ZWwpO1xyXG4gICAgICAgIGxldCBuYW1lID0gbmFtZXNbaV07XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldO1xyXG4gICAgICAgIGlmIChuYW1lID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudmlzaXROb2RlKG5hbWUpO1xyXG4gICAgICAgICAgc2IucHVzaChcIjogXCIpO1xyXG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xyXG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XHJcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2IucHVzaChcInt9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRBc3NlcnRpb25FeHByZXNzaW9uKG5vZGU6IEFzc2VydGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzd2l0Y2ggKG5vZGUuYXNzZXJ0aW9uS2luZCkge1xyXG4gICAgICBjYXNlIEFzc2VydGlvbktpbmQuUFJFRklYOiB7XHJcbiAgICAgICAgc2IucHVzaChcIjxcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGFzc2VydChub2RlLnRvVHlwZSkpO1xyXG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xyXG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkFTOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcclxuICAgICAgICBzYi5wdXNoKFwiIGFzIFwiKTtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoYXNzZXJ0KG5vZGUudG9UeXBlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLk5PTk5VTEw6IHtcclxuICAgICAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xyXG4gICAgICAgIHNiLnB1c2goXCIhXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQXNzZXJ0aW9uS2luZC5DT05TVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgICAgICAgc2IucHVzaChcIiBhcyBjb25zdFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGFzc2VydChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUubGVmdCk7XHJcbiAgICBzYi5wdXNoKFwiIFwiKTtcclxuICAgIHNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcclxuICAgIHNiLnB1c2goXCIgXCIpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5yaWdodCk7XHJcbiAgfVxyXG5cclxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy52aXNpdEFyZ3VtZW50cyhub2RlLnR5cGVBcmd1bWVudHMsIG5vZGUuYXJncyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0QXJndW1lbnRzKFxyXG4gICAgdHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGwsXHJcbiAgICBhcmdzOiBFeHByZXNzaW9uW11cclxuICApOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBpZiAodHlwZUFyZ3VtZW50cykge1xyXG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgICBpZiAobnVtVHlwZUFyZ3VtZW50cykge1xyXG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVBcmd1bWVudHM7ICsraSkge1xyXG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYi5wdXNoKFwiPihcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCIoXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG51bUFyZ3MgPSBhcmdzLmxlbmd0aDtcclxuICAgIGlmIChudW1BcmdzKSB7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbMF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUFyZ3M7ICsraSkge1xyXG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcclxuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2IucHVzaChcIilcIik7XHJcbiAgfVxyXG5cclxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XHJcbiAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbihkZWNsYXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdENvbW1hRXhwcmVzc2lvbihub2RlOiBDb21tYUV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBleHByZXNzaW9ucyA9IG5vZGUuZXhwcmVzc2lvbnM7XHJcbiAgICB2YXIgbnVtRXhwcmVzc2lvbnMgPSBhc3NlcnQoZXhwcmVzc2lvbnMubGVuZ3RoKTtcclxuICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zWzBdKTtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUV4cHJlc3Npb25zOyArK2kpIHtcclxuICAgICAgc2IucHVzaChcIixcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xyXG4gICAgc2IucHVzaChcIltcIik7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmVsZW1lbnRFeHByZXNzaW9uKTtcclxuICAgIHNiLnB1c2goXCJdXCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xyXG4gICAgaWYgKCFkZWNsYXJhdGlvbi5hcnJvd0tpbmQpIHtcclxuICAgICAgaWYgKGRlY2xhcmF0aW9uLm5hbWUudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNiLnB1c2goXCJmdW5jdGlvbiBcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zYi5wdXNoKFwiZnVuY3Rpb25cIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFzc2VydChkZWNsYXJhdGlvbi5uYW1lLnRleHQubGVuZ3RoID09IDApO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKGRlY2xhcmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHZpc2l0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHN3aXRjaCAobm9kZS5saXRlcmFsS2luZCkge1xyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkZMT0FUOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oPEZsb2F0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5JTlRFR0VSOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbig8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlRFTVBMQVRFOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24oPFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5SRUdFWFA6IHtcclxuICAgICAgICB0aGlzLnZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcclxuICAgICAgICB0aGlzLnZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbig8QXJyYXlMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExpdGVyYWxLaW5kLk9CSkVDVDoge1xyXG4gICAgICAgIHRoaXMudmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbig8T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIGFzc2VydChmYWxzZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnNiLnB1c2gobm9kZS52YWx1ZS50b1N0cmluZygpKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24obm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLnNiLnB1c2goXCIgaW5zdGFuY2VvZiBcIik7XHJcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS5pc1R5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnNiLnB1c2goaTY0X3RvX3N0cmluZyhub2RlLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFN0cmluZ0xpdGVyYWwoc3RyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKCdcIicpO1xyXG4gICAgdGhpcy52aXNpdFJhd1N0cmluZyhzdHIsIENoYXJDb2RlLkRPVUJMRVFVT1RFKTtcclxuICAgIHNiLnB1c2goJ1wiJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0UmF3U3RyaW5nKHN0cjogc3RyaW5nLCBxdW90ZTogQ2hhckNvZGUpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB2YXIgb2ZmID0gMDtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGZvciAobGV0IGsgPSBzdHIubGVuZ3RoOyBpIDwgazsgKSB7XHJcbiAgICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcclxuICAgICAgICBjYXNlIENoYXJDb2RlLk5VTEw6IHtcclxuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCAob2ZmID0gaSArIDEpKSk7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXDBcIik7XHJcbiAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU1BBQ0U6IHtcclxuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XHJcbiAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGJcIik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5UQUI6IHtcclxuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XHJcbiAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXHRcIik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5MSU5FRkVFRDoge1xyXG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcclxuICAgICAgICAgIG9mZiA9ICsraTtcclxuICAgICAgICAgIHNiLnB1c2goXCJcXFxcblwiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENoYXJDb2RlLlZFUlRJQ0FMVEFCOiB7XHJcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xyXG4gICAgICAgICAgb2ZmID0gKytpO1xyXG4gICAgICAgICAgc2IucHVzaChcIlxcXFx2XCIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRk9STUZFRUQ6IHtcclxuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XHJcbiAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXGZcIik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjoge1xyXG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcclxuICAgICAgICAgIHNiLnB1c2goXCJcXFxcclwiKTtcclxuICAgICAgICAgIG9mZiA9ICsraTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENoYXJDb2RlLkRPVUJMRVFVT1RFOiB7XHJcbiAgICAgICAgICBpZiAocXVvdGUgPT0gQ2hhckNvZGUuRE9VQkxFUVVPVEUpIHtcclxuICAgICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcclxuICAgICAgICAgICAgc2IucHVzaCgnXFxcXFwiJyk7XHJcbiAgICAgICAgICAgIG9mZiA9ICsraTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENoYXJDb2RlLlNJTkdMRVFVT1RFOiB7XHJcbiAgICAgICAgICBpZiAocXVvdGUgPT0gQ2hhckNvZGUuU0lOR0xFUVVPVEUpIHtcclxuICAgICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcclxuICAgICAgICAgICAgc2IucHVzaChcIlxcXFwnXCIpO1xyXG4gICAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLU0xBU0g6IHtcclxuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXFxcXFxcIik7XHJcbiAgICAgICAgICBvZmYgPSArK2k7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5CQUNLVElDSzoge1xyXG4gICAgICAgICAgaWYgKHF1b3RlID09IENoYXJDb2RlLkJBQ0tUSUNLKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XHJcbiAgICAgICAgICAgIHNiLnB1c2goXCJcXFxcYFwiKTtcclxuICAgICAgICAgICAgb2ZmID0gKytpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICsraTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcclxuICB9XHJcblxyXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB2YXIgdGFnID0gbm9kZS50YWc7XHJcbiAgICB2YXIgcGFydHMgPSBub2RlLnBhcnRzO1xyXG4gICAgdmFyIGV4cHJlc3Npb25zID0gbm9kZS5leHByZXNzaW9ucztcclxuICAgIGlmICh0YWcpIHRoaXMudmlzaXROb2RlKHRhZyk7XHJcbiAgICBzYi5wdXNoKFwiYFwiKTtcclxuICAgIHRoaXMudmlzaXRSYXdTdHJpbmcocGFydHNbMF0sIENoYXJDb2RlLkJBQ0tUSUNLKTtcclxuICAgIGFzc2VydChwYXJ0cy5sZW5ndGggPT0gZXhwcmVzc2lvbnMubGVuZ3RoICsgMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IGV4cHJlc3Npb25zLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICBzYi5wdXNoKFwiJHtcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zW2ldKTtcclxuICAgICAgc2IucHVzaChcIn1cIik7XHJcbiAgICAgIHRoaXMudmlzaXRSYXdTdHJpbmcocGFydHNbaSArIDFdLCBDaGFyQ29kZS5CQUNLVElDSyk7XHJcbiAgICB9XHJcbiAgICBzYi5wdXNoKFwiYFwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKFwiL1wiKTtcclxuICAgIHNiLnB1c2gobm9kZS5wYXR0ZXJuKTtcclxuICAgIHNiLnB1c2goXCIvXCIpO1xyXG4gICAgc2IucHVzaChub2RlLnBhdHRlcm5GbGFncyk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5ld0V4cHJlc3Npb24obm9kZTogTmV3RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdGhpcy5zYi5wdXNoKFwibmV3IFwiKTtcclxuICAgIHRoaXMudmlzaXRUeXBlTmFtZShub2RlLnR5cGVOYW1lKTtcclxuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHNiLnB1c2goXCIoXCIpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcclxuICAgIHNiLnB1c2goXCIpXCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5zYi5wdXNoKFwiLlwiKTtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLnByb3BlcnR5KTtcclxuICB9XHJcblxyXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XHJcbiAgICBzYi5wdXNoKFwiID8gXCIpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pZlRoZW4pO1xyXG4gICAgc2IucHVzaChcIiA6IFwiKTtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuaWZFbHNlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0VW5hcnlFeHByZXNzaW9uKG5vZGU6IFVuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xyXG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcclxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcclxuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbig8VW5hcnlQcmVmaXhFeHByZXNzaW9uPm5vZGUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm9wZXJhbmQpO1xyXG4gICAgdGhpcy5zYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcclxuICAgIHRoaXMuc2IucHVzaChvcGVyYXRvclRva2VuVG9TdHJpbmcobm9kZS5vcGVyYXRvcikpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5vcGVyYW5kKTtcclxuICB9XHJcblxyXG4gIC8vIHN0YXRlbWVudHNcclxuXHJcbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKG5vZGU6IE5vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUpO1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChcclxuICAgICAgIXNiLmxlbmd0aCB8fCAvLyBsZWFkaW5nIEVtcHR5U3RhdGVtZW50XHJcbiAgICAgIG5vZGUua2luZCA9PSBOb2RlS2luZC5WQVJJQUJMRSB8fCAvLyBwb3RlbnRpYWxseSBhc3NpZ25zIGEgRnVuY3Rpb25FeHByZXNzaW9uXHJcbiAgICAgIG5vZGUua2luZCA9PSBOb2RlS2luZC5FWFBSRVNTSU9OIC8vIHBvdGVudGlhbGx5IGFzc2lnbnMgYSBGdW5jdGlvbkV4cHJlc3Npb25cclxuICAgICkge1xyXG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBsYXN0ID0gc2Jbc2IubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCBsYXN0Q2hhclBvcyA9IGxhc3QubGVuZ3RoIC0gMTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGxhc3RDaGFyUG9zID49IDAgJiZcclxuICAgICAgICAobGFzdC5jaGFyQ29kZUF0KGxhc3RDaGFyUG9zKSA9PSBDaGFyQ29kZS5DTE9TRUJSQUNFIHx8XHJcbiAgICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IENoYXJDb2RlLlNFTUlDT0xPTilcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2IucHVzaChcIlxcblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzYi5wdXNoKFwiO1xcblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRCbG9ja1N0YXRlbWVudChub2RlOiBCbG9ja1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xyXG4gICAgdmFyIG51bVN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcclxuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XHJcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xyXG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RhdGVtZW50czsgKytpKSB7XHJcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xyXG4gICAgICBzYi5wdXNoKFwifVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCJ7fVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0QnJlYWtTdGF0ZW1lbnQobm9kZTogQnJlYWtTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XHJcbiAgICBpZiAobGFiZWwpIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWsgXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obGFiZWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwiYnJlYWtcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdENvbnRpbnVlU3RhdGVtZW50KG5vZGU6IENvbnRpbnVlU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xyXG4gICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlIFwiKTtcclxuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGxhYmVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcclxuICAgIGlmIChkZWNvcmF0b3JzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChpc0RlZmF1bHQpIHtcclxuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5BQlNUUkFDVCkpIHNiLnB1c2goXCJhYnN0cmFjdCBcIik7XHJcbiAgICBpZiAobm9kZS5uYW1lLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgIHNiLnB1c2goXCJjbGFzcyBcIik7XHJcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2IucHVzaChcImNsYXNzXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcclxuICAgIGlmICh0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2IucHVzaChcIjxcIik7XHJcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDEsIGsgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNiLnB1c2goXCI+XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcclxuICAgIGlmIChleHRlbmRzVHlwZSkge1xyXG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xyXG4gICAgfVxyXG4gICAgdmFyIGltcGxlbWVudHNUeXBlcyA9IG5vZGUuaW1wbGVtZW50c1R5cGVzO1xyXG4gICAgaWYgKGltcGxlbWVudHNUeXBlcykge1xyXG4gICAgICBsZXQgbnVtSW1wbGVtZW50c1R5cGVzID0gaW1wbGVtZW50c1R5cGVzLmxlbmd0aDtcclxuICAgICAgaWYgKG51bUltcGxlbWVudHNUeXBlcykge1xyXG4gICAgICAgIHNiLnB1c2goXCIgaW1wbGVtZW50cyBcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1swXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1JbXBsZW1lbnRzVHlwZXM7ICsraSkge1xyXG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGltcGxlbWVudHNUeXBlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgaW5kZXhTaWduYXR1cmUgPSBub2RlLmluZGV4U2lnbmF0dXJlO1xyXG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XHJcbiAgICB2YXIgbnVtTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoO1xyXG4gICAgaWYgKGluZGV4U2lnbmF0dXJlICE9PSBudWxsIHx8IG51bU1lbWJlcnMpIHtcclxuICAgICAgc2IucHVzaChcIiB7XFxuXCIpO1xyXG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XHJcbiAgICAgIGlmIChpbmRleFNpZ25hdHVyZSkge1xyXG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGluZGV4U2lnbmF0dXJlKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IG1lbWJlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XHJcbiAgICAgICAgbGV0IG1lbWJlciA9IG1lbWJlcnNbaV07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbWVtYmVyLmtpbmQgIT0gTm9kZUtpbmQuRklFTERERUNMQVJBVElPTiB8fFxyXG4gICAgICAgICAgKDxGaWVsZERlY2xhcmF0aW9uPm1lbWJlcikucGFyYW1ldGVySW5kZXggPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKG1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcclxuICAgICAgc2IucHVzaChcIn1cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHNiLnB1c2goXCJkbyBcIik7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XHJcbiAgICBpZiAobm9kZS5zdGF0ZW1lbnQua2luZCA9PSBOb2RlS2luZC5CTE9DSykge1xyXG4gICAgICBzYi5wdXNoKFwiIHdoaWxlIChcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcclxuICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcclxuICAgICAgc2IucHVzaChcIndoaWxlIChcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XHJcbiAgICBzYi5wdXNoKFwiKVwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RW1wdHlTdGF0ZW1lbnQobm9kZTogRW1wdHlTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIC8qIG5vcCAqL1xyXG4gIH1cclxuXHJcbiAgdmlzaXRFbnVtRGVjbGFyYXRpb24obm9kZTogRW51bURlY2xhcmF0aW9uLCBpc0RlZmF1bHQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChpc0RlZmF1bHQpIHtcclxuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5DT05TVCkpIHNiLnB1c2goXCJjb25zdCBcIik7XHJcbiAgICBzYi5wdXNoKFwiZW51bSBcIik7XHJcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcclxuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcclxuICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgaWYgKG51bVZhbHVlcykge1xyXG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XHJcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlLnZhbHVlc1swXSk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVmFsdWVzOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcclxuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgICB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24obm9kZS52YWx1ZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XHJcbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcclxuICAgICAgc2IucHVzaChcIn1cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlOiBFbnVtVmFsdWVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XHJcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xyXG4gICAgaWYgKGluaXRpYWxpemVyKSB7XHJcbiAgICAgIHRoaXMuc2IucHVzaChcIiA9IFwiKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0SW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChcImV4cG9ydCBpbXBvcnQgXCIpO1xyXG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXh0ZXJuYWxOYW1lKTtcclxuICAgIHNiLnB1c2goXCIgPSBcIik7XHJcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubG9jYWxOYW1lKTtcclxuICAgIGlmIChub2RlLmV4cG9ydGVkTmFtZS50ZXh0ICE9IG5vZGUubG9jYWxOYW1lLnRleHQpIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwiIGFzIFwiKTtcclxuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuZXhwb3J0ZWROYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChub2RlLmlzRGVjbGFyZSkge1xyXG4gICAgICBzYi5wdXNoKFwiZGVjbGFyZSBcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcclxuICAgIGlmIChtZW1iZXJzICE9IG51bGwgJiYgbWVtYmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XHJcbiAgICAgIHNiLnB1c2goXCJleHBvcnQge1xcblwiKTtcclxuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xyXG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzWzBdKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1NZW1iZXJzOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcclxuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0TWVtYmVyKG1lbWJlcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgICAgc2IucHVzaChcIlxcbn1cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IHt9XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHBhdGggPSBub2RlLnBhdGg7XHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICBzYi5wdXNoKFwiIGZyb20gXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24ocGF0aCk7XHJcbiAgICB9XHJcbiAgICBzYi5wdXNoKFwiO1wiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudChub2RlOiBFeHBvcnREZWZhdWx0U3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xyXG4gICAgc3dpdGNoIChkZWNsYXJhdGlvbi5raW5kKSB7XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdEVudW1EZWNsYXJhdGlvbig8RW51bURlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5URVJGQUNFREVDTEFSQVRJT046IHtcclxuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XHJcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBhc3NlcnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KG5vZGU6IEV4cHJlc3Npb25TdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XHJcbiAgfVxyXG5cclxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XHJcbiAgICBpZiAoZGVjb3JhdG9ycykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGUpO1xyXG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBDb21tb25GbGFncy5ERUZJTklURUxZX0FTU0lHTkVEKSB7XHJcbiAgICAgIHNiLnB1c2goXCIhXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICBzYi5wdXNoKFwiOiBcIik7XHJcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcclxuICAgIH1cclxuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XHJcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcclxuICAgICAgc2IucHVzaChcIiA9IFwiKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRGb3JTdGF0ZW1lbnQobm9kZTogRm9yU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChcImZvciAoXCIpO1xyXG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcclxuICAgIGlmIChpbml0aWFsaXplcikge1xyXG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XHJcbiAgICB9XHJcbiAgICB2YXIgY29uZGl0aW9uID0gbm9kZS5jb25kaXRpb247XHJcbiAgICBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAgIHNiLnB1c2goXCI7IFwiKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUoY29uZGl0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCI7XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGluY3JlbWVudG9yID0gbm9kZS5pbmNyZW1lbnRvcjtcclxuICAgIGlmIChpbmNyZW1lbnRvcikge1xyXG4gICAgICBzYi5wdXNoKFwiOyBcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGluY3JlbWVudG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCI7XCIpO1xyXG4gICAgfVxyXG4gICAgc2IucHVzaChcIikgXCIpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRGb3JPZlN0YXRlbWVudChub2RlOiBGb3JPZlN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHNiLnB1c2goXCJmb3IgKFwiKTtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUudmFyaWFibGUpO1xyXG4gICAgc2IucHVzaChcIiBvZiBcIik7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLml0ZXJhYmxlKTtcclxuICAgIHNiLnB1c2goXCIpIFwiKTtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuc3RhdGVtZW50KTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihcclxuICAgIG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQ6IGJvb2wgPSBmYWxzZVxyXG4gICk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xyXG4gICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNEZWZhdWx0KSB7XHJcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xyXG4gICAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5hbWUudGV4dC5sZW5ndGgpIHtcclxuICAgICAgc2IucHVzaChcImZ1bmN0aW9uIFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCJmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlzaXRGdW5jdGlvbkNvbW1vbihub2RlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0RnVuY3Rpb25Db21tb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xyXG4gICAgdmFyIHNpZ25hdHVyZSA9IG5vZGUuc2lnbmF0dXJlO1xyXG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcclxuICAgIGlmICh0eXBlUGFyYW1ldGVycykge1xyXG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICAgIGlmIChudW1UeXBlUGFyYW1ldGVycykge1xyXG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVQYXJhbWV0ZXJzOyArK2kpIHtcclxuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcclxuICAgICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2IucHVzaChcIj5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChub2RlLmFycm93S2luZCA9PSBBcnJvd0tpbmQuQVJST1dfU0lOR0xFKSB7XHJcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XHJcbiAgICAgIGFzc2VydChwYXJhbWV0ZXJzLmxlbmd0aCA9PSAxKTtcclxuICAgICAgYXNzZXJ0KCFzaWduYXR1cmUuZXhwbGljaXRUaGlzVHlwZSk7XHJcbiAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2IucHVzaChcIihcIik7XHJcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XHJcbiAgICAgIGxldCBudW1QYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICAgIGxldCBleHBsaWNpdFRoaXNUeXBlID0gc2lnbmF0dXJlLmV4cGxpY2l0VGhpc1R5cGU7XHJcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSB7XHJcbiAgICAgICAgc2IucHVzaChcInRoaXM6IFwiKTtcclxuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXhwbGljaXRUaGlzVHlwZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bVBhcmFtZXRlcnMpIHtcclxuICAgICAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtUGFyYW1ldGVyczsgKytpKSB7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XHJcbiAgICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBib2R5ID0gbm9kZS5ib2R5O1xyXG4gICAgdmFyIHJldHVyblR5cGUgPSBzaWduYXR1cmUucmV0dXJuVHlwZTtcclxuICAgIGlmIChub2RlLmFycm93S2luZCkge1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIGlmIChub2RlLmFycm93S2luZCA9PSBBcnJvd0tpbmQuQVJST1dfU0lOR0xFKSB7XHJcbiAgICAgICAgICBhc3NlcnQoaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpKSB7XHJcbiAgICAgICAgICAgIHNiLnB1c2goXCIpXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2IucHVzaChcIik6IFwiKTtcclxuICAgICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzYi5wdXNoKFwiID0+IFwiKTtcclxuICAgICAgICB0aGlzLnZpc2l0Tm9kZShib2R5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhc3NlcnQoIWlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpO1xyXG4gICAgICAgIHNiLnB1c2goXCIgPT4gXCIpO1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpICYmXHJcbiAgICAgICAgIW5vZGUuaXNBbnkoQ29tbW9uRmxhZ3MuQ09OU1RSVUNUT1IgfCBDb21tb25GbGFncy5TRVQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNiLnB1c2goXCIpOiBcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNiLnB1c2goXCIpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgc2IucHVzaChcIiBcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYm9keSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKFwiaWYgKFwiKTtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcclxuICAgIHNiLnB1c2goXCIpIFwiKTtcclxuICAgIHZhciBpZlRydWUgPSBub2RlLmlmVHJ1ZTtcclxuICAgIHRoaXMudmlzaXROb2RlKGlmVHJ1ZSk7XHJcbiAgICBpZiAoaWZUcnVlLmtpbmQgIT0gTm9kZUtpbmQuQkxPQ0spIHtcclxuICAgICAgc2IucHVzaChcIjtcXG5cIik7XHJcbiAgICB9XHJcbiAgICB2YXIgaWZGYWxzZSA9IG5vZGUuaWZGYWxzZTtcclxuICAgIGlmIChpZkZhbHNlKSB7XHJcbiAgICAgIGlmIChpZlRydWUua2luZCA9PSBOb2RlS2luZC5CTE9DSykge1xyXG4gICAgICAgIHNiLnB1c2goXCIgZWxzZSBcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2IucHVzaChcImVsc2UgXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGlmRmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgdmFyIGV4dGVybmFsTmFtZSA9IG5vZGUuZm9yZWlnbk5hbWU7XHJcbiAgICB2YXIgbmFtZSA9IG5vZGUubmFtZTtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihleHRlcm5hbE5hbWUpO1xyXG4gICAgaWYgKGV4dGVybmFsTmFtZS50ZXh0ICE9IG5hbWUudGV4dCkge1xyXG4gICAgICB0aGlzLnNiLnB1c2goXCIgYXMgXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKFwiaW1wb3J0IFwiKTtcclxuICAgIHZhciBkZWNsYXJhdGlvbnMgPSBub2RlLmRlY2xhcmF0aW9ucztcclxuICAgIHZhciBuYW1lc3BhY2VOYW1lID0gbm9kZS5uYW1lc3BhY2VOYW1lO1xyXG4gICAgaWYgKGRlY2xhcmF0aW9ucykge1xyXG4gICAgICBsZXQgbnVtRGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zLmxlbmd0aDtcclxuICAgICAgaWYgKG51bURlY2xhcmF0aW9ucykge1xyXG4gICAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xyXG4gICAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oZGVjbGFyYXRpb25zWzBdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bURlY2xhcmF0aW9uczsgKytpKSB7XHJcbiAgICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcclxuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xyXG4gICAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgICAgICBzYi5wdXNoKFwiXFxufSBmcm9tIFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzYi5wdXNoKFwie30gZnJvbSBcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlTmFtZSkge1xyXG4gICAgICBzYi5wdXNoKFwiKiBhcyBcIik7XHJcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lc3BhY2VOYW1lKTtcclxuICAgICAgc2IucHVzaChcIiBmcm9tIFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlLnBhdGgpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRJbmRleFNpZ25hdHVyZShub2RlOiBJbmRleFNpZ25hdHVyZU5vZGUpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKFwiW2tleTogXCIpO1xyXG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUua2V5VHlwZSk7XHJcbiAgICBzYi5wdXNoKFwiXTogXCIpO1xyXG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUudmFsdWVUeXBlKTtcclxuICB9XHJcblxyXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oXHJcbiAgICBub2RlOiBJbnRlcmZhY2VEZWNsYXJhdGlvbixcclxuICAgIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlXHJcbiAgKTogdm9pZCB7XHJcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcclxuICAgIGlmIChkZWNvcmF0b3JzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChpc0RlZmF1bHQpIHtcclxuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XHJcbiAgICB9XHJcbiAgICBzYi5wdXNoKFwiaW50ZXJmYWNlIFwiKTtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xyXG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcclxuICAgIGlmICh0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2IucHVzaChcIjxcIik7XHJcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDEsIGsgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XHJcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNiLnB1c2goXCI+XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcclxuICAgIGlmIChleHRlbmRzVHlwZSkge1xyXG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xyXG4gICAgfVxyXG4gICAgLy8gbXVzdCBub3QgaGF2ZSBpbXBsZW1lbnRzVHlwZXNcclxuICAgIHNiLnB1c2goXCIge1xcblwiKTtcclxuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyc1tpXSk7XHJcbiAgICB9XHJcbiAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XHJcbiAgICBzYi5wdXNoKFwifVwiKTtcclxuICB9XHJcblxyXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xyXG4gICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcclxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkdFVCkpIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwiZ2V0IFwiKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TRVQpKSB7XHJcbiAgICAgIHRoaXMuc2IucHVzaChcInNldCBcIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24obm9kZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKFxyXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXHJcbiAgICBpc0RlZmF1bHQ6IGJvb2wgPSBmYWxzZVxyXG4gICk6IHZvaWQge1xyXG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XHJcbiAgICBpZiAoZGVjb3JhdG9ycykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBpZiAoaXNEZWZhdWx0KSB7XHJcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgc2IucHVzaChcIm5hbWVzcGFjZSBcIik7XHJcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcclxuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xyXG4gICAgdmFyIG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcclxuICAgIGlmIChudW1NZW1iZXJzKSB7XHJcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcclxuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IG1lbWJlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XHJcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyc1tpXSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xyXG4gICAgICBzYi5wdXNoKFwifVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCIge31cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdFJldHVyblN0YXRlbWVudChub2RlOiBSZXR1cm5TdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwicmV0dXJuIFwiKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zYi5wdXNoKFwicmV0dXJuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xyXG4gICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgIHNiLnB1c2goXCJjYXNlIFwiKTtcclxuICAgICAgdGhpcy52aXNpdE5vZGUobGFiZWwpO1xyXG4gICAgICBzYi5wdXNoKFwiOlxcblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNiLnB1c2goXCJkZWZhdWx0OlxcblwiKTtcclxuICAgIH1cclxuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xyXG4gICAgdmFyIG51bVN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcclxuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XHJcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbMF0pO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVN0YXRlbWVudHM7ICsraSkge1xyXG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xyXG4gICAgICB9XHJcbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHNiLnB1c2goXCJzd2l0Y2ggKFwiKTtcclxuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcclxuICAgIHNiLnB1c2goXCIpIHtcXG5cIik7XHJcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XHJcbiAgICB2YXIgY2FzZXMgPSBub2RlLmNhc2VzO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBjYXNlcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKGNhc2VzW2ldKTtcclxuICAgICAgc2IucHVzaChcIlxcblwiKTtcclxuICAgIH1cclxuICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcclxuICAgIHNiLnB1c2goXCJ9XCIpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRUaHJvd1N0YXRlbWVudChub2RlOiBUaHJvd1N0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5zYi5wdXNoKFwidGhyb3cgXCIpO1xyXG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBzYiA9IHRoaXMuc2I7XHJcbiAgICBzYi5wdXNoKFwidHJ5IHtcXG5cIik7XHJcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XHJcbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcclxuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcclxuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhdGNoVmFyaWFibGUgPSBub2RlLmNhdGNoVmFyaWFibGU7XHJcbiAgICBpZiAoY2F0Y2hWYXJpYWJsZSkge1xyXG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XHJcbiAgICAgIHNiLnB1c2goXCJ9IGNhdGNoIChcIik7XHJcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihjYXRjaFZhcmlhYmxlKTtcclxuICAgICAgc2IucHVzaChcIikge1xcblwiKTtcclxuICAgICAgbGV0IGNhdGNoU3RhdGVtZW50cyA9IG5vZGUuY2F0Y2hTdGF0ZW1lbnRzO1xyXG4gICAgICBpZiAoY2F0Y2hTdGF0ZW1lbnRzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBjYXRjaFN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XHJcbiAgICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcclxuICAgICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGNhdGNoU3RhdGVtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZmluYWxseVN0YXRlbWVudHMgPSBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzO1xyXG4gICAgaWYgKGZpbmFsbHlTdGF0ZW1lbnRzKSB7XHJcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcclxuICAgICAgc2IucHVzaChcIn0gZmluYWxseSB7XFxuXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGZpbmFsbHlTdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xyXG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGZpbmFsbHlTdGF0ZW1lbnRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCAtIDEpO1xyXG4gICAgc2IucHVzaChcIn1cIik7XHJcbiAgfVxyXG5cclxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xyXG4gICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcclxuICAgIHNiLnB1c2goXCJ0eXBlIFwiKTtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xyXG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcclxuICAgIGlmICh0eXBlUGFyYW1ldGVycykge1xyXG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICAgIGlmIChudW1UeXBlUGFyYW1ldGVycykge1xyXG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVHlwZVBhcmFtZXRlcnM7ICsraSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2IucHVzaChcIiA9IFwiKTtcclxuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xyXG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBDb21tb25GbGFncy5ERUZJTklURUxZX0FTU0lHTkVEKSB7XHJcbiAgICAgIHNiLnB1c2goXCIhXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgc2IucHVzaChcIjogXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xyXG4gICAgaWYgKGluaXRpYWxpemVyKSB7XHJcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xyXG4gICAgaWYgKGRlY29yYXRvcnMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgdmFyIGRlY2xhcmF0aW9ucyA9IG5vZGUuZGVjbGFyYXRpb25zO1xyXG4gICAgdmFyIG51bURlY2xhcmF0aW9ucyA9IGFzc2VydChkZWNsYXJhdGlvbnMubGVuZ3RoKTtcclxuICAgIHZhciBmaXJzdERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zWzBdO1xyXG4gICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhmaXJzdERlY2xhcmF0aW9uKTtcclxuICAgIHNiLnB1c2goXHJcbiAgICAgIGZpcnN0RGVjbGFyYXRpb24uaXMoQ29tbW9uRmxhZ3MuQ09OU1QpXHJcbiAgICAgICAgPyBcImNvbnN0IFwiXHJcbiAgICAgICAgOiBmaXJzdERlY2xhcmF0aW9uLmlzKENvbW1vbkZsYWdzLkxFVClcclxuICAgICAgICA/IFwibGV0IFwiXHJcbiAgICAgICAgOiBcInZhciBcIlxyXG4gICAgKTtcclxuICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGUuZGVjbGFyYXRpb25zWzBdKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRGVjbGFyYXRpb25zOyArK2kpIHtcclxuICAgICAgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aXNpdFdoaWxlU3RhdGVtZW50KG5vZGU6IFdoaWxlU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChcIndoaWxlIChcIik7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XHJcbiAgICB2YXIgc3RhdGVtZW50ID0gbm9kZS5zdGF0ZW1lbnQ7XHJcbiAgICBpZiAoc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuRU1QVFkpIHtcclxuICAgICAgc2IucHVzaChcIilcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzYi5wdXNoKFwiKSBcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuc3RhdGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG90aGVyXHJcblxyXG4gIHNlcmlhbGl6ZURlY29yYXRvcihub2RlOiBEZWNvcmF0b3JOb2RlKTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgc2IucHVzaChcIkBcIik7XHJcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm5hbWUpO1xyXG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3M7XHJcbiAgICBpZiAoYXJncykge1xyXG4gICAgICBzYi5wdXNoKFwiKFwiKTtcclxuICAgICAgbGV0IG51bUFyZ3MgPSBhcmdzLmxlbmd0aDtcclxuICAgICAgaWYgKG51bUFyZ3MpIHtcclxuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzWzBdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUFyZ3M7ICsraSkge1xyXG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xyXG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNiLnB1c2goXCIpXFxuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2IucHVzaChcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGluZGVudChzYiwgdGhpcy5pbmRlbnRMZXZlbCk7XHJcbiAgfVxyXG5cclxuICBzZXJpYWxpemVQYXJhbWV0ZXIobm9kZTogUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIHZhciBraW5kID0gbm9kZS5wYXJhbWV0ZXJLaW5kO1xyXG4gICAgdmFyIGltcGxpY2l0RmllbGREZWNsYXJhdGlvbiA9IG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uO1xyXG4gICAgaWYgKGltcGxpY2l0RmllbGREZWNsYXJhdGlvbikge1xyXG4gICAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGtpbmQgPT0gUGFyYW1ldGVyS2luZC5SRVNUKSB7XHJcbiAgICAgIHNiLnB1c2goXCIuLi5cIik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcclxuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xyXG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgIGlmIChraW5kID09IFBhcmFtZXRlcktpbmQuT1BUSU9OQUwgJiYgIWluaXRpYWxpemVyKSBzYi5wdXNoKFwiP1wiKTtcclxuICAgICAgaWYgKCFpc1R5cGVPbWl0dGVkKHR5cGUpKSB7XHJcbiAgICAgICAgc2IucHVzaChcIjogXCIpO1xyXG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGluaXRpYWxpemVyKSB7XHJcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGU6IERlY2xhcmF0aW9uU3RhdGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xyXG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSkge1xyXG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IFwiKTtcclxuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5JTVBPUlQpKSB7XHJcbiAgICAgIHNiLnB1c2goXCJpbXBvcnQgXCIpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkRFQ0xBUkUpKSB7XHJcbiAgICAgIHNiLnB1c2goXCJkZWNsYXJlIFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCk6IHZvaWQge1xyXG4gICAgdmFyIHNiID0gdGhpcy5zYjtcclxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBVQkxJQykpIHtcclxuICAgICAgc2IucHVzaChcInB1YmxpYyBcIik7XHJcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUFJJVkFURSkpIHtcclxuICAgICAgc2IucHVzaChcInByaXZhdGUgXCIpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBST1RFQ1RFRCkpIHtcclxuICAgICAgc2IucHVzaChcInByb3RlY3RlZCBcIik7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TVEFUSUMpKSB7XHJcbiAgICAgIHNiLnB1c2goXCJzdGF0aWMgXCIpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkFCU1RSQUNUKSkge1xyXG4gICAgICBzYi5wdXNoKFwiYWJzdHJhY3QgXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUkVBRE9OTFkpKSB7XHJcbiAgICAgIHNiLnB1c2goXCJyZWFkb25seSBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5pc2goKTogc3RyaW5nIHtcclxuICAgIHZhciByZXQgPSB0aGlzLnNiLmpvaW4oXCJcIik7XHJcbiAgICB0aGlzLnNiID0gW107XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxufVxyXG4iXX0=