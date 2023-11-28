const isValidIPv4 = (str) => {
  const split = str.split(".");

  const isValid =
    split.length === 4 &&
    split.every((octet) =>
      octet < 1
        ? false
        : octet > 255
        ? false
        : octet.split("")[0] === "0"
        ? false
        : true
    );

  console.log("isValid :>> ", isValid);

  return isValid;
};

module.exports = isValidIPv4;
