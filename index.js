const io = require('socket.io')

const port = process.env.PORT || 3000
const server = io.listen(port)

server.on('connection', (socket) => {
  console.log('connection made on socket:', socket.id)

  socket.on('chatMsg', (data) => {
    server.sockets.emit('chatMsg', data)
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data)
  })
})
