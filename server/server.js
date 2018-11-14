require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController');
// const gearController = require('./controllers/gearController');
// const hikeController = require('./controllers/hikeController');
// const alertController = require('./controllers/alertController');

//destructure from .env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

//initialize express app
const app = express();

//initialize session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

//middleware
app.use(express.json());

//connect to db with massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

//auth endpoints
app.post(`/auth/register`, authController.register)

app.post(`/auth/login`, authController.login)

app.get(`/auth/user-data`, authController.getUserData)

//hike endpoints

//gear endpoints

//alert endpoints

//listen
app.listen(SERVER_PORT, () => {
    console.log(`BLAST OFF ON PORT ${SERVER_PORT}`)
})
