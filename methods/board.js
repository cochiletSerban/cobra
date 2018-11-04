let populateBoard = function populateBoard (socket, server, players) {
  socket.on('getBoard', () => {
    console.log('yes');
    
    //socket.emit('populateBoard', players)
  })
}

module.exports = {
  populateBoard: populateBoard
}
