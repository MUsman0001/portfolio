const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide name, email, and message.' 
    });
  }

  // Basic email syntax check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address.' 
    });
  }

  console.log('--- [NEW CONTACT MESSAGE RECEIVED] ---');
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject || 'General Inquiry'}`);
  console.log(`Message: ${message}`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log('--------------------------------------');

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! Your message has been received.'
  });
});

app.listen(PORT, () => console.log(`Portfolio server running on port ${PORT}`));
