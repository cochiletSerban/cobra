const io = require('socket.io')
const cardList = require('./assets/cardList').card
const connection = require('./methods/conection')

const playerMethods = require('./methods/players')
const boardMethods = require('./methods/board')
const utils = require('./methods/utils')
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
  //socket.emit('renderBoard', cardList)
  //boardMethods.populateBoard(socket, server, players)
  socket.on('cardOnBoard', (stuff) => {
    console.log(stuff.board);
    
    players[socket.id].bord = stuff.board
    let connectedPlayer = utils.getTheOtherPlayer(players, socket.id)
    let connectedPlayerId = Object.keys(players).find(key => players[key] === connectedPlayer)
    server.to(connectedPlayerId).emit('boardChanged', stuff)
  })



  socket.on('end',()=>{
    let p1Scor, p2Scor
    p1Scor = players[Object.keys(players)[0]].bord.first.length + players[Object.keys(players)[0]].bord.mid.length + players[Object.keys(players)[0]].bord.last.length

    p2Scor = players[Object.keys(players)[1]].bord.first.length + players[Object.keys(players)[1]].bord.mid.length + players[Object.keys(players)[1]].bord.last.length

    server.sockets.emit('endRound')
    if(p1Scor > p2Scor) server.to(Object.keys(players)[0]).emit('won')
    else server.to(Object.keys(players)[1]).emit('won')
    
  })
  connection.disconnect(socket, players, server)
})
