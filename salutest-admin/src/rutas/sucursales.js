const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/sucursales.controller');
const {check_login} = require('../lib/auth');

rutas.get('/sucursales',check_login, mostrar);

module.exports = rutas;