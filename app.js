
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let db = require('./models')
const bcrypt = require('bcryptjs');
let sessions = require('express-session');
let cookieParser = require('cookie-parser');


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))

app.use(cookieParser());

app.use(sessions ({
    secret: 'djwidoicmldjowijd',
    cookie: {secure: false, maxAge: 14 * 24 * 60 * 60 * 1000}
}))

let auth = (req, res, next) => {

    if(req.session.playerID){
        next();
    }
    else{
        res.redirect('/login')
    }
}

// app.use(require('./routes/index.js'));
// app.use(require('./routes/login.js'));
// app.use(require('./routes/registration.js'));

app.get('/logout', (req, res) =>{
    req.session.destroy(err=>{
        res.redirect('/')
    })
})

app.all('/admin/*', auth, (req, res, next)=>{
    next();
})

//create llgin form and registration form
//create record table for the user
app.get('/login', (req, res)=>{
    res.render('login')
});

app.post('/login', (req, res)=>{

    let username = req.body.username;
    let password = req.body.password;

    //find player in database 
    //make sure password is valid
    //set session = playerID
    db.players.findAll({where: {username: username}})
    .then((results)=>{
        //results is array of objects
        //each object is a record in the database
        if(results.length > 0){
            //test if passwords match
            
            //bcrypt.compare(whatUserEntered, databaseEntry, callbackfunction)

            bcrypt.compare(password, results[0].password, (err, response)=>{
                //if response = match, error = no match
                if(response){
                    //set session variable
                    req.session.userid = username;
                    res.redirect('/');

                }
                else{
                    res.redirect('/error')
                }
            })

        }

        else{
            //no user was found
            res.redirect('/registration')
        }
    })

});

app.get('/error', (req, res)=>{
    res.send('error')
});

//middleware server receives request => middleware => route to appropriate handler
app.get('/admin/dashboard', (req, res) => {
    res.send('protected admin dashboard')
});


app.get('/registration', (req, res) => {
    res.render('registration')
})

app.post('/registration', (req, res) => {

    let username = req.body.username;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 8);

    // bcrypt.hashSync(password, 8)

    //store this data inside of a table
    db.players.create({username: username, email:email, password:password})
    .then(username =>{

        console.log(username);
        res.redirect('/login')

    })
    .catch(error =>{
        console.log(error)
    })




})

let PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});