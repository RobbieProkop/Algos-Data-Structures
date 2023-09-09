function findMissingNumber(arr) {
  let missing;
  // let current = 1;
  // const sorted = arr.sort((a, b) => a - b);

  // for (let i = 0; i < sorted.length; i++) {
  //   if (sorted[i] !== current) {
  //     missing = i + 1;
  //     return missing;
  //   }
  //   current += 1;
  // }
  let n = arr.length + 1;
  let expected = (n * (n + 1)) / 2;
  // let actual = 0;
  // arr.forEach((num) => {
  //   actual += num;
  // });
  // missing = expected - actual;
  // return missing;
  const actual = arr.reduce((sum, num) => sum + num, 0);
  return expected - actual;
}

module.exports = findMissingNumber;
