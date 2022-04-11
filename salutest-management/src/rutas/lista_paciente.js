const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/lista_paciente.controller');
const {check_login} = require('../lib/auth');

rutas.get('/lista_paciente', mostrar);

module.exports = rutas;