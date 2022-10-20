import { Tree } from "../../tree.interface"

export const inputStub = (): Tree => {
    return {
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
  };

  export const outputStub = (): Tree => {
    return {
        root: 'D',
        children: [{
            root: 'I',
            children: [],
        },
        {
            root: 'B',
            children: [{
                root: 'C',
                children: []
            },
            {
                root: 'A',
                children: [{
                    root: 'E',
                    children: [{
                        root: 'F',
                        children: [],
                    },
                    {
                        root: 'G',
                        children: [],
                    },
                    {
                        root: 'H',
                        children: [],
                    }]
                }]
            }]
        }]
    };
}
  