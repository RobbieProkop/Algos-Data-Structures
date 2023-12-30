class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = [];
    this.top = -1;
  }
  push(value) {
    if (this.isFull()) {
      return false
    }
    this.top++;
    this.stack[this.top] = value;

    return true
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.top--;
    return this.stack.pop()

  }

  isFull() {
    return this.top === this.maxSize - 1
  }

  isEmpty() {
    return this.top === -1;
  }
}

module.exports = Stack;
