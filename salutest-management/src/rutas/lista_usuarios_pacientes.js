const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/lista_usuarios_pacientes.controller');
const {check_login} = require('../lib/auth');

rutas.get('/lista_usuarios_pacientes',mostrar);

module.exports = rutas;