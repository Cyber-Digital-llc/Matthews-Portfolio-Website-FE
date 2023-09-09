require('dotenv').config()

const { google } = require('googleapis')
const nodemailer = require('nodemailer')
const http = require('http')
const dotenv = require('dotenv')

dotenv.config()

module.exports = async function Contact(req, res) {
  try {
    const PASSWORD = process.env.PASSWORD

    // Validate the request body to prevent malicious input

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.DUMMY_ADDRESS,
        pass: PASSWORD,
      },
      secure: true,
    })

    // Define the email content
    const mailData = {
      from: process.env.DUMMY_ADDRESS,
      to: process.env.MY_EMAIL_ADDRESS,
      subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
      text: req.body.message + ' | Sent from: ' + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}`,
    }

    // Send the email
    await transporter.sendMail(mailData)

    // Store the form data in Google Sheets using the Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL, // Use the environment variable
        private_key: process.env.GOOGLE_PRIVATE_KEY, // Use the environment variable
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const sheets = google.sheets({ version: 'v4', auth })

    // Define the data to be added to Google Sheets
    const values = [
      [req.body.firstName, req.body.lastName, req.body.email, req.body.message],
    ]

    // Append the data to a specific Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: 'your-spreadsheet-id',
      range: 'Sheet1', // Change to your desired sheet and range
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    })

    res.status(200).json({
      success: true,
      message: 'Email sent and data stored successfully',
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: 'Error sending email or storing data',
    })
  }
}
