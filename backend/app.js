const express = require('express');
let port = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors');

// const sendGrid = require('@sendGrid/mail');
// Sendgrid is causing problems with deploying!

const app = express();


app.use(bodyParser.json());

app.use(cors());

// app.use((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

// app.get("/",(req,res)=>{
//     res.send("hi");
// });
// app.get('/api', (req, res) => {
//     res.send('API is Working!')
// });


// app.post('/api/email', (req, res) => {

//     console.log(req.body);

//     sendGrid.setApiKey('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');
//     const msg = {
//         to: 'mckenney2001@gmail.com',
//         from: 'mckenney2001@gmail.com',//SendGrid only allows to send emails to yourself
//         subject: req.body.email,
//         text: req.body.message
//     }

//     sendGrid.send(msg)
//         .then(result => {

//             res.status(200).json({
//                 success: true
//             });

//         })
//         .catch(err => {

//             console.log('error: ', err);
//             res.status(401).json({
//                 success: false
//             });

//         });
// });



app.listen(port, ()=>{
    console.log("app is alive");
});

