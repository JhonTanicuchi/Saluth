const express = require('express');
const rutas = express.Router();

const {mostrar} = require('../controllers/signos_vitales.controller');
const {check_login} = require('../lib/auth');

rutas.get('/signos_vitales',check_login,mostrar);

module.exports = rutas;