function countDown(num) {
  // while (num > 0) {
  //   console.log("num :>> ", num--);
  //   num--;
  // }

  // base case
  if (num <= 0) {
    console.log("All done!");
    return "All done!";
  }

  //recursion
  console.log(num);
  num--;
  return countDown(num);
}

module.exports = countDown;
