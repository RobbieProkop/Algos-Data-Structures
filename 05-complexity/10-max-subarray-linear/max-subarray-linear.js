function maxSubarraySum(arr, k) {
  let current = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    max += arr[i];
  }

  current = max;

  for (let j = k; j < arr.length; j++) {
    current = current - arr[j - k] + arr[j];
    console.log("current :>> ", current);
    if (current > max) max = current;
  }

  return max;
}

module.exports = maxSubarraySum;
