import { ASTTransformVisitor } from "..";
import { Parser, ClassDeclaration, FieldDeclaration } from "../../as";
import { SimpleParser } from "../simpleParser";
import { not, isLibrary, className, toString, isMethodNamed } from '../utils';



class ToStringCallTransform extends ASTTransformVisitor {
  currentClass?: ClassDeclaration;
  fields: string[];

  visitFieldDeclaration(node: FieldDeclaration): void {
    const name = toString(node.name);
    if (!node.type) {
      throw new Error(`Field ${name} is missing a type declaration`);
    }
    let rhs = `this.${name}.toString()`;
    this.fields.push(`sb.push(\`${name}: \${${rhs}}\`)`);
    super.visitFieldDeclaration(node);
  }


  visitClassDeclaration(node: ClassDeclaration): void {
    if (!node.members || node.members.some(isMethodNamed("toString"))) {
      super.visitClassDeclaration(node);
      return;
    }
    
    this.currentClass = node;
    this.fields = [];
    this.visit(node.members);
    const method = `
  toString(): string {
    const sb = new Array<string>();
    ${this.fields.join(";\n\t")};
    return \`${className(node)}:\\n\\t\${sb.join("\\n\\t")}\`
  }
    `
    let member = SimpleParser.parseClassMember(method, node);

    node.members.push(member);
    super.visitClassDeclaration(node);
  }

  afterParse(_: Parser): void {
    let sources = _.sources.filter(not(isLibrary));
    this.visit(sources);
  }
  
}


export = ToStringCallTransform;
