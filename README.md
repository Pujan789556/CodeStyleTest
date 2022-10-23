# CodeStyleTest

{NOTE: The algorithm is quite reasonable. As I wrote in Skype, I am struck that you are the only one who used my basic approach! Also, the layout of the files is good. Your few comments are also helpful. A few general points:
1. A README is a valuable resource, because it's the place everyone will look at first. I think you should always have more than how to run it. I think it is far better to have even a basic intro, and any comments of use.  See below.
2. I think that it would have been better to submit it as a working package that either exports a working function or runs as a simple CLI that lets me enter sample data. You can always rely on a test to use a hard-coded version. You can refer the viewer to a particular test file or files as well, as I do below.
3. Every time you call `findNode`, you take O[N] time. So your core algorithm for changing the direction of the edges seems to me to take O[n^2] or O[n*log(n)] rather than O[n] or O[log(n)] time.  But also strictly speaking your solution as it stands requires that `AddChild` must search to find the node. If you would instead use one recursive call (see my solution), I think it would improve the runtime.
4. I am aware that there is long-standing debate about whether it is better style to have localized test directories, as you do, or one big test directory. I am inclined to say that it's better for our projects to have a test directory. I think that that's the trend, but also I think that it allows for a simpler sharing of test objects, such as your `tree.stub.ts`. Again, that's not a criticism, more a request moving forward.
5. I've changed the names of two of your functions. Names are, I think, far more important than documentation. I think that those are more clear.
6. It is great that you show your coverage. I think that, given that this was a test of good style, I would have brought branches and statements up to 100%. In practice, we are not holding at 100% coverage. Sometimes it makes sense--depends on how stable the code base is. We're still in flex. So you don't have to be obsessed normally, just during a test HaHa.

See also comments in the code.
}

## About the Project
This code implements an algorithm that solves a coding challenge by NoStack to create a function that accepts as parameters an undirected tree and a node name, and that returns a tree rooted in the named node with all of the same edges as the current tree.

The tree is stored using a [Tree](src/tree//tree.interface.ts) type.

The core function for the solution is [changeRoot](src/tree/tree.service.ts). The solution fundamentally has two steps:

1. derive the path from the root to the named node.
2. reverse parent and child in each edge of that path, starting with the named node


## Performance
The first step takes O[N] time. The second in the absolute worst case would take O[N^2] time, but in practice would be expected to take close to O[N*log(N)] time. The testing is limited, but it appears to work.

## Practical Usage
Currently, it runs a hard-coded test. But you can easily update `src/index.ts` to export `changeRoot`. Then you can import the package and follow the sample there now for input, or look at [tree.stubs.ts](src/tree/test/stubs/tree.stub.ts).

## Running the code
Start:
- npm install
- npm run start
- npm run start:dev

Test:
- npm run test (Test with coverage)


