function formatPhoneNumber(arr) {
  //solution 1
  // let phoneStr = "";
  // arr.forEach((item, index) => {
  //   switch (index) {
  //     case 0:
  //       phoneStr += "(" + item;
  //       break;
  //     case 3:
  //       phoneStr += ") " + item;
  //       break;
  //     case 6:
  //       phoneStr += "-" + item;
  //       break;
  //     default:
  //       phoneStr += item;
  //       break;
  //   }
  // });
  // return phoneStr;

  //solution 2
  // arr.splice(0, 0, "(");
  // arr.splice(4, 0, ") ");
  // arr.splice(8, 0, "-");
  // const str = arr.join("");
  // return str;

  //solution 3
  const areaCode = arr.slice(0, 3).join("");
  const first3 = arr.slice(3, 6).join("");
  const last4 = arr.slice(6, 10).join("");
  return `(${areaCode}) ${first3}-${last4}`;
}

module.exports = formatPhoneNumber;
