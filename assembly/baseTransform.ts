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
  DeclarationStatement,
} from "./as";

import { AbstractTransformVisitor } from "./visitor";

export class BaseTransformVisitor extends AbstractTransformVisitor {
  depth: number = 0;

  protected _visit<T>(node: T): T {
    //@ts-ignore
    switch (node.kind) {
      case NodeKind.SOURCE: {
        return changetype<T>(this.visitSource(changetype<Source>(node)));

      }

      // types

      case NodeKind.NAMEDTYPE: {
        return changetype<T>(this.visitNamedTypeNode(changetype<NamedTypeNode>(node)));
      }
      case NodeKind.FUNCTIONTYPE: {
        return changetype<T>(this.visitFunctionTypeNode(changetype<FunctionTypeNode>(node)));
      }
      case NodeKind.TYPENAME: {
        return changetype<T>(this.visitTypeName(changetype<TypeName>(node)));
      }
      case NodeKind.TYPEPARAMETER: {
        return changetype<T>(this.visitTypeParameter(changetype<TypeParameterNode>(node)));
      }

      // expressions

      case NodeKind.FALSE:
      case NodeKind.NULL:
      case NodeKind.SUPER:
      case NodeKind.THIS:
      case NodeKind.TRUE:
      case NodeKind.CONSTRUCTOR:
      case NodeKind.IDENTIFIER: {
        return changetype<T>(this.visitIdentifierExpression(changetype<IdentifierExpression>(node)));
      }
      case NodeKind.ASSERTION: {
        return changetype<T>(this.visitAssertionExpression(changetype<AssertionExpression>(node)));
      }
      case NodeKind.BINARY: {
        return changetype<T>(this.visitBinaryExpression(changetype<BinaryExpression>(node)));
      }
      case NodeKind.CALL: {
        return changetype<T>(this.visitCallExpression(changetype<CallExpression>(node)));
      }
      case NodeKind.CLASS: {
        return changetype<T>(this.visitClassExpression(changetype<ClassExpression>(node)));
      }
      case NodeKind.COMMA: {
        return changetype<T>(this.visitCommaExpression(changetype<CommaExpression>(node)));
      }
      case NodeKind.ELEMENTACCESS: {
        return changetype<T>(this.visitElementAccessExpression(changetype<ElementAccessExpression>(node)));
      }
      case NodeKind.FUNCTION: {
        return changetype<T>(this.visitFunctionExpression(changetype<FunctionExpression>(node)));
      }
      case NodeKind.INSTANCEOF: {
        return changetype<T>(this.visitInstanceOfExpression(changetype<InstanceOfExpression>(node)));
      }
      case NodeKind.LITERAL: {
        return changetype<T>(this.visitLiteralExpression(changetype<LiteralExpression>(node)));
      }
      case NodeKind.NEW: {
        return changetype<T>(this.visitNewExpression(changetype<NewExpression>(node)));
      }
      case NodeKind.PARENTHESIZED: {
        return changetype<T>(this.visitParenthesizedExpression(changetype<ParenthesizedExpression>(node)));
      }
      case NodeKind.PROPERTYACCESS: {
        return changetype<T>(this.visitPropertyAccessExpression(changetype<PropertyAccessExpression>(node)));
      }
      case NodeKind.TERNARY: {
        return changetype<T>(this.visitTernaryExpression(changetype<TernaryExpression>(node)));
      }
      case NodeKind.UNARYPOSTFIX: {
        return changetype<T>(this.visitUnaryPostfixExpression(changetype<UnaryPostfixExpression>(node)));
      }
      case NodeKind.UNARYPREFIX: {
        return changetype<T>(this.visitUnaryPrefixExpression(changetype<UnaryPrefixExpression>(node)));
      }

      // statements

      case NodeKind.BLOCK: {
        return changetype<T>(this.visitBlockStatement(changetype<BlockStatement>(node)));
      }
      case NodeKind.BREAK: {
        return changetype<T>(this.visitBreakStatement(changetype<BreakStatement>(node)));
      }
      case NodeKind.CONTINUE: {
        return changetype<T>(this.visitContinueStatement(changetype<ContinueStatement>(node)));
      }
      case NodeKind.DO: {
        return changetype<T>(this.visitDoStatement(changetype<DoStatement>(node)));
      }
      case NodeKind.EMPTY: {
        return changetype<T>(this.visitEmptyStatement(changetype<EmptyStatement>(node)));
      }
      case NodeKind.EXPORT: {
        return changetype<T>(this.visitExportStatement(changetype<ExportStatement>(node)));
      }
      case NodeKind.EXPORTDEFAULT: {
        return changetype<T>(this.visitExportDefaultStatement(changetype<ExportDefaultStatement>(node)));
      }
      case NodeKind.EXPORTIMPORT: {
        return changetype<T>(this.visitExportImportStatement(changetype<ExportImportStatement>(node)));
      }
      case NodeKind.EXPRESSION: {
        return changetype<T>(this.visitExpressionStatement(changetype<ExpressionStatement>(node)));
      }
      case NodeKind.FOR: {
        return changetype<T>(this.visitForStatement(changetype<ForStatement>(node)));
      }
      case NodeKind.IF: {
        return changetype<T>(this.visitIfStatement(changetype<IfStatement>(node)));
      }
      case NodeKind.IMPORT: {
        return changetype<T>(this.visitImportStatement(changetype<ImportStatement>(node)));
      }
      case NodeKind.RETURN: {
        return changetype<T>(this.visitReturnStatement(changetype<ReturnStatement>(node)));
      }
      case NodeKind.SWITCH: {
        return changetype<T>(this.visitSwitchStatement(changetype<SwitchStatement>(node)));
      }
      case NodeKind.THROW: {
        return changetype<T>(this.visitThrowStatement(changetype<ThrowStatement>(node)));
      }
      case NodeKind.TRY: {
        return changetype<T>(this.visitTryStatement(changetype<TryStatement>(node)));
      }
      case NodeKind.VARIABLE: {
        return changetype<T>(this.visitVariableStatement(changetype<VariableStatement>(node)));
      }
      case NodeKind.WHILE: {
        return changetype<T>(this.visitWhileStatement(changetype<WhileStatement>(node)));
      }

      // declaration statements

      case NodeKind.CLASSDECLARATION: {
        return changetype<T>(this.visitClassDeclaration(changetype<ClassDeclaration>(node)));
      }
      case NodeKind.ENUMDECLARATION: {
        return changetype<T>(this.visitEnumDeclaration(changetype<EnumDeclaration>(node)));
      }
      case NodeKind.ENUMVALUEDECLARATION: {
        return changetype<T>(this.visitEnumValueDeclaration(changetype<EnumValueDeclaration>(node)));
      }
      case NodeKind.FIELDDECLARATION: {
        return changetype<T>(this.visitFieldDeclaration(changetype<FieldDeclaration>(node)));
      }
      case NodeKind.FUNCTIONDECLARATION: {
        return changetype<T>(this.visitFunctionDeclaration(changetype<FunctionDeclaration>(node)));
      }
      case NodeKind.IMPORTDECLARATION: {
        return changetype<T>(this.visitImportDeclaration(changetype<ImportDeclaration>(node)));
      }
      case NodeKind.INTERFACEDECLARATION: {
        return changetype<T>(this.visitInterfaceDeclaration(changetype<InterfaceDeclaration>(node)));
      }
      case NodeKind.METHODDECLARATION: {
        return changetype<T>(this.visitMethodDeclaration(changetype<MethodDeclaration>(node)));
      }
      case NodeKind.NAMESPACEDECLARATION: {
        return changetype<T>(this.visitNamespaceDeclaration(changetype<NamespaceDeclaration>(node)));
      }
      case NodeKind.TYPEDECLARATION: {
        return changetype<T>(this.visitTypeDeclaration(changetype<TypeDeclaration>(node)));
      }
      case NodeKind.VARIABLEDECLARATION: {
        return changetype<T>(this.visitVariableDeclaration(changetype<VariableDeclaration>(node)));
      }

      // other

      case NodeKind.DECORATOR: {
        return changetype<T>(this.visitDecoratorNode(changetype<DecoratorNode>(node)));
      }
      case NodeKind.EXPORTMEMBER: {
        return changetype<T>(this.visitExportMember(changetype<ExportMember>(node)));
      }
      case NodeKind.PARAMETER: {
        return changetype<T>(this.visitParameter(changetype<ParameterNode>(node)));
      }
      case NodeKind.SWITCHCASE: {
        return changetype<T>(this.visitSwitchCase(changetype<SwitchCase>(node)));
      }
      case NodeKind.INDEXSIGNATURE: {
        return changetype<T>(this.visitIndexSignature(changetype<IndexSignatureNode>(node)));
      }
      default:
        assert(false);
    }
    return node;
  }

