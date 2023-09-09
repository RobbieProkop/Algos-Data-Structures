function isPalindrome(str) {
  const noSpaceNoComma = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return noSpaceNoComma.split("").reverse().join("") === noSpaceNoComma;
}

module.exports = isPalindrome;
