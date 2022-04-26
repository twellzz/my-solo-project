"use strict";

const Model = require("../models/patients"); // importing our model

exports.postEvent = async (req, res) => {
  const { firstName, lastName, cpf, insurance } = req.body.patient;
  const patient = await Model.create({ firstName, lastName, cpf, insurance });
  return res.status(201).send({ res: patient });
};
