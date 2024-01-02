class Graph {
  constructor() {
    this.adjeacencyList = {}
  }

  addVertex(vertex) {
    this.adjeacencyList[vertex] = [];
  }

  addEdge(vert1, vert2) {
    this.adjeacencyList[vert1].push(vert2)
    this.adjeacencyList[vert2].push(vert1)
  }

  printLists() {
    for (const vertex in this.adjeacencyList) {
      console.log(`${vertex} ==>> ${this.adjeacencyList[vertex].join(" => ")}`)
    }
  }
}

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };





module.exports = Graph;
