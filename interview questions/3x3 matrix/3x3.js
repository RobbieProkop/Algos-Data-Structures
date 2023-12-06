const matrix = (arr) => {
  console.log("arr :>> ", arr);
  let newArr = structuredClone(arr);

  // goes top down (number of arrays)
  for (let j = 0; j < arr.length; j++) {
    //loops left to right (numbers in the subArrays)
    for (let i = 0; i < arr[j].length; i++) {
      if (newArr[j][i] === 1) newArr[j][i] = " ";
      if (arr[j][i] === 0) {
        let count = 0;

        switch (i) {
          case 0:
            // the one after
            if (arr[j][i + 1] === 1) {
              count++;
            }

            // only first and middle rows
            // the one before
            if (j !== 2 && arr[j + 1][i] === 1) {
              count++;
            }
            // below diagonal after
            if (j !== 2 && arr[j + 1][i + 1] === 1) {
              count++;
            }

            // only middle and last rows
            // above
            if (arr[j - 1][i] === 1) {
              count++;
            }
            // above diagonal after
            if (arr[j - 1][i + 1] === 1) {
              count++;
            }

            break;
          case 1:
            // same row
            // the one after
            if (arr[j][i + 1] === 1) count++;
            // the one before
            if (arr[j][i - 1] === 1) count++;

            // only first and middle rows
            // the one before
            if (j !== 2 && arr[j + 1][i] === 1) count++;
            // below diagonal
            if (j !== 2 && arr[j + 1][i + 1] === 1) count++;
            if (j !== 2 && arr[j + 1][i - 1] === 1) count++;

            // only middle and last rows
            // above
            if (j !== 0 && arr[j - 1][i] === 1) count++;
            // above diagonal after
            if (j !== 0 && arr[j - 1][i + 1] === 1) count++;
            if (j !== 0 && arr[j - 1][i - 1] === 1) count++;
            break;
          case 2:
            if (arr[j][i - 1] === 1) count++;
            // only first and middle rows
            if (j !== 2 && arr[j + 1][i] === 1) count++;
            if (j !== 2 && arr[j + 1][i - 1] === 1) count++;
            // only middle and last rows
            if (j !== 0 && arr[j - 1][i] === 1) count++;
            if (j !== 0 && arr[j - 1][i - 1] === 1) count++;
            break;
        }

        newArr[j][i] = count;
      }
    }
  }

  console.log("newArr :>> ", newArr);
  return newArr;
};

module.exports = matrix;
