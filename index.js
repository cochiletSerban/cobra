const io = require('socket.io')
const cardList = require('./assets/cardList').card
const cardType = require('./assets/cardType')
const uitls = require('./methods/utils')
const connection = require('./methods/conection')
const cardsMethods = require('./methods/cards')

const port = process.env.PORT || 3000
const server = io.listen(port)
let players = null

function waitForPlayers (server, socket) {
  if (server.engine.clientsCount == 2) return false
  if (server.engine.clientsCount > 2) {
    socket.emit('lobbyFull')
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

  socket.on('getStageOneCards', () => {
    console.log(socket.id + 'aka player: ' + players[socket.id].name + 'got his cards')
    let stageOneCardList = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 24)
    server.to(socket.id).emit('stageOneCards', stageOneCardList.selectedCards)
  })

  socket.on('selectedCards', (selectedCards) => {
    players[socket.id].cardsInHand.push(...selectedCards)
    console.log("player: " + players[socket.id].name + ' has ' + players[socket.id].cardsInHand.length + ' cards')
    //moveToStageTwo()
  })

  socket.on('disconnect', () => {
    console.log(players[socket.id].name + ' has left the game')
    connection.tearDownGame(socket, players, server)
  })
})
