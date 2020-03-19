const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static('public'));

// app.use(require('./routes/'));
app.use(require('./routes/gameTable.js'));


io.on('connection',(socket) => { //on let to accept message
  console.log('user connected');
  socket.on('chat message',(msg) => {
      io.emit('chat message', msg);
  })
  
})




http.listen(3000,() => {
  console.log("runnig on 3000");
  
})