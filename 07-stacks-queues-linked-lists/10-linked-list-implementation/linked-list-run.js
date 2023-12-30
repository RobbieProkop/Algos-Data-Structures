const { LinkedList } = require('./linked-list');

const list = new LinkedList();

list.add(100)
list.add(200)
list.add(300)
list.add(400)

list.insertAt(3, "New Node")
list.removeFrom(3)

list.printAll()

// console.log("get >>", list.get(2))