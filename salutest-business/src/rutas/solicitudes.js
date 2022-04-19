const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const solicitudController = require("../controllers/solicitudes.controller");

rutas.get(
  "/solicitudes",
  check_login,
  solicitudController.list
);
rutas.get("/solicitudes/:id", check_login, solicitudController.read);
rutas.get("/approve/:id", check_login, solicitudController.approve);
rutas.get("/cancel/:id", check_login, solicitudController.cancel);


module.exports = rutas;
