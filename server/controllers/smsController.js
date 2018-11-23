const MessagingResponse = require('twilio').twiml.MessagingResponse;


    module.exports = {
        recieveSMS: (req, res) => {
            const twiml = new MessagingResponse();
            const {Body} = req.body;
            const textResponse = Body.replace(/[^a-zA-Z ]/g, "").toUpperCase();
            console.log(textResponse)
            let db = req.app.get('db');
            if (textResponse == 'BACK') {
                twiml.message('Thanks! We hope you had a great trip.');
                db.delete_alert()

              } else if (textResponse == 'LATE') {
                twiml.message('LATE received');
                //then ask user how long to postpone alert, use moment.js to manipulate end date, turn text_running back to true
              } else if (textResponse == 'SOS') {
                twiml.message('SOS received')
              } else {
                twiml.message(
                  `Sorry, we don't recognize that command. Please text 'BACK' if you've returned safely, 'LATE' if you're just running late, or 'SOS' if you need help.`
                );
            }
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
              }
    }


      
