const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/vistacrudhorarios.controller');
const {check_login} = require('../lib/auth');

rutas.get('/vistacrudhorarios',mostrar);

module.exports = rutas;