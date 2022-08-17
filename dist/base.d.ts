/// <reference types="assemblyscript/std/portable" />
import { Node, Source, NamedTypeNode, FunctionTypeNode, TypeName, TypeParameterNode, IdentifierExpression, AssertionExpression, BinaryExpression, CallExpression, ClassExpression, CommaExpression, ElementAccessExpression, FunctionExpression, InstanceOfExpression, LiteralExpression, NewExpression, ParenthesizedExpression, PropertyAccessExpression, TernaryExpression, UnaryPostfixExpression, UnaryPrefixExpression, BlockStatement, BreakStatement, ContinueStatement, DoStatement, EmptyStatement, ExportStatement, ExportDefaultStatement, ExportImportStatement, ExpressionStatement, ForStatement, IfStatement, ImportStatement, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, VariableStatement, WhileStatement, ClassDeclaration, EnumDeclaration, EnumValueDeclaration, FieldDeclaration, FunctionDeclaration, ImportDeclaration, InterfaceDeclaration, MethodDeclaration, NamespaceDeclaration, TypeDeclaration, VariableDeclaration, DecoratorNode, IndexSignatureNode, ParameterNode, ExportMember, SwitchCase, TypeNode, ArrayLiteralExpression, Expression, ObjectLiteralExpression, FloatLiteralExpression, IntegerLiteralExpression, StringLiteralExpression, RegexpLiteralExpression, UnaryExpression, SuperExpression, FalseExpression, TrueExpression, ThisExpression, NullExpression, ConstructorExpression, Statement, VoidStatement, CommentNode, TemplateLiteralExpression } from "assemblyscript/dist/assemblyscript.js";
import { AbstractVisitor } from "./visitor.js";
export declare class BaseVisitor extends AbstractVisitor<Node> {
    depth: number;
    protected _visit(node: Node): void;
    visitSource(node: Source): void;
    visitTypeNode(node: TypeNode): void;
    visitTypeName(node: TypeName): void;
    visitNamedTypeNode(node: NamedTypeNode): void;
    visitFunctionTypeNode(node: FunctionTypeNode): void;
    visitTypeParameter(node: TypeParameterNode): void;
    visitIdentifierExpression(node: IdentifierExpression): void;
    visitArrayLiteralExpression(node: ArrayLiteralExpression): void;
    visitObjectLiteralExpression(node: ObjectLiteralExpression): void;
    visitAssertionExpression(node: AssertionExpression): void;
    visitBinaryExpression(node: BinaryExpression): void;
    visitCallExpression(node: CallExpression): void;
    visitArguments(typeArguments: TypeNode[] | null, args: Expression[]): void;
    visitClassExpression(node: ClassExpression): void;
    visitCommaExpression(node: CommaExpression): void;
    visitElementAccessExpression(node: ElementAccessExpression): void;
    visitFunctionExpression(node: FunctionExpression): void;
    visitLiteralExpression(node: LiteralExpression): void;
    visitFloatLiteralExpression(node: FloatLiteralExpression): void;
    visitInstanceOfExpression(node: InstanceOfExpression): void;
    visitIntegerLiteralExpression(node: IntegerLiteralExpression): void;
    visitStringLiteral(str: string, singleQuoted?: bool): void;
    visitStringLiteralExpression(node: StringLiteralExpression): void;
    visitTemplateLiteralExpression(node: TemplateLiteralExpression): void;
    visitRegexpLiteralExpression(node: RegexpLiteralExpression): void;
    visitNewExpression(node: NewExpression): void;
    visitParenthesizedExpression(node: ParenthesizedExpression): void;
    visitPropertyAccessExpression(node: PropertyAccessExpression): void;
    visitTernaryExpression(node: TernaryExpression): void;
    visitUnaryExpression(node: UnaryExpression): void;
    visitUnaryPostfixExpression(node: UnaryPostfixExpression): void;
    visitUnaryPrefixExpression(node: UnaryPrefixExpression): void;
    visitSuperExpression(node: SuperExpression): void;
    visitFalseExpression(node: FalseExpression): void;
    visitTrueExpression(node: TrueExpression): void;
    visitThisExpression(node: ThisExpression): void;
    visitNullExperssion(node: NullExpression): void;
    visitConstructorExpression(node: ConstructorExpression): void;
    visitNodeAndTerminate(statement: Statement): void;
    visitBlockStatement(node: BlockStatement): void;
    visitBreakStatement(node: BreakStatement): void;
    visitContinueStatement(node: ContinueStatement): void;
    visitClassDeclaration(node: ClassDeclaration, isDefault?: boolean): void;
    visitDoStatement(node: DoStatement): void;
    visitEmptyStatement(node: EmptyStatement): void;
    visitEnumDeclaration(node: EnumDeclaration, isDefault?: boolean): void;
    visitEnumValueDeclaration(node: EnumValueDeclaration): void;
    visitExportImportStatement(node: ExportImportStatement): void;
    visitExportMember(node: ExportMember): void;
    visitExportStatement(node: ExportStatement): void;
    visitExportDefaultStatement(node: ExportDefaultStatement): void;
    visitExpressionStatement(node: ExpressionStatement): void;
    visitFieldDeclaration(node: FieldDeclaration): void;
    visitForStatement(node: ForStatement): void;
    visitFunctionDeclaration(node: FunctionDeclaration, isDefault?: boolean): void;
    visitIfStatement(node: IfStatement): void;
    visitImportDeclaration(node: ImportDeclaration): void;
    visitImportStatement(node: ImportStatement): void;
    visitIndexSignature(node: IndexSignatureNode): void;
    visitInterfaceDeclaration(node: InterfaceDeclaration, isDefault?: boolean): void;
    visitMethodDeclaration(node: MethodDeclaration): void;
    visitNamespaceDeclaration(node: NamespaceDeclaration, isDefault?: boolean): void;
    visitReturnStatement(node: ReturnStatement): void;
    visitSwitchCase(node: SwitchCase): void;
    visitSwitchStatement(node: SwitchStatement): void;
    visitThrowStatement(node: ThrowStatement): void;
    visitTryStatement(node: TryStatement): void;
    visitTypeDeclaration(node: TypeDeclaration): void;
    visitVariableDeclaration(node: VariableDeclaration): void;
    visitVariableStatement(node: VariableStatement): void;
    visitWhileStatement(node: WhileStatement): void;
    visitVoidStatement(node: VoidStatement): void;
    visitComment(node: CommentNode): void;
    visitDecoratorNode(node: DecoratorNode): void;
    visitParameter(node: ParameterNode): void;
}
