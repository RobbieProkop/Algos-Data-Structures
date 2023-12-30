const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  const noPunc = str.replace(/[,.?;:")(*&^%$#@!{}|\[\])]/g, "");

  for (let i = noPunc.length - 1; i >= 0; i--) {
    queue.enqueue(noPunc[i]);
  }
  let reversed = "";
  for (let i = noPunc.length - 1; i >= 0; i--) {
    reversed += queue.dequeue();
  }
  return reversed
};

module.exports = reverseStringWithQueue;
