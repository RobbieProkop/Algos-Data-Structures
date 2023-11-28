function findMissingLetter(arr) {
  let missing;
  const unicodes = arr.map((letter) => letter.charCodeAt());
  unicodes.filter((num, index) => {
    if (num !== unicodes[0] && num !== unicodes[index - 1] + 1)
      missing = String.fromCharCode(num - 1);
  });
  return missing;
}

module.exports = findMissingLetter;
