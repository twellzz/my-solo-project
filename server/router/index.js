"use strict";

const express = require("express"); // require express

const router = express.Router(); // instantiate the router (needs capital R)

module.exports = router;

const patients = require("../controllers/patients");

router.post("/", patients.postPatient);
