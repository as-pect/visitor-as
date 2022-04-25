/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Node,
  NodeKind,
  Source,
  NamedTypeNode,
  FunctionTypeNode,
  TypeName,
  TypeParameterNode,
  IdentifierExpression,
  AssertionExpression,
  BinaryExpression,
  CallExpression,
  ClassExpression,
  CommaExpression,
  ElementAccessExpression,
  FunctionExpression,
  InstanceOfExpression,
  LiteralExpression,
  NewExpression,
  ParenthesizedExpression,
  PropertyAccessExpression,
  TernaryExpression,
  UnaryPostfixExpression,
  UnaryPrefixExpression,
  BlockStatement,
  BreakStatement,
  ContinueStatement,
  DoStatement,
  EmptyStatement,
  ExportStatement,
  ExportDefaultStatement,
  ExportImportStatement,
  ExpressionStatement,
  ForStatement,
  IfStatement,
  ImportStatement,
  ReturnStatement,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  VariableStatement,
  WhileStatement,
  ClassDeclaration,
  EnumDeclaration,
  EnumValueDeclaration,
  FieldDeclaration,
  FunctionDeclaration,
  ImportDeclaration,
  InterfaceDeclaration,
  MethodDeclaration,
  NamespaceDeclaration,
  TypeDeclaration,
  VariableDeclaration,
  DecoratorNode,
  IndexSignatureNode,
  ParameterNode,
  ExportMember,
  SwitchCase,
  TypeNode,
  ArrayLiteralExpression,
  Expression,
  ObjectLiteralExpression,
  FloatLiteralExpression,
  IntegerLiteralExpression,
  StringLiteralExpression,
  RegexpLiteralExpression,
  UnaryExpression,
  SuperExpression,
  FalseExpression,
  TrueExpression,
  ThisExpression,
  NullExpression,
  ConstructorExpression,
  Statement,
  VoidStatement,
  LiteralKind,
  CommentNode,
  TemplateLiteralExpression,
} from "assemblyscript/dist/assemblyscript.js";

import { AbstractVisitor } from "./visitor.js";

export class BaseVisitor extends AbstractVisitor<Node> {
  depth = 0;

