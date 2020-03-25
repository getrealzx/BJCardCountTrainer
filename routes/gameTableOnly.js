const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/gameTableOnly', (req, res) => {
    res.render('gameTableOnly.ejs');
});

router.post('/gameTableOnly', (req, res) => {

    let username = req.body.username;

    let password = req.body.password;

    db.players.findAll({ where: { username: username } })
        .then(results => {
            //[{usrname: value, email: value, password},{}, {}]

            //authenticated
            if (results.length > 0) {
                //user has been found,

                //test the pasword

                bcrypt.compare(password, results[0].password, (err, response) => {

                    // console.log(results[0].password);
                    // console.log(password);
                    // console.log(err);

                    if (response) {
                        req.session.playerID = username;
                        res.redirect('/gameTableOnly');
                    }
                    else {
                        res.render('login.ejs', {invalidPassword: true})
                    }
                })
            }
            else {
                res.redirect('/registration')
            }
        })

    // res.send('post login')
})

router.get('/logout', (req, res) => {

    req.session.destroy((err) => {
        res.redirect('/')
    })

})

module.exports = router;