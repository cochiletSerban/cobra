const io = require('socket.io')
const cardList = require('./assets/cards')

const port = process.env.PORT || 3000
const server = io.listen(port)

function isLobbyToFull () {
  return server.engine.clientsCount > 2
}

function isLobbyReady () {
  return server.engine.clientsCount === 2
}

function kickExtraConnections (socket) {
  if (isLobbyToFull()) {
    socket.disconnect(true)
    console.log('kicked socket:', socket.id)
  }
}

function moveToSelectCards (socket) {
  server.emit('lobbyFull', cardList.card)
}

server.on('connection', (socket) => {
  console.log('connection made on socket:', socket.id)
  console.log(server.engine.clientsCount)
  kickExtraConnections(socket)
  if (isLobbyReady()) {
    moveToSelectCards(socket)
  }

  socket.on('disconnect', (socket) => {
    console.log('connection severed on socket:', socket.id)
    console.log(server.engine.clientsCount)
  })

})
