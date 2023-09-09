function findMissingNumber(arr) {
  let missing;
  let current = 1;
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== current) {
      missing = i + 1;
      return missing;
    }
    current += 1;
  }
  return missing;
}

module.exports = findMissingNumber;
