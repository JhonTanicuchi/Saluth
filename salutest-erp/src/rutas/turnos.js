const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/turnos.controller');
const {check_login} = require('../lib/auth');

rutas.get('/turnos',check_login,mostrar);

module.exports = rutas;