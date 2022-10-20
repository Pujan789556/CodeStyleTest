import { Tree } from "./tree/tree.interface";
import { changeRoot } from "./tree/tree.service";

const inputTree: Tree = {
    root: 'A',
    children: [{
        root: 'E',
        children: [{
            root: 'F',
            children: []
        },
        {
            root: 'G',
            children: []
        },
        {
            root: 'H',
            children: []
        }],
    },
    {
        root: 'B',
        children: [{
            root: 'C',
            children: []
        },
        {
            root: 'D',
            children: [{
                root: 'I',
                children: []
            }]
        }]
    }]
};

const rootReplacedTree = changeRoot(inputTree, 'D');

console.log(JSON.stringify(rootReplacedTree));