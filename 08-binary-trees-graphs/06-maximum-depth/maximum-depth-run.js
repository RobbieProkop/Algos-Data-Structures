const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7

const root = new Node('3');
const b = new Node('9');
const c = new Node('20');
const d = new Node('15');
const e = new Node('7');

root.left = b;
root.right = c;
c.left = d;
c.right = e;

const result = maxDepth(root);

console.log("result", result)