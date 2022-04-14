const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/empleado.controller');
const {check_login} = require('../lib/auth');

rutas.get('/empleado',check_login,mostrar);

module.exports = rutas;