const io = require('socket.io')
const cardList = require('./assets/cardList').card
const connection = require('./methods/conection')

const playerMethods = require('./methods/players')
const port = process.env.PORT || 3000
const server = io.listen(port)
let players = null

function cardSelection (socket) {
  socket.on('getCards', () => {
    connection.sendCardsToClients(socket, server, cardList, players)
  })

  socket.on('selectedCards', (selectedCards) => {
    playerMethods.addCardsToPlayers(socket, server, players, selectedCards)
  })
}

function prepareLobby (socket) {
  if (!playerMethods.waitForPlayers(server, socket)) {
    players = connection.buildPlayers(server)
    connection.startGame(server)
  }
}

server.on('connection', (socket) => {
  console.log('connection severed on socket:', socket.id + ' ' + server.engine.clientsCount)
  prepareLobby(socket)
  cardSelection(socket)
  connection.disconnect(socket, players, server)
})
