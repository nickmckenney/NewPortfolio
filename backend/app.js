const admin=require("firebase-admin");
const functions=require("firebase-functions")
const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API is Working!')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'mckenney2001@gmail.com',
        from: 'mckenney2001@gmail.com',//SendGrid only allows to send emails to yourself
        subject: req.body.email,
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });
        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

exports.app=functions.https.onRequest(app);
// app.listen(4000, '0.0.0.0');