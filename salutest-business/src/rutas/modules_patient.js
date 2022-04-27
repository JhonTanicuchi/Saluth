const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const modules_patientController = require("../controllers/modules_patient.controller");

rutas.get("/modules_patient", check_login, modules_patientController.list);

rutas.get("/modules_patient/:id", check_login, modules_patientController.list);

rutas.get(
  "/modules_patient/unlock/:id",
  check_login,
  modules_patientController.unlock
);

rutas.get(
  "/modules_patient/lock/:id",
  check_login,
  modules_patientController.lock
);

module.exports = rutas;