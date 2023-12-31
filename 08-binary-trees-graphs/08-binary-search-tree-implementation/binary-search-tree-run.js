const { Node, BinarySearchTree } = require('./binary-search-tree');

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

// this is depth first. not a BST
// const root = new Node(10);
// const node5 = new Node(5);
// const node15 = new Node(15);
// const node2 = new Node(2);

// root.left = node5;
// root.right = node15;
// node5.left = node2;

// const result = new BinarySearchTree()

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)

bst.printTree()

