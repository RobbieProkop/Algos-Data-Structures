const HashTable = require('./HashTable');

function anagramGrouping(arr) {
  const ht = new HashTable();


  for (const word of arr) {
    const sorted = word.split("").sort().join("");
    //key will be the sorted letters, value will be the word
    if (ht.has(sorted)) {

      const value = ht.get(sorted)

      let subArr = []
      for (let i = 0; i < value.length; i++) {
        subArr.push(value[i])
      }
      subArr.push(word)
      ht.set(sorted, subArr)

    } else {
      ht.set(sorted, [word])
    }

  }
  const allValues = ht.getValues()
  return allValues

}

module.exports = anagramGrouping;
