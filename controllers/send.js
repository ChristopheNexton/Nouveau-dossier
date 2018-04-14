module.exports = function(app) {
    const nodemailer = require('nodemailer');
    app.post('/api/v1.0/send', function(req, res) {


        const content = `${req.body.message}`;
        const titleMail = `${req.body.titleEmail}`;
        const recipientEmail = `${req.body.recipientEmail}`;

        nodemailer.createTestAccount((err, account) => {

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: "christophelopeznexton@gmail.com",
                    pass: "christophe6789"
                }
            });


            let mailOptions = {

                from: '"E-Mail Test" <christophelopeznexton@gmail.com',
                to: `${recipientEmail}`,
                // to: 'ahernandez@nexton-consulting.com,comptemicrosoftnexton4@gmail.com,christophelopeznexton@gmail.com',
                subject: `${titleMail}`,
                text: `${titleMail}`,
                html: content.toString(),

            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        });

        res.sendStatus(200);
    });
}