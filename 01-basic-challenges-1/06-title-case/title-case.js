function titleCase(string) {
  let wordArr = string.toLowerCase().split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
  }

  return wordArr.join(" ");
}

module.exports = titleCase;
