function wordFrequencyCounter(str) {
  const map = new Map([]);
  if (str.length === 0) return map;
  const arr = str
    .toLowerCase()
    .replace(/[!.?,]/g, "")
    .split(" ");

  arr.forEach((word) => {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
      return;
    }
    map.set(word, 1);
  });

  return map;
}

module.exports = wordFrequencyCounter;
