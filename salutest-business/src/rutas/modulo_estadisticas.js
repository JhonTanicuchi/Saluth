const express = require('express');
const rutas = express.Router();

const { mostrar } = require('../controllers/modulo_estadisticas.controller');
const { check_login } = require('../lib/auth');

rutas.get("/modulo_estadisticas", check_login, mostrar);

module.exports = rutas;