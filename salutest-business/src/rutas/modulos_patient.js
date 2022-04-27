const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const componenteController = require("../controllers/componentes_patient.controller");

rutas.get("/componentes_patient", check_login, componenteController.list);

rutas.get("/componentes_patient/:id", check_login, componenteController.list);

rutas.get(
  "/componentes_patient/unlock/:id",
  check_login,
  componenteController.unlock
);

rutas.get(
  "/componentes_patient/lock/:id",
  check_login,
  componenteController.lock
);

module.exports = rutas;
