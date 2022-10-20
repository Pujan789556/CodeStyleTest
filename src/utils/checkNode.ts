import { Tree } from "../tree/tree.interface";

export const checkNode = (tree: Tree, node: string) => {
    if(tree.root === node) return true;
    return false;    
}