const io = require('socket.io')
const cardList = require('./assets/cards')
const cardType = require('./assets/cardType')
const port = process.env.PORT || 3000
const server = io.listen(port)


// function getRandomNrInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

// getRandomNumberOfCards(cards, cardType, numberOfCards) {
//   let randomCard = 0
//   selectedCards = cards.filter(e => e.type === cardType)
//   finalCards = []
//   for (let i = 0; i < number; i++) {
//     randomCard = getRandomNrInRange(0, selectedCards.length)
//     if(finalCards.includes)
//     finalCards.push(selectCards[]) //  to be done
//   }
// }

// function  getCards (cards, cardType) {
//   switch (cardType) {
//     case cardType.player:

//     break
//   }
//   for (let i = 0; i < 24; i++) {

//   }
// }


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
  console.log(getCards(cardList.card, cardType.player))

  server.emit('lobbyFull', cardList.card)
}

server.on('connection', (socket) => {
  kickExtraConnections(socket)
  console.log('connection severed on socket:', socket.id + ' ' + server.engine.clientsCount)
  if (isLobbyReady()) {
    moveToSelectCards(socket)
  }

  socket.on('disconnect', (socket) => {
    console.log('disconected socket:', socket.id)
  })

  socket.on('cardSelect', (socket) => {
    //io.to(player1).emit('event', 'data')
  })
})
