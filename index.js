const io = require('socket.io')
const cardList = require('./assets/cards')
const cardType = require('./assets/cardType')
const uitls = require('./methods/utils')
const connection = require('./methods/conection')
const port = process.env.PORT || 3000
const server = io.listen(port)

function moveToSelectCards (socket) {
  server.emit('lobbyFull', cardList.card)
}

server.on('connection', (socket) => {
  connection.kickExtraConnections(server, socket)
  console.log('connection severed on socket:', socket.id + ' ' + server.engine.clientsCount)
  if (connection.isLobbyReady(server)) {
    moveToSelectCards(socket)
  }

  socket.on('disconnect', (socket) => {
    console.log('disconected socket:', socket.id)
  })

  socket.on('cardSelect', (socket) => {
   // io.to(player1).emit('event', 'data')
  })
})
