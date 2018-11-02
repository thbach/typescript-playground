import * as nodemailer from "nodemailer";

export const sendEmail = async (recipient: string, url: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: "binktogether@gmail.com", // sender address
    to: recipient, // list of receivers
    subject: "Signup Confirmation Email", // Subject line
    text: `go to this link ${url}`,
    html: `<html>
    <body>
    <p>Testing nodemailer - the world's most awesomest email node</p>
    <a href="${url}">confirm email</a>
    </body>
    </html>`
  };

  const response = await transporter.sendMail(
    mailOptions,
    (error: any, info: any) => {
      if (error) {
        return error;
      }
      return info.messageId;
    }
  );

  console.log(response);
};
