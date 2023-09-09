function fizzBuzzArray(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    //switch case
    // const eval3 = i % 3 === 0;
    // const eval5 = i % 5 === 0;
    // switch (true) {
    //   case eval3 && eval5:
    //     arr.push("FizzBuzz");
    //     break;
    //   case eval3:
    //     arr.push("Fizz");
    //     break;
    //   case eval5:
    //     arr.push("Buzz");
    //     break;
    //   default:
    //     arr.push(i);
    //     break;
    // }

    //if else case
    // if (i % 3 === 0 && i % 5 === 0) {
    //   arr.push("FizzBuzz");
    // } else if (i % 3 === 0) {
    //   arr.push("Fizz");
    // } else if (i % 5 === 0) {
    //   arr.push("Buzz");
    // } else {
    //   arr.push(i);
    // }

    // string concatenation
    let str = "";
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    arr.push(str || i);
  }

  return arr;
}

module.exports = fizzBuzzArray;
