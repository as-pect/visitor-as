# Visitor utilities for AssemblyScript Compiler transformers

## Example

### List Fields

The transformer:

```ts
import { ASTTransformVisitor } from '../transformer';
import {
    ClassDeclaration,
    Program,
    FieldDeclaration, 
    FieldPrototype, 
    MethodDeclaration
} from '../assemblyscript';
import { hasDecorator } from '../utils';



class ListVisitor extends ASTTransformVisitor {

    visitFieldDeclaration(node: FieldDeclaration): void {
        const mem = <FieldPrototype>this.program.getElementByDeclaration(node);
        const name = mem.name;
        const _type = this.program.resolver.resolveType(mem.typeNode!, mem)!;
        this.stdout.write(name + ": " + _type.toString() + "\n");
    }

    visitMethodDeclaration(node: MethodDeclaration): void { }

    visitClassDeclaration(node: ClassDeclaration): void {
        if (hasDecorator(node, "list")) {
            super.visit(node.members);
        }
    }

    afterInitialize(program: Program): void {
        this.visit(program.sources);
    }
}

export = ListVisitor;
```

Example usage:

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