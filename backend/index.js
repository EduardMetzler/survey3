require('./config/config')
require('./db')
require('./config/passportConfig')

// var {survey} = require('../models/survey');


var {survey} = require('./models/survey');


const express = require('express');

const bodyParser = require('body-parser');

const {mongoose} = require('./db.js')

const cors = require('cors')
const passport = require('passport')

// var surveyController = require('./controllers/surveyController')
var indexRoute = require('./routes/index.route')


var app = express();

app.use(cors({origin: 'http://localhost:4200'}))
app.use(passport.initialize());

app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'))

app.use('/',indexRoute)

