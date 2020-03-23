const express = require('express');
const router = express.Router();


router.get('/gameTableOnly', (req, res) => {
    res.render('gameTableOnly.ejs');
});

module.exports = router;