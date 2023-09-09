function displayLikes(arr) {
  let likesStr = "";
  if (arr.length === 0) {
    likesStr = "no one likes this";
  }

  if (arr.length === 1) {
    likesStr = `${arr[0]} likes this`;
  }
  if (arr.length === 2) {
    likesStr = `${arr[0]} and ${arr[1]} like this`;
  }
  if (arr.length === 3) {
    likesStr = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }
  if (arr.length > 3) {
    likesStr = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }

  return likesStr;
}

module.exports = displayLikes;
