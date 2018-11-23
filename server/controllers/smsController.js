const MessagingResponse = require('twilio').twiml.MessagingResponse;


    module.exports = {
        recieveSMS: (req, res) => {
            const twiml = new MessagingResponse();
            console.log(req.body.Body)
             
            twiml.message(`I'm texting you back!`);
              
                res.writeHead(200, {'Content-Type': 'text/xml'});
                res.end(twiml.toString());
              }
    }


      
