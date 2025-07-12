

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    })
  }

  try {
    // Validate the request body
    const { firstName, lastName, email, message } = req.body
    
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
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
