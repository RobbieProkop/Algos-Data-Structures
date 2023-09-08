function findMaxNumber(numArray) {
  //this is an easy way
  // return Math.max(...numArray);
  let biggest = numArray[0];
  for (let i = 1; i <= numArray.length; i++) {
    if (numArray[i] > biggest) biggest = numArray[i];
  }
  return biggest;
}

module.exports = findMaxNumber;
