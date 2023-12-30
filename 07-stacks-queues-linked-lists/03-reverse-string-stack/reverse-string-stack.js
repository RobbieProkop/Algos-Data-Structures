const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack()
  const noPunc = str.replace(/[.?!$%^&*()":;,]/g, "")
  for (let i = 0; i < noPunc.length; i++) {

    stack.push(noPunc[i])
  }
  let newString = "";
  // for (let i = 0; i < noPunc.length; i++) {
  //   newString += stack.pop()
  // }
  while (!stack.isEmpty()) {
    newString += stack.pop()
  }
  return newString
}

module.exports = reverseStringStack;
