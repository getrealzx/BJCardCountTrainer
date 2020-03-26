const express = require('express');
const router = express.Router();
const db = require('../models');

let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())


router.get('/gameTableOnly/data', (req, res) => {

    db.players.findAll({ where: { id: 1 } })
        .then(results => {
            let db_bankroll = results[0].bankroll;
            res.json(db_bankroll);

        })
});

router.get("/gameTableOnly", (req, res) => {

    console.log(` the logged user is : ${req.session.username}`);
    res.render('gameTableOnly.ejs', {
        username: req.session.username
    });

});


// <%- JSON.stringify(username) %>




router.post('/gameTableOnly', (req, res) => {

    //update the json file with form data
    // console.log("Testing Post to gameTableOnly")
    //   res.unshift(req.body)
    //   console.log(`bankroll type: ${typeof(req.body.bankroll)} value: ${req.body.bankroll}`)

    let winning = 0;

    db.players.findOne({ where: { id: 1 } })
        .then(result => {
            winning = req.body.bankroll - result.bankroll;
            console.log(`current bankroll is ${result.bankroll}`);
            console.log(`the winning is ${winning}`);


        })

    // console.log("Updating players table...");

    db.players.update({
        bankroll: req.body.bankroll
    },
        {
            where: {
                id: 1
            }
        })
        .then(updatedRecord => {
            // console.log("Found user and updating records...")
            console.log(updatedRecord);
            res.json(updatedRecord)

        });



})


module.exports = router;