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

// function moveToStageTwo (server, socket, players) {
//   if (players[socket.id].cardsInHand.length == 11) {
//     let stageTwoCardList = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 10)
//     server.to(socket.id).emit('stageTwoCards', stageTwoCardList.selectedCards)
//     return true
//   } else return false
// }

function getCurrentStageOfPlayer (playerId) {
  let stage = players[playerId].cardsInHand.length
  console.log(stage);
  if (stage <= 17 && stage >= 16) return 3
  if (stage <= 16 && stage >= 11) return 2
  if (stage <= 11) return 1
}

server.on('connection', (socket) => {
  console.log('connection severed on socket:', socket.id + ' ' + server.engine.clientsCount)
  if (!waitForPlayers(server, socket)) {
    players = connection.buildPlayers(server)
    connection.startGame(server)
  }

  socket.on('getCards', () => {
    console.log('requesterd cards')
    let stage = {
      randomCards: [],
      stageNumber: 0
    }
    switch (getCurrentStageOfPlayer(socket.id)) {
      case 1:
        console.log(socket.id + 'aka player: ' + players[socket.id].name + 'got his cards')
        stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 24).selectedCards
        stage.stageNumber = 11
        server.to(socket.id).emit('reciveCards', stage)
        break

      case 2:
        console.log(socket.id + 'aka player: ' + players[socket.id].name + 'got his cards')
        stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 10).selectedCards
        stage.stageNumber = 5
        server.to(socket.id).emit('reciveCards', stage)
        break

      case 3:
        console.log(socket.id + 'aka player: ' + players[socket.id].name + 'got his cards')
        stage.randomCards = cardsMethods.getRandomNumberOfCards(cardList, cardType.player, 3).selectedCards
        stage.stageNumber = 1
        server.to(socket.id).emit('reciveCards', stage)
        break
    }
  })

  socket.on('selectedCards', (selectedCards) => {
    if(getCurrentStageOfPlayer(socket.id)!==3) {
      players[socket.id].cardsInHand.push(...selectedCards)
      console.log("player: " + players[socket.id].name + ' has ' + players[socket.id].cardsInHand.length + ' cards')
      socket.emit('serverGotCards', getCurrentStageOfPlayer(socket.id))
    } else {
      server.to(socket.id).emit('waitForPlayersToSelect')
    }
  })

  // socket.on('disconnect', () => {
  //   console.log(players[socket.id].name + ' has left the game')
  //   connection.tearDownGame(socket, players, server)
  // })
})
