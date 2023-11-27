// function validAnagrams(str1, str2) {
//   let isAnagram = false;

//   const sorted1 = str1.split("");
//   const sorted2 = str2.split("");

//   sorted1
//     .sort((a, b) => {
//       if (a > b) return 1;
//       if (a < b) return -1;
//       return 0;
//     })
//     .join("");
//   sorted2
//     .sort((a, b) => {
//       if (a > b) return 1;
//       if (a < b) return -1;
//       return 0;
//     })
//     .join("");

//   if (sorted1.join("") === sorted2.join("")) {
//     isAnagram = true;
//   }

//   return isAnagram;
// }
// function validAnagrams(str1, str2) {
//   const freqCount1 = str1.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
//   const freqCount2 = str2.split("").reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   console.log("freqCount1 :>> ", freqCount2);
//   for (let i = 0; i < freqCount1.length; i++) {
//     return console.log("freq1", freqCount1[i]);
//   }

//   return Object.keys(freqCount1).every(
//     (char) => freqCount1[char] === freqCount2[char]
//   );
// }

function validAnagrams(str1, str2) {
  const word1 = str1.split("").sort().join("");
  const word2 = str2.split("").sort().join("");
  return word1 === word2;
}

module.exports = validAnagrams;
