
let buildPlayers = function buildPlayers (server) {
  const players = {
    player1id: Object.keys(server.sockets.sockets)[0],
    player2id: Object.keys(server.sockets.sockets)[1]
  }
  return players
}

let startGame = function startGame (server) {
  server.sockets.emit('startGame')
}

module.exports.buildPlayers = buildPlayers
module.exports.startGame = startGame
