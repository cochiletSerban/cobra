const utils = require('./utils')
const playerMethods = require('./players')
const cardsMethods = require('./cards')
const cardType = require('../assets/cardType')

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
  if (players != null) {
    let connectedPlayer = utils.getTheOtherPlayer(players, socket.id)
    let connectedPlayerId = Object.keys(players).find(key => players[key] === connectedPlayer)
    server.to(connectedPlayerId).emit('rageQuit')
  }
}

let disconnect = function disconnect (socket, players, server) {
  socket.on('disconnect', (reason) => {
    console.log('one client dissconnected : ' + reason)
    tearDownGame(socket, players, server)
  })
}

let startGame = function startGame (server) {
  server.sockets.emit('startGame')
}

let sendCardsToClients = function sendCardsToClients (socket, server, cardList, players) {
  console.log('requesterd cards')
  let stage = {
    randomCards: [],
    stageNumber: 0
  }
  switch (playerMethods.getCurrentStageOfPlayer(socket.id, players)) {
    case 1:
      stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 24).selectedCards
      stage.stageNumber = 11
      server.to(socket.id).emit('reciveCards', stage)
      break

    case 2:
      stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 10).selectedCards
      stage.stageNumber = 5
      server.to(socket.id).emit('reciveCards', stage)
      break

    case 3:
      stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 3).selectedCards
      stage.stageNumber = 1
      server.to(socket.id).emit('reciveCards', stage)
      break
  }
}

module.exports = {
  buildPlayers: buildPlayers,
  startGame: startGame,
  tearDownGame: tearDownGame,
  sendCardsToClients: sendCardsToClients,
  disconnect: disconnect
}
