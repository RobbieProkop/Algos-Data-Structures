// function highestScoringWord(str) {
//   let words = str.split(" ");
//   let highestScore = 0;
//   let highestWord = "";

//   words.forEach((word, index) => {
//     let letters = word.split("");
//     let total = 0;
//     letters.forEach((letter) => {
//       total += letter.charCodeAt(0) - 96;
//     });
//     if (total > highestScore) {
//       highestScore = total;
//       highestWord = word;
//     }
//   });
//   return highestWord;
// }

// function highestScoringWord(str) {
//   let words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }
//     return score;
//   });
//   let highestScore = scores[0];
//   let highestWord = words[0];

//   scores.forEach((score, index) => {
//     if (score > highestScore) {
//       highestScore = scores[index];
//       highestWord = words[index];
//     }
//   });

//   return highestWord;
// }

function highestScoringWord(str) {
  let words = str.split(" ");

  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });
  let highestScore = Math.max(...scores);
  let highestWord = scores.indexOf(highestScore);

  return words[highestWord];
}

module.exports = highestScoringWord;
