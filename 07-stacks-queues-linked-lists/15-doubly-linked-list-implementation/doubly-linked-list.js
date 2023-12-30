function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
}

DoublyLinkedList.prototype.prepend = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode
  }

  this.length++;
}

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;
  while (current) {
    console.log(current.data)
    current = current.next;
  }
}

module.exports = DoublyLinkedList;
