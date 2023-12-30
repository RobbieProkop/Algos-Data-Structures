const Stack = require('./stack');

function balancedParenthesis(str) {
  const stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    console.log(`str[${i}] :>> `, str[i]);
    if (str[i] === "(") {
      stack.push(str[i])
    }
    // if (stack.isEmpty) return false
    console.log("empty?? ", str[i] === ")" && stack.isEmpty())
    if (str[i] === ")" && stack.isEmpty()) {
      return false
    } else if (str[i] === ")") {
      stack.pop()
    }

  }
  console.log('stack :>> ', stack);
  if (!stack.isEmpty() || stack.stack.length !== 0) { return false } else {
    return true
  }

}

module.exports = balancedParenthesis;
