const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/empleado.controller');
const {check_login} = require('../lib/auth');

rutas.get('/empleado',mostrar);

module.exports = rutas;