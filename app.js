const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(__dirname + '/public'));

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs');

app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express server is now listening on localhost:3000');
});