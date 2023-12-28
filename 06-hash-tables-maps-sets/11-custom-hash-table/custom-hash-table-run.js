const HashTable = require('./custom-hash-table');


const myHashTable = new HashTable(8);


// const result = myHashTable._hash("Hi There", myHashTable.limit);


// console.log('result :>> ', result);
myHashTable.set('john', '555-123-4567');
// myHashTable.set('Mati', '555-097-7654');
// myHashTable.set('Yuli', '555-102-9384');
// myHashTable.set('Robbie', '123-456-7890');

myHashTable.print()