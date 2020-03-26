const e = require('express');
const r = e.Router();


r.get('/chat',(req,res) => {

    res.render('chat',{
        username:req.session.username
    })
    
})


module.exports = r;

//rz123