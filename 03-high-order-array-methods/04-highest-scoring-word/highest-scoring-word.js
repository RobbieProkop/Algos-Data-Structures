function highestScoringWord(str) {
  let words = str.split(" ");
  let highestScore = 0;
  let values = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 
    'z'
  ];
  

  words.forEach((word, index) => {
    let letters = word.split("");
    let total = 0;
    letters.forEach(letter => {
      if (letters[] === values[index])
    })
 
  });
}

module.exports = highestScoringWord;
