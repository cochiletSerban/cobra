let getRandomNrInRange = function getRandomNrInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let getTheOtherPlayer = function getTheOtherPlayer (players, playerId) {
  if (Object.keys(players)[0] === playerId) return players[Object.keys(players)[1]]
  return players[Object.keys(players)[0]]
}

module.exports = {
  getRandomNrInRange: getRandomNrInRange,
  getTheOtherPlayer: getTheOtherPlayer
}
