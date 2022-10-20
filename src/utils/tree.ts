import { Tree } from "../tree/tree.interface";
import { addChild } from "./addChild";
import { checkNode } from "./checkNode";
import { findNode } from "./findNode";

export const convertParentToChild = (tree: Tree, node: string, parents: string[], partialTree: Tree): Tree => {
    for(var i = parents.length - 1; i >= 0; i--) {
        const parentNode = findNode(tree, parents[i]);
        parentNode.children.forEach((child, index) => {
            if(checkNode(child, node)) parentNode.children.splice(index, 1);
        });
        partialTree = addChild(partialTree, node, parentNode);
        node = parents[i];
    }
    return partialTree;
}