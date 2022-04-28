"use strict";

const Model = require("../models/patients"); // importing our model

exports.postPatient = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, cpf, insurance } = req.body;
  const patient = await Model.create({ firstName, lastName, cpf, insurance });
  return res.status(201).send({ res: patient });
};

exports.getPatients = async (req, res) => {
  const { id } = req.params;
  console.log("ID:", id);
  const patients = await Model.find({ cpf: id });
  console.log(patients);
  res.status(200).send(patients);
};
