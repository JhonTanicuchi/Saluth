const express = require("express");
const rutas = express.Router();

const { check_login } = require("../lib/auth");
const solicitudController = require("../controllers/solicitud.controller");

rutas.get("/solicitud", check_login, solicitudController.list);

module.exports = rutas;
