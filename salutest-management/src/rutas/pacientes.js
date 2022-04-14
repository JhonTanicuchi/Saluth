const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/pacientes.controller');
const {check_login} = require('../lib/auth');

rutas.get('/pacientes',check_login,mostrar);

module.exports = rutas;