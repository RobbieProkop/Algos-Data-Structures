function countOccurrences(word, letter) {
  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
      count += 1;
    }
  }

  return count;
}

console.log("total", countOccurrences("hello", "l"));
module.exports = countOccurrences;
