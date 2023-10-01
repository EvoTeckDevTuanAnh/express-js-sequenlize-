//setting app config
const morgan = require("morgan");
const path = require("path");
const express = require("express");

const appConfig = (app) => {
  // Use Morgan middleware for request logging
  app.use(morgan("dev"));

  // Set up middleware for parsing JSON and URL-encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views")); // Use the correct path to your custom directory
};

module.exports = appConfig;
