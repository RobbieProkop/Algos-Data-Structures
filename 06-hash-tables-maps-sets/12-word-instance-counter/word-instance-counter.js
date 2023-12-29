const HashTable = require('./HashTable');

function wordInstanceCounter(str, match) {
  const lowerArr = str.replace(/[.,$%^;:-?!*]/g, "").toLowerCase().split(" ");
  let count = 0;

  for (const word of lowerArr) {
    if (word === match) {
      count++
    }
  }
  return count
}

module.exports = wordInstanceCounter;
