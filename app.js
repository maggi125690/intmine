const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");

//passport config:
require('./config/passport')(passport)
//mongoose
mongoose.connect('mongodb+srv://IntMine:2PXEB5QsoPWh8wqD@intmine.ykzbg.mongodb.net/myIntMineBase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));


// Setting up the public directory
app.use('/public', express.static('public'))
//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));




//------------ Basic routes ------------//
// About us Route 
app.get('/about/', (req, res) => res.render('about_us'));
// FAQ Route
app.get('/faq/', (req, res) => res.render('faq'));
// Rules Route
app.get('/rules/', (req, res) => res.render('rules'));



//------------ Dashboard in Route ------------//
// Withdraw route
app.get('/dashboard/withdraw/', (req, res) => res.render('dashboard/withdraw'));
// History route
app.get('/dashboard/history/', (req, res) => res.render('dashboard/history'));
// Setting route
app.get('/dashboard/setting/', (req, res) => res.render('dashboard/setting'));

// Deposit method route
app.get('/deposit/btc/', (req, res) => res.render('dashboard/deposit/btc'));
app.get('/deposit/eth/', (req, res) => res.render('dashboard/deposit/eth'));
app.get('/deposit/bch/', (req, res) => res.render('dashboard/deposit/bch'));
app.get('/deposit/lte/', (req, res) => res.render('dashboard/deposit/lte'));



app.listen(3000); 