const express = require("express");
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log(name, email, message);

    res.status(200).json({
      success: true,
      message: "Message received",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;