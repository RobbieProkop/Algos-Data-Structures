function twoSum(arr, targetSum) {
  const seenNums = new Set;
  for (let i = 0; i < arr.length; i++) {
    const comp = targetSum - arr[i]
    // for (let j = 0; j < arr.length; j++) {
    //   if (arr[j] === comp) {
    //     return [i, j]
    //   }
    // }

    if (seenNums.has(comp)) {
      return [arr.indexOf(comp), i]
    }

    seenNums.add(arr[i])
  }

  return []
}

module.exports = twoSum;
