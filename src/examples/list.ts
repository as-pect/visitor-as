import {
  ClassDeclaration,
  DecoratorNode,
  FieldDeclaration,
  MethodDeclaration,
} from "../../as";
import { ClassDecorator, registerDecorator } from "../decorator";
import { getName, toString } from "../utils";

class ListMembers extends ClassDecorator {
  visitFieldDeclaration(node: FieldDeclaration): void {
    if (!node.name) console.log(getName(node) + "\n");
    const name = getName(node);
    const _type = getName(node.type!);
    this.stdout.write(name + ": " + _type + "\n");
  }

  visitMethodDeclaration(node: MethodDeclaration): void {
    const name = getName(node);
    if (name == "constructor") {
      return;
    }
    const sig = toString(node.signature);
    this.stdout.write(name + ": " + sig + "\n");
  }

  visitClassDeclaration(node: ClassDeclaration): void {
    this.visit(node.members);
  }

  get name(): string { return "list"; }

}

export = registerDecorator(new ListMembers());
