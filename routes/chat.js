const e = require('express');
const r = e.Router();


r.get('/chat',(req,res) => {

    res.render('chat',{
        playerID:req.session.playerID
    })
    
})


module.exports = r;