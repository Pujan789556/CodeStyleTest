import { findNode } from "../utils/findNode";
import { findParents } from "../utils/findParents";
import { convertParentToChild } from "../utils/tree";
import { Tree } from "./tree.interface";

export const changeRoot = (tree: Tree, node: string): Tree => {
    var partialTree: Tree = findNode(tree, node); // Find the node to be made root
    var parents: string[] = findParents(tree, node); // Find all imediate parents of the node
    convertParentToChild(tree, node, parents, partialTree); // Convert parent into susequent child and remove the nodes as parent
    return partialTree;
}