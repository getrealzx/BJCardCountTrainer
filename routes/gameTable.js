const express = require('express');
const router = express.Router();

router.get('/gameTable', (req, res) => {
  res.render('gameTable.ejs');
});

module.exports = router;
