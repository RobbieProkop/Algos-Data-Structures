const isValidIPv4 = (str) => {
  const split = str.split(".");

  const isValid =
    split.length === 4 &&
    split.every((octet) =>
      octet < 1 || octet > 255 || octet.split("")[0] === "0" ? false : true
    );

  return isValid;
};

module.exports = isValidIPv4;
