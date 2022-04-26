"use strict";

const mongoose = require("./index.js"); // importing our database connection to the model where we now create the db schema

//creating our database schema
const scheduleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  date: Date,
  reason: String,
  type: String,
});

module.exports = mongoose.model("schedule", scheduleSchema); // exporting the database schema
