const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  const stack = new Stack();
  const queue = new Queue();
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")

  for (let i = 0; i < newStr.length; i++) {
    stack.push(newStr[i]);
    queue.enqueue(newStr[i]);
  }
  for (const letter in newStr) {
    if (queue.dequeue() === stack.pop()) {
      continue
    }
    return false
  }

  return true
}

module.exports = isPalindromeQueueStack;