  protected _visit(node: Node): void {
    switch (node.kind) {
      case NodeKind.SOURCE: {
        this.visitSource(<Source>node);
        break;
      }

      // types

      case NodeKind.NAMEDTYPE: {
        this.visitNamedTypeNode(<NamedTypeNode>node);
        break;
      }
      case NodeKind.FUNCTIONTYPE: {
        this.visitFunctionTypeNode(<FunctionTypeNode>node);
        break;
      }
      case NodeKind.TYPENAME: {
        this.visitTypeName(<TypeName>node);
      }
      case NodeKind.TYPEPARAMETER: {
        this.visitTypeParameter(<TypeParameterNode>node);
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
        this.visitIdentifierExpression(<IdentifierExpression>node);
        break;
      }
      case NodeKind.ASSERTION: {
        this.visitAssertionExpression(<AssertionExpression>node);
        break;
      }
      case NodeKind.BINARY: {
        this.visitBinaryExpression(<BinaryExpression>node);
        break;
      }
      case NodeKind.CALL: {
        this.visitCallExpression(<CallExpression>node);
        break;
      }
      case NodeKind.CLASS: {
        this.visitClassExpression(<ClassExpression>node);
        break;
      }
      case NodeKind.COMMA: {
        this.visitCommaExpression(<CommaExpression>node);
        break;
      }
      case NodeKind.ELEMENTACCESS: {
        this.visitElementAccessExpression(
          <ElementAccessExpression>node
        );
        break;
      }
      case NodeKind.FUNCTION: {
        this.visitFunctionExpression(<FunctionExpression>node);
        break;
      }
      case NodeKind.INSTANCEOF: {
        this.visitInstanceOfExpression(<InstanceOfExpression>node);
        break;
      }
      case NodeKind.LITERAL: {
        this.visitLiteralExpression(<LiteralExpression>node);
        break;
      }
      case NodeKind.NEW: {
        this.visitNewExpression(<NewExpression>node);
        break;
      }
      case NodeKind.PARENTHESIZED: {
        this.visitParenthesizedExpression(
          <ParenthesizedExpression>node
        );
        break;
      }
      case NodeKind.PROPERTYACCESS: {
        this.visitPropertyAccessExpression(
          <PropertyAccessExpression>node
        );
        break;
      }
      case NodeKind.TERNARY: {
        this.visitTernaryExpression(<TernaryExpression>node);
        break;
      }
      case NodeKind.UNARYPOSTFIX: {
        this.visitUnaryPostfixExpression(<UnaryPostfixExpression>node);
        break;
      }
      case NodeKind.UNARYPREFIX: {
        this.visitUnaryPrefixExpression(<UnaryPrefixExpression>node);
        break;
      }

      // statements

      case NodeKind.BLOCK: {
        this.visitBlockStatement(<BlockStatement>node);
        break;
      }
      case NodeKind.BREAK: {
        this.visitBreakStatement(<BreakStatement>node);
        break;
      }
      case NodeKind.CONTINUE: {
        this.visitContinueStatement(<ContinueStatement>node);
        break;
      }
      case NodeKind.DO: {
        this.visitDoStatement(<DoStatement>node);
        break;
      }
      case NodeKind.EMPTY: {
        this.visitEmptyStatement(<EmptyStatement>node);
        break;
      }
      case NodeKind.EXPORT: {
        this.visitExportStatement(<ExportStatement>node);
        break;
      }
      case NodeKind.EXPORTDEFAULT: {
        this.visitExportDefaultStatement(<ExportDefaultStatement>node);
        break;
      }
      case NodeKind.EXPORTIMPORT: {
        this.visitExportImportStatement(<ExportImportStatement>node);
        break;
      }
      case NodeKind.EXPRESSION: {
        this.visitExpressionStatement(<ExpressionStatement>node);
        break;
      }
      case NodeKind.FOR: {
        this.visitForStatement(<ForStatement>node);
        break;
      }
      case NodeKind.IF: {
        this.visitIfStatement(<IfStatement>node);
        break;
      }
      case NodeKind.IMPORT: {
        this.visitImportStatement(<ImportStatement>node);
        break;
      }
      case NodeKind.RETURN: {
        this.visitReturnStatement(<ReturnStatement>node);
        break;
      }
      case NodeKind.SWITCH: {
        this.visitSwitchStatement(<SwitchStatement>node);
        break;
      }
      case NodeKind.THROW: {
        this.visitThrowStatement(<ThrowStatement>node);
        break;
      }
      case NodeKind.TRY: {
        this.visitTryStatement(<TryStatement>node);
        break;
      }
      case NodeKind.VARIABLE: {
        this.visitVariableStatement(<VariableStatement>node);
        break;
      }
      case NodeKind.WHILE: {
        this.visitWhileStatement(<WhileStatement>node);
        break;
      }

      // declaration statements

      case NodeKind.CLASSDECLARATION: {
        this.visitClassDeclaration(<ClassDeclaration>node);
        break;
      }
      case NodeKind.ENUMDECLARATION: {
        this.visitEnumDeclaration(<EnumDeclaration>node);
        break;
      }
      case NodeKind.ENUMVALUEDECLARATION: {
        this.visitEnumValueDeclaration(<EnumValueDeclaration>node);
        break;
      }
      case NodeKind.FIELDDECLARATION: {
        this.visitFieldDeclaration(<FieldDeclaration>node);
        break;
      }
      case NodeKind.FUNCTIONDECLARATION: {
        this.visitFunctionDeclaration(<FunctionDeclaration>node);
        break;
      }
      case NodeKind.IMPORTDECLARATION: {
        this.visitImportDeclaration(<ImportDeclaration>node);
        break;
      }
      case NodeKind.INTERFACEDECLARATION: {
        this.visitInterfaceDeclaration(<InterfaceDeclaration>node);
        break;
      }
      case NodeKind.METHODDECLARATION: {
        this.visitMethodDeclaration(<MethodDeclaration>node);
        break;
      }
      case NodeKind.NAMESPACEDECLARATION: {
        this.visitNamespaceDeclaration(<NamespaceDeclaration>node);
        break;
      }
      case NodeKind.TYPEDECLARATION: {
        this.visitTypeDeclaration(<TypeDeclaration>node);
        break;
      }
      case NodeKind.VARIABLEDECLARATION: {
        this.visitVariableDeclaration(<VariableDeclaration>node);
        break;
      }

      // other

      case NodeKind.DECORATOR: {
        this.visitDecoratorNode(<DecoratorNode>node);
        break;
      }
      case NodeKind.EXPORTMEMBER: {
        this.visitExportMember(<ExportMember>node);
        break;
      }
      case NodeKind.PARAMETER: {
        this.visitParameter(<ParameterNode>node);
        break;
      }
      case NodeKind.SWITCHCASE: {
        this.visitSwitchCase(<SwitchCase>node);
        break;
      }
      case NodeKind.INDEXSIGNATURE: {
        this.visitIndexSignature(<IndexSignatureNode>node);
        break;
      }
      default:
        assert(false);
    }
  }

