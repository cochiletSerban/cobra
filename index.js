const port = process.env.PORT || 3000;
const io = require("socket.io");


const server = io.listen(port);

//socket

server.on('connection', (socket) => {

  console.log("connection made on socket:" ,socket.id);

  socket.on('chatMsg',(data) =>{
    io.sockets.emit('chatMsg',data);
  });

  socket.on('typing' ,(data) => {
    socket.broadcast.emit('typing',data);
  });

});
