const express = require('express');
const router = express.Router();

router.get('/gameTable', (req, res) => {
  res.render('gameTable.ejs');
});


router.get('/gameTableOnly', (req, res) => {
  res.render('gameTableOnly.ejs');
});



module.exports = router;


//test