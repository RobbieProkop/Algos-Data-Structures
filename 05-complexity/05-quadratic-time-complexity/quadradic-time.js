/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/
const sumArr = (arr) => {
  let sum = 0;

  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return sum + sum2;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = Array.from({ length: 100000 }, (_, index) => index + 1);

console.time("sum double 1");
console.log(sumArr(arr));
console.timeEnd("sum double 1");

console.time("sum double 2");
console.log(sumArr(arr2));
console.timeEnd("sum double 2");
