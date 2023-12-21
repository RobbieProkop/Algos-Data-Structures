function anagramGrouping(arr) {
  const map = new Map();

  arr.forEach(word => {
    const sorted = word.split("").sort().join("")
    if(map.has(sorted)) {
      map.get(sorted).push(word)
    } else {
      map.set(sorted, [word])
    }
    console.log('map :>> ', map);
    console.log('word :>> ',sorted);
  })

  return Array.from(map.values())
  

  
}

module.exports = anagramGrouping;