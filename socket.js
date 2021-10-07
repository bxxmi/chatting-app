module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is connect');

    socket.on('chat message', (msg) => {
      console.log('msg:' + msg);
    });
    
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
}