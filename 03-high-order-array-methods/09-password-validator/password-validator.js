function validatePassword(str) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  if (str.length < 8 || !regex.test(str)) return false;
  return true;
}

module.exports = validatePassword;
