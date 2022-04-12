const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/paciente2.controller');
const {check_login} = require('../lib/auth');

rutas.get('/paciente2',mostrar);

module.exports = rutas;