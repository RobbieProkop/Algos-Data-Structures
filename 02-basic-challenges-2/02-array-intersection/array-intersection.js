function arrayIntersection(arr1, arr2) {
  const resultArr = [];
  // 2 for loops solution
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       resultArr.push(arr1[i]);
  //     }
  //   }
  // }
  // single for loops solution
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr2.includes(arr1[i]) && !resultArr.includes(arr1[i])) {
  //     resultArr.push(arr1[i]);
  //   }
  // }

  // solution using a set
  const set1 = new Set(arr1);
  for (let num of arr2) {
    if (set1.has(num) && !resultArr.includes(num)) {
      resultArr.push(num);
    }
  }
  return resultArr;
}

module.exports = arrayIntersection;
