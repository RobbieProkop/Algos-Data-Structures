const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNum = numbers.map((num) => num * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filtered = numbers.filter((num) => num % 2 === 0);

console.log("filtered :>> ", filtered);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((prev, cur) => prev + cur, 0);

console.log("sum", sum);
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => console.log(num * 2));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const found = numbers.find((num) => num % 2 === 0);
console.log("found :>> ", found);
/**
 * some: Checks if at least one array element satisfies a condition.
 */

const isTrue = numbers.some((num) => num === 4);
console.log("isTrue :>> ", isTrue);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const isFalse = numbers.every((num) => num % 2);
console.log("isFalse :>> ", isFalse);
