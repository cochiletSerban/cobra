const io = require('socket.io')
const cardList = require('./assets/cards')

const port = process.env.PORT || 3000
const server = io.listen(port)
let player1 = ''
let player2 = ''

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
  kickExtraConnections(socket)
  console.log('connection severed on socket:', socket.id)
  if (isLobbyReady()) {
    moveToSelectCards(socket)
  }

  socket.on('disconnect', (socket) => {
    console.log('connection severed on socket:', socket.id)
  })

  socket.on('cardSelect', (socket) => {
    //io.to(player1).emit('event', 'data')
    
  })
})