  visitSource(node: Source): void {
    for (const stmt of node.statements) {
      this.depth++;
      this.visit(stmt);
      this.depth--;
    }
  }

  visitTypeNode(node: TypeNode): void { }

  visitTypeName(node: TypeName): void {
    this.visit(node.identifier);
    this.visit(node.next);
  }

  visitNamedTypeNode(node: NamedTypeNode): void {
    this.visit(node.name);
    this.visit(node.typeArguments);
  }

  visitFunctionTypeNode(node: FunctionTypeNode): void {
    this.visit(node.parameters);
    this.visit(node.returnType);
    this.visit(node.explicitThisType);
  }

  visitTypeParameter(node: TypeParameterNode): void {
    this.visit(node.name);
    this.visit(node.extendsType);
    this.visit(node.defaultType);
  }

  visitIdentifierExpression(node: IdentifierExpression): void { }

  visitArrayLiteralExpression(node: ArrayLiteralExpression): void {
    this.visit(node.elementExpressions);
  }

  visitObjectLiteralExpression(node: ObjectLiteralExpression): void {
    this.visit(node.names);
    this.visit(node.values);
  }

  visitAssertionExpression(node: AssertionExpression): void {
    this.visit(node.toType);
    this.visit(node.expression);
  }

  visitBinaryExpression(node: BinaryExpression): void {
    this.visit(node.left);
    this.visit(node.right);
  }

  visitCallExpression(node: CallExpression): void {
    this.visit(node.expression);
    this.visitArguments(node.typeArguments, node.args);
  }

  visitArguments(typeArguments: TypeNode[] | null, args: Expression[]): void {
    this.visit(typeArguments);
    this.visit(args);
  }

  visitClassExpression(node: ClassExpression): void {
    this.visit(node.declaration);
  }

  visitCommaExpression(node: CommaExpression): void {
    this.visit(node.expressions);
  }

  visitElementAccessExpression(node: ElementAccessExpression): void {
    this.visit(node.elementExpression);
    this.visit(node.expression);
  }

  visitFunctionExpression(node: FunctionExpression): void {
    this.visit(node.declaration);
  }

  visitLiteralExpression(node: LiteralExpression): void {
    switch (node.literalKind) {
      case LiteralKind.FLOAT: {
        this.visitFloatLiteralExpression(<FloatLiteralExpression>node);
        break;
      }
      case LiteralKind.INTEGER: {
        this.visitIntegerLiteralExpression(
          <IntegerLiteralExpression>node
        );
        break;
      }
      case LiteralKind.STRING: {
        this.visitStringLiteralExpression(
          <StringLiteralExpression>node
        );
        break;
      }
      case LiteralKind.TEMPLATE: {
        this.visitTemplateLiteralExpression(
          <TemplateLiteralExpression>node
        );
        break;
      }
      case LiteralKind.REGEXP: {
        this.visitRegexpLiteralExpression(
          <RegexpLiteralExpression>node
        );
        break;
      }
      case LiteralKind.ARRAY: {
        this.visitArrayLiteralExpression(<ArrayLiteralExpression>node);
        break;
      }
      case LiteralKind.OBJECT: {
        this.visitObjectLiteralExpression(
          <ObjectLiteralExpression>node
        );
        break;
      }
      default:
        throw new Error("Invalid LiteralKind: " + node.literalKind);
    }
  }

