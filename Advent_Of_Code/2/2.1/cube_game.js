// ✅ Need to take string, and turn it into an array of games
// ✅get the game id from the games
// make each id the name for an object of rounds
// loop through the array of games,
// assign the game id to each game object
// make each round an object of colours and values
// assign each round to the game

// loop throug heach game to see if the game is impossible
// sum up valid game ids
// return sum

// const cubeGame = (str) => {
//   const gamesArr = str.split("\n");
//   const gameIDs = [];
//   const restrictions = {
//     red: 12,
//     green: 13,
//     blue: 14,
//   };

//   const gamesObj = {};

//   for (let i = 0; i < gamesArr.length - 1; i++) {
//     const gameID = gamesArr[i].split(":")[0].split(" ")[1];
//     const subGames = gamesArr[i].split(":")[1].split(";");
//     subGames.forEach((game) => {
//       const rounds = game.split(",");

//       const subObj = {};
//       rounds.forEach((round, index) => {
//         const color = round.trim().split(" ")[1];
//         const val = round.trim().split(" ")[0];
//         const roundObj = {};
//         roundObj[color] = val;
//         subObj[`Round ${index + 1}`] = roundObj;
//       });
//       // gamesObj[`Game ${gameID}`] = subObj;

//       // const split = subGame.split(" ");
//       // const subKey = split[1];
//       // const subValue = split[0];
//       // const subObj = {};
//       // subGame.forEach((round) => {
//       //   subObj[subKey] = subValue;
//       // });
//       // console.log("subObj :>> ", subObj);
//     });
//     console.log("GamesObj :>> ", gamesObj);
//     const value = {};
//     // const key = gamesArr[i + 1];
//     // const value = gamesArr[i];

//     // gamesObj[key] = value;
//   }
//   // console.log("gamesObj :>> ", gamesObj);
//   // console.log("gameArr :>> ", gamesArr);
// };

const cubeGame = (str) => {
  const inputArr = str.split("\n");

  const restrictions = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const validGames = [];
  const invalid = [];
  inputArr.forEach((game, index) => {
    const split = game.split(":");
    const id = split[0].split(" ")[1];

    const rounds = split[1];

    const roundsArr = rounds.split(";");

    roundsArr.forEach((round, index) => {
      const colorPair = round.split(",");
      const colorObj = {};
      colorPair.forEach((color) => {
        const trimmed = color.trim().split(" ");

        colorObj[trimmed[1]] = Number(trimmed[0]);

        if (colorObj[trimmed[1]] > restrictions[trimmed[1]]) {
          return invalid.push(id);
        }
      });
    });
    if (!invalid.includes(id)) {
      validGames.push(id);
    }
  });

  console.log("validGames :>> ", validGames);
  const sum = validGames.reduce((prev, cur) => Number(prev) + Number(cur), 0);
  console.log("sum :>> ", sum);
};

module.exports = cubeGame;
