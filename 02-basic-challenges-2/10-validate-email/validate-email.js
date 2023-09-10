function validateEmail(email) {
  // if (email.length < 6) return false;

  // if (!email.includes("@") || !email.includes(".")) return false;
  // const first = email.split("@");
  // const domain = first[1].split(".")[0];
  // const end = email.split(".")[1];
  // if (first[0].length < 1 || domain.length < 3 || end.length < 2) return false;

  // return true;

  //solution 2
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) return false;
  return true;
}

module.exports = validateEmail;
