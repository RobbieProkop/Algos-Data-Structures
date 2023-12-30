const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  const list = new LinkedList()

  const strArr = str.split("");

  console.log('strArr :>> ', strArr);

  strArr.forEach(letter => {
    list.add(letter)
  })

  let reversed = "";
  let i = strArr.length - 1
  while (i > -1) {
    const current = list.get(i)
    console.log("current", current)
    reversed += current;
    i--;
  }

  return reversed


}

module.exports = reverseStringLinkedList;
