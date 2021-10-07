module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('A user is connect');
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });
}