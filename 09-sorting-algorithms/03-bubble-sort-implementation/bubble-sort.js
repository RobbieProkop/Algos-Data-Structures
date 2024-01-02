// function bubbleSort(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         const temp = nums[j]
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp
//       }
//     }
//   }
//   return nums
// }

function bubbleSort(arr) {
  let swapped = false;

  while (!swapped) {
    swapped = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = false
      }
    }
  }
  return arr
}

module.exports = bubbleSort;
