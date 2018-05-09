var express = require('express');
var router = express.Router();
var email = require("emailjs/email");
var server;

router.post('/sendmail', function (req, res) {

  server = email.server.connect({
     user:    "no_reply@ma-leon.co.uk",
     password:"fhhD.lG$Sr]d",
     host:    "mail.ma-leon.co.uk",
     ssl:  false,
     port: 587
  });

// send the message and get a callback with an error or details of the message that was sent
  server.send({
     text:    "Message From Website:\nName: "+req.body.name+"\nEmail: "+req.body.email+"\nPhone: "+
              req.body.phone+"\nMessage:\n"+req.body.message,
     from:    "no_reply@ma-leon.co.uk",
     to:      "roy@eden-grafix.co.uk,mauva@ma-leon.co.uk",
    //  cc:      "else <else@your-email.com>",
     subject: "message from Ma-leon Website"
    }, function(err, message) {
      if(err){
        console.log(err)
      }else {
        return res.json({sucess: true, msg: 'sent'})
      }
  });
});

module.exports = router;
