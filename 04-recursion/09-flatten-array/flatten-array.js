// function flattenArray(arr) {
//   let flattened = [];
//   for (let i = 0; i < arr.length; i++) {
//     // if (typeof arr[i] === "object") {
//     if (Array.isArray(arr[i])) {
//       flattened = flattened.concat(flattenArray(arr[i]));
//     } else {
//       flattened.push(arr[i]);
//     }
//   }

//   return flattened;
// }

const flattenArray = (arr) => {
  let flattened = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened = flattened.concat(flattenArray(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

module.exports = flattenArray;
