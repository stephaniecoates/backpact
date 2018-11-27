const MessagingResponse = require('twilio').twiml.MessagingResponse;


    module.exports = {
        recieveSMS: async (req, res) => {
            const twiml = new MessagingResponse();
            const {Body, From} = req.body;
            const textResponse = Body.replace(/[^a-zA-Z]/g, "").toUpperCase();
            const hourExtension = Body.replace(/[^0-9]/g, "");
            const userNumber = From.replace(/[^0-9]/g, "");
            console.log(textResponse)
            let db = req.app.get('db');
            if (textResponse == 'BACK') {
                await db.delete_alert_by_user_phone_number([userNumber])
                //if I want browser to refresh when db changes, use sockets or app.pull request to periodically check if alert is active
                twiml.message(`Great! We've canceled your alert. We hope you had a great trip.`);
              } else if (textResponse == 'LATE') {
                twiml.message(`Running late? No problem. Reply 'EXTEND' followed by the number of hours you'd like your anticipated return time to be postponed.`);
              } else if (textResponse == 'EXTEND') {     
                await db.extend_alert([`${hourExtension}hour`, userNumber])
                twiml.message(`We've extended your trip return time by ${hourExtension} hour(s). Happy hiking!`)
              } else if (textResponse == 'SOS') {
                await db.set_sos([userNumber])
                twiml.message(`SOS received. We've alerted your designated contact that you're in trouble and emailed them your trip itinerary and personal information. Help is on the way soon.`)
              } else {
                twiml.message(
                  `Sorry, we don't recognize that command. Please text 'BACK' if you've returned safely, 'LATE' if you're just running late, or 'SOS' if you need help.`
                );
            }
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
              }
    }


      
