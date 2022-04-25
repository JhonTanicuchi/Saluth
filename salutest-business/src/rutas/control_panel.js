const express = require('express');
const rutas = express.Router ();

const { mostrar } = require("../controllers/control_panel.controller");

rutas.get("/control_panel", mostrar);

module.exports = rutas;