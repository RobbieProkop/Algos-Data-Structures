// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vert1, vert2) {
    this.adjacencyList[vert1].push(vert2)
    this.adjacencyList[vert2].push(vert1)
  }

  removeEdge(vert1, vert2) {
    if (!vert1 || !vert2) return
    this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(v => v !== vert2)
    this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(v => v !== vert1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVert = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVert)
    }
    delete this.adjacencyList[vertex];
  }

  printLists() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`)
    }
  }
}





module.exports = Graph;
