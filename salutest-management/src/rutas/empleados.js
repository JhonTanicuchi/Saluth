const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/empleados.controller');
const {check_login} = require('../lib/auth');

rutas.get('/empleados', mostrar);

module.exports = rutas;