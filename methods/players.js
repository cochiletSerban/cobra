let waitForPlayers = function waitForPlayers (server, socket) {
  if (server.engine.clientsCount == 2) return false
  if (server.engine.clientsCount > 2) {
    socket.emit('lobbyFull')
    socket.disconnect(true)
    return false
  }
  return true
}

let getCurrentStageOfPlayer = function getCurrentStageOfPlayer (playerId, players) {
  let stage = players[playerId].cardsInHand.length
  // console.log(stage);
  if (stage <= 17 && stage >= 16) return 3
  if (stage <= 16 && stage >= 11) return 2
  if (stage <= 11) return 1
}

let addCardsToPlayers = function addCardsToPlayers (socket, server, players, selectedCards) {
  if (players[socket.id].cardsInHand.length !== 17) {
    players[socket.id].cardsInHand.push(...selectedCards)
    console.log('player: ' + players[socket.id].name + ' has ' + players[socket.id].cardsInHand.length + ' cards')
    if (players[socket.id].cardsInHand.length !== 17) socket.emit('serverGotCards', getCurrentStageOfPlayer(socket.id, players))
  }
  if (players[socket.id].cardsInHand.length === 17) {
    server.to(socket.id).emit('waitForPlayersToSelect')
  }
  if (players[Object.keys(players)[0]].cardsInHand.length === 17 && players[Object.keys(players)[1]].cardsInHand.length === 17) {
    server.to(Object.keys(players)[0]).emit('renderBoard', players[Object.keys(players)[0]].cardsInHand)
    server.to(Object.keys(players)[1]).emit('renderBoard', players[Object.keys(players)[1]].cardsInHand)
    return players
  }
}

module.exports = {
  waitForPlayers: waitForPlayers,
  getCurrentStageOfPlayer: getCurrentStageOfPlayer,
  addCardsToPlayers: addCardsToPlayers
}
