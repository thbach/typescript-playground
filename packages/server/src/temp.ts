import "dotenv/config";
import * as nodemailer from "nodemailer";

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount(() => {
  console.log(process.env.GMAIL_USER, process.env.GMAIL_PASS);
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: "binktogether@gmail.com", // sender address
    to: "thbach@gmail.com", // list of receivers
    subject: "Test from Thai", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world? from node js</b>" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});
