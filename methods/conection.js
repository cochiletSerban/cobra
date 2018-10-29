module.exports = {
  isLobbyReady (server) {
    return server.engine.clientsCount === 2
  },
  kickExtraConnections (server, socket) {
    if (server.engine.clientsCount > 2) {
      socket.disconnect(true)
      console.log('kicked socket:', socket.id)
    }
  }
}
