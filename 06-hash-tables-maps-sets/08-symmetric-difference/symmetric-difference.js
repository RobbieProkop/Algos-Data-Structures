function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const res = []

  for (const num of set1) {
    if (!set2.has(num)) res.push(num)
  }
  for (const num of set2) {
    if (!set1.has(num)) res.push(num)
  }

  console.log('res :>> ', res);
  return res
}

module.exports = symmetricDifference;
