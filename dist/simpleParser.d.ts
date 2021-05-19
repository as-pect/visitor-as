import { Expression, Statement, NamespaceDeclaration, ClassDeclaration, DeclarationStatement } from "../as";
export declare class SimpleParser {
    private static get parser();
    private static getTokenizer;
    static parseExpression(s: string): Expression;
    static parseStatement(s: string, topLevel?: boolean): Statement;
    static parseTopLevelStatement(s: string, namespace?: NamespaceDeclaration | null): Statement;
    static parseClassMember(s: string, _class: ClassDeclaration): DeclarationStatement;
}
