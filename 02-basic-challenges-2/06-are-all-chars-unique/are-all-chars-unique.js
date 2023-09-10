function areAllCharactersUnique(str) {
  // let arr = [];
  // for (let i = 0; i < str.length; i++) {
  //   arr.push(str[i]);
  // }
  // let newArr = Array.from(new Set(arr));
  // return arr.length === newArr.length;

  // const charCount = {};
  // for (let i = 0; i < str.length; i++) {
  //   if (charCount[str[i]]) return false;
  //   charCount[str[i]] = true;
  // }
  // return true;

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i])) return false;
    arr.push(str[i]);
  }
  return true;
}

module.exports = areAllCharactersUnique;
