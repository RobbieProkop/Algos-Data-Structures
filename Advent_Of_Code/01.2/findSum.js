const findSum = (str) => {
  const regex = /(one|two|three|four|five|six|seven|eight|nine)/g;
  const replaced = str.replace(regex, (match) => {
    switch (match) {
      case "one":
        return "o1e";
      case "two":
        return "t2o";
      case "three":
        return "t3ree";
      case "four":
        return "f4ur";
      case "five":
        return "f5ve";
      case "six":
        return "s6x";
      case "seven":
        return "s7ven";
      case "eight":
        return "e8ght";
      case "nine":
        return "n9ne";
      default:
        return match;
    }
  });

  const replaced2 = replaced.replace(regex, (match) => {
    switch (match) {
      case "one":
        return "o1e";
      case "two":
        return "t2o";
      case "three":
        return "t3ree";
      case "four":
        return "f4ur";
      case "five":
        return "f5ve";
      case "six":
        return "s6x";
      case "seven":
        return "s7ven";
      case "eight":
        return "e8ght";
      case "nine":
        return "n9ne";
      default:
        return match;
    }
  });
  const replaced3 = replaced2.replace(regex, (match) => {
    switch (match) {
      case "one":
        return "o1e";
      case "two":
        return "t2o";
      case "three":
        return "t3ree";
      case "four":
        return "f4ur";
      case "five":
        return "f5ve";
      case "six":
        return "s6x";
      case "seven":
        return "s7ven";
      case "eight":
        return "e8ght";
      case "nine":
        return "n9ne";
      default:
        return match;
    }
  });

  const numArr = replaced3.split("\n").map((subStr) => {
    const first = [...subStr].find((num) => !isNaN(num));
    const last = [...subStr].reverse().find((num) => !isNaN(num));
    return first && last ? `${first}${last}` : "00";
  });
  const sum = numArr.reduce((prev, cur) => Number(prev) + Number(cur), 0);
  console.log("sum :>> ", sum);
  return sum;
};

module.exports = findSum;
