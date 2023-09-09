function removeDuplicates(arr) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!newArr.includes(arr[i])) {
  //     newArr.push(arr[i]);
  //   }
  // }
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}

module.exports = removeDuplicates;
