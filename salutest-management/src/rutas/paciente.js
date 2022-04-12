const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/paciente.controller');
const {check_login} = require('../lib/auth');

rutas.get('/paciente', mostrar);

module.exports = rutas;