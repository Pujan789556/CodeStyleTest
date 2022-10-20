import { Tree } from "../tree.interface";
import { changeRoot } from "../tree.service";
import { inputStub, outputStub } from "./stubs/tree.stub";

describe('RootreplaceTest', () => {
    describe('changeRoot', () => {
        describe('When Change root is called', () => {
            let output: Tree;
            beforeEach(() => {
                output = changeRoot(inputStub(), 'D');
                console.log('Output', typeof output, typeof outputStub());
            });
            test('It should replace the root by provided node', () => {
                expect(output).toStrictEqual(outputStub());
            })
        })
    })
})