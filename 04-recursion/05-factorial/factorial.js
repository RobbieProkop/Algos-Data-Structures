// function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   return factorial(num - 1) * num;
// }

const factorial = (num) =>
  num === 0 || num === 1 ? 1 : factorial(num - 1) * num;

module.exports = factorial;
