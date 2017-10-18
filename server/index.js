var fs = require('fs');
var path = require('path');
var config = JSON.parse(fs.readFileSync("package.json"));
var nodemailer = require('nodemailer');
require('dotenv').load();
var password = process.env.GMAIL_PASS ;
var email = process.env.LW_EMAIL;

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: email,
        pass: password
    }
});

const mailOptions = {
  from: 'lumanwalters@email.com', // sender address
  to: 'lumanwalters@gmail.com', // list of receivers
  subject: 'your bikes for the week', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
console.log(password);
