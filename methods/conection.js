const utils = require('./utils')

let buildPlayers = function buildPlayers (server) {
  let players = {}
  players[Object.keys(server.sockets.sockets)[0]] = {
    name: 'player1',
    cardsInHand: [],
    bord: []
  }

  players[Object.keys(server.sockets.sockets)[1]] = {
    name: 'player2',
    cardsInHand: [],
    bord: []
  }
  return players
}

let tearDownGame = function tearDownGame (socket, players, server) {
  let connectedPlayer = utils.getTheOtherPlayer(players, socket.id)
  let connectedPlayerId = Object.keys(players).find(key => players[key] === connectedPlayer)
  server.to(connectedPlayerId).emit('rageQuit')
}

let startGame = function startGame (server) {
  server.sockets.emit('startGame')
}

module.exports = {
  buildPlayers: buildPlayers,
  startGame: startGame,
  tearDownGame: tearDownGame
}
