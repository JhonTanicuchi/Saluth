const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/cita_cv_1.controller');
const {check_login} = require('../lib/auth');

rutas.get('/cita_cv_1',check_login, mostrar);

module.exports = rutas;