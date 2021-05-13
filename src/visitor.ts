/* eslint-disable @typescript-eslint/ban-ts-comment */
export type Collection<T extends unknown> =
  | T
  | T[]
  | Map<string, T | T[] | Iterable<T>>
  | Iterable<T>;

function isIterable<T>(object: T): boolean {
  // @ts-ignore
  return object != null && typeof object[Symbol.iterator] === "function";
}
/**
 * Top level visitor that will expect an implemented _visit function to visit
 * a single node and then provides a generic function for collections of nodes
 * and will visit each member of the collection.
 */
export abstract class AbstractVisitor<T extends unknown> {
  visit(node: Collection<T> | null): void {
    if (node == null) return;
    if (node instanceof Array) {
      node.map((node) => this.visit(node));
    } else if (node instanceof Map) {
      for (let _node of node.values()) {
        this.visit(_node);
      }
    } else if (isIterable(node)) {
      // TODO: Find better way to test if iterable
      // @ts-ignore is iterable
      for (let _node of node) {
        this.visit(_node);
      }
    } else {
      /// @ts-ignore Node is not iterable.
      this._visit(node);
    }
  }

  protected abstract _visit(node: T): void;
}

export abstract class AbstractTransformVisitor<T extends unknown> {
  visit(node: Collection<T> | null): Collection<T> | null {
    if (node == null) return null;
    if (node instanceof Array) {
      return node.map((node) => this.visit(node) as T);
    } else if (node instanceof Map) {
      let res = new Map();
      for (let [key, _node] of node.entries()) {
        res.set(key, this.visit(_node));
      }
      return res;
    } else if (isIterable(node)) {
      let res: T[] = [];
      // TODO: Find better way to test if iterable
      // @ts-ignore is iterable
      for (let _node of node) {
        res.push(this.visit(_node) as T);
      }
      return res;
    } else {
      /// @ts-ignore Node is not iterable.
      return this._visit(node);
    }
  }

  protected abstract _visit(node: T): T;
}