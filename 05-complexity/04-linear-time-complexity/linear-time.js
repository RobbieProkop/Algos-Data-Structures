/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

function sumArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const arr2 = Array.from({ length: 10000000 }, (_, index) => index + 1);

console.time("sum arr 1");
console.log("sumArr(arr) :>> ", sumArr(arr));
console.timeEnd("sum arr 1");

console.time("sum arr 2");
console.log("sumArr(arr) :>> ", sumArr(arr2));
console.timeEnd("sum arr 2");
