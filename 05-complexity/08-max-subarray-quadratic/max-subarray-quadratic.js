function maxSubarraySum(arr, k) {
  let max = -Infinity;

  for (let i = 0; i < arr.length - k; i++) {
    let current = 0;

    for (let j = i; j < i + k; j++) {
      current += arr[j];
    }
    console.log("current :>> ", current);
    max = Math.max(current, max);
  }

  return max;
}

module.exports = maxSubarraySum;
