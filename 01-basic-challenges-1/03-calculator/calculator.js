function calculator(a, b, c) {
  return eval(a + c + b);
}

console.log("calculate", calculator(2, 2, "+"));

module.exports = calculator;
