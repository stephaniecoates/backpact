require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
var cron = require('node-cron');
const authController = require('./controllers/authController');
// const gearController = require('./controllers/gearController');
// const hikeController = require('./controllers/hikeController');
const alertController = require('./controllers/alertController');

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

app.get(`/auth/logout`, authController.logout)

//hike endpoints

//gear endpoints

//alert endpoints
app.post(`/api/createalert`, alertController.createAlert)

//cron scheduler, running every hour
cron.schedule(`0 * * * *`, async () => {
    let db = app.get('db');
    let expiredAlertArray = await db.select_expired_alerts()
  
    //update alert info, set boolean value to false
    console.log('array of expired alerts every hour', expiredAlertArray)

})

//listen
app.listen(SERVER_PORT, () => {
    console.log(`BLAST OFF ON PORT ${SERVER_PORT}`)
})
