const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/cita_meet.controller');
const {check_login} = require('../lib/auth');

rutas.get('/cita_meet',check_login, mostrar);

module.exports = rutas;