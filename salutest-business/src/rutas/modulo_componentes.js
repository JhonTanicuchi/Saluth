const express = require('express');
const rutas = express.Router ();

const {mostrar} = require('../controllers/modulo_componentes.controller');

rutas.get("/modulo_componentes", mostrar);

module.exports = rutas;