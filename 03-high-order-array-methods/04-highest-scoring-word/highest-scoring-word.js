function highestScoringWord(str) {
  let words = str.split(" ");
  let highestScore = 0;
  let highestWord = "";

  words.forEach((word, index) => {
    let letters = word.split("");
    let total = 0;
    letters.forEach((letter) => {
      total += letter.charCodeAt(0) - 96;
    });
    if (total > highestScore) {
      highestScore = total;
      highestWord = word;
    }
  });
  return highestWord;
}

module.exports = highestScoringWord;
