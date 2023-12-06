//take each game, find fewest number of cubes per possible game
// multiply fewest cubes per game to find the power
// sum up the powers

//Solution 1 - 3 forEach, and 1 reduce
// const cubeGame = (str) => {
//   const inputArr = str.split("\n");

//   const restrictions = {
//     red: 12,
//     green: 13,
//     blue: 14,
//   };
//   const validGames = [];
//   const invalid = [];
//   inputArr.forEach((game) => {
//     const split = game.split(":");
//     const id = split[0].split(" ")[1];

//     const rounds = split[1];

//     const roundsArr = rounds.split(";");

//     roundsArr.forEach((round) => {
//       const colorPair = round.split(",");
//       const colorObj = {};
//       colorPair.forEach((color) => {
//         const trimmed = color.trim().split(" ");

//         colorObj[trimmed[1]] = Number(trimmed[0]);

//         if (colorObj[trimmed[1]] > restrictions[trimmed[1]]) {
//           return invalid.push(id);
//         }
//       });
//     });
//     if (!invalid.includes(id)) {
//       validGames.push(id);
//     }
//   });

//   console.log("validGames :>> ", validGames);
//   const sum = validGames.reduce((prev, cur) => Number(prev) + Number(cur), 0);
//   console.log("sum :>> ", sum);
// };

// solution 2 - 2 forEach loops and 2 reduce
// const cubeGame = (str) => {
//   const inputArr = str.split("\n");

//   const restrictions = {
//     red: 12,
//     green: 13,
//     blue: 14,
//   };
//   const validGames = [];
//   const invalid = [];
//   inputArr.forEach((game) => {
//     const [gameNum, rounds] = game.split(":");
//     const id = gameNum[0].split(" ")[1];
//     const roundsArr = rounds.split(";");
//     let isValidGame = true;

//     roundsArr.forEach((round) => {
//       const colorPair = round.split(",");
//       const colorObj = colorPair.reduce((obj, color) => {
//         const [value, colorName] = color.trim().split(" ");

//         obj[colorName] = Number(value);

//         if (obj[colorName] > restrictions[colorName]) {
//           isValidGame = false;
//         }
//         return obj;
//       }, {});
//       if (!isValidGame) {
//         return invalid.push(id);
//       }
//     });
//     if (isValidGame && !invalid.includes(id)) {
//       validGames.push(id);
//     }
//   });

//   console.log("validGames :>> ", validGames);
//   const sum = validGames.reduce((prev, cur) => prev + Number(cur), 0);
//   console.log("sum :>> ", sum);
// };

// solution 1 - 1 forEach, 2 for of
// const cubeGame = (str) => {
//   const inputArr = str.split("\n");
//   const powers = [];

//   inputArr.forEach((game) => {
//     const [gameNum, rounds] = game.split(":");
//     const roundsArr = rounds.split(";");
//     let maxCubes = { red: 0, green: 0, blue: 0 };

//     for (const round of roundsArr) {
//       const colorPairs = round.split(",");
//       const colorObj = {};

//       for (const color of colorPairs) {
//         const [value, colorName] = color.trim().split(" ");
//         colorObj[colorName] = Number(value);
//         if (colorObj[colorName] > maxCubes[colorName]) {
//           maxCubes[colorName] = Number(value);
//         }
//       }
//     }

//     const power = Object.values(maxCubes).reduce((prev, cur) => prev * cur, 1);
//     powers.push(power);
//     // }
//   });
//   const sum = powers.reduce((prev, cur) => prev + cur, 0);
//   console.log("sum :>> ", sum);
//   return sum;
// };

// solution 2 - 1 forEach, 2 for of, using Math.Max
const cubeGame = (str) => {
  const inputArr = str.split("\n");
  const powers = [];

  inputArr.forEach((game) => {
    const [gameNum, rounds] = game.split(":");
    const roundsArr = rounds.split(";");
    let maxCubes = { red: 0, green: 0, blue: 0 };

    for (const round of roundsArr) {
      const colorPairs = round.split(",");

      for (const color of colorPairs) {
        const [value, colorName] = color.trim().split(" ");
        numCubes = Number(value);
        maxCubes[colorName] = Math.max(maxCubes[colorName], numCubes);
      }
    }

    const power = Object.values(maxCubes).reduce((prev, cur) => prev * cur, 1);
    powers.push(power);
  });
  const sum = powers.reduce((prev, cur) => prev + cur, 0);
  console.log("sum :>> ", sum);
  return sum;
};

module.exports = cubeGame;
