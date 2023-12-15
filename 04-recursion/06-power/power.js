// function power(num, exp) {
//   if (exp < 2) return num;
//   return num * power(num, exp - 1);
// }
const power = (num, exp) => (exp < 2 ? num : num * power(num, exp - 1));

module.exports = power;
