const HashTable = require('./custom-hash-table');


const ht = new HashTable();


// const result = ht._hash("Hi There", ht.limit);


// console.log('result :>> ', result);
ht.set('John', '555-234-3544');
ht.set('James', '555-384-5523');
ht.set('Sara', '555-384-9933');
ht.set('Jill', '555-390-0034');
// ht.set('Robbie', '123-456-7890');

console.log("get test =>>", ht.get('John'))
console.log("get test =>>", ht.get('Sara'))
console.log("get test =>>", ht.get('Undefined'))


// ht.print()