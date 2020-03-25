const express = require('express');
const router = express.Router();
const db = require('../models');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())



router.get('/gameTableOnly', (req, res) => {

    // db.players.findAll({where:{id:1}})
    //     .then(results=>{

    //         ;
    //         res.render("gameTableOnly",{
    //             db_bankroll:results[0].bankroll
    //         })



    //     })
    res.render('gameTableOnly.ejs');
});


router.post('/gameTableOnly', (req, res) => {

    //update the json file with form data

    console.log("Testing Post to gameTableOnly")
    //   res.unshift(req.body)


    //   console.log(`bankroll type: ${typeof(req.body.bankroll)} value: ${req.body.bankroll}`)

    let winning = 0;
    db.players.findAll({where:{id:1}})
        .then(results=>{
            winning = req.body.bankroll - results[0].bankroll;
            console.log( `current bankroll is ${results[0].bankroll}`);
            console.log(`the wining is ${winning}`);

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


