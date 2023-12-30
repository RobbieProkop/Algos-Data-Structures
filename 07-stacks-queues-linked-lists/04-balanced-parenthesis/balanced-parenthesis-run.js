const balancedParenthesis = require('./balanced-parenthesis');

const result1 = balancedParenthesis('()()()');
const result2 = balancedParenthesis('()(');
const result3 = balancedParenthesis('((');

console.log(result1, result2, result3);
