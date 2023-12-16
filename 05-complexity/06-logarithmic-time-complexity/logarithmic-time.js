/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

//Recusrion examples - NOT LOG N
// const findPower = (base, exp) =>
//   exp === 0 ? 1 : base * findPower(base, exp - 1);
// const findPower = (base, exp) => {
//   if (exp === 0) return 1;

//   console.log("exp :>> ", exp);
//   return base * findPower(base, exp - 1);
// };

const findPower = (base, exp) => {
  if (exp === 0) return 1;

  if (exp % 2 === 0) {
    const halfPower = findPower(base, exp / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exp - 1) / 2);
    return base * halfPower * halfPower;
  }
};

console.time("find power 1");
findPower(2, 100);
console.timeEnd("find power 1");
console.time("find power 2");
findPower(2, 10);
console.timeEnd("find power 2");
