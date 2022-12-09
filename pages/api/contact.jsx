require('dotenv').config()
const PASSWORD = process.env.PASSWORD
export default function (req, res) {
  console.log(req.body)
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.DUMMY_ADDRESS,
      pass: PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.DUMMY_ADDRESS,
    to: process.env.MY_EMAIL_ADDRESS,
    subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })

  console.log(req.body)
  res.send('success')
}
