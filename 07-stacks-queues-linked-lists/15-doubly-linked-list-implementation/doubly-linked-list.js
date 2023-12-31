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


DoublyLinkedList.prototype.insertAt = function (index, data) {

  if (index < 0 || index > this.length) return null;
  if (index === 0) return this.prepend(data)
  if (index === this.length) return this.append(data)

  const newNode = new Node(data);
  let current = this.head;

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  newNode.prev = current;
  newNode.next = current.next;
  current.next.prev = newNode;
  current.next = newNode;

  this.length++;
}

DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return null;

  let current = this.head;
  let i = 0;

  while (i < index) {
    current = current.next;
    i++
  }

  return current

}

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) return null;

  //first check if it is the first item
  if (index === 0) {
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null
    } else {
      this.tail = null
    }
    //check if last item
  } else if (index === this.length - 1) {
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }
    // everything in the middle
  } else {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      console.log(`this is i ${i}`)
      current = current.next;
    }
    console.log('current outside :>> ', current.prev.data);
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
  this.length--;
}

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;
  while (current) {
    console.log(current.data)
    current = current.next;
  }
}

module.exports = DoublyLinkedList;
