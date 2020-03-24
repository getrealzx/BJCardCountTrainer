const express = require('express');
const router = express.Router();
const db = require('../models');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())



router.get('/gameTableOnly', (req, res) => {
  res.render('gameTableOnly.ejs');
});


router.post('/gameTableOnly', (req, res) => {

  //update the json file with form data

  console.log("Testing Post to gameTableOnly")
//   res.unshift(req.body)
  

  console.log(`bankroll type: ${typeof(req.body.bankroll)} value: ${req.body.bankroll}`)


  
  
  console.log("Updating players table...")
      db.players.update({
        bankroll: req.body.bankroll
      },
        {
          where: {
            id: 1
          }
        })
        .then(updatedRecord => {
          console.log("Found user and updating records...")
          console.log(updatedRecord);
          res.json(updatedRecord)
          
        });


  // fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {

  //     if (err) {
  //         console.log(err);
  //     }

  //     console.log(req.body);

  //     //feedbackData is js object.  Must be converted to json string.

  //     res.json(feedbackData)
  // })

})










module.exports = router;


