const io = require('socket.io').listen(3000);
io.sockets.on('connection', (socket) => {
  socket.on('msg', (data) => {
    io.sockets.json.emit('msg', {
      name: data.name,
      message: data.message
    });
  });
});
