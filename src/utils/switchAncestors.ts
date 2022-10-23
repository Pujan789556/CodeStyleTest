import { Tree } from "../tree/tree.interface";
import { addChild } from "./addChild";
import { checkNode } from "./checkNode";
import { findNode } from "./findNode";

/*
    NOTE: you are making side-effects (modifications) to your parameters. I think that it's better style
    to stick to a purely functional paradigm. In other words, the function could should just be returning
    partialTree. We should never have to worry about something changing when it's passed as a parameter.

    Please always name a file that exists for a single function as the function name.
*/
export const switchAncestors = (tree: Tree, node: string, parents: string[], partialTree: Tree): Tree => {


    for(let i = parents.length - 1; i >= 0; i--) {
        
        const parentNode = findNode(tree, parents[i]);
        parentNode.children.forEach((child, index) => {
            if(checkNode(child, node)) parentNode.children.splice(index, 1);
        });
        partialTree = addChild(partialTree, node, parentNode);
        node = parents[i];
    }
    return partialTree;
}