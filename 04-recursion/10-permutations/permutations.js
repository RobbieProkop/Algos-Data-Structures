function permutations(str) {
  let array = [];

  if (str.length === 0) {
    array.push("");
    return array;
  }

  for (let i = 0; i < str.length; i++) {
    const first = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    const subPerm = permutations(remaining);

    for (let j = 0; j < subPerm.length; j++) {
      array.push(first + subPerm[j]);
    }
  }
  return array;
}

module.exports = permutations;
