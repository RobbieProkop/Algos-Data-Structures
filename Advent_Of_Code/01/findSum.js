// const findSum = (str) => {
//   const arr = str.split("\n");
//   let numArr = [];
//   arr.forEach((newStr) => {
//     const first = newStr.split("").find((char) => !isNaN(char));
//     const last = newStr
//       .split("")
//       .reverse()
//       .find((char) => !isNaN(char));

//     numArr.push(`${first}${last}`);
//   });
//   console.log("numArr :>> ", numArr);
//   const sum = numArr.reduce((prev, cur) => Number(prev) + Number(cur), 0);
//   console.log("sum :>> ", sum);
//   return sum;
// };

const findSum = (str) => {
  const numArr = str.split("\n").map((subStr) => {
    const first = [...subStr].find((num) => !isNaN(num));
    const last = [...subStr].reverse().find((num) => !isNaN(num));
    return `${first}${last}`;
  });
  const sum = numArr.reduce((prev, cur) => Number(prev) + Number(cur), 0);
  console.log("sum :>> ", sum);
  return sum;
};

module.exports = findSum;
