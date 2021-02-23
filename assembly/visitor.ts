export abstract class AbstractTransformVisitor {
  visit<T>(node: T | null): T | null {
      if (node == null) return null;
      if (node instanceof Array) {
        //@ts-ignore
        let res: indexof<T>[] = new Array();
        for (let i = 0; i < node.length; i++) {
          // @ts-ignore
          res.push(changetype<indexof<T>>(this.visit(node[i])));
        }
        return changetype<T>(res);
      } else if (node instanceof Map) {
        let res = new Map();
        // @ts-ignore
        type Key = indexof<T>;
        // @ts-ignore
        type Value = valueof<T>;
        let nodeMap = <Map<Key,Value>>(node);
        let keys = nodeMap.keys();
        for (let i=0; i< keys.length; i++) {
           res.set(keys[i], this.visit(nodeMap.get(keys[i])));
        }
        return changetype<T>(res);
      } else {
        ///@ts-ignore Node is not iterable.
        return this._visit(node);
      }
    }
  
    protected abstract _visit<T = Node>(node: T): T;
  }