function subsetA(arr) {
  let sorted = arr.sort((a, b) => b - a)
  let subsetA = [sorted[0], sorted[1]];
  let subsetB = sorted.slice(2);
  let sumA = sorted[0] + sorted[1];
  let sumB = subsetB.reduce((acc, cur) => acc + cur);
  if (sumA > sumB) { return subsetA.sort((a, b) => a - b) } else {
    for (let i = 2; i < arr.length; i++) {
      sumA += arr[i];
      subsetA.push(arr[i]);
      sumB -= sorted[i]
      if (sumA > sumB) return subsetA.sort((a, b) => a - b);
    }
  }

  return subsetA.sort((a, b) => a - b)
}


// console.log(subsetA([5, 3, 2, 4, 1, 2]))
console.log(subsetA([2,
  3,
  4,
  4,
  5,
  9,
  7,
  8,
  6,
  10,
  4,
  5,
  10,
  10,
  8,
  4,
  6,
  4,
  10,
  1]))