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
    if (!this.root) return null;
    let current = this.root;
    if (current.data === data) return current;

    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current
      }
    }
    return null
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        // Case 1 (0-1 children)
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        if (node.left === null && node.left === null) return null // not sure if i need this.

        //Case 2 (2 children)
        // find smallest value in the right subtree - successor
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        //Case 3 - node is the root node, replace with successor
        //assign the node to the smallest found value in right subtree
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node
      }
    }
    this.root = removeNode(this.root, data)
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
