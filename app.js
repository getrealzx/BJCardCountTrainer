const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let auth = require('./auth');

let db = require('./models');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(cookieParser());

app.use(sessions(
  {
    secret: 'slkdjfa;lj;lakjsd;lfkj',
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }

  }
));

app.use(bodyParser.urlencoded({ extended: false }));

app.all('/admin/*', auth, (req, res, next) => {
  next();
})

app.use(require('./routes/'));
app.use(require('./routes/gameTable.js'));
app.use(require('./routes/gameTableOnly.js'));
app.use(require('./routes/registration.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/admin.js'));
app.use(require('./routes/protected.js'));
app.use(require('./routes/logout.js'));

app.get('/error', (req, res) => {

  res.send('error')
})



///////////// Broadcasting multiplayers ///////////////////////////
const http = require("http").Server(app);
const io = require('socket.io')(http);
players = [];
connections = [];



app.get('/gameTable', function (req, res) {
    res.sendFile((__dirname + '/index.html'));
});

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function (data) {
        players.splice(players.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s socket connected', connections.length)
    });
    // Send message
    socket.on('send message', function (data) {
        console.log(data);
        io.sockets.emit('new message', { msg: data, user: socket.username });
    });

    // New User
    socket.on('new user', function (data, callback) {
        callback(true);
        socket.username = data;
        players.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get players', players);
    }

});

http.listen(3000, () => {
    console.log("running on port 3000");

})