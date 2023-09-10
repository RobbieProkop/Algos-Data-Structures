function diceGameSimulation(numSim) {
  let arr = [];
  for (let i = 0; i < numSim; i++) {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    let sum = dice1 + dice2;
    let result;

    const lose = sum === 2 || sum === 3 || sum === 12;
    const win = sum === 7 || sum === 11;

    switch (true) {
      case win:
        result = "win";
        break;
      case lose:
        result = "lose";
        break;
      default:
        result = "roll again";
        break;
    }
    arr.push({ dice1, dice2, sum, result });
  }
  console.log(arr.length);
  return arr;
}

module.exports = diceGameSimulation;
