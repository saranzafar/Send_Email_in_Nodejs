// 1. npm install express 
// 2. npm install nodemailer

const express = require('express')
const sendMail = require('./sendMail')
const app = express()
let PORT = 5000

app.get('/', (req, res) => {
    res.send("i am server");
})
app.get('/mail', sendMail)
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Port is listening at http://localhost:${PORT} `);
        })
    }
    catch (err) {
        console.log("Error", err);
    }
}
start()