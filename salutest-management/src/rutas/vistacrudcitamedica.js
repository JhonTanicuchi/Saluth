const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/vistacrudcitamedica.controller');
const {check_login} = require('../lib/auth');

rutas.get('/vistacrudcitamedica',mostrar);

module.exports = rutas;