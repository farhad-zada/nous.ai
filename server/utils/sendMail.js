const nodemailer = require("nodemailer");

module.exports = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "panworldist@gmail.com",
      pass: "vaszmdgjqddjxeuc",
    },
  });

  const mailOptions = {
    from: "panworldist@gmail.com",
    to: to,
    subject: subject,
    html: text,
  };
  const info = await transporter.sendMail(mailOptions);
  return info;
};
