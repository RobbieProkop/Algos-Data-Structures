function reverseString(str) {
  //base case
  if (str === "") return "";
  let sub = structuredClone(str);
  let reversed = sub.slice(1);
  return reverseString(reversed) + sub[0];
}

module.exports = reverseString;
