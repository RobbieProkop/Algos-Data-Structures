function findFirstNonRepeatingCharacter(str) {
  // const charCount = {};
  // for (const char of str) {
  //   charCount[char] = (charCount[char] || 0) + 1;
  // }
  // for (const char of str) {
  //   if (charCount[char] === 1) return char;
  // }
  // return null;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) return str[i];
  }
  return null;
}

module.exports = findFirstNonRepeatingCharacter;
