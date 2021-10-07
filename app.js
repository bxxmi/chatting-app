const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs');

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express server is now listening on localhost:3000');
});