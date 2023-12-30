const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  // const list = new LinkedList()
  // const strArr = str.split("");

  // strArr.forEach(letter => {
  //   list.add(letter)
  // })

  // let reversed = "";
  // let i = strArr.length - 1
  // while (i > -1) {
  //   const current = list.get(i)
  //   console.log("current", current)
  //   reversed += current;
  //   i--;
  // }
  // return reversed

  // Solution #2
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversed = "";
  let current = list.head;

  while (current !== null) {
    reversed += current.data;
    current = current.next;
  }

  return reversed

}

module.exports = reverseStringLinkedList;
