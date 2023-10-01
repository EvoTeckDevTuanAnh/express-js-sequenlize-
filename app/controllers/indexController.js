// controllers/indexController.js

const express = require('express');
const router = express.Router();

// Define a route for the homepage
router.get('/', (req, res) => {
  // Render a view (you can create this view later)
  res.render('index');
});

module.exports = router;
