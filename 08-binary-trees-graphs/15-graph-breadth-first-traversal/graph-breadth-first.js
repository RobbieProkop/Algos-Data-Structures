const Queue = require('./queue');

// function breadthFirstTraversal(g, vertex) {
//   if (!vertex) return [];

//   const visited = {};
//   const result = [];
//   const queue = new Queue();

//   queue.enqueue(vertex);
//   visited[vertex] = true

//   while (!queue.isEmpty()) {
//     const current = queue.dequeue();
//     result.push(current)
//     console.log('result :>> ', result);
//     g.adjacencyList[current].forEach(neighbour => {
//       if (!visited[neighbour]) {
//         visited[neighbour] = true;
//         queue.enqueue(neighbour)
//       }
//     })
//   }
//   return result
// }

function breadthFirstTraversal(g, vertex) {
  if (!vertex) return [];

  const visited = new Set();
  const result = [];
  const queue = new Queue();

  queue.enqueue(vertex);
  visited.add(vertex);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    result.push(current);
    for (const neighbour of g.adjacencyList[current]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.enqueue(neighbour);
      }
    }
  }
  return result
}

module.exports = breadthFirstTraversal;
