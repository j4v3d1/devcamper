const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = await nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // send mail with defined transport object
  const message = await transporter.sendMail({
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  });
  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;

// main().catch(console.error);

// var transport = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "68a796e14617bd",
//     pass: "eb68723a998c23"
//   }
// });
