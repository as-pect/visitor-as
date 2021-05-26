# Visitor utilities for AssemblyScript Compiler transformers

## Example

### List Fields

The transformer:

```ts
import {
  ClassDeclaration,
  FieldDeclaration,
  MethodDeclaration,
} from "../../as";
import { ClassDecorator, registerDecorator } from "../decorator";
import { getName } from "../utils";

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
    const sig = getName(node.signature);
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
```

assembly/foo.ts:
```ts
@list
class Foo {
  a: u8;
  b: bool;
  i: i32;
}
```

And then compile with `--transform` flag:

```
asc assembly/foo.ts --transform ./dist/examples/list --noEmit
```

Which prints the following to the console:

```
a: u8
b: bool
i: i32
```
