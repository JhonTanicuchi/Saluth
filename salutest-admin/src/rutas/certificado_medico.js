const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/certificado_medico.controller');
const {check_login} = require('../lib/auth');

rutas.get('/certificado_medico', mostrar);

module.exports = rutas;