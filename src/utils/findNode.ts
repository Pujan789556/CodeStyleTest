import { Tree } from "../tree/tree.interface";
import { checkNode } from "./checkNode";

let anyNode: Tree;

export const findNode = (tree: Tree, node: string): Tree => {
    if(checkNode(tree, node)) return tree;
    tree.children.forEach(child => {
        if(checkNode(child, node)) {
            anyNode = child;
            return;
        }
        return findNode(child, node);
    });
    return anyNode;
}