require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
var cron = require('node-cron');
var twilio = require('twilio');
const bodyParser = require('body-parser');
var moment = require('moment');

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
//this body parser just works for texts recieved
app.use(express.json());
//this body parser works for axios requests

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
cron.schedule(`* * * * *`, async () => {
    let db = app.get('db');
    let expiredAlerts = await db.select_expired_alerts()
    console.log('array of expired alerts every hour', expiredAlerts)
    expiredAlerts.forEach(alert => {
        let {first_name, user_phone_number, alert_contact_name, alert_id} = alert
        client.messages.create({
            body: `Hey, ${first_name}! It's Backpact. Have you returned from your trip? Text 'BACK' if you've returned safely, 'LATE' if you're just running late, or 'SOS' if you're in trouble and need help. If we don't hear from you within an hour, we'll send an alert to ${alert_contact_name}.`,
            to: `+${user_phone_number}`, 
            from: TWILIO_NUMBER 
        })
            .then((message) => {
                db.update_alert_text_running(['false', alert_id]);
                db.start_hour_countdown([alert_id]);
        })
            .catch(error => {
            console.error('Something went wrong with the promise code:');
            console.error(error.message);
        });
        })
    let noResponseAlerts = await db.select_no_response_alerts()
    console.log('array of no response alerts', noResponseAlerts)
    noResponseAlerts.forEach(alert => {
        let {alert_id, alert_contact_name, user_contact_relationship, alert_contact_number, alert_contact_email, first_name, last_name, trip_end} = alert
        client.messages.create({
            body: `Hello, ${alert_contact_name}! Your ${user_contact_relationship}, ${first_name} ${last_name} went on a hiking/backpacking trip and listed you as their emergency contact. ${first_name} was supposed to return today, ${moment(trip_end, "YYYY-MM-DDTHH:mm:ss.SS").format("MMM do")} at ${moment(trip_end, "YYYY-MM-DDTHH:mm:ss.SS").format("h:mma")} . We've emailed their trip itinerary and personal information to you at ${alert_contact_email}. Try to get ahold of them yourself, and if you can't, we recommend passing on this information to state police to initiate a search and rescue effort. For more information: https://sectionhiker.com/how-to-report-a-missing-hiker/ - Backpact Trail Alert App`,
            to: `+${alert_contact_number}`, 
            from: TWILIO_NUMBER 
        })
            .then((message) => {
                //set up nodemailer
                db.delete_alert_by_id([alert_id]);
        })
            .catch(error => {
            console.error('Something went wrong with the promise code:');
            console.error(error.message);
        });
    })
    })

    
//listen
app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} is open for business.`)
})
