// app.js
const express = require("express");
const app = express();
require('dotenv').config();
const appConfig = require("./app/config/appConfig");
appConfig(app);

const indexController = require("./app/controllers/indexController");
app.use("/", indexController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
