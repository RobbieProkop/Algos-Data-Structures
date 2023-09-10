function findMissingLetter(arr) {
  // if (arr.length === 0) return [];

  // let newArr = [];
  // let missing = [""];
  // arr.forEach((letter) => {
  //   const code = letter.charCodeAt(0);
  //   newArr.push(code);
  // });
  // let currentNum = newArr[0];
  // newArr.forEach((num) => {
  //   if (num !== currentNum && num !== currentNum - 1)
  //     return (missing = [String.fromCharCode(currentNum)]);
  //   currentNum++;
  // });
  // return missing[0];

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = letters.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== letters[startIndex + i]) {
      return letters[startIndex + i];
    }
  }
  return "";
}

module.exports = findMissingLetter;
