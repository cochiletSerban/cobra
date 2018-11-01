const io = require('socket.io')
const cardList = require('./assets/cardList')
const cardType = require('./assets/cardType')
const uitls = require('./methods/utils')
const connection = require('./methods/conection')
const cardsMethods = require('./methods/cards')
const board = require('./assets/board')

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

FunctionalCard3(board.board, '1')
FunctionalCard4(board.board, '1')

function FunctionalCard1(board, playerId){
  var player = board.player1;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].atack++;
    }
  }
}

function FunctionalCard2(board, key){
  var player = board.player1;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].defence++;
    }
  }
}

function FunctionalCard3(board, key){
  var player = board.player1;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].atack += 2;
    }
  }
}

function FunctionalCard4(board, key){
  var player = board.player1;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].defence += 2;
    }
  }
}

console.log(getRandomCardIndex(10))
console.log(getRandomCardIndex(10))
console.log(getRandomCardIndex(10))

function getRandomCardIndex(max){
  return Math.random() % max
}




function FunctionalCard5(board, key){
  var player = board.player1;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].defence += 2;
    }
  }
}

var player = board.board.player1
for(i = 0; i < player.boardCards.length; i++){
  console.log(player.boardCards[i].defence)
}