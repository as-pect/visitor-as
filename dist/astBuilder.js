// tslint:disable: as-internal-case
import { CommonFlags, NodeKind, AssertionKind, LiteralKind, ParameterKind, isTypeOmitted, operatorTokenToString, } from "assemblyscript/dist/assemblyscript.js";
import { BaseVisitor } from "./base.js";
import { indent } from "./utils.js";
// declare function i64_to_string(i: I64): string;
// import { i64_to_string } from "../../../src/glue/i64"
/** An AST builder. */
export class ASTBuilder extends BaseVisitor {
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
            case NodeKind.FOROF: {
                this.visitForOfStatement(node);
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
                this.serializeDecorator(node);
                break;
            }
            case NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case NodeKind.PARAMETER: {
                this.serializeParameter(node);
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
            case NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case NodeKind.FUNCTIONTYPE: {
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
            indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (let i = 1; i < numElements; ++i) {
                sb.push(",\n");
                indent(sb, this.indentLevel);
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
            indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    }
    visitAssertionExpression(node) {
        var sb = this.sb;
        switch (node.assertionKind) {
            case AssertionKind.PREFIX: {
                sb.push("<");
                this.visitTypeNode(assert(node.toType));
                sb.push(">");
                this.visitNode(node.expression);
                break;
            }
            case AssertionKind.AS: {
                this.visitNode(node.expression);
                sb.push(" as ");
                this.visitTypeNode(assert(node.toType));
                break;
            }
            case AssertionKind.NONNULL: {
                this.visitNode(node.expression);
                sb.push("!");
                break;
            }
            case AssertionKind.CONST: {
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
        sb.push(operatorTokenToString(node.operator));
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
            case NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            default:
                assert(false);
        }
    }
    visitUnaryPostfixExpression(node) {
        this.visitNode(node.operand);
        this.sb.push(operatorTokenToString(node.operator));
    }
    visitUnaryPrefixExpression(node) {
        this.sb.push(operatorTokenToString(node.operator));
        this.visitNode(node.operand);
    }
    // statements
    visitNodeAndTerminate(node) {
        this.visitNode(node);
        var sb = this.sb;
        if (!sb.length || // leading EmptyStatement
            node.kind == NodeKind.VARIABLE || // potentially assigns a FunctionExpression
            node.kind == NodeKind.EXPRESSION // potentially assigns a FunctionExpression
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
                indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            indent(sb, --this.indentLevel);
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
        if (node.is(CommonFlags.ABSTRACT))
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
                indent(sb, indentLevel);
                this.visitNodeAndTerminate(indexSignature);
            }
            for (let i = 0, k = members.length; i < k; ++i) {
                let member = members[i];
                if (member.kind != NodeKind.FIELDDECLARATION ||
                    member.parameterIndex < 0) {
                    indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            indent(sb, --this.indentLevel);
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
        if (node.statement.kind == NodeKind.BLOCK) {
            sb.push(" while (");
        }
        else {
            indent(sb, this.indentLevel);
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
        if (node.is(CommonFlags.CONST))
            sb.push("const ");
        sb.push("enum ");
        this.visitIdentifierExpression(node.name);
        var values = node.values;
        var numValues = values.length;
        if (numValues) {
            sb.push(" {\n");
            let indentLevel = ++this.indentLevel;
            indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (let i = 1; i < numValues; ++i) {
                sb.push(",\n");
                indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            indent(sb, --this.indentLevel);
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
        if (members == null) {
            sb.push("export *");
        }
        else if (members.length > 0) {
            let numMembers = members.length;
            sb.push("export {\n");
            let indentLevel = ++this.indentLevel;
            indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (let i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                indent(sb, indentLevel);
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
            case NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(declaration, true);
                break;
            }
            case NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(declaration, true);
                break;
            }
            case NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(declaration, true);
                break;
            }
            case NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(declaration, true);
                break;
            }
            case NodeKind.NAMESPACEDECLARATION: {
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
        if (node.flags & CommonFlags.DEFINITELY_ASSIGNED) {
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
                    assert(isTypeOmitted(returnType));
                }
                else {
                    if (isTypeOmitted(returnType)) {
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
                assert(!isTypeOmitted(returnType));
                sb.push(" => ");
                this.visitTypeNode(returnType);
            }
        }
        else {
            if (!isTypeOmitted(returnType) &&
                !node.isAny(CommonFlags.CONSTRUCTOR | CommonFlags.SET)) {
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
        if (ifTrue.kind != NodeKind.BLOCK) {
            sb.push(";\n");
        }
        var ifFalse = node.ifFalse;
        if (ifFalse) {
            if (ifTrue.kind == NodeKind.BLOCK) {
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
                indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (let i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    indent(sb, indentLevel);
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
            indent(sb, indentLevel);
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
        if (node.is(CommonFlags.GET)) {
            this.sb.push("get ");
        }
        else if (node.is(CommonFlags.SET)) {
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
                indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            indent(sb, --this.indentLevel);
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
            indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (let i = 1; i < numStatements; ++i) {
                indent(sb, indentLevel);
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
            indent(sb, indentLevel);
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
            indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            let catchStatements = node.catchStatements;
            if (catchStatements) {
                for (let i = 0, k = catchStatements.length; i < k; ++i) {
                    indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (let i = 0, k = finallyStatements.length; i < k; ++i) {
                indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        indent(sb, indentLevel - 1);
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
        if (node.flags & CommonFlags.DEFINITELY_ASSIGNED) {
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
        sb.push(firstDeclaration.is(CommonFlags.CONST)
            ? "const "
            : firstDeclaration.is(CommonFlags.LET)
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
        if (statement.kind == NodeKind.EMPTY) {
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
        indent(sb, this.indentLevel);
    }
    serializeParameter(node) {
        var sb = this.sb;
        var kind = node.parameterKind;
        var implicitFieldDeclaration = node.implicitFieldDeclaration;
        if (implicitFieldDeclaration) {
            this.serializeAccessModifiers(implicitFieldDeclaration);
        }
        if (kind == ParameterKind.REST) {
            sb.push("...");
        }
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var initializer = node.initializer;
        if (type) {
            if (kind == ParameterKind.OPTIONAL && !initializer)
                sb.push("?");
            if (!isTypeOmitted(type)) {
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
        if (node.is(CommonFlags.EXPORT)) {
            sb.push("export ");
        }
        else if (node.is(CommonFlags.IMPORT)) {
            sb.push("import ");
        }
        else if (node.is(CommonFlags.DECLARE)) {
            sb.push("declare ");
        }
    }
    serializeAccessModifiers(node) {
        var sb = this.sb;
        if (node.is(CommonFlags.PUBLIC)) {
            sb.push("public ");
        }
        else if (node.is(CommonFlags.PRIVATE)) {
            sb.push("private ");
        }
        else if (node.is(CommonFlags.PROTECTED)) {
            sb.push("protected ");
        }
        if (node.is(CommonFlags.STATIC)) {
            sb.push("static ");
        }
        else if (node.is(CommonFlags.ABSTRACT)) {
            sb.push("abstract ");
        }
        if (node.is(CommonFlags.READONLY)) {
            sb.push("readonly ");
        }
    }
    finish() {
        var ret = this.sb.join("");
        this.sb = [];
        return ret;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3RCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUVuQyxPQUFPLEVBQ0wsV0FBVyxFQUdYLFFBQVEsRUF1RFIsYUFBYSxFQUNiLFdBQVcsRUFNWCxhQUFhLEVBTWIsYUFBYSxFQUNiLHFCQUFxQixHQUt0QixNQUFNLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVwQyxrREFBa0Q7QUFDbEQsd0RBQXdEO0FBRXhELHNCQUFzQjtBQUN0QixNQUFNLE9BQU8sVUFBVyxTQUFRLFdBQVc7SUFDekMsTUFBTSxDQUFDLElBQVU7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw4RUFBOEU7SUFDOUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFVO1FBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sRUFBRSxHQUFhLEVBQUUsQ0FBQztJQUNsQixXQUFXLEdBQVEsQ0FBQyxDQUFDO0lBRTdCLFNBQVMsQ0FBQyxJQUFVO1FBQ2xCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBUyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsTUFBTTthQUNQO1lBRUQsUUFBUTtZQUVSLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQWdCLElB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QUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogYXMtaW50ZXJuYWwtY2FzZVxuXG5pbXBvcnQge1xuICBDb21tb25GbGFncyxcbiAgVHlwZU5vZGUsXG4gIE5vZGUsXG4gIE5vZGVLaW5kLFxuICBTb3VyY2UsXG4gIE5hbWVkVHlwZU5vZGUsXG4gIEZ1bmN0aW9uVHlwZU5vZGUsXG4gIFR5cGVQYXJhbWV0ZXJOb2RlLFxuICBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgQ2FsbEV4cHJlc3Npb24sXG4gIENsYXNzRXhwcmVzc2lvbixcbiAgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24sXG4gIEZ1bmN0aW9uRXhwcmVzc2lvbixcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXG4gIExpdGVyYWxFeHByZXNzaW9uLFxuICBOZXdFeHByZXNzaW9uLFxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxuICBUZXJuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlQb3N0Zml4RXhwcmVzc2lvbixcbiAgVW5hcnlQcmVmaXhFeHByZXNzaW9uLFxuICBCbG9ja1N0YXRlbWVudCxcbiAgQnJlYWtTdGF0ZW1lbnQsXG4gIENvbnRpbnVlU3RhdGVtZW50LFxuICBEb1N0YXRlbWVudCxcbiAgRW1wdHlTdGF0ZW1lbnQsXG4gIEV4cG9ydFN0YXRlbWVudCxcbiAgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCxcbiAgRXhwb3J0SW1wb3J0U3RhdGVtZW50LFxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxuICBGb3JTdGF0ZW1lbnQsXG4gIElmU3RhdGVtZW50LFxuICBJbXBvcnRTdGF0ZW1lbnQsXG4gIFJldHVyblN0YXRlbWVudCxcbiAgU3dpdGNoU3RhdGVtZW50LFxuICBUaHJvd1N0YXRlbWVudCxcbiAgVHJ5U3RhdGVtZW50LFxuICBWYXJpYWJsZVN0YXRlbWVudCxcbiAgV2hpbGVTdGF0ZW1lbnQsXG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIEVudW1EZWNsYXJhdGlvbixcbiAgRW51bVZhbHVlRGVjbGFyYXRpb24sXG4gIEZpZWxkRGVjbGFyYXRpb24sXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIEltcG9ydERlY2xhcmF0aW9uLFxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICBUeXBlRGVjbGFyYXRpb24sXG4gIFZhcmlhYmxlRGVjbGFyYXRpb24sXG4gIERlY29yYXRvck5vZGUsXG4gIEV4cG9ydE1lbWJlcixcbiAgUGFyYW1ldGVyTm9kZSxcbiAgU3dpdGNoQ2FzZSxcbiAgVHlwZU5hbWUsXG4gIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEV4cHJlc3Npb24sXG4gIE9iamVjdExpdGVyYWxFeHByZXNzaW9uLFxuICBBc3NlcnRpb25LaW5kLFxuICBMaXRlcmFsS2luZCxcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBVbmFyeUV4cHJlc3Npb24sXG4gIEFycm93S2luZCxcbiAgUGFyYW1ldGVyS2luZCxcbiAgRGVjbGFyYXRpb25TdGF0ZW1lbnQsXG4gIEFzc2VydGlvbkV4cHJlc3Npb24sXG4gIEJpbmFyeUV4cHJlc3Npb24sXG4gIENvbW1hRXhwcmVzc2lvbixcbiAgSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uLFxuICBpc1R5cGVPbWl0dGVkLFxuICBvcGVyYXRvclRva2VuVG9TdHJpbmcsXG4gIEZvck9mU3RhdGVtZW50LFxuICBJbmRleFNpZ25hdHVyZU5vZGUsXG4gIFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24sXG4gIHV0aWwsXG59IGZyb20gXCJhc3NlbWJseXNjcmlwdC9kaXN0L2Fzc2VtYmx5c2NyaXB0LmpzXCI7XG5pbXBvcnQgeyBCYXNlVmlzaXRvciB9IGZyb20gXCIuL2Jhc2UuanNcIjtcbmltcG9ydCB7IGluZGVudCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbi8vIGRlY2xhcmUgZnVuY3Rpb24gaTY0X3RvX3N0cmluZyhpOiBJNjQpOiBzdHJpbmc7XG4vLyBpbXBvcnQgeyBpNjRfdG9fc3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9nbHVlL2k2NFwiXG5cbi8qKiBBbiBBU1QgYnVpbGRlci4gKi9cbmV4cG9ydCBjbGFzcyBBU1RCdWlsZGVyIGV4dGVuZHMgQmFzZVZpc2l0b3Ige1xuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUpO1xuICB9XG4gIC8qKiBSZWJ1aWxkcyB0aGUgdGV4dHVhbCBzb3VyY2UgZnJvbSB0aGUgc3BlY2lmaWVkIEFTVCwgYXMgZmFyIGFzIHBvc3NpYmxlLiAqL1xuICBzdGF0aWMgYnVpbGQobm9kZTogTm9kZSk6IHN0cmluZyB7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgQVNUQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIudmlzaXROb2RlKG5vZGUpO1xuICAgIHJldHVybiBidWlsZGVyLmZpbmlzaCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbmRlbnRMZXZlbDogaTMyID0gMDtcblxuICB2aXNpdE5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xuICAgICAgICB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0eXBlc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIoPFR5cGVQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbig8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbig8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHRoaXMudmlzaXRMaXRlcmFsRXhwcmVzc2lvbig8TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgdGhpcy52aXNpdE5ld0V4cHJlc3Npb24oPE5ld0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbig8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZPUk9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JPZlN0YXRlbWVudCg8Rm9yT2ZTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JRjoge1xuICAgICAgICB0aGlzLnZpc2l0SWZTdGF0ZW1lbnQoPElmU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnRTdGF0ZW1lbnQoPEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlJFVFVSTjoge1xuICAgICAgICB0aGlzLnZpc2l0UmV0dXJuU3RhdGVtZW50KDxSZXR1cm5TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5TV0lUQ0g6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaFN0YXRlbWVudCg8U3dpdGNoU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhST1c6IHtcbiAgICAgICAgdGhpcy52aXNpdFRocm93U3RhdGVtZW50KDxUaHJvd1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSWToge1xuICAgICAgICB0aGlzLnZpc2l0VHJ5U3RhdGVtZW50KDxUcnlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRToge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVTdGF0ZW1lbnQoPFZhcmlhYmxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuV0hJTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFdoaWxlU3RhdGVtZW50KDxXaGlsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtRGVjbGFyYXRpb24oPEVudW1EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1WQUxVRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbig8RW51bVZhbHVlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGaWVsZERlY2xhcmF0aW9uKDxGaWVsZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVERFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbig8SW1wb3J0RGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcig8UGFyYW1ldGVyTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSENBU0U6IHtcbiAgICAgICAgdGhpcy52aXNpdFN3aXRjaENhc2UoPFN3aXRjaENhc2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTkRFWFNJR05BVFVSRToge1xuICAgICAgICB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmUoPEluZGV4U2lnbmF0dXJlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhc3NlcnQoZmFsc2UsIG5vZGUua2luZC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFNvdXJjZShzb3VyY2U6IFNvdXJjZSk6IHZvaWQge1xuICAgIHZhciBzdGF0ZW1lbnRzID0gc291cmNlLnN0YXRlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHlwZXNcblxuICB2aXNpdFR5cGVOb2RlKG5vZGU6IFR5cGVOb2RlKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lZFR5cGVOb2RlKDxOYW1lZFR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvblR5cGVOb2RlKDxGdW5jdGlvblR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUeXBlTmFtZShub2RlOiBUeXBlTmFtZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmlkZW50aWZpZXIpO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGN1cnJlbnQgPSBub2RlLm5leHQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIHNiLnB1c2goXCIuXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGN1cnJlbnQuaWRlbnRpZmllcik7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0TmFtZWRUeXBlTm9kZShub2RlOiBOYW1lZFR5cGVOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdFR5cGVOYW1lKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGVBcmd1bWVudHMgPSBub2RlLnR5cGVBcmd1bWVudHM7XG4gICAgaWYgKHR5cGVBcmd1bWVudHMpIHtcbiAgICAgIGxldCBudW1UeXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBsZXQgc2IgPSB0aGlzLnNiO1xuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuaXNOdWxsYWJsZSkgc2IucHVzaChcIiB8IG51bGxcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRGdW5jdGlvblR5cGVOb2RlKG5vZGU6IEZ1bmN0aW9uVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB2YXIgaXNOdWxsYWJsZSA9IG5vZGUuaXNOdWxsYWJsZTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goaXNOdWxsYWJsZSA/IFwiKChcIiA6IFwiKFwiKTtcbiAgICB2YXIgZXhwbGljaXRUaGlzVHlwZSA9IG5vZGUuZXhwbGljaXRUaGlzVHlwZTtcbiAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkge1xuICAgICAgc2IucHVzaChcInRoaXM6IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHBsaWNpdFRoaXNUeXBlKTtcbiAgICB9XG4gICAgdmFyIHBhcmFtZXRlcnMgPSBub2RlLnBhcmFtZXRlcnM7XG4gICAgdmFyIG51bVBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICBpZiAobnVtUGFyYW1ldGVycykge1xuICAgICAgaWYgKGV4cGxpY2l0VGhpc1R5cGUpIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1QYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJldHVyblR5cGUgPSBub2RlLnJldHVyblR5cGU7XG4gICAgaWYgKHJldHVyblR5cGUpIHtcbiAgICAgIHNiLnB1c2goXCIpID0+IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIikgPT4gdm9pZFwiKTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbGFibGUpIHNiLnB1c2goXCIpIHwgbnVsbFwiKTtcbiAgfVxuXG4gIHZpc2l0VHlwZVBhcmFtZXRlcihub2RlOiBUeXBlUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCIgZXh0ZW5kcyBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICB2YXIgZGVmYXVsdFR5cGUgPSBub2RlLmRlZmF1bHRUeXBlO1xuICAgIGlmIChkZWZhdWx0VHlwZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiPVwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShkZWZhdWx0VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwcmVzc2lvbnNcblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuaXNRdW90ZWQpIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudGV4dCk7XG4gICAgZWxzZSB0aGlzLnNiLnB1c2gobm9kZS50ZXh0KTtcbiAgfVxuXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiW1wiKTtcbiAgICB2YXIgZWxlbWVudHMgPSBub2RlLmVsZW1lbnRFeHByZXNzaW9ucztcbiAgICB2YXIgbnVtRWxlbWVudHMgPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgaWYgKG51bUVsZW1lbnRzKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzWzBdO1xuICAgICAgaWYgKGVsZW1lbnQpIHRoaXMudmlzaXROb2RlKGVsZW1lbnQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICBpZiAoZWxlbWVudCkgdGhpcy52aXNpdE5vZGUoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCJdXCIpO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIG5hbWVzID0gbm9kZS5uYW1lcztcbiAgICB2YXIgdmFsdWVzID0gbm9kZS52YWx1ZXM7XG4gICAgdmFyIG51bUVsZW1lbnRzID0gbmFtZXMubGVuZ3RoO1xuICAgIGFzc2VydChudW1FbGVtZW50cyA9PSB2YWx1ZXMubGVuZ3RoKTtcbiAgICBpZiAobnVtRWxlbWVudHMpIHtcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCArK3RoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobmFtZXNbMF0pO1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWVzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRWxlbWVudHM7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcbiAgICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgICAgbGV0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAobmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJ7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc3dpdGNoIChub2RlLmFzc2VydGlvbktpbmQpIHtcbiAgICAgIGNhc2UgQXNzZXJ0aW9uS2luZC5QUkVGSVg6IHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShhc3NlcnQobm9kZS50b1R5cGUpKTtcbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkFTOiB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIHNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoYXNzZXJ0KG5vZGUudG9UeXBlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLk5PTk5VTEw6IHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkNPTlNUOiB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIHNiLnB1c2goXCIgYXMgY29uc3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5sZWZ0KTtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICBzYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gICAgc2IucHVzaChcIiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0QXJndW1lbnRzKG5vZGUudHlwZUFyZ3VtZW50cywgbm9kZS5hcmdzKTtcbiAgfVxuXG4gIHZpc2l0QXJndW1lbnRzKFxuICAgIHR5cGVBcmd1bWVudHM6IFR5cGVOb2RlW10gfCBudWxsLFxuICAgIGFyZ3M6IEV4cHJlc3Npb25bXVxuICApOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmICh0eXBlQXJndW1lbnRzKSB7XG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+KFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgfVxuICAgIHZhciBudW1BcmdzID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKG51bUFyZ3MpIHtcbiAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1BcmdzOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbiAgfVxuXG4gIHZpc2l0Q29tbWFFeHByZXNzaW9uKG5vZGU6IENvbW1hRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBleHByZXNzaW9ucyA9IG5vZGUuZXhwcmVzc2lvbnM7XG4gICAgdmFyIG51bUV4cHJlc3Npb25zID0gYXNzZXJ0KGV4cHJlc3Npb25zLmxlbmd0aCk7XG4gICAgdGhpcy52aXNpdE5vZGUoZXhwcmVzc2lvbnNbMF0pO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FeHByZXNzaW9uczsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiLFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGV4cHJlc3Npb25zW2ldKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHNiLnB1c2goXCJbXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xuICAgIHNiLnB1c2goXCJdXCIpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkV4cHJlc3Npb24obm9kZTogRnVuY3Rpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY2xhcmF0aW9uID0gbm9kZS5kZWNsYXJhdGlvbjtcbiAgICBpZiAoIWRlY2xhcmF0aW9uLmFycm93S2luZCkge1xuICAgICAgaWYgKGRlY2xhcmF0aW9uLm5hbWUudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKFwiZnVuY3Rpb24gXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYi5wdXNoKFwiZnVuY3Rpb25cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2VydChkZWNsYXJhdGlvbi5uYW1lLnRleHQubGVuZ3RoID09IDApO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24oZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5saXRlcmFsS2luZCkge1xuICAgICAgY2FzZSBMaXRlcmFsS2luZC5GTE9BVDoge1xuICAgICAgICB0aGlzLnZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbig8RmxvYXRMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLklOVEVHRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbig8SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuU1RSSU5HOiB7XG4gICAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbig8U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5URU1QTEFURToge1xuICAgICAgICB0aGlzLnZpc2l0VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbig8VGVtcGxhdGVMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlJFR0VYUDoge1xuICAgICAgICB0aGlzLnZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5PQkpFQ1Q6IHtcbiAgICAgICAgdGhpcy52aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKG5vZGUudmFsdWUudG9TdHJpbmcoKSk7XG4gIH1cblxuICB2aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKG5vZGU6IEluc3RhbmNlT2ZFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnNiLnB1c2goXCIgaW5zdGFuY2VvZiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUuaXNUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChpNjRfdG9fc3RyaW5nKG5vZGUudmFsdWUpKTtcbiAgfVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbChzdHI6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaCgnXCInKTtcbiAgICB0aGlzLnZpc2l0UmF3U3RyaW5nKHN0ciwgdXRpbC5DaGFyQ29kZS5ET1VCTEVRVU9URSk7XG4gICAgc2IucHVzaCgnXCInKTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaXRSYXdTdHJpbmcoc3RyOiBzdHJpbmcsIHF1b3RlOiB1dGlsLkNoYXJDb2RlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgb2ZmID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IHN0ci5sZW5ndGg7IGkgPCBrOyApIHtcbiAgICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLk5VTEw6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgKG9mZiA9IGkgKyAxKSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcMFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkJBQ0tTUEFDRToge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcYlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuVEFCOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFx0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5MSU5FRkVFRDoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcblwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuVkVSVElDQUxUQUI6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXHZcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkZPUk1GRUVEOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxmXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxyXCIpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIHV0aWwuQ2hhckNvZGUuRE9VQkxFUVVPVEU6IHtcbiAgICAgICAgICBpZiAocXVvdGUgPT0gdXRpbC5DaGFyQ29kZS5ET1VCTEVRVU9URSkge1xuICAgICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICAgIHNiLnB1c2goJ1xcXFxcIicpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5TSU5HTEVRVU9URToge1xuICAgICAgICAgIGlmIChxdW90ZSA9PSB1dGlsLkNoYXJDb2RlLlNJTkdMRVFVT1RFKSB7XG4gICAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgICAgc2IucHVzaChcIlxcXFwnXCIpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgdXRpbC5DaGFyQ29kZS5CQUNLU0xBU0g6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcXFxcXFwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLOiB7XG4gICAgICAgICAgaWYgKHF1b3RlID09IHV0aWwuQ2hhckNvZGUuQkFDS1RJQ0spIHtcbiAgICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgICBzYi5wdXNoKFwiXFxcXGBcIik7XG4gICAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICsraTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFRlbXBsYXRlTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciB0YWcgPSBub2RlLnRhZztcbiAgICB2YXIgcGFydHMgPSBub2RlLnBhcnRzO1xuICAgIHZhciBleHByZXNzaW9ucyA9IG5vZGUuZXhwcmVzc2lvbnM7XG4gICAgaWYgKHRhZykgdGhpcy52aXNpdE5vZGUodGFnKTtcbiAgICBzYi5wdXNoKFwiYFwiKTtcbiAgICB0aGlzLnZpc2l0UmF3U3RyaW5nKHBhcnRzWzBdLCB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLKTtcbiAgICBhc3NlcnQocGFydHMubGVuZ3RoID09IGV4cHJlc3Npb25zLmxlbmd0aCArIDEpO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gZXhwcmVzc2lvbnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBzYi5wdXNoKFwiJHtcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShleHByZXNzaW9uc1tpXSk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICAgIHRoaXMudmlzaXRSYXdTdHJpbmcocGFydHNbaSArIDFdLCB1dGlsLkNoYXJDb2RlLkJBQ0tUSUNLKTtcbiAgICB9XG4gICAgc2IucHVzaChcImBcIik7XG4gIH1cblxuICB2aXNpdFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiL1wiKTtcbiAgICBzYi5wdXNoKG5vZGUucGF0dGVybik7XG4gICAgc2IucHVzaChcIi9cIik7XG4gICAgc2IucHVzaChub2RlLnBhdHRlcm5GbGFncyk7XG4gIH1cblxuICB2aXNpdE5ld0V4cHJlc3Npb24obm9kZTogTmV3RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChcIm5ldyBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOYW1lKG5vZGUudHlwZU5hbWUpO1xuICAgIHRoaXMudmlzaXRBcmd1bWVudHMobm9kZS50eXBlQXJndW1lbnRzLCBub2RlLmFyZ3MpO1xuICB9XG5cbiAgdmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihub2RlOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIihcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICBzYi5wdXNoKFwiKVwiKTtcbiAgfVxuXG4gIHZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy5zYi5wdXNoKFwiLlwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5wcm9wZXJ0eSk7XG4gIH1cblxuICB2aXNpdFRlcm5hcnlFeHByZXNzaW9uKG5vZGU6IFRlcm5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIiA/IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmlmVGhlbik7XG4gICAgc2IucHVzaChcIiA6IFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmlmRWxzZSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUub3BlcmFuZCk7XG4gICAgdGhpcy5zYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UHJlZml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVByZWZpeEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLm9wZXJhbmQpO1xuICB9XG5cbiAgLy8gc3RhdGVtZW50c1xuXG4gIHZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZSk7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoXG4gICAgICAhc2IubGVuZ3RoIHx8IC8vIGxlYWRpbmcgRW1wdHlTdGF0ZW1lbnRcbiAgICAgIG5vZGUua2luZCA9PSBOb2RlS2luZC5WQVJJQUJMRSB8fCAvLyBwb3RlbnRpYWxseSBhc3NpZ25zIGEgRnVuY3Rpb25FeHByZXNzaW9uXG4gICAgICBub2RlLmtpbmQgPT0gTm9kZUtpbmQuRVhQUkVTU0lPTiAvLyBwb3RlbnRpYWxseSBhc3NpZ25zIGEgRnVuY3Rpb25FeHByZXNzaW9uXG4gICAgKSB7XG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGxhc3QgPSBzYltzYi5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBsYXN0Q2hhclBvcyA9IGxhc3QubGVuZ3RoIC0gMTtcbiAgICAgIGlmIChcbiAgICAgICAgbGFzdENoYXJQb3MgPj0gMCAmJlxuICAgICAgICAobGFzdC5jaGFyQ29kZUF0KGxhc3RDaGFyUG9zKSA9PSB1dGlsLkNoYXJDb2RlLkNMT1NFQlJBQ0UgfHxcbiAgICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IHV0aWwuQ2hhckNvZGUuU0VNSUNPTE9OKVxuICAgICAgKSB7XG4gICAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICB2YXIgbnVtU3RhdGVtZW50cyA9IHN0YXRlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XG4gICAgICBzYi5wdXNoKFwie1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3RhdGVtZW50czsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwie31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRCcmVha1N0YXRlbWVudChub2RlOiBCcmVha1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJicmVhayBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obGFiZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJicmVha1wiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENvbnRpbnVlU3RhdGVtZW50KG5vZGU6IENvbnRpbnVlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihsYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImNvbnRpbnVlXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBpc0RlZmF1bHQgPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkFCU1RSQUNUKSkgc2IucHVzaChcImFic3RyYWN0IFwiKTtcbiAgICBpZiAobm9kZS5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICBzYi5wdXNoKFwiY2xhc3MgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJjbGFzc1wiKTtcbiAgICB9XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMgIT0gbnVsbCAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxLCBrID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgfVxuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgdmFyIGltcGxlbWVudHNUeXBlcyA9IG5vZGUuaW1wbGVtZW50c1R5cGVzO1xuICAgIGlmIChpbXBsZW1lbnRzVHlwZXMpIHtcbiAgICAgIGxldCBudW1JbXBsZW1lbnRzVHlwZXMgPSBpbXBsZW1lbnRzVHlwZXMubGVuZ3RoO1xuICAgICAgaWYgKG51bUltcGxlbWVudHNUeXBlcykge1xuICAgICAgICBzYi5wdXNoKFwiIGltcGxlbWVudHMgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoaW1wbGVtZW50c1R5cGVzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1JbXBsZW1lbnRzVHlwZXM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoaW1wbGVtZW50c1R5cGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW5kZXhTaWduYXR1cmUgPSBub2RlLmluZGV4U2lnbmF0dXJlO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIHZhciBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgaWYgKGluZGV4U2lnbmF0dXJlICE9PSBudWxsIHx8IG51bU1lbWJlcnMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGlmIChpbmRleFNpZ25hdHVyZSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoaW5kZXhTaWduYXR1cmUpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBsZXQgbWVtYmVyID0gbWVtYmVyc1tpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1lbWJlci5raW5kICE9IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT04gfHxcbiAgICAgICAgICAoPEZpZWxkRGVjbGFyYXRpb24+bWVtYmVyKS5wYXJhbWV0ZXJJbmRleCA8IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCIge31cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXREb1N0YXRlbWVudChub2RlOiBEb1N0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImRvIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gICAgaWYgKG5vZGUuc3RhdGVtZW50LmtpbmQgPT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgIHNiLnB1c2goXCIgd2hpbGUgKFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ3aGlsZSAoXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7XG4gICAgLyogbm9wICovXG4gIH1cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5DT05TVCkpIHNiLnB1c2goXCJjb25zdCBcIik7XG4gICAgc2IucHVzaChcImVudW0gXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcbiAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWVzLmxlbmd0aDtcbiAgICBpZiAobnVtVmFsdWVzKSB7XG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlLnZhbHVlc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVZhbHVlczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGUudmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIiB7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cG9ydEltcG9ydFN0YXRlbWVudChub2RlOiBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJleHBvcnQgaW1wb3J0IFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5leHRlcm5hbE5hbWUpO1xuICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gIH1cblxuICB2aXNpdEV4cG9ydE1lbWJlcihub2RlOiBFeHBvcnRNZW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5sb2NhbE5hbWUpO1xuICAgIGlmIChub2RlLmV4cG9ydGVkTmFtZS50ZXh0ICE9IG5vZGUubG9jYWxOYW1lLnRleHQpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5leHBvcnRlZE5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXNEZWNsYXJlKSB7XG4gICAgICBzYi5wdXNoKFwiZGVjbGFyZSBcIik7XG4gICAgfVxuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIGlmIChtZW1iZXJzID09IG51bGwpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgKlwiKTtcbiAgICB9IGVsc2UgaWYgKG1lbWJlcnMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtTWVtYmVyczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcihtZW1iZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIHNiLnB1c2goXCJcXG59XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IHt9XCIpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IG5vZGUucGF0aDtcbiAgICBpZiAocGF0aCkge1xuICAgICAgc2IucHVzaChcIiBmcm9tIFwiKTtcbiAgICAgIHRoaXMudmlzaXRTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbihwYXRoKTtcbiAgICB9XG4gICAgc2IucHVzaChcIjtcIik7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgc3dpdGNoIChkZWNsYXJhdGlvbi5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbig8RnVuY3Rpb25EZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKDxDbGFzc0RlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEZpZWxkRGVjbGFyYXRpb24obm9kZTogRmllbGREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmZsYWdzICYgQ29tbW9uRmxhZ3MuREVGSU5JVEVMWV9BU1NJR05FRCkge1xuICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgfVxuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgfVxuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImZvciAoXCIpO1xuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICAgIHZhciBjb25kaXRpb24gPSBub2RlLmNvbmRpdGlvbjtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICBzYi5wdXNoKFwiOyBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShjb25kaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiO1wiKTtcbiAgICB9XG4gICAgdmFyIGluY3JlbWVudG9yID0gbm9kZS5pbmNyZW1lbnRvcjtcbiAgICBpZiAoaW5jcmVtZW50b3IpIHtcbiAgICAgIHNiLnB1c2goXCI7IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluY3JlbWVudG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcIik7XG4gICAgfVxuICAgIHNiLnB1c2goXCIpIFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEZvck9mU3RhdGVtZW50KG5vZGU6IEZvck9mU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiZm9yIChcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS52YXJpYWJsZSk7XG4gICAgc2IucHVzaChcIiBvZiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5pdGVyYWJsZSk7XG4gICAgc2IucHVzaChcIikgXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuc3RhdGVtZW50KTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25EZWNsYXJhdGlvbihcbiAgICBub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUubmFtZS50ZXh0Lmxlbmd0aCkge1xuICAgICAgc2IucHVzaChcImZ1bmN0aW9uIFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcImZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0RnVuY3Rpb25Db21tb24obm9kZSk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciBzaWduYXR1cmUgPSBub2RlLnNpZ25hdHVyZTtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycykge1xuICAgICAgbGV0IG51bVR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtVHlwZVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLmFycm93S2luZCA9PSBBcnJvd0tpbmQuQVJST1dfU0lOR0xFKSB7XG4gICAgICBsZXQgcGFyYW1ldGVycyA9IHNpZ25hdHVyZS5wYXJhbWV0ZXJzO1xuICAgICAgYXNzZXJ0KHBhcmFtZXRlcnMubGVuZ3RoID09IDEpO1xuICAgICAgYXNzZXJ0KCFzaWduYXR1cmUuZXhwbGljaXRUaGlzVHlwZSk7XG4gICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgICBsZXQgcGFyYW1ldGVycyA9IHNpZ25hdHVyZS5wYXJhbWV0ZXJzO1xuICAgICAgbGV0IG51bVBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgIGxldCBleHBsaWNpdFRoaXNUeXBlID0gc2lnbmF0dXJlLmV4cGxpY2l0VGhpc1R5cGU7XG4gICAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkge1xuICAgICAgICBzYi5wdXNoKFwidGhpczogXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXhwbGljaXRUaGlzVHlwZSk7XG4gICAgICB9XG4gICAgICBpZiAobnVtUGFyYW1ldGVycykge1xuICAgICAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1QYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJvZHkgPSBub2RlLmJvZHk7XG4gICAgdmFyIHJldHVyblR5cGUgPSBzaWduYXR1cmUucmV0dXJuVHlwZTtcbiAgICBpZiAobm9kZS5hcnJvd0tpbmQpIHtcbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIGlmIChub2RlLmFycm93S2luZCA9PSBBcnJvd0tpbmQuQVJST1dfU0lOR0xFKSB7XG4gICAgICAgICAgYXNzZXJ0KGlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpKSB7XG4gICAgICAgICAgICBzYi5wdXNoKFwiKVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2IucHVzaChcIik6IFwiKTtcbiAgICAgICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIiA9PiBcIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKGJvZHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzZXJ0KCFpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpKTtcbiAgICAgICAgc2IucHVzaChcIiA9PiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSAmJlxuICAgICAgICAhbm9kZS5pc0FueShDb21tb25GbGFncy5DT05TVFJVQ1RPUiB8IENvbW1vbkZsYWdzLlNFVClcbiAgICAgICkge1xuICAgICAgICBzYi5wdXNoKFwiKTogXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUocmV0dXJuVHlwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwiKVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIHNiLnB1c2goXCIgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZShib2R5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdElmU3RhdGVtZW50KG5vZGU6IElmU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiaWYgKFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIikgXCIpO1xuICAgIHZhciBpZlRydWUgPSBub2RlLmlmVHJ1ZTtcbiAgICB0aGlzLnZpc2l0Tm9kZShpZlRydWUpO1xuICAgIGlmIChpZlRydWUua2luZCAhPSBOb2RlS2luZC5CTE9DSykge1xuICAgICAgc2IucHVzaChcIjtcXG5cIik7XG4gICAgfVxuICAgIHZhciBpZkZhbHNlID0gbm9kZS5pZkZhbHNlO1xuICAgIGlmIChpZkZhbHNlKSB7XG4gICAgICBpZiAoaWZUcnVlLmtpbmQgPT0gTm9kZUtpbmQuQkxPQ0spIHtcbiAgICAgICAgc2IucHVzaChcIiBlbHNlIFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCJlbHNlIFwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlzaXROb2RlKGlmRmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0SW1wb3J0RGVjbGFyYXRpb24obm9kZTogSW1wb3J0RGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZXh0ZXJuYWxOYW1lID0gbm9kZS5mb3JlaWduTmFtZTtcbiAgICB2YXIgbmFtZSA9IG5vZGUubmFtZTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oZXh0ZXJuYWxOYW1lKTtcbiAgICBpZiAoZXh0ZXJuYWxOYW1lLnRleHQgIT0gbmFtZS50ZXh0KSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImltcG9ydCBcIik7XG4gICAgdmFyIGRlY2xhcmF0aW9ucyA9IG5vZGUuZGVjbGFyYXRpb25zO1xuICAgIHZhciBuYW1lc3BhY2VOYW1lID0gbm9kZS5uYW1lc3BhY2VOYW1lO1xuICAgIGlmIChkZWNsYXJhdGlvbnMpIHtcbiAgICAgIGxldCBudW1EZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnMubGVuZ3RoO1xuICAgICAgaWYgKG51bURlY2xhcmF0aW9ucykge1xuICAgICAgICBzYi5wdXNoKFwie1xcblwiKTtcbiAgICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRGVjbGFyYXRpb25zOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcbiAgICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oZGVjbGFyYXRpb25zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgICAgIHNiLnB1c2goXCJcXG59IGZyb20gXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcInt9IGZyb20gXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlTmFtZSkge1xuICAgICAgc2IucHVzaChcIiogYXMgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5hbWVzcGFjZU5hbWUpO1xuICAgICAgc2IucHVzaChcIiBmcm9tIFwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKG5vZGUucGF0aCk7XG4gIH1cblxuICB2aXNpdEluZGV4U2lnbmF0dXJlKG5vZGU6IEluZGV4U2lnbmF0dXJlTm9kZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcIltrZXk6IFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS5rZXlUeXBlKTtcbiAgICBzYi5wdXNoKFwiXTogXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLnZhbHVlVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdCA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChpc0RlZmF1bHQpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgZGVmYXVsdCBcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZSk7XG4gICAgfVxuICAgIHNiLnB1c2goXCJpbnRlcmZhY2UgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzICE9IG51bGwgJiYgdHlwZVBhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMSwgayA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgIH1cbiAgICB2YXIgZXh0ZW5kc1R5cGUgPSBub2RlLmV4dGVuZHNUeXBlO1xuICAgIGlmIChleHRlbmRzVHlwZSkge1xuICAgICAgc2IucHVzaChcIiBleHRlbmRzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIC8vIG11c3Qgbm90IGhhdmUgaW1wbGVtZW50c1R5cGVzXG4gICAgc2IucHVzaChcIiB7XFxuXCIpO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IG1lbWJlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKG1lbWJlcnNbaV0pO1xuICAgIH1cbiAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgc2IucHVzaChcIn1cIik7XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGUpO1xuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkdFVCkpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImdldCBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlNFVCkpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcInNldCBcIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRGdW5jdGlvbkNvbW1vbihub2RlKTtcbiAgfVxuXG4gIHZpc2l0TmFtZXNwYWNlRGVjbGFyYXRpb24oXG4gICAgbm9kZTogTmFtZXNwYWNlRGVjbGFyYXRpb24sXG4gICAgaXNEZWZhdWx0ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICB9XG4gICAgc2IucHVzaChcIm5hbWVzcGFjZSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgdmFyIG51bU1lbWJlcnMgPSBtZW1iZXJzLmxlbmd0aDtcbiAgICBpZiAobnVtTWVtYmVycykge1xuICAgICAgc2IucHVzaChcIiB7XFxuXCIpO1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBtZW1iZXJzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyc1tpXSk7XG4gICAgICB9XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIiB7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFJldHVyblN0YXRlbWVudChub2RlOiBSZXR1cm5TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwicmV0dXJuIFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYi5wdXNoKFwicmV0dXJuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U3dpdGNoQ2FzZShub2RlOiBTd2l0Y2hDYXNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgc2IucHVzaChcImNhc2UgXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobGFiZWwpO1xuICAgICAgc2IucHVzaChcIjpcXG5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJkZWZhdWx0OlxcblwiKTtcbiAgICB9XG4gICAgdmFyIHN0YXRlbWVudHMgPSBub2RlLnN0YXRlbWVudHM7XG4gICAgdmFyIG51bVN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobnVtU3RhdGVtZW50cykge1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtU3RhdGVtZW50czsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB9XG4gIH1cblxuICB2aXNpdFN3aXRjaFN0YXRlbWVudChub2RlOiBTd2l0Y2hTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJzd2l0Y2ggKFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIikge1xcblwiKTtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgdmFyIGNhc2VzID0gbm9kZS5jYXNlcztcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IGNhc2VzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZShjYXNlc1tpXSk7XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgIH1cbiAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgc2IucHVzaChcIn1cIik7XG4gIH1cblxuICB2aXNpdFRocm93U3RhdGVtZW50KG5vZGU6IFRocm93U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKFwidGhyb3cgXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUcnlTdGF0ZW1lbnQobm9kZTogVHJ5U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwidHJ5IHtcXG5cIik7XG4gICAgdmFyIGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoc3RhdGVtZW50c1tpXSk7XG4gICAgfVxuICAgIHZhciBjYXRjaFZhcmlhYmxlID0gbm9kZS5jYXRjaFZhcmlhYmxlO1xuICAgIGlmIChjYXRjaFZhcmlhYmxlKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XG4gICAgICBzYi5wdXNoKFwifSBjYXRjaCAoXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGNhdGNoVmFyaWFibGUpO1xuICAgICAgc2IucHVzaChcIikge1xcblwiKTtcbiAgICAgIGxldCBjYXRjaFN0YXRlbWVudHMgPSBub2RlLmNhdGNoU3RhdGVtZW50cztcbiAgICAgIGlmIChjYXRjaFN0YXRlbWVudHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBjYXRjaFN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoY2F0Y2hTdGF0ZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZmluYWxseVN0YXRlbWVudHMgPSBub2RlLmZpbmFsbHlTdGF0ZW1lbnRzO1xuICAgIGlmIChmaW5hbGx5U3RhdGVtZW50cykge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCAtIDEpO1xuICAgICAgc2IucHVzaChcIn0gZmluYWxseSB7XFxuXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBmaW5hbGx5U3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKGZpbmFsbHlTdGF0ZW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCAtIDEpO1xuICAgIHNiLnB1c2goXCJ9XCIpO1xuICB9XG5cbiAgdmlzaXRUeXBlRGVjbGFyYXRpb24obm9kZTogVHlwZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICBzYi5wdXNoKFwidHlwZSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgIGxldCBudW1UeXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzLmxlbmd0aDtcbiAgICAgIGlmIChudW1UeXBlUGFyYW1ldGVycykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UeXBlUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLnR5cGUpO1xuICB9XG5cbiAgdmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKG5vZGU6IFZhcmlhYmxlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmZsYWdzICYgQ29tbW9uRmxhZ3MuREVGSU5JVEVMWV9BU1NJR05FRCkge1xuICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgfVxuICAgIGlmICh0eXBlKSB7XG4gICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgfVxuICAgIHZhciBpbml0aWFsaXplciA9IG5vZGUuaW5pdGlhbGl6ZXI7XG4gICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICBzYi5wdXNoKFwiID0gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gbm9kZS5kZWNsYXJhdGlvbnM7XG4gICAgdmFyIG51bURlY2xhcmF0aW9ucyA9IGFzc2VydChkZWNsYXJhdGlvbnMubGVuZ3RoKTtcbiAgICB2YXIgZmlyc3REZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uc1swXTtcbiAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKGZpcnN0RGVjbGFyYXRpb24pO1xuICAgIHNiLnB1c2goXG4gICAgICBmaXJzdERlY2xhcmF0aW9uLmlzKENvbW1vbkZsYWdzLkNPTlNUKVxuICAgICAgICA/IFwiY29uc3QgXCJcbiAgICAgICAgOiBmaXJzdERlY2xhcmF0aW9uLmlzKENvbW1vbkZsYWdzLkxFVClcbiAgICAgICAgPyBcImxldCBcIlxuICAgICAgICA6IFwidmFyIFwiXG4gICAgKTtcbiAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1EZWNsYXJhdGlvbnM7ICsraSkge1xuICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZS5kZWNsYXJhdGlvbnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0V2hpbGVTdGF0ZW1lbnQobm9kZTogV2hpbGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJ3aGlsZSAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICB2YXIgc3RhdGVtZW50ID0gbm9kZS5zdGF0ZW1lbnQ7XG4gICAgaWYgKHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLkVNUFRZKSB7XG4gICAgICBzYi5wdXNoKFwiKVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIikgXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG90aGVyXG5cbiAgc2VyaWFsaXplRGVjb3JhdG9yKG5vZGU6IERlY29yYXRvck5vZGUpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJAXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUubmFtZSk7XG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3M7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgIHNiLnB1c2goXCIoXCIpO1xuICAgICAgbGV0IG51bUFyZ3MgPSBhcmdzLmxlbmd0aDtcbiAgICAgIGlmIChudW1BcmdzKSB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUFyZ3M7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShhcmdzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2IucHVzaChcIilcXG5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgfVxuICAgIGluZGVudChzYiwgdGhpcy5pbmRlbnRMZXZlbCk7XG4gIH1cblxuICBzZXJpYWxpemVQYXJhbWV0ZXIobm9kZTogUGFyYW1ldGVyTm9kZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIGtpbmQgPSBub2RlLnBhcmFtZXRlcktpbmQ7XG4gICAgdmFyIGltcGxpY2l0RmllbGREZWNsYXJhdGlvbiA9IG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uO1xuICAgIGlmIChpbXBsaWNpdEZpZWxkRGVjbGFyYXRpb24pIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKGltcGxpY2l0RmllbGREZWNsYXJhdGlvbik7XG4gICAgfVxuICAgIGlmIChraW5kID09IFBhcmFtZXRlcktpbmQuUkVTVCkge1xuICAgICAgc2IucHVzaChcIi4uLlwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAodHlwZSkge1xuICAgICAgaWYgKGtpbmQgPT0gUGFyYW1ldGVyS2luZC5PUFRJT05BTCAmJiAhaW5pdGlhbGl6ZXIpIHNiLnB1c2goXCI/XCIpO1xuICAgICAgaWYgKCFpc1R5cGVPbWl0dGVkKHR5cGUpKSB7XG4gICAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMobm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkVYUE9SVCkpIHtcbiAgICAgIHNiLnB1c2goXCJleHBvcnQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5JTVBPUlQpKSB7XG4gICAgICBzYi5wdXNoKFwiaW1wb3J0IFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuREVDTEFSRSkpIHtcbiAgICAgIHNiLnB1c2goXCJkZWNsYXJlIFwiKTtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZTogRGVjbGFyYXRpb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBVQkxJQykpIHtcbiAgICAgIHNiLnB1c2goXCJwdWJsaWMgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5QUklWQVRFKSkge1xuICAgICAgc2IucHVzaChcInByaXZhdGUgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5QUk9URUNURUQpKSB7XG4gICAgICBzYi5wdXNoKFwicHJvdGVjdGVkIFwiKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuU1RBVElDKSkge1xuICAgICAgc2IucHVzaChcInN0YXRpYyBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLkFCU1RSQUNUKSkge1xuICAgICAgc2IucHVzaChcImFic3RyYWN0IFwiKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUkVBRE9OTFkpKSB7XG4gICAgICBzYi5wdXNoKFwicmVhZG9ubHkgXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaCgpOiBzdHJpbmcge1xuICAgIHZhciByZXQgPSB0aGlzLnNiLmpvaW4oXCJcIik7XG4gICAgdGhpcy5zYiA9IFtdO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==