  visitFloatLiteralExpression(node: FloatLiteralExpression): void { }

  visitInstanceOfExpression(node: InstanceOfExpression): void {
    this.visit(node.expression);
    this.visit(node.isType);
  }

  visitIntegerLiteralExpression(node: IntegerLiteralExpression): void { }

  visitStringLiteral(str: string, singleQuoted: bool = false): void { }

  visitStringLiteralExpression(node: StringLiteralExpression): void {
    this.visitStringLiteral(node.value);
  }

  visitTemplateLiteralExpression(node: TemplateLiteralExpression): void { }

  visitRegexpLiteralExpression(node: RegexpLiteralExpression): void { }

  visitNewExpression(node: NewExpression): void {
    this.visit(node.typeArguments);
    this.visitArguments(node.typeArguments, node.args);
    this.visit(node.args);
  }

  visitParenthesizedExpression(node: ParenthesizedExpression): void {
    this.visit(node.expression);
  }

  visitPropertyAccessExpression(node: PropertyAccessExpression): void {
    this.visit(node.property);
    this.visit(node.expression);
  }

  visitTernaryExpression(node: TernaryExpression): void {
    this.visit(node.condition);
    this.visit(node.ifThen);
    this.visit(node.ifElse);
  }

  visitUnaryExpression(node: UnaryExpression): void {
    this.visit(node.operand);
  }

  visitUnaryPostfixExpression(node: UnaryPostfixExpression): void {
    this.visit(node.operand);
  }

  visitUnaryPrefixExpression(node: UnaryPrefixExpression): void {
    this.visit(node.operand);
  }

  visitSuperExpression(node: SuperExpression): void { }

  visitFalseExpression(node: FalseExpression): void { }

  visitTrueExpression(node: TrueExpression): void { }

  visitThisExpression(node: ThisExpression): void { }

  visitNullExperssion(node: NullExpression): void { }

  visitConstructorExpression(node: ConstructorExpression): void { }

  visitNodeAndTerminate(statement: Statement): void { }

  visitBlockStatement(node: BlockStatement): void {
    this.depth++;
    this.visit(node.statements);
    this.depth--;
  }

  visitBreakStatement(node: BreakStatement): void {
    this.visit(node.label);
  }

  visitContinueStatement(node: ContinueStatement): void {
    this.visit(node.label);
  }

  visitClassDeclaration(node: ClassDeclaration, isDefault = false): void {
    this.visit(node.name);
    this.depth++;
    this.visit(node.decorators);
    assert(
      node.isGeneric
        ? node.typeParameters != null
        : node.typeParameters == null
    );
    this.visit(node.typeParameters);
    this.visit(node.extendsType);
    this.visit(node.implementsTypes);
    this.visit(node.members);
    this.depth--;
  }

  visitDoStatement(node: DoStatement): void {
    this.visit(node.condition);
    this.visit(node.statement);
  }

  visitEmptyStatement(node: EmptyStatement): void { }

  visitEnumDeclaration(node: EnumDeclaration, isDefault = false): void {
    this.visit(node.name);
    this.visit(node.decorators);
    this.visit(node.values);
  }

  visitEnumValueDeclaration(node: EnumValueDeclaration): void {
    this.visit(node.name);
    this.visit(node.initializer);
  }

  visitExportImportStatement(node: ExportImportStatement): void {
    this.visit(node.name);
    this.visit(node.externalName);
  }

  visitExportMember(node: ExportMember): void {
    this.visit(node.localName);
    this.visit(node.exportedName);
  }

  visitExportStatement(node: ExportStatement): void {
    this.visit(node.path);
    this.visit(node.members);
  }

