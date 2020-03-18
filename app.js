const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./views/login.ejs/'));
// app.use(require('routes/login.js'));
// app.use(require('./routes/editblogs.js'));

app.listen(3000, () => {
  console.log('Listening on 3000');
});
