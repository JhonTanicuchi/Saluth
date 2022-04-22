const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const solicitudesComponentesController = require("../controllers/solicitudes_componentes.controller");

rutas.get(
  "/solicitudes_componentes",
  check_login,
  solicitudesComponentesController.list
);
rutas.get("/solicitudes/:id", check_login, solicitudesComponentesController.read);
rutas.get("/approve/:id", check_login, solicitudesComponentesController.approve);
rutas.get("/cancel/:id", check_login, solicitudesComponentesController.cancel);


module.exports = rutas;
