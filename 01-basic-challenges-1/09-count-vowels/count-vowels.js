function countVowels(str) {
  let vowelCount = 0;
  const lower = str.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (
      lower[i] === "a" ||
      lower[i] === "e" ||
      lower[i] === "i" ||
      lower[i] === "o" ||
      lower[i] === "u" ||
      lower[i] === "y"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
}

module.exports = countVowels;
