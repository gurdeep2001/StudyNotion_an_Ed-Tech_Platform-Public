const nodemailer = require("nodemailer")
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "gurdeepsingh862001@gmail.com",
		    pass: "trwr kioo ckss tdhr",
      },
    });

    let info = await transporter.sendMail({
      from: `"Studynotion | Ed-Tech Platform" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    // console.log(info.response)
    // return info 
  } catch (error) {
    // console.log(error.message)
    // console.log(error)
    return error.message
  }
}

module.exports = mailSender
