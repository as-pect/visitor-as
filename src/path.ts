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
  IndexSignatureDeclaration,
  InterfaceDeclaration,
  MethodDeclaration,
  NamespaceDeclaration,
  TypeDeclaration,
  VariableDeclaration,
  DecoratorNode,
  ExportMember,
  ParameterNode,
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
} from "../as";

import { BaseVisitor } from "./base";
import { utils } from ".";

export class PathVisitor extends BaseVisitor {
  currentPath: Node[] = [];

  _visit(node: Node): void {
    this.currentPath.push(node);
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
        this.visitElementAccessExpression(<ElementAccessExpression>node);
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
        this.visitParenthesizedExpression(<ParenthesizedExpression>node);
        break;
      }
      case NodeKind.PROPERTYACCESS: {
        this.visitPropertyAccessExpression(<PropertyAccessExpression>node);
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
      case NodeKind.INDEXSIGNATUREDECLARATION: {
        this.visitIndexSignatureDeclaration(<IndexSignatureDeclaration>node);
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
      default:
        assert(false);
    }
    this.currentPath.pop();
  }

  get currentNode(): Node {
    return this.currentPath[this.currentPath.length - 1];
  }

  get currentParent(): Node {
    if (this.currentPath.length == 1) return this.currentNode;
    return this.currentPath[this.currentPath.length - 2];
  }

  get cuerrentParentPath(): Node[] {
    return this.currentPath.slice(0, this.currentPath.length - 1);
  }

  get currentGrandParentPath(): Node[] {
    return this.currentPath.length < 3
      ? []
      : this.currentPath.slice(0, this.currentPath.length - 2);
  }

  cloneCurrentNode(): Node {
    return utils.cloneNode(this.currentNode);
  }

  replaceCurrentNode(node: Node): void {
    Object.getOwnPropertyNames(this.currentParent).forEach((name) => {
      //@ts-ignore
      const prop = this.currentParent[name];
      if (prop == this.currentNode) {
        //@ts-ignore
        this.currentParent[name] = node;
      }
    });
  }
}
