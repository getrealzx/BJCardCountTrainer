const express = require('express');
const router = express.Router();
const db = require('../models');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));


router.get('/gameTable', (req, res) => {
  console.log(req.session.playerID);
  res.render('gameTable',{
    playerID:req.session.playerID
  });
});


module.exports = router;


