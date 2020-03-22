const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "thisismustakim@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the Task Manager app, ${name}. Let me know how you get along with the app.`
  });
};
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "thisismustakim@gmail.com",
    subject: "Sorry to see you go!",
    text: `Good Bye , ${name}. Let me know if anything we can help you.`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
