// function removeDuplicates(arr) {
//   let newArr = [];
//   //option 1
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (!newArr.includes(arr[i])) {
//   //     newArr.push(arr[i]);
//   //   }
//   // }
//   arr.forEach((item) => {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// }
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
