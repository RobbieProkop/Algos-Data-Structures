
function getNumber(binary) {
  // this solution works, but not when values are very large (such as a 64 int input)
  let binaryStr = "";
  let current = binary;

  while (current !== null) {
    binaryStr += current.data;
    current = current.next;
  }

  if (binaryStr.length <= (2 ^ 53 - 1)) {
    return parseInt(binaryStr, 2)
  }
  const chunkSize = 52;
  let result = 0;
  let multiplier = 1;

  for (let i = binaryStr.length; i > 0; i -= chunkSize) {
    let chunk = binaryStr.substring(Math.max(i - chunkSize, 0), i);
    let value = parseInt(chunk, 2);
    result += value * multiplier;
    multiplier *= Math.pow(2, chunkSize)
  }

  return result


}

// console.log(getNumber([0, 0, 1, 1, 0, 1, 0]));
console.log(getNumber([0
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1
  , 1]));