const Stack = require('./stack');

const stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)


stack.pop()
console.log('stack :>> ', stack);
console.log('stack.peek() :>> ', stack.peek());