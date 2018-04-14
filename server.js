var bodyParser = require('body-parser')
var express = require('express');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
const jwt = require('jsonwebtoken');
var app = express();


app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
require(__dirname + '/static')(app);
require(__dirname + '/controllers/send')(app);

//
app.listen(8080);
