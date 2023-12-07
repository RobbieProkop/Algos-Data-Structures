// const matrix = (arr) => {
//   console.log("arr :>> ", arr);
//   let newArr = structuredClone(arr);

//   // goes top down (number of arrays)
//   for (let j = 0; j < arr.length; j++) {
//     //loops left to right (numbers in the subArrays)
//     for (let i = 0; i < arr[j].length; i++) {
//       if (newArr[j][i] === 1) newArr[j][i] = " ";
//       if (arr[j][i] === 0) {
//         let count = 0;

//         switch (i) {
//           case 0:
//             // the one after
//             if (arr[j][i + 1] === 1) {
//               count++;
//             }

//             // only first and middle rows
//             // the one before
//             if (j !== 2 && arr[j + 1][i] === 1) {
//               count++;
//             }
//             // below diagonal after
//             if (j !== 2 && arr[j + 1][i + 1] === 1) {
//               count++;
//             }

//             // only middle and last rows
//             // above
//             if (arr[j - 1][i] === 1) {
//               count++;
//             }
//             // above diagonal after
//             if (arr[j - 1][i + 1] === 1) {
//               count++;
//             }

//             break;
//           case 1:
//             // same row
//             // the one after
//             if (arr[j][i + 1] === 1) count++;
//             // the one before
//             if (arr[j][i - 1] === 1) count++;

//             // only first and middle rows
//             // the one before
//             if (j !== 2 && arr[j + 1][i] === 1) count++;
//             // below diagonal
//             if (j !== 2 && arr[j + 1][i + 1] === 1) count++;
//             if (j !== 2 && arr[j + 1][i - 1] === 1) count++;

//             // only middle and last rows
//             // above
//             if (j !== 0 && arr[j - 1][i] === 1) count++;
//             // above diagonal after
//             if (j !== 0 && arr[j - 1][i + 1] === 1) count++;
//             if (j !== 0 && arr[j - 1][i - 1] === 1) count++;
//             break;
//           case 2:
//             if (arr[j][i - 1] === 1) count++;
//             // only first and middle rows
//             if (j !== 2 && arr[j + 1][i] === 1) count++;
//             if (j !== 2 && arr[j + 1][i - 1] === 1) count++;
//             // only middle and last rows
//             if (j !== 0 && arr[j - 1][i] === 1) count++;
//             if (j !== 0 && arr[j - 1][i - 1] === 1) count++;
//             break;
//         }

//         newArr[j][i] = count;
//       }
//     }
//   }

//   console.log("newArr :>> ", newArr);
//   return newArr;
// };

// const matrix = (arr) => {
//   console.log("arr :>> ", arr);
//   let newArr = structuredClone(arr);
//   const directions = [
//     [-1, -1],
//     [-1, 0],
//     [-1, 1],
//     [0, -1],
//     [0, 1],
//     [1, -1],
//     [1, 0],
//     [1, 1],
//   ];

//   arr.map((subArr, i) => {
//     let count = 0;
//     return subArr.map((el, j) => {
//       if (el === 0) {
//         directions.forEach(([dx, dy]) => {
//           const newRow = i + dx;
//           const newCol = j + dy;

//           if (
//             newRow >= 0 &&
//             newRow < arr.length &&
//             newCol >= 0 &&
//             newCol < subArr.length
//           ) {
//             if (arr[newRow][newCol] === 1) {
//               count++;
//               newArr[i][j] = count;
//             }
//           }
//         });
//       } else {
//         newArr[i][j] = " ";
//       }
//       return count;
//     });
//   });

//   console.log("newArr :>> ", newArr);
//   return newArr;
// };

const matrix = (arr) => {
  console.log("arr :>> ", arr);
  let newArr = structuredClone(arr);

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  arr.map((subArr, i) => {
    let count = 0;
    return subArr.map((el, j) => {
      if (el === 0) {
        directions.forEach(([x, y]) => {
          const newRow = i + x;
          const newCol = j + y;
          if (
            newRow >= 0 &&
            newRow < arr.length &&
            newCol >= 0 &&
            newCol < subArr.length
          ) {
            if (arr[newRow][newCol] === 1) count++;
          }
          newArr[i][j] = count;
          return count;
        });
        console.log("count :>> ", count);
      } else {
        newArr[i][j] = " ";
      }
    });
  });
  console.log("newArr :>> ", newArr);
  return newArr;
};

module.exports = matrix;
