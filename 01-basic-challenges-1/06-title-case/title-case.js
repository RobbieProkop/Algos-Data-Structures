function titleCase(string) {
  let newString = string.toLowerCase();

  newString = newString.split(" ");
  for (let i = 0; i < newString.length; i++) {
    // console.log(newString[i][0].toUpperCase());

    for (let j = 0; j < newString[i].length; j++) {
      if (j === 0) {
        newString[i] = newString[i][j].toUpperCase();
      }
      newString[i] += newString[i][j];
    }

    console.log(newString[i]);
  }

  return newString;
}

console.log("title", titleCase("oH mY gOsH"));
module.exports = titleCase;
