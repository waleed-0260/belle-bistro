const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, phone, email, date, time, guests, specialRequests } = req.body;

  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('=== NEW RESERVATION ===');
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email || 'Not provided'}`);
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);
  console.log(`Guests: ${guests}`);
  console.log(`Special Requests: ${specialRequests || 'None'}`);
  console.log('=======================');

  res.status(200).json({
    success: true,
    message: 'Reservation received! We will call you to confirm.',
  });
});

module.exports = router;