  visitStatement(node: Statement): Statement {
    return node = this.visit(node) as Statement;
  }

  visitSource(node: Source): Source {
    let statements: Statement[] = [];
    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      this.depth++;
      statements.push(this.visitStatement(stmt));
      this.depth--;
    }
    node.statements = statements;
    return node
  }

  visitTypeNode(node: TypeNode): TypeNode {
    return node;
  }

  visitTypeName(node: TypeName): TypeName {
    node.identifier = this.visitIdentifierExpression(node.identifier);
    if (node.next) {
      node.next = this.visit(node.next) as TypeName;
    }
    return node;
  }

  visitNamedTypeNode(node: NamedTypeNode): NamedTypeNode {
    node.name = this.visit(node.name) as TypeName;
    node.typeArguments = this.visit(node.typeArguments) as TypeNode[] | null;
    return node;
  }

  visitFunctionTypeNode(node: FunctionTypeNode): FunctionTypeNode {
    let params: ParameterNode[] = [];
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      params.push(this.visitParameter(param));
    }
    node.parameters = params;
    node.returnType = this.visit(node.returnType) as TypeNode;
    return node;
  }

  visitTypeParameter(node: TypeParameterNode): TypeParameterNode {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.extendsType) node.extendsType = this.visit(node.extendsType) as NamedTypeNode;
    if (node.defaultType) node.defaultType = this.visit(node.defaultType) as NamedTypeNode;
    return node;
  }

  visitIdentifierExpression(node: IdentifierExpression): IdentifierExpression {
    return node;
  }

  visitArrayLiteralExpression(node: ArrayLiteralExpression): ArrayLiteralExpression {
    node.elementExpressions = node.elementExpressions.map(e => this.visit(e) as Expression);
    return node;
  }

  visitObjectLiteralExpression(node: ObjectLiteralExpression): ObjectLiteralExpression {
    if (node.values && node.names) {
      assert(node.values.length == node.names.length);
      for (let i = 0; i < node.values.length; i++) {
        node.names[i] = this.visit(node.names[i]) as IdentifierExpression;
        node.values[i] = this.visit(node.values[i]) as Expression;
      }
    }
    return node;
  }

  visitAssertionExpression(node: AssertionExpression): AssertionExpression {
    if (node.toType) node.toType = this.visit(node.toType) as TypeNode;
    node.expression = this.visit(node.expression) as Expression;
    return node;
  }

  visitBinaryExpression(node: BinaryExpression): BinaryExpression {
    node.left = this.visit(node.left) as Expression;
    node.right = this.visit(node.right) as Expression;
    return node;
  }

  visitCallExpression(node: CallExpression): Expression {
    node.expression = this.visit(node.expression) as Expression;
    node.typeArguments = this.visit(node.typeArguments) as TypeNode[] | null;
    node.args = this.visit(node.args) as Expression[];
    this.visitArguments(node.typeArguments, node.args);
    return node;
  }

  visitArguments(typeArguments: TypeNode[] | null, args: Expression[]): void {

  }

  visitClassExpression(node: ClassExpression): ClassExpression {
    node.declaration = this.visit(node.declaration) as ClassDeclaration;
    return node;
  }

  visitCommaExpression(node: CommaExpression): CommaExpression {
    node.expressions = this.visit(node.expressions) as Expression[];
    return node;
  }

  visitElementAccessExpression(node: ElementAccessExpression): ElementAccessExpression {
    node.elementExpression = this.visit(node.elementExpression) as Expression;
    node.expression = this.visit(node.expression) as Expression;
    return node;
  }

  visitFunctionExpression(node: FunctionExpression): Node {
    node.declaration = this.visit(node.declaration) as FunctionDeclaration;
    return node;
  }

  visitLiteralExpression(node: LiteralExpression): LiteralExpression {
    switch (node.literalKind) {
      case LiteralKind.ARRAY: {
        return this.visitArrayLiteralExpression(<ArrayLiteralExpression>node);
        break;
      }
      case LiteralKind.FLOAT: {
        return this.visitFloatLiteralExpression(<FloatLiteralExpression>node);
        break;
      }
      case LiteralKind.INTEGER: {
        return this.visitIntegerLiteralExpression(<IntegerLiteralExpression>node);
        break;
      }
      case LiteralKind.OBJECT: {
        return this.visitObjectLiteralExpression(<ObjectLiteralExpression>node);
        break;
      }
      case LiteralKind.REGEXP: {
        return this.visitRegexpLiteralExpression(<RegexpLiteralExpression>node);
        break;
      }
      case LiteralKind.STRING: {
        return this.visitStringLiteralExpression(<StringLiteralExpression>node);
        break;
      }
      default:
        throw new Error("Invalid LiteralKind: " + node.literalKind);
    }
  }

  visitFloatLiteralExpression(node: FloatLiteralExpression): FloatLiteralExpression { return node; }

  visitInstanceOfExpression(node: InstanceOfExpression): InstanceOfExpression {
    node.expression = this.visit(node.expression) as Expression;
    node.isType = this.visit(node.isType) as TypeNode;
    return node;
  }

  visitIntegerLiteralExpression(node: IntegerLiteralExpression): IntegerLiteralExpression { return node; }

  visitStringLiteral(str: string, singleQuoted?: boolean): string { return str; }

  visitStringLiteralExpression(node: StringLiteralExpression): StringLiteralExpression { 
    node.value = this.visitStringLiteral(node.value);
    return node; 
  }

  visitRegexpLiteralExpression(node: RegexpLiteralExpression): RegexpLiteralExpression { return node; }

  visitNewExpression(node: NewExpression): NewExpression {
    node.typeArguments = this.visit(node.typeArguments) as TypeNode[] | null;
    this.visitArguments(node.typeArguments, node.args);
    return node;
  }

  visitParenthesizedExpression(node: ParenthesizedExpression): ParenthesizedExpression {
    node.expression = this.visit(node.expression) as Expression;
    return node;
  }

  visitPropertyAccessExpression(node: PropertyAccessExpression): PropertyAccessExpression {
    node.property = this.visit(node.property) as IdentifierExpression;
    node.expression = this.visit(node.expression) as Expression;
    return node;
  }

  visitTernaryExpression(node: TernaryExpression): TernaryExpression {
    node.condition = this.visit(node.condition) as Expression;
    node.ifThen = this.visit(node.ifThen) as Statement;
    node.ifElse = this.visit(node.ifElse) as Statement;
    return node;
  }

  visitUnaryExpression(node: UnaryExpression): UnaryExpression {
    node.operand = this.visit(node.operand) as Expression;
    return node;
  }

  visitUnaryPostfixExpression(node: UnaryPostfixExpression): UnaryPostfixExpression {
    node.operand = this.visit(node.operand) as Expression;
    return node;
  }

  visitUnaryPrefixExpression(node: UnaryPrefixExpression): UnaryPrefixExpression {
    node.operand = this.visit(node.operand) as Expression;
    return node;
  }

  visitSuperExpression(node: SuperExpression): SuperExpression { return node; }

  visitFalseExpression(node: FalseExpression): FalseExpression { return node; }

  visitTrueExpression(node: TrueExpression): TrueExpression { return node; }

  visitThisExpression(node: ThisExpression): ThisExpression { return node; }

  visitNullExperssion(node: NullExpression): NullExpression { return node; }

  visitConstructorExpression(node: ConstructorExpression): ConstructorExpression { return node; }

  visitNodeAndTerminate(node: Statement): Statement { return node; }

  visitBlockStatement(node: BlockStatement): BlockStatement {
    this.depth++;
    node.statements = this.visit(node.statements) as Statement[];
    this.depth--;
    return node;
  }

  visitBreakStatement(node: BreakStatement): BreakStatement {
    if (node.label) {
      node.label = this.visit(node.label) as IdentifierExpression;
    }
    return node;
  }

  visitContinueStatement(node: ContinueStatement): ContinueStatement {
    if (node.label) {
      node.label = this.visit(node.label) as IdentifierExpression;
    }
    return node;
  }

  visitClassDeclaration(node: ClassDeclaration, isDefault?: boolean): ClassDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    this.depth++;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    assert(
      node.isGeneric ? node.typeParameters != null : node.typeParameters == null
    );
    if (node.isGeneric) {
      node.typeParameters = this.visit(node.typeParameters) as TypeParameterNode[];
    }
    if (node.extendsType) {
      node.extendsType = this.visit(node.extendsType) as NamedTypeNode;
    }
    node.implementsTypes = this.visit(node.implementsTypes) as NamedTypeNode[] | null;
    node.members = this.visit(node.members) as DeclarationStatement[];
    this.depth--;
    return node;
  }

  visitDoStatement(node: DoStatement): DoStatement {
    node.condition = this.visit(node.condition) as Expression;
    node.statement = this.visit(node.statement) as Statement;
    return node;
  }

  visitEmptyStatement(node: EmptyStatement): EmptyStatement { return node; }

  visitEnumDeclaration(node: EnumDeclaration, isDefault?: boolean): EnumDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    node.values = this.visit(node.values) as EnumValueDeclaration[];
    return node;
  }

  visitEnumValueDeclaration(node: EnumValueDeclaration): EnumValueDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.initializer) {
      node.initializer = this.visit(node.initializer) as Expression;
    }
    return node;
  }

  visitExportImportStatement(node: ExportImportStatement): ExportImportStatement {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.externalName = this.visit(node.externalName) as IdentifierExpression;
    return node;
  }

  visitExportMember(node: ExportMember): ExportMember {
    node.localName = this.visit(node.localName) as IdentifierExpression;
    node.exportedName = this.visit(node.exportedName) as IdentifierExpression;
    return node;
  }

  visitExportStatement(node: ExportStatement): ExportStatement {
    if (node.path) {
      node.path = this.visit(node.path) as StringLiteralExpression;
    }
    node.members = this.visit(node.members) as ExportMember[];
    return node;
  }

  visitExportDefaultStatement(node: ExportDefaultStatement): ExportDefaultStatement {
    node.declaration = this.visit(node.declaration) as DeclarationStatement;
    return node;
  }

  visitExpressionStatement(node: ExpressionStatement): ExpressionStatement {
    node.expression = this.visit(node.expression) as Expression;
    return node;
  }

  visitFieldDeclaration(node: FieldDeclaration): FieldDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.type) {
      node.type = this.visit(node.type) as TypeNode;
    }
    if (node.initializer) {
      node.initializer = this.visit(node.initializer) as Expression;
    }
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    return node;
  }

  visitForStatement(node: ForStatement): ForStatement {
    if (node.initializer) node.initializer = this.visit(node.initializer) as Statement;
    if (node.condition) node.condition = this.visit(node.condition) as Expression;
    if (node.incrementor) node.incrementor = this.visit(node.incrementor) as Expression;
    node.statement = this.visit(node.statement) as Statement;
    return node;
  }

  visitFunctionDeclaration(
    node: FunctionDeclaration,
    isDefault?: boolean
  ): FunctionDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    if (node.isGeneric) {
      node.typeParameters = this.visit(node.typeParameters) as TypeParameterNode[];
    }
    node.signature = this.visit(node.signature) as FunctionTypeNode;
    this.depth++;
    if (node.body) node.body = this.visit(node.body) as Statement;
    this.depth--;
    return node;
  }

  visitFunctionCommon(node: FunctionDeclaration): FunctionDeclaration {
    return node;
  }

  visitIfStatement(node: IfStatement): IfStatement {
    node.condition = this.visit(node.condition) as Expression;
    node.ifTrue = this.visit(node.ifTrue) as Statement;
    if (node.ifFalse) node.ifFalse = this.visit(node.ifFalse) as Statement;
    return node;
  }

  visitImportDeclaration(node: ImportDeclaration): ImportDeclaration {
    node.foreignName = this.visit(node.foreignName) as IdentifierExpression;
    node.name = this.visit(node.name) as IdentifierExpression;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    return node;
  }

  visitImportStatement(node: ImportStatement): ImportStatement {
    if (node.namespaceName) node.namespaceName = <IdentifierExpression> this.visit(node.namespaceName);
    node.declarations = this.visit(node.declarations) as ImportDeclaration[] | null;
    return node;
  }

  visitIndexSignature(node: IndexSignatureNode): IndexSignatureNode {
   return node;
  }

  visitInterfaceDeclaration(
    node: InterfaceDeclaration,
    isDefault?: boolean
  ): InterfaceDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.isGeneric) {
      node.typeParameters = this.visit(node.typeParameters) as TypeParameterNode[] | null;
    }
    node.implementsTypes = this.visit(node.implementsTypes) as NamedTypeNode[] | null;
    if (node.extendsType) node.extendsType = this.visit(node.extendsType) as NamedTypeNode;
    this.depth++;
    node.members = this.visit(node.members) as DeclarationStatement[];
    this.depth--;
    return node;
  }

  visitMethodDeclaration(node: MethodDeclaration): MethodDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.isGeneric) {
      node.typeParameters = this.visit(node.typeParameters) as TypeParameterNode[];
    }
    node.signature = this.visit(node.signature) as FunctionTypeNode;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    this.depth++;
    if (node.body) node.body = this.visit(node.body) as Statement;
    this.depth--;
    return node;
  }

  visitNamespaceDeclaration(
    node: NamespaceDeclaration,
    isDefault?: boolean
  ): NamespaceDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    node.members = this.visit(node.members) as DeclarationStatement[];
    return node;
  }

  visitReturnStatement(node: ReturnStatement): ReturnStatement {
    if (node.value) node.value = this.visit(node.value) as Expression;
    return node;
  }

  visitSwitchCase(node: SwitchCase): SwitchCase {
    if (node.label) node.label = this.visit(node.label) as Expression;
    node.statements = this.visit(node.statements) as Statement[];
    return node;
  }

  visitSwitchStatement(node: SwitchStatement): SwitchStatement {
    node.condition = this.visit(node.condition) as Expression;
    this.depth++;
    node.cases = this.visit(node.cases) as SwitchCase[];
    this.depth--;
    return node;
  }

  visitThrowStatement(node: ThrowStatement): ThrowStatement {
    node.value = this.visit(node.value) as Statement;
    return node;
  }

  visitTryStatement(node: TryStatement): TryStatement {
    node.statements = this.visit(node.statements) as Statement[];
    if (node.catchVariable) node.catchVariable = this.visit(node.catchVariable) as IdentifierExpression;
    node.catchStatements = this.visit(node.catchStatements) as Statement[];
    node.finallyStatements = this.visit(node.finallyStatements) as Statement[];
    return node;
  }

  visitTypeDeclaration(node: TypeDeclaration): TypeDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    node.type = this.visit(node.type) as TypeNode;
    node.typeParameters = this.visit(node.typeParameters) as TypeParameterNode[];
    return node;
  }

  visitVariableDeclaration(node: VariableDeclaration): VariableDeclaration {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.type) node.type = this.visit(node.type) as TypeNode;
    if (node.initializer) node.initializer = this.visit(node.initializer) as Expression;
    return node;
  }

  visitVariableStatement(node: VariableStatement): VariableStatement {
    node.decorators = this.visit(node.decorators) as DecoratorNode[] | null;
    node.declarations = this.visit(node.declarations) as VariableDeclaration[];
    return node;
  }

  visitWhileStatement(node: WhileStatement): WhileStatement {
    node.condition = this.visit(node.condition) as Expression;
    this.depth++;
    node.statement = this.visit(node.statement) as Statement;
    this.depth--;
    return node;
  }

  visitVoidStatement(node: VoidStatement): VoidStatement { return node; }

  visitComment(node: CommentNode): CommentNode { return node; }

  visitDecoratorNode(node: DecoratorNode): DecoratorNode {
    node.name = this.visit(node.name) as IdentifierExpression;
    node.args = this.visit(node.args) as Expression[];
    return node;
  }

  visitParameter(node: ParameterNode): ParameterNode {
    node.name = this.visit(node.name) as IdentifierExpression;
    if (node.implicitFieldDeclaration) {
      node.implicitFieldDeclaration = this.visit(node.implicitFieldDeclaration) as FieldDeclaration;
    }
    if (node.initializer) node.initializer = this.visit(node.initializer) as Expression;
    node.type = this.visit(node.type) as TypeNode;
    return node;
  }
}
