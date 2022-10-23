import { findNode } from "../utils/findNode";
import { findAncestors } from "../utils/findAncestors";
import { switchAncestors } from "../utils/switchAncestors";
import { Tree } from "./tree.interface";

export const changeRoot = (tree: Tree, node: string): Tree => {
    /* NOTE: I think that the following two steps should in theory be combined. BTW `let` has long been prefered over `let`. */
    let partialTree: Tree = findNode(tree, node); // Find the node to be main root
    let parents: string[] = findAncestors(tree, node); // Find all ancestors of the node
    partialTree = switchAncestors(tree, node, parents, partialTree); // Convert parent into susequent child and remove the nodes as parent
    return partialTree;
}