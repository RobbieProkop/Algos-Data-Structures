function validateEmail(email) {
  if (email.length < 6) return false;

  if (!email.includes("@") || !email.includes(".")) return false;
  const first = email.split("@");
  const middle = first[1].split(".")[0];
  const end = email.split(".")[1];
  if (first[0].length < 1 || middle.length < 1 || end.length < 2) return false;

  return true;
}

module.exports = validateEmail;
