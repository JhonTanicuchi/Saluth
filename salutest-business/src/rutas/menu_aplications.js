const express = require('express');
const rutas = express.Router ();

const {mostrar} = require('../controllers/menu_aplications.controller');

rutas.get("/menu_aplications", mostrar);

module.exports = rutas;