
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');




//node receiveds request =>  middleware =>request, response
router.get('/login', (req, res) => {

    res.render('login', {invalidPassword: false})
})

router.post('/login', (req, res) => {

    let username = req.body.username;

    let password = req.body.password;

    db.players.findOne({ where: { username: username } })
        .then(results => { // persistedUser ( existing user )
            //[{usrname: value, email: value, password},{}, {}]

            //authenticated
            //if (results.length > 0) {
                if (results) {
                //user has been found,

                //test the pasword

                bcrypt.compare(password, results.password, (err, response) => {

                    // console.log(results[0].password);
                    // console.log(password);
                    // console.log(err);

                    // {
                    //     session: {
                    //         username: "foorkan"
                    //     }
                    // }
                    // req.session.username

                    if (response) {
                        req.session.username = username;
                        res.redirect('/gameTableOnly');
                        //res.status(200).json({message: "Logged In!"})
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