const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  const noPunc = str.replace(/[,.?;:")(*&^%$#@!{}|\[\])]/g, "");

  for (let i = noPunc.length - 1; i >= 0; i--) {
    queue.enqueue(noPunc[i]);
  }
  let reversed = "";
  //use a while here instead of a second for loop to reduce the big O from O(n^2) to O(n)
  while (!queue.isEmpty()) {
    reversed += queue.dequeue();
  }
  return reversed
};

module.exports = reverseStringWithQueue;
