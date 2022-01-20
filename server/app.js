const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); 
const app = express();
const employee = require('./api/employee');
const department = require('./api/department');
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use('/api/employee', employee);
app.use('/api/department', department);
const port = process.env.PORT || 5000;

//server starting
app.get("/", (req, res) => {

    res.status(200).send("Engine Started, Ready to take off!");

})

//configuring dotenv file
require("./configs/dotenv");
const client = require("./configs/database");

client.connect((err) => { //Connected Database

    if (err) {

        console.log(err);

    } else {

        console.log("Data logging initiated!");
    }

});

//routes to user.js
const api = require("./routes/user");

app.use("/api", api); //Route for /api endpoint of API

//creating file
app.post("/api/application", function (request, response){
    
    
    const content = `${request.body.content}`;
    
    fs.writeFile("./storage/test.docx", content, (err) => {
      if (err) {
        console.log(err);
        response.json({
            message: "message not sent: an error occured; check the server's console log"
        });
    } else {
        response.json({
            message: `Application created successfully!`
            });
            }
        });
    });


//mailing the file....
const nodemailer = require('nodemailer');
const { fstat } = require('fs');

app.post("/api/email", function (request, response) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'vernon.rutherford14@ethereal.email',
        pass: 'nSpmNHc1YfnKfczKfH'
    }
});
   
    var mail = {
        from: `${request.body.from}`, // sender address
        to: `${request.body.to}`, // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
        subject: `${request.body.sub}`, // Subject line
        attachments: [{   // stream as an attachment
          filename: 'test.docx',
          content: './storage/test.docx'
        }]
    };

    // send mail with defined transport object
    transporter.sendMail(mail, function (err, info) {
        if (err) {
            console.log(err);
            response.json({
                message: "message not sent: an error occured; check the server's console log"
            });
        } else {
            response.json({
                message: `Leave letter has been sent successfully!`
            });
        }
    });
});



//express....
app.listen(port, () => {

    console.log(`Here we go, Engines started at ${port}.`);

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.json({
     message: err.message,
     error: req.app.get('env') === 'development' ? err : {} 

  });
});

module.exports = app;
