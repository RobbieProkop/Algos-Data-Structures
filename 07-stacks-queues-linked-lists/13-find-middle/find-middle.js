function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (list.length % 2 === 0) {
    return slow.next
  }
  return slow

  // solution #2;
  // let slow = list.head;
  // let fast = list.head;
  // let prev = null;

  // while (fast !== null && fast.next !== null) {
  //   previous = slow;
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }

  // if (fast === null) {
  //   return previous.next;
  // }

  // return slow
}

module.exports = findMiddle;
