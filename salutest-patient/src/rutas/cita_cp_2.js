const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/cita_cp_2.controller');
const {check_login} = require('../lib/auth');

rutas.get('/cita_cp_2',check_login, mostrar);

module.exports = rutas;