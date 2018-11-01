const io = require('socket.io')
const cardList = require('./assets/cardList')
const cardType = require('./assets/cardType')
const uitls = require('./methods/utils')
const connection = require('./methods/conection')
const cardsMethods = require('./methods/cards')

const port = process.env.PORT || 3000
const server = io.listen(port)
let players = null

// function showCardSelector () {
//   if (connection.isLobbyReady(server)) {
//     console.log(Object.keys(players)[0])
//     console.log(Object.keys(players)[1])
//     server.to(Object.keys(players)[0]).emit('showCardSelector', cardsMethods.getRandomNumberOfCards(cardList.card, cardType.player, 24).selectedCards)
//     //console.log(cardsMethods.getRandomNumberOfCards(cardList.card, cardType.player, 24).selectedCards)
//     server.to(Object.keys(players)[1]).emit('showCardSelector', cardsMethods.getRandomNumberOfCards(cardList.card, cardType.player, 24).selectedCards)
//   }
// }

// function getPlayers (socket, callback) {
//   if (connection.isLobbyReady(server)) {
//     if (!(Object.keys(server.sockets.sockets)[0] in players))
//       players[Object.keys(server.sockets.sockets)[0]] = null
//     if (!(Object.keys(server.sockets.sockets)[1] in players))
//       players[Object.keys(server.sockets.sockets)[1]] = null
//   }
// }

// socket.on('disconnect', (socket) => {
//   console.log('disconected socket:', socket.id)
// })
// connection.kickExtraConnections(server, socket)

function waitForPlayers (server, socket) {
  if (server.engine.clientsCount == 2) return false
  if (server.engine.clientsCount > 2) {
    socket.disconnect(true)
    return false
  }
  return true
}

server.on('connection', (socket) => {
  console.log('connection severed on socket:', socket.id + ' ' + server.engine.clientsCount)
  if (!waitForPlayers(server, socket)) {
    players = connection.buildPlayers(server)
    connection.startGame(server)
  }

  socket.on('getStageOneCards', (playerId) => {
    console.log(playerId)
    let stageOneCardList = cardsMethods.getRandomNumberOfCards(cardList.card, cardType.player, 50)
    //console.log(stageOneCardList.selectedCards)
    server.to(playerId).emit('stageOneCards', stageOneCardList.selectedCards)
  })
})
