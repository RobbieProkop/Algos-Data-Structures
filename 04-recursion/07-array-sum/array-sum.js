// function arraySum(arr) {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return arr[0];

//   const new0 = arr[0] + arr[1];
//   const newArr = arr.slice(2);
//   newArr.unshift(new0);

//   return arraySum(newArr);
// }

// function arraySum(arr) {
//   if (arr.length === 0) return 0;

//   return arr[0] + arraySum(arr.slice(1));
// }

const arraySum = (arr) =>
  arr.length === 0 ? 0 : arr[0] + arraySum(arr.slice(1));
module.exports = arraySum;
