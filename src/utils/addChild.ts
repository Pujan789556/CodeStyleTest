import { Tree } from "../tree/tree.interface";
import { checkNode } from "./checkNode";

/*
    NOTE: even though I said in `switchParentAndChild` that I think you should avoid mutations,
    I must admit that here I think it's okay. Some would say it's better style to create a temporary 
    tree here by cloning tree and then return it. I'm inclined to say that, because `tree` is the 
    first parameter and it's very clear, this is okay.

    But really I'd do away with the whole search. See the general comments in README.
*/

// traverse the tree to find `node`, and then add as a child `childToAdd`
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