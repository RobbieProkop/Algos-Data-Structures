const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, target) {

  const list = new DoublyLinkedList()
  for (const num of nums) {
    const difference = target - num;

    if (list.contains(difference)) return [difference, num]
    list.append(num);
  }

  return null
}

module.exports = findPairSum;
