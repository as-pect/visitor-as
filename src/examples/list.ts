import {
  ClassDeclaration,
  FieldDeclaration,
  MethodDeclaration,
} from "../../as";
import { ClassDecorator, registerDecorator } from "../decorator";
import { toString } from "../utils";

class ListMembers extends ClassDecorator {
  visitFieldDeclaration(node: FieldDeclaration): void {
    if (!node.name) console.log(toString(node) + "\n");
    const name = toString(node.name);
    const _type = toString(node.type!);
    this.stdout.write(name + ": " + _type + "\n");
  }

  visitMethodDeclaration(node: MethodDeclaration): void {
    const name = toString(node.name);
    if (name == "constructor") {
      return;
    }
    const sig = toString(node.signature);
    this.stdout.write(name + ": " + sig + "\n");
  }

  visitClassDeclaration(node: ClassDeclaration): void {
    this.visit(node.members);
  }

  get name(): string {
    return "list";
  }
}

export = registerDecorator(new ListMembers());
