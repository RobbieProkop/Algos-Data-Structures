function phoneNumberDirectory(arr) {
  const phoneMap = new Map([]);

  for (const numberPair of arr) {
    const name = numberPair.split(":")[0];
    const number = numberPair.split(":")[1];

    phoneMap.set(name, number);
  }

  // arr.forEach((numberPair) => {
  //   const name = numberPair.split(":")[0];
  //   const number = numberPair.split(":")[1];

  //   phoneMap.set(name, number);
  // });

  return phoneMap;
}

module.exports = phoneNumberDirectory;
