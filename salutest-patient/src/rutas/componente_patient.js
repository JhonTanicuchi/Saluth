const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/componente_patient.controller');
const {check_login} = require('../lib/auth');

rutas.get('/componente_patient',check_login, mostrar);

module.exports = rutas;