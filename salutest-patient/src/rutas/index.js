const express = require('express');
const rutas = express.Router ();

const {mostrar} = require('../controllers/index.controller');

rutas.get('/', mostrar);

module.exports = rutas;