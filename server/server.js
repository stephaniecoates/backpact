require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
var cron = require('node-cron');
var twilio = require('twilio');
const bodyParser = require('body-parser');

const authController = require('./controllers/authController');
// const gearController = require('./controllers/gearController');
// const hikeController = require('./controllers/hikeController');
const alertController = require('./controllers/alertController');
const smsController = require('./controllers/smsController')

//destructure from .env
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, ACCOUNT_SID, AUTH_TOKEN, TWILIO_NUMBER} = process.env;

//initialize twilio
var client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

//initialize express app
const app = express();

//initialize session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

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

//sms endpoints
app.post('/sms', smsController.recieveSMS)

//cron scheduler, running every hour
cron.schedule(`0 * * * *`, async () => {
    let db = app.get('db');
    let expiredAlertArray = await db.select_expired_alerts()
    console.log('array of expired alerts every hour', expiredAlertArray)
    expiredAlertArray.forEach(alert => {
        let {first_name, user_phone_number} = alert
        client.messages.create({
            body: `Hey, ${first_name}! It's Backpact. Have you returned from your trip? Text 'BACK' if you've returned safely, 'LATE' if you're just running late, or 'SOS' if you need help.`,
            to: `+${user_phone_number}`,  // Text this number
            from: TWILIO_NUMBER // From a valid Twilio number
        })
            .then((message) => console.log('message sid:', message.sid));
                // run sql function to change boolean from false to true
        }
    )})

//update alert info, set boolean value to false in twilio .then

//listen
app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} is open for business.`)
})
