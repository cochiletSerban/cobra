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

function FunctionalCard1(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].atack++;
    }
  }
}

function FunctionalCard2(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].defence++;
    }
  }
}

function FunctionalCard3(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].atack += 2;
    }
  }
}

function FunctionalCard4(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  for(i = 0; i < player.boardCards.length; i++){
    if(player.boardCards[i].type == cardType.player){
      player.boardCards[i].defence += 2;
    }
  }
}

function getRandomCardIndex(max){
  return Math.floor(Math.random() * 10000) % max
}

function FunctionalCard5(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  var i = getRandomCardIndex(player.boardCards.length);
  player.boardCards[i].atack += 3;
}

function FunctionalCard6(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  var i = getRandomCardIndex(player.boardCards.length);
  player.boardCards[i].defence += 3;
}

function FunctionalCard7(board, playerId){
  var player = board.player1.playerId == playerId ? board.player2 : board.player1;
  var i = getRandomCardIndex(player.boardCards.length);
  player.boardCards[i].atack = 0;
}

function FunctionalCard8(board, playerId){
  var player = board.player1.playerId == playerId ? board.player2 : board.player1;
  var i = getRandomCardIndex(player.boardCards.length);
  player.boardCards[i].defence = 0;
}

function FunctionalCard9(board, playerId){
  var player = board.player1.playerId == playerId ? board.player2 : board.player1;
  var i = getRandomCardIndex(player.boardCards.length);
  player.boardCards[i].defence = 0;
  player.boardCards[i].atack = 0;
}

function FunctionalCard10(board, playerId){
  var player = board.player1.playerId == playerId ? board.player1 : board.player2;
  var player2 =board.player1.playerId == playerId ? board.player2 : board.player1;
  if (player2.actualCards.length > 0) {
    var i = getRandomCardIndex(player2.actualCards.length);
    player.actualCards.push(player2.actualCards[i]);
    player2.actualCards.splice(i, 1);
  } 
}