import { Tree } from "../tree/tree.interface";
import { checkNode } from "./checkNode";

export const addChild = (tree: Tree, node: string, childToAdd: Tree): Tree => {
    if(checkNode(tree, node)) tree.children.push(childToAdd);
    tree.children.forEach(child => {
        if(checkNode(child, node)) {
            child.children = [...(child.children || []), childToAdd];
            return;
        }
        addChild(child, node, childToAdd);
    });
    return tree;
}