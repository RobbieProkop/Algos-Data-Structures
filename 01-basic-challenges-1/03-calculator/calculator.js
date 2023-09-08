function calculator(a, b, c) {
  if (c !== "+" && c !== "-" && c !== "*" && c !== "/")
    throw new Error("Invalid Operator");
  return eval(a + c + b);
}

// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       throw new Error("invalid operator");
//   }

//   return result;
// }

console.log("calculate", calculator(2, 2, "+"));

module.exports = calculator;
