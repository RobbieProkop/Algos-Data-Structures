const { Node, recDepthFirstTraversal } = require('./depth-first-traversal-recursive');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const root = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.left = f;

console.log('recDepthFirstTraversal() :>> ', recDepthFirstTraversal(root));