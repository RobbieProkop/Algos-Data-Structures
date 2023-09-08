function findMaxNumber(numArray) {
  let biggest = 0;

  for (let i = 0; i <= numArray.length; i++) {
    if (numArray[i] > biggest) biggest = numArray[i];
  }
  return biggest;
}

console.log("biggest", findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
module.exports = findMaxNumber;
