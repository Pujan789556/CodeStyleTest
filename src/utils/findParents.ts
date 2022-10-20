import { Tree } from "../tree/tree.interface";
import { checkNode } from "./checkNode";

let anyNode: Tree;
let parents: string[] = [];
let traversedNodes: string[] = [];

export const findParents = (tree: Tree, node: string): string[] => {
    if(checkNode(tree, node)) return traversedNodes;
    traversedNodes.push(tree.root);
    tree.children.forEach(child => {
        if(checkNode(child, node)) {
            anyNode = child;
            parents  = [...traversedNodes]
            return;
        }
        return findParents(child, node);
    });
    traversedNodes.pop();
    return parents;
}