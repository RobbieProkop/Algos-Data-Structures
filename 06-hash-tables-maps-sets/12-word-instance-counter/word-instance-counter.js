const HashTable = require('./HashTable');

function wordInstanceCounter(str, match) {
  const lowerArr = str.replace(/[[.,$%^;:-?!*]]/g, "").toLowerCase().split(/\W+/);
  const wordFrequency = new HashTable()
  // if (!wordFrequency.has(match)) return 0;
  const target = match.toLowerCase();


  let count = 0;
  for (const current of lowerArr) {
    if (current === "") continue;
    if (wordFrequency.has(current)) {
      wordFrequency.set(current, wordFrequency.get(current) + 1)
    } else {
      wordFrequency.set(current, 1)
    }

    if (current === target) {
      count = wordFrequency.get(current)
    }
  }

  return count

  //this is without using the hash
  // const lowerArr = str.replace(/[.,$%^;:-?!*]/g, "").toLowerCase().split(" ");
  // let count = 0;

  // for (const word of lowerArr) {
  //   if (word === match.toLowerCase()) {
  //     count++
  //   }
  // }
  // return count
}

module.exports = wordInstanceCounter;
