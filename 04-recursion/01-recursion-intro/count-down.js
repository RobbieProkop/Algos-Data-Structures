function countDown(num) {
  // while (num > 0) {
  //   console.log("num :>> ", num--);
  //   num--;
  // }

  // base case
  if (num <= 0) {
    console.log("num :>> ", num);
    return;
  }

  //recursion
  console.log("num :>> ", num);
  num--;
  countDown(num);
}

module.exports = countDown;
