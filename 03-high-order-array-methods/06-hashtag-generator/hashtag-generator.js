// function generateHashtag(str) {
//   if (str.length > 139) return false;
//   if (str.trim() === "") return false;

//   let hashed = str
//     .trim()
//     .split(/\s+/)
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//   // hashed.splice(0, 0, "#");
//   return "#" + hashed.join("");
// }

function generateHashtag(str) {
  const hashtag = str
    .split(" ")
    .reduce(
      (acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1),
      "#"
    );

  return hashtag.length > 140 || hashtag.length === 1 ? false : hashtag;
}

module.exports = generateHashtag;
