const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required",
    });
  }

  console.log("Contact form submission:", { name, email, message });

  res.json({
    success: true,
    message: "Thank you for reaching out! We will get back to you soon.",
  });
});

module.exports = router;
