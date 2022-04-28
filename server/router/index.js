"use strict";

const express = require("express"); // require express

const router = express.Router(); // instantiate the router (needs capital R)

const patients = require("../controllers/patients");

console.log("Line 9");

router.post("/", patients.postPatient);
router.get("/:id", patients.getPatients);

module.exports = router;
