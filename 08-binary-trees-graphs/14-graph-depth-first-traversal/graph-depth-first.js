const Stack = require('./stack');

function depthFirstTraversal(graph, root) {
  if (!graph.adjacencyList[root]) return []

  const visited = {};
  const stack = new Stack();
  const result = [];

  stack.push(root);
  visited[root] = true;

  while (!stack.isEmpty()) {
    const current = stack.pop();
    console.log('current :>> ', current);
    result.push(current)

    graph.adjacencyList[current].forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        stack.push(neighbour);
      }
    })

    // for (let i = 0; i < graph.adjacencyList[current].length; i++) {
    //   if (!visited[graph.adjacencyList[current][i]]) {
    //     visited[graph.adjacencyList[current][i]] = true;
    //     stack.push(graph.adjacencyList[current][i]);
    //   }
    // }
  }
  return result
}

module.exports = depthFirstTraversal;
