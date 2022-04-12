const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/usuarios_pacientes.controller');
const {check_login} = require('../lib/auth');

rutas.get('/usuarios_pacientes',mostrar);

module.exports = rutas;