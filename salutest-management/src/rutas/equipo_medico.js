const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/equipo_medico.controller');
const {check_login} = require('../lib/auth');

rutas.get('/equipo_medico',check_login, mostrar);

module.exports = rutas;