  visitExportDefaultStatement(node: ExportDefaultStatement): void {
    this.visit(node.declaration);
  }

  visitExpressionStatement(node: ExpressionStatement): void {
    this.visit(node.expression);
  }

  visitFieldDeclaration(node: FieldDeclaration): void {
    this.visit(node.name);
    this.visit(node.type);
    this.visit(node.initializer);
    this.visit(node.decorators);
  }

  visitForStatement(node: ForStatement): void {
    this.visit(node.initializer);
    this.visit(node.condition);
    this.visit(node.incrementor);
    this.visit(node.statement);
  }

  visitFunctionDeclaration(
    node: FunctionDeclaration,
    isDefault = false
  ): void {
    this.visit(node.name);
    this.visit(node.decorators);
    this.visit(node.typeParameters);
    this.visit(node.signature);
    this.depth++;
    this.visit(node.body);
    this.depth--;
  }

  visitIfStatement(node: IfStatement): void {
    this.visit(node.condition);
    this.visit(node.ifTrue);
    this.visit(node.ifFalse);
  }

  visitImportDeclaration(node: ImportDeclaration): void {
    this.visit(node.foreignName);
    this.visit(node.name);
    this.visit(node.decorators);
  }

  visitImportStatement(node: ImportStatement): void {
    this.visit(node.namespaceName);
    this.visit(node.declarations);
  }

  visitIndexSignature(node: IndexSignatureNode): void {
    this.visit(node.keyType);
    this.visit(node.valueType);
  }

  visitInterfaceDeclaration(
    node: InterfaceDeclaration,
    isDefault = false
  ): void {
    this.visit(node.name);
    this.visit(node.typeParameters);
    this.visit(node.implementsTypes);
    this.visit(node.extendsType);
    this.depth++;
    this.visit(node.members);
    this.depth--;
  }

  visitMethodDeclaration(node: MethodDeclaration): void {
    this.visit(node.name);
    this.visit(node.typeParameters);
    this.visit(node.signature);
    this.visit(node.decorators);
    this.depth++;
    this.visit(node.body);
    this.depth--;
  }

  visitNamespaceDeclaration(
    node: NamespaceDeclaration,
    isDefault = false
  ): void {
    this.visit(node.name);
    this.visit(node.decorators);
    this.visit(node.members);
  }

  visitReturnStatement(node: ReturnStatement): void {
    this.visit(node.value);
  }

  visitSwitchCase(node: SwitchCase): void {
    this.visit(node.label);
    this.visit(node.statements);
  }

  visitSwitchStatement(node: SwitchStatement): void {
    this.visit(node.condition);
    this.depth++;
    this.visit(node.cases);
    this.depth--;
  }

  visitThrowStatement(node: ThrowStatement): void {
    this.visit(node.value);
  }

  visitTryStatement(node: TryStatement): void {
    this.visit(node.statements);
    this.visit(node.catchVariable);
    this.visit(node.catchStatements);
    this.visit(node.finallyStatements);
  }

  visitTypeDeclaration(node: TypeDeclaration): void {
    this.visit(node.name);
    this.visit(node.decorators);
    this.visit(node.type);
    this.visit(node.typeParameters);
  }

  visitVariableDeclaration(node: VariableDeclaration): void {
    this.visit(node.name);
    this.visit(node.type);
    this.visit(node.initializer);
  }

  visitVariableStatement(node: VariableStatement): void {
    this.visit(node.decorators);
    this.visit(node.declarations);
  }

  visitWhileStatement(node: WhileStatement): void {
    this.visit(node.condition);
    this.depth++;
    this.visit(node.statement);
    this.depth--;
  }

  visitVoidStatement(node: VoidStatement): void { }

  visitComment(node: CommentNode): void { }

  visitDecoratorNode(node: DecoratorNode): void {
    this.visit(node.name);
    this.visit(node.args);
  }

  visitParameter(node: ParameterNode): void {
    this.visit(node.name);
    this.visit(node.implicitFieldDeclaration);
    this.visit(node.initializer);
    this.visit(node.type);
  }
}
