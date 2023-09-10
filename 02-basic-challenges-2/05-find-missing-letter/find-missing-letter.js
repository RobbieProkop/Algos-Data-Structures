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

  //solution 2
  // const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const startIndex = letters.indexOf(arr[0]);

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== letters[startIndex + i]) {
  //     return letters[startIndex + i];
  //   }
  // }
  // return "";

  //solution 3 (better version of #1)
  let start = arr[0].charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}

module.exports = findMissingLetter;
