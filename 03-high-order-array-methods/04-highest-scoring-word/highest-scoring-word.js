function highestScoringWord(str) {
  let words = str.split(" ");
  let highestScore = 0;

  words.forEach((word, index) => {
    let letters = word.split("");
    let total = 0;
    console.log("letters", word.charCodeAt(1));
    // letters.forEach(letter => {
    //   if (letters[] === values[index])
    // })
  });
}

module.exports = highestScoringWord;
