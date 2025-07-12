

module.exports = async function Contact(req, res) {
  try {
    // Validate the request body
    const { firstName, lastName, email, message } = req.body
    
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Log the contact form submission (for development)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // For now, just return success
    // In production, you would integrate with email service here
    res.status(200).json({
      success: true,
      message: 'Message received successfully',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    res.status(500).json({
      success: false,
      message: 'Error processing your message',
    })
  }
}
