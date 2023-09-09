function arrayIntersection(arr1, arr2) {
  const resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultArr.push(arr1[i]);
      }
    }
  }

  return resultArr;
}

module.exports = arrayIntersection;
