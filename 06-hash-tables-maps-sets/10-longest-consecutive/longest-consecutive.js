function longestConsecutiveSequence(nums) {
  let largest = 0;

  let set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {

    if (!set.has(nums[i])) {
      set.add(nums[i])
    }
  }

  for (const num of set) {
    if (set.has(num + 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentLength++;
        currentNum++;
      }
      largest = Math.max(currentLength, largest)
    }

  }

  return largest
}

module.exports = longestConsecutiveSequence;
