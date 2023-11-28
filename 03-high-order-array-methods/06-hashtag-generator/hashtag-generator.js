function generateHashtag(str) {
  if (str.length > 140) return false;
  if (str === "") return false;

  const regex = /\s+/g;

  let hashed = str.replace(regex, " ").trim().split(" ");

  const upper = hashed.map((word) => {
    let letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    letters = letters.join("");
    return letters;
  });

  upper.splice(0, 0, "#");
  hashed = upper.join("");

  return hashed;
}

module.exports = generateHashtag;
