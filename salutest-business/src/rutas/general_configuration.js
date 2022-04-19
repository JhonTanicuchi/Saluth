const express = require('express');
const rutas = express.Router ();

const {mostrar} = require('../controllers/general_configuration.controller');

rutas.get("/general_configuration", mostrar);

module.exports = rutas;