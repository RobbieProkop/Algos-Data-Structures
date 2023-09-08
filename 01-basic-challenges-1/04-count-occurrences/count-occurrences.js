//with for loop

// function countOccurrences(word, letter) {
//   let count = 0;
//   for (let i = 0; i <= word.length; i++) {
//     if (word[i] === letter) {
//       count += 1;
//     }
//   }

//   return count;
// }

// with split.length
function countOccurrences(word, letter) {
  let newWord = word.split(letter).length - 1;
  return newWord;
}
module.exports = countOccurrences;
