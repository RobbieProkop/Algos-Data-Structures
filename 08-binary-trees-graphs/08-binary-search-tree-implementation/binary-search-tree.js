class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode
            return this;
          }
          current = current.left;
        }
        if (value >= current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return null;
    let current = this.root;
    if (current.value === value) return current;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current
      }
    }
    return null
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) return null;
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        // Case 1 (0-1 children)
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        // if (node.left === null && node.left === null) return null // not sure if i need this.

        //Case 2 (2 children)
        // find smallest value in the right subtree - successor
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        //Case 3 - node is the root node, replace with successor
        //assign the node to the smallest found value in right subtree
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node
      }
    }
    this.root = removeNode(this.root, value)
  }



  printTree() {

    const printNode = (node) => {
      if (node === null) return
      printNode(node.left);
      console.log(node.value)
      printNode(node.right);
    }
    printNode(this.root)
  }
}



module.exports = { Node, BinarySearchTree };
