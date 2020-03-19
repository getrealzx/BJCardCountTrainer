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
app.use(require('./routes/registration.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/admin.js'));
app.use(require('./routes/protected.js'));

app.get('/error', (req, res) => {

  res.send('error')
})


app.listen(3000, () => {
  console.log('Listening on 3000');
});