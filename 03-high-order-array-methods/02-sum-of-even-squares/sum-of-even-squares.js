function sumOfEvenSquares(nums) {
  const total = nums
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((prev, cur) => prev + cur, 0);
  return total;
}

module.exports = sumOfEvenSquares;
