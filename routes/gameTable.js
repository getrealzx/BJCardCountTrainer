const express = require('express');
const router = express.Router();
const db = require('../models');
let bodyParser = require('body-parser');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');
router.use(cookieParser());



router.use(bodyParser.urlencoded({ extended: false }));


router.get('/gameTable', (req, res) => {
  res.render('gameTable.ejs')

});



module.exports = router;


