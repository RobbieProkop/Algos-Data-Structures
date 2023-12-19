const nameMap = new Map([
  [1, "John"],
  [2, "Jack"],
  [3, "Jill"],
  [4, "Bill"],
]);

const myFunciton = () => {};
const myObj = {};

const map2 = new Map([
  ["name", "John"],
  [1, "number one"],
  [true, "it is true"],
  [null, "null"],
  [myFunciton, "some function"],
  [myObj, "some object"],
]);

console.log("newMap :>> ", map2);

//Get Values of Map

// console.log("simple .get", nameMap.get(1));
// console.log("simple .get map2", map2.get(myFunciton));

//set values ( will overwrite)

nameMap.set(4, "Mike");
nameMap.set(5, "Yuli");

console.log("nameMap :>> ", nameMap);

//check values -boolean

console.log("nameMap has:>> ", nameMap.has(1));
console.log("nameMap has:>> ", nameMap.has(10));

// remove values

nameMap.delete(3);
console.log("nameMap has:>> ", nameMap.has(3));

// size of map
console.log("nameMap.size :>> ", nameMap.size);

// iterate over map
for (const [key, value] of nameMap) {
  console.log("key, value :>> ", key, value);
}

nameMap.forEach((name, key) => console.log(key, name));

//get keys
console.log(nameMap.keys());

// get values
console.log(nameMap.values());

//Clear map
nameMap.clear();

console.log("nameMap.size :>> ", nameMap.size);
