// function reverseString(str) {
//   //base case
//   if (str === "") return "";

//   let reversed = str.slice(1);
//   return reverseString(reversed) + str[0];
// }

//substr depracated
// const reverseString = (str) =>
//   str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

const reverseString = (str) =>
  str === "" ? "" : reverseString(str.slice(1)) + str[0];

module.exports = reverseString;
