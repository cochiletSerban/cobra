const io = require('socket.io')

const port = process.env.PORT || 3000
const server = io.listen(port)

function isLobbyFull () {
  return server.engine.clientsCount == 2
}

function moveToSelectCards (socket) {
  server.emit('lobbyFull')
}

server.on('connection', (socket) => {
  console.log('connection made on socket:', socket.id)
  if (isLobbyFull()) {
    moveToSelectCards(socket)
  }
})
