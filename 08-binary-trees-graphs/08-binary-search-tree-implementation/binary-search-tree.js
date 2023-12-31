class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode
            return this;
          }
          current = current.left;
        }
        if (data >= current.data) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(data) {
    if (this.root.data === data) return true

  }

  printTree() {

    const printNode = (node) => {
      if (node === null) return
      printNode(node.left);
      console.log(node.data)
      printNode(node.right);
    }
    printNode(this.root)
  }
}

module.exports = { Node, BinarySearchTree };
