const express = require("express");
const rutas = express.Router();

const solicitudController = require("../controllers/solicitud.controller");

rutas.get("/solicitud", solicitudController.mostrar);
rutas.post("/add", solicitudController.save);

module.exports = rutas;
