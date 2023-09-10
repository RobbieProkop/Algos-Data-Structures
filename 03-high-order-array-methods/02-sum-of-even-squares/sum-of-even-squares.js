function sumOfEvenSquares(nums) {
  const even = nums.filter((num) => num % 2 === 0);
  const squared = even.map((num) => num * num);
  const total = squared.reduce((prev, cur) => prev + cur, 0);
  return total;
}

module.exports = sumOfEvenSquares;
