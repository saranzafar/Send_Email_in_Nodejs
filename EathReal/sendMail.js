const nodemailer = require('nodemailer')


const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount()

    // connect with smtp
    let transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'roberto69@ethereal.email',
            pass: '5pCjtGb4CkP8u5befE'
        }
    })

    // sending mail
    let info = await transporter.sendMail({
        from: `"Roberto" <${testAccount.user}>`,
        to: "saranzafar@gmail.com",
        subject: "Hellow saran this is subjecttt",
        text: "Hellow saran",
        html: `<h1>Hello Saran</h1>`
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info)
}
module.exports = sendMail