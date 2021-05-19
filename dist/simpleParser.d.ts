import { Expression, Statement, NamespaceDeclaration } from "../as";
export declare class SimpleParser {
    private static getTokenizer;
    static parseExpression(s: string): Expression;
    static parseStatement(s: string, topLevel?: boolean): Statement;
    static parseTopLevelStatement(s: string, namespace?: NamespaceDeclaration | null): Statement;
